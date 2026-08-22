# Low-score retest completion audit

- Formal run: `v02_plus_vieneu_lux_scenema_20260610_091619`
- Selection policy: content non-regression, weighted-score improvement, low-axis improvement, no new audio anomaly, and bounded secondary tradeoffs.
- `retested_no_safe_improvement` means candidates were uniformly rescored but none passed every guard; it is evidence of tested limits, not proof of a theoretical global optimum.

| Project | Status | Candidates | Valid | Selected | Score before | Score after | Delta | P0 | P1 | Remaining |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `mlx_dots_tts` | retested_no_safe_improvement | 16 | 16 | 0 | 77.708 | 77.708 | 0.0 | 0 | 0 | 27 |
| `mlx_higgs_audio` | optimized_with_guarded_improvements | 28 | 28 | 4 | 81.703 | 81.963 | 0.26 | 0 | 0 | 31 |
| `mlx_indextts2` | optimized_with_guarded_improvements | 86 | 86 | 1 | 63.915 | 63.998 | 0.083 | 0 | 22 | 42 |
| `mlx_ming_omni_tts` | retested_no_safe_improvement | 42 | 42 | 0 | 62.855 | 62.855 | 0.0 | 0 | 15 | 35 |
| `mlx_moss_tts` | retested_no_safe_improvement | 2 | 2 | 0 | 85.405 | 85.405 | 0.0 | 1 | 0 | 18 |
| `mlx_omnivoice` | optimized_with_guarded_improvements | 65 | 64 | 4 | 79.838 | 79.997 | 0.159 | 0 | 0 | 21 |
| `mlx_qwen3_tts` | capability_boundary_only | 0 | 0 | 0 | 80.537 | 80.537 | 0.0 | 0 | 1 | 1 |
| `mlx_scenema_audio` | optimized_with_guarded_improvements | 97 | 97 | 7 | 65.921 | 67.794 | 1.873 | 8 | 13 | 49 |
| `mlx_supertonic` | no_remaining_low_score_items | 0 | 0 | 0 | 59.842 | 59.842 | 0.0 | 0 | 0 | 0 |
| `mlx_voxcpm2` | optimized_with_guarded_improvements | 67 | 67 | 3 | 80.23 | 80.251 | 0.021 | 1 | 0 | 36 |
| `mlx_zonos2` | optimized_with_guarded_improvements | 16 | 16 | 1 | 75.935 | 76.077 | 0.142 | 0 | 0 | 27 |
