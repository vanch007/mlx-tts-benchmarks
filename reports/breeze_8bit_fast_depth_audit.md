# MLX Breeze TTS 2 (Sirocco 8-bit) 优化与基准测试审计报告

- 日期：2026-09-03
- 模型标识：`mlx_breeze_tts2` / `mlx_breeze_tts2_8bit`
- 权威源项目：`/Users/vanch/mlx-breeze-tts2`
- 最终提交：`51c182dd0d6453a37d6a2e1233ffa42bdb71016d`
- 模型路径：`/Users/vanch/mlx-breeze-tts2/models/breeze-8bit-sensitive-bf16-v2` (`vanch007/Sirocco-MLX-8bit`)
- 综合审计状态：`pass`（23/23 矩阵通过，143/143 测试 passed）

## 关键核心数据

- **普通稳态 RTF**：中位数 `1.1481084449423222`、P90 `1.1623755830355333`
- **CFG=4 语音设计 RTF**：中位数 `1.5344127602956552`、P90 `1.5663843444759977`
- **流式首包延迟 (TTFA)**：由 eager `2.8657772920269053` 秒降至 fast `1.3042583749920595` 秒（降幅 **-54.4885%**）
- **最大单项 CER**：`0.030303030303030304`
- **语料库级 CER**：`0.0013440860215053765`
- **音色克隆最低余弦 / P10**：`0.6415034103393555` / `0.6239241838455201`
- **参考音频泄漏率最大值**：`0.1694915254237288`
- **功能矩阵验证**：23/23 矩阵通过，Python/CLI/HTTP/streaming/parity/波形/采样/seed 均通过，项目测试 143 passed。Fast depth 已是默认路径，eager 仍可显式回退。
- **最终事件随机种子**：`event_en_cough=7`、`event_en_sigh=3`、`event_zh_clears_throat=1`，其他事件沿用 `42`。直接使用最终矩阵目录中的 WAV，不使用旧版过渡音频。
- **8 段副语言人工听测**：`manual_reviews.json`（8/8 audible 全部通过）。

---

# 8-bit MLX Fast Depth Results

## Status

Automated acceptance, the revision-bound eight-event listening review, and
default promotion are `pass`.

- Default-promotion commit: `91c6bde45f00e1319a355a2930e6ec65902c728d`
- Model: `models/breeze-8bit-sensitive-bf16-v2`
- Upstream revision: `c1c8ca18b70b30822735633991d9ebf4898e47d4`
- MLX: `0.32.2`
- Host: Apple M3 Max, 40-core GPU, 128 GB unified memory

## Implementation

- Keeps dependent codebook tokens as MLX arrays and submits device work with
  `mx.async_eval` instead of synchronizing every depth token to the host.
- Uses an incremental KV cache for the 15 dependent codebooks.
- Compiles the complete fixed-width depth frame as one graph and uses an
  exact-size cache rather than padded general-purpose cache scatter updates.
- Batches depth conditional/unconditional CFG branches while preserving the
  official `uncond + scale * (cond - uncond)` formula.
- Lazily creates the compiled function after checkpoint loading.
- On a first-frame compile/allocation failure, restores the exact MLX RNG state
  and falls back to eager decoding. Failures after any generated frame surface
  immediately instead of mixing execution paths.

## Performance evidence

Authoritative final default run:
`reports/optimization/8bit-fast-depth/run-91c6bde-default/`.

| Measurement | Median | P90 | Target | Result |
|---|---:|---:|---:|---|
| Ordinary steady-state RTF | 1.148 | 1.162 | <= 2.0 | pass |
| Voice-design CFG=4 RTF | 1.534 | 1.566 | <= 4.0 | pass |
| Eager streaming TTFA | 2.866 s | n/a | reference | pass |
| Fast streaming TTFA | 1.304 s | n/a | <= 10% regression | pass (-54.5%) |

Both five-run RTF groups and both five-run TTFA groups are fixed-seed
reproducible. Focused peak memory is `8.683 GB` for ordinary generation and
`8.334 GB` for CFG=4.

The initial sequential compare runs are retained as diagnostic evidence. They
showed severe thermal-order bias after many eager generations, including large
late-run outliers. Acceptance therefore uses the fast-only five-run protocol;
its TTFA check still alternates eager and fast by pair on the same loaded model.
The full matrix peak was `10.820 GB`, versus `10.954 GB` in the prior verified
8-bit release matrix, so peak memory did not regress.

## Functional and quality evidence

Final full matrix directory:
`reports/optimization/8bit-fast-depth/full-matrix-ecb2c39-events-fixed/`.

- 23/23 cases generated on Metal; matrix coverage has no missing or duplicate
  required capability.
- Python, CLI, HTTP, non-streaming, streaming, cancellation, sampling control,
  deterministic seed, and waveform-integrity checks: `pass`.
- Objective metrics: max CER `0.030303`, corpus CER `0.001344`, clone cosine
  minimum `0.641503`, clone P10 minimum `0.623924`, leakage maximum `0.169492`.
- Objective backend: `mlx-community/whisper-large-v3-turbo` revision
  `a4aaeec0636e6fef84abdcbe3544cb2bf7e9f6fb` plus SpeechBrain ECAPA.
- Precision-specific parity:
  `reports/parity/comparison-8bit-fast-2d698df.json`, status `pass`, `atol=0.05`,
  `rtol=0.05`. Template, IDs, reference codec codes, masks, shapes,
  deterministic tokens, and all intermediate tensors pass.
- Unit/integration suite: `143 passed`; focused Ruff fatal checks and formatting:
  `pass`.

Fast and eager real-model waveforms are not bit-exact because cached attention
changes legal floating-point evaluation order and therefore stochastic token
selection. The fast output is separately deterministic and passed the full
objective, waveform, interface, feature, PyTorch parity, and new-audio listening
gates.

## Listening and default-promotion result

The user confirmed all eight final English/Chinese laugh, cough, throat-clear,
and sigh samples. Three stochastic test trajectories were stabilized from that
review: English cough seed `7`, English sigh seed `3`, and Chinese throat-clear
seed `1`. `manual_reviews.json` validates in release mode and is applied to
`summary.final.json`.

`fast_depth=True` is now the default across Model, Engine, generation CLI,
benchmark CLI, and HTTP. The eager compatibility path remains available via
`fast_depth=False`, `--no-fast-depth`, or HTTP `fast_depth=false`. A real-model
default-surface check proves omitted/default and explicit-fast outputs have the
same fixed-seed hash while explicit eager generation remains functional.
