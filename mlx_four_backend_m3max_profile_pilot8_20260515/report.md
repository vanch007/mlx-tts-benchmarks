# M3 Max Four-Backend Pilot8 Report — 2026-05-15

Scope: 8-row crosstalk/dialogue pilot across `indextts`, `voxcpm2`, `qwen_tts`, and `omnivoice` using the shared M3 Max runtime profile.

Runtime profile recorded in `plan.json` and `summary.json` for every backend:

- `MLX_TTS_MEMORY_LIMIT_GB=96.0`
- `MLX_TTS_CACHE_LIMIT_GB=32.0`
- `MLX_TTS_TORCH_THREADS=12`
- `TOKENIZERS_PARALLELISM=false`

## Inputs and Outputs

- Enriched input manifest: `/Users/vanch/tts_benchmarks/mlx_m3max_smoke_inputs/manifest.with_ref_text.csv`
- Output root: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515`
- Benchmark summary: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/summary.json`
- Raw ASR transcripts: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/asr_pilot8_large_v3_turbo_raw.csv`
- Scored ASR/leakage CSV: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/asr_pilot8_scored.csv`

Command:

```bash
python3 /Users/vanch/.hermes/skills/mlx-tts/scripts/run_backend_benchmark.py \
  --manifest /Users/vanch/tts_benchmarks/mlx_m3max_smoke_inputs/manifest.with_ref_text.csv \
  --output-root /Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515 \
  --backends indextts voxcpm2 qwen_tts omnivoice \
  --limit 8 \
  --m3max-profile
```

ASR scoring used OpenAI Whisper `large-v3-turbo` from the Homebrew Python environment, then `scripts/asr_check.py` with default thresholds: content pass >= `0.85`, leakage fail >= `0.65`.

## Benchmark and ASR Summary

| Backend | Return | Gen RTF | Steady RTF rows 2-8 | Avg ASR content | Min ASR content | Content failures | Max leakage | Leakage failures | Combined WAV |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| `indextts` | 0 | 1.1367 | 0.8544 | 0.9542 | 0.8000 | 1/8 | 0.0000 | 0 | `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/indextts/combined.wav` |
| `voxcpm2` | 0 | 0.2962 | 0.2480 | 0.9410 | 0.8000 | 1/8 | 0.1000 | 0 | `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/voxcpm2/combined.wav` |
| `qwen_tts` | 0 | 0.4336 | 0.3983 | 0.5089 | 0.0000 | 4/8 | 0.4000 | 0 | `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/qwen_tts/combined.wav` |
| `omnivoice` | 0 | 0.5818 | 0.5745 | 0.9171 | 0.7273 | 2/8 | 0.0870 | 0 | `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/omnivoice/combined.wav` |

## Failed ASR Rows

- `indextts`: `0001_speaker` scored `0.8000`; ASR transcript: `各位观众欢迎收听今日AI修宪群虾BB报告`.
- `voxcpm2`: `0005_speaker` scored `0.8000`; ASR transcript: `先说第一案豪羊毛打战`.
- `qwen_tts`: `0001_speaker`, `0003_speaker`, `0005_speaker`, `0007_speaker`; repeated or reference-like output appears on odd rows using one of the clone refs.
- `omnivoice`: `0001_speaker`, `0003_speaker`; ASR missed/added short phrases around the beginning.

## Interpretation

1. **Speed:** `voxcpm2` is fastest on this pilot (`0.2962` full-batch RTF, `0.2480` steady-state rows 2-8). `qwen_tts` is second by RTF, but quality is not acceptable for this clone workload. `omnivoice` is stable and faster than `indextts`, while `indextts` is slower but strong on content.
2. **Content fidelity:** `indextts` has the highest average ASR content score (`0.9542`), closely followed by `voxcpm2` (`0.9410`). The single failures for both are near-threshold homophone/ASR normalization cases and should be manually listened before hard rejection.
3. **Leakage:** No backend crossed the leakage failure threshold. `qwen_tts` has the highest max leakage score (`0.4000`) and visible reference-like repetitions, so it should remain gated for clone workloads.
4. **Recommendation:** For this M3 Max crosstalk-style workload, use `voxcpm2` as the speed-first candidate and `indextts` as the content-first fallback. Keep `omnivoice` for naturalness/manual review. Do not scale `qwen_tts` for this clone setup without a Qwen-specific clean-reference replay strategy.

## Next Step Before 64-Row Full Run

Run a manual listening pass on the combined WAVs, especially the ASR-failed rows. If accepted, run a 64-row benchmark for `voxcpm2`, `indextts`, and optionally `omnivoice`; leave `qwen_tts` out of full-scale clone comparisons unless its reference strategy is changed.
