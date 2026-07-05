# MLX TTS Four-Backend Pilot8 Report

Input text rows: first 8 rows from
`/Users/vanch/tts_benchmarks/groupchat_crosstalk_20260509_scene_ref.with_ref_text.csv`.

ASR route: local Qwen3-ASR 0.6B 4bit quick check.

## Speed

| backend | rows | audio_s | generation_rtf | wall_s | combined |
|---|---:|---:|---:|---:|---|
| indextts | 8 | 26.958 | 1.0113 | 29.4018 | `/Users/vanch/tts_benchmarks/mlx_four_backend_pilot8_fixed_20260512/indextts/combined.wav` |
| voxcpm2 | 8 | 23.520 | 0.2362 | 7.8022 | `/Users/vanch/tts_benchmarks/mlx_four_backend_pilot8_fixed_20260512/voxcpm2/combined.wav` |
| qwen_tts scene refs | 8 | 34.640 | 0.3543 | 12.5461 | `/Users/vanch/tts_benchmarks/mlx_four_backend_pilot8_fixed_20260512/qwen_tts/combined.wav` |
| omnivoice | 8 | 26.440 | 0.2092 | 10.3964 | `/Users/vanch/tts_benchmarks/mlx_four_backend_pilot8_fixed_20260512/omnivoice/combined.wav` |
| qwen_tts clean ICL refs | 8 | 21.680 | 0.3779 | 8.4421 | `/Users/vanch/tts_benchmarks/mlx_qwen_cleanrefs_pilot8_20260512/qwen_tts/combined.wav` |

## ASR Content Check

| backend | content_score | leakage_score | note |
|---|---:|---:|---|
| indextts | 0.9623 | 0.0312 | Accurate content, slower. |
| voxcpm2 | 0.7573 | 0.0328 | Fast, but wrong words such as Codex -> 口袋. |
| qwen_tts scene refs | 0.5899 | 0.0902 | Bad because scene emotion refs leak phrases like `对门又开`. |
| omnivoice | 0.9537 | 0.0303 | Fast and accurate in this pilot. |
| qwen_tts clean ICL refs | 0.9813 | 0.0305 | Clean ICL refs fix the Qwen leakage/content issue. |

## Conclusion

- For this crosstalk task, `omnivoice` is the best pilot default: fast and high content score.
- `qwen_tts` is viable only with clean ICL refs, not with per-emotion scene refs.
- `voxcpm2` is the fastest candidate but still needs content repair or ASR-gated retry.
- `indextts` remains the best feature-complete route for separated speaker/emotion control, but is slower.
