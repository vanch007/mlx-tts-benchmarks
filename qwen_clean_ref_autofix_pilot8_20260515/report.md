# Qwen3-TTS Clean-Ref Autofix Report — 2026-05-15

## Root Cause

The previous 8-row cross-backend pilot fed `qwen_tts` the shared scene/emotion reference clips from the IndexTTS/VoxCPM/OmniVoice manifest. Qwen3-TTS Base ICL is more sensitive to phrase-heavy reference clips: rows using the `逗哏` scene ref (`0222_crosstalk_0783190-0786560.wav`, transcript `对门又开了一家金海岸啊，咱们怎么办？`) repeated reference-like text instead of the target text.

This was not a missing `ref_text` issue. The shared manifest had exact `ref_text`; the reference choice itself was unsuitable for Qwen ICL cloning.

## Fix

Updated the unified benchmark runner:

`/Users/vanch/.hermes/skills/mlx-tts/scripts/run_backend_benchmark.py`

New behavior:

- If backend is `qwen_tts`, no explicit `--qwen-manifest` is supplied, and `--qwen-ref-strategy` is not `shared`, the runner automatically builds a Qwen-specific clean ICL JSON manifest.
- The generated Qwen manifest preserves the same target text rows but replaces speaker refs with validated clean refs:
  - `逗哏`: `0526_crosstalk_1868611-1871268.wav` -> `0526_crosstalk_1868611-1871268_demucs_vocals.wav`
  - `捧哏`: `0289_crosstalk_1020549-1022581.wav` -> `0289_crosstalk_1020549-1022581_demucs_vocals.wav`
- Each generated row includes `require_ref_text: true`.
- Users can still force the previous behavior with `--qwen-ref-strategy shared`, or override with `--qwen-manifest`.

## Verification

### Automated Tests

```bash
/Users/vanch/mlx-indextts2/.venv/bin/python -m pytest /Users/vanch/.hermes/skills/mlx-tts/tests/test_run_backend_benchmark.py -q
python3 -m py_compile /Users/vanch/.hermes/skills/mlx-tts/scripts/run_backend_benchmark.py /Users/vanch/.hermes/skills/mlx-tts/tests/test_run_backend_benchmark.py
```

Observed result: `2 passed`; `py_compile` exit code `0`.

### Dry Run

```bash
python3 /Users/vanch/.hermes/skills/mlx-tts/scripts/run_backend_benchmark.py \
  --manifest /Users/vanch/tts_benchmarks/mlx_m3max_smoke_inputs/manifest.with_ref_text.csv \
  --output-root /Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_dryrun_20260515 \
  --backends qwen_tts \
  --limit 8 \
  --m3max-profile \
  --dry-run
```

Generated input manifest:

`/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_dryrun_20260515/input_qwen_tts.json`

The dry-run manifest used the clean `0526/0289` refs and `require_ref_text: true`.

### Real Qwen 8-Row Pilot

```bash
python3 /Users/vanch/.hermes/skills/mlx-tts/scripts/run_backend_benchmark.py \
  --manifest /Users/vanch/tts_benchmarks/mlx_m3max_smoke_inputs/manifest.with_ref_text.csv \
  --output-root /Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515 \
  --backends qwen_tts \
  --limit 8 \
  --m3max-profile
```

Outputs:

- Summary: `/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515/summary.json`
- Qwen generated manifest: `/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515/qwen_tts/manifest.csv`
- Combined WAV: `/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515/qwen_tts/combined.wav`
- Raw ASR: `/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515/qwen_asr_large_v3_turbo_raw.csv`
- Scored ASR: `/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515/qwen_asr_scored.csv`

## Result

| Metric | Before shared scene refs | After clean-ref autofix |
|---|---:|---:|
| Rows | 8 | 8 |
| ASR avg content score | 0.5089 | 0.98125 |
| Content failures | 4/8 | 0/8 |
| Max leakage score | 0.4000 | 0.1000 |
| Leakage failures | 0 | 0 |
| Generation RTF | 0.4336 | 0.6240 |

The content failure pattern was removed. Qwen is now usable in the cross-backend runner for this crosstalk clone workload when the clean-ref strategy is active.

## Remaining Caveat

This is a reference-strategy fix, not a model-weight change. If a future manifest uses unknown speakers or a different domain, provide explicit `--qwen-speaker-ref` mappings or `--qwen-manifest`. Use `--qwen-ref-strategy shared` only when deliberately testing the shared refs.
