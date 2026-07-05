# Four Normal MLX TTS Model Comparison — 2026-05-15

This comparison combines the three valid outputs from the M3 Max 8-row pilot (`indextts`, `voxcpm2`, `omnivoice`) with the fixed Qwen3-TTS clean-ref 8-row pilot. All rows use the same target text set; Qwen uses validated clean ICL refs to avoid the reference-like repetition failure.

## Listen

- Master labeled comparison: `/Users/vanch/tts_benchmarks/four_normal_model_labeled_compare_20260515/00_four_models_labeled_compare.wav` (116.25s)
- IndexTTS2: `/Users/vanch/tts_benchmarks/four_normal_model_labeled_compare_20260515/01_indextts_indextts2_labeled.wav` (32.10s)
- VoxCPM2: `/Users/vanch/tts_benchmarks/four_normal_model_labeled_compare_20260515/02_voxcpm2_voxcpm2_labeled.wav` (29.75s)
- Qwen3-TTS CleanRefs: `/Users/vanch/tts_benchmarks/four_normal_model_labeled_compare_20260515/03_qwen_tts_qwen3-tts_cleanrefs_labeled.wav` (24.66s)
- OmniVoice: `/Users/vanch/tts_benchmarks/four_normal_model_labeled_compare_20260515/04_omnivoice_omnivoice_labeled.wav` (27.49s)

## Metrics

| Model | Gen RTF | Steady RTF rows 2-8 | Avg ASR content | Min ASR content | Content failures | Max leakage | Leakage failures | Audio duration |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| IndexTTS2 / mlx-indexTTS2-standard-8bit | 1.1367 | 0.8544 | 0.9542 | 0.8000 | 1/8 | 0.0000 | 0 | 29.14s |
| VoxCPM2 / official MLX int8 native | 0.2962 | 0.2480 | 0.9410 | 0.8000 | 1/8 | 0.1000 | 0 | 27.04s |
| Qwen3-TTS / official int8 + clean ICL refs | 0.6240 | 0.5797 | 0.9812 | 0.8500 | 0/8 | 0.1000 | 0 | 21.68s |
| OmniVoice / omnivoice_8bit | 0.5818 | 0.5745 | 0.9171 | 0.7273 | 2/8 | 0.0870 | 0 | 26.44s |

## Source audio
- IndexTTS2: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/indextts/combined.wav`
- VoxCPM2: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/voxcpm2/combined.wav`
- Qwen3-TTS CleanRefs: `/Users/vanch/tts_benchmarks/qwen_clean_ref_autofix_pilot8_20260515/qwen_tts/combined.wav`
- OmniVoice: `/Users/vanch/tts_benchmarks/mlx_four_backend_m3max_profile_pilot8_20260515/omnivoice/combined.wav`
