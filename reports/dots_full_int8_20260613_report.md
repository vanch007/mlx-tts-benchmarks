# 本地开源 TTS 统一测试项目 - 汇总报表

- Run ID：`dots_full_int8_20260613`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/dots_full_int8_20260613/metrics.csv`。
- 标准：`configs/scoring_standard.json`，来自 `开源TTS测试标准.docx`。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。

## 榜单

| 排名 | 模型 | 样本数 | 总分 | 覆盖率 | content_intelligibility | naturalness_quality | speaker_clone_consistency | control_prosody_emotion_duration | multilingual_dialect_coverage | voice_design_robustness | deployment_performance | reference_compliance | 可排名 |
|---:|---|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_dots_tts_full_int8_g64` | 14 | 69.865 | 86.286 | 97.285 | 48.843 | 82.16 | 97.896 | 99.118 | 91.713 | 19.715 | 80.357 | yes |

## 样本摘要

| 模型 | 测试项 | 状态 | ASR | CER | SIM | UTMOS | RTF | 失败原因 |
|---|---|---|---|---:|---:|---:|---:|---|
| `mlx_dots_tts_full_int8_g64` | 越南语同语种音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0469 | 0.8339 | 2.5124 | 1.2554 |  |
| `mlx_dots_tts_full_int8_g64` | 英语同语种音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9116 | 3.6741 | 1.1924 |  |
| `mlx_dots_tts_full_int8_g64` | 中文同语种音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8876 | 2.8173 | 1.179 |  |
| `mlx_dots_tts_full_int8_g64` | 三秒英语参考音频克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8469 | 4.1205 | 1.2402 |  |
| `mlx_dots_tts_full_int8_g64` | 英文参考到中文跨语种克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7786 | 3.0855 | 1.3064 |  |
| `mlx_dots_tts_full_int8_g64` | 英文参考到日文跨语种克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0571 | 0.7534 | 3.0752 | 1.2213 |  |
| `mlx_dots_tts_full_int8_g64` | 中文参考到英文跨语种克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8318 | 3.4805 | 1.2366 |  |
| `mlx_dots_tts_full_int8_g64` | Scenema 英文同语种表演克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8763 | 2.1026 | 1.1525 |  |
| `mlx_dots_tts_full_int8_g64` | Scenema 英参西语跨语种克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7291 | 2.4427 | 1.2252 |  |
| `mlx_dots_tts_full_int8_g64` | 英语疑惑情绪提示克隆 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8327 | 4.2145 | 1.6331 |  |
| `mlx_dots_tts_full_int8_g64` | 中文轻声耳语风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7192 | 1.346 | 1.5889 |  |
| `mlx_dots_tts_full_int8_g64` | 中文播客节奏风格迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8581 | 2.5731 | 1.4887 |  |
| `mlx_dots_tts_full_int8_g64` | 中文噪声参考音频克隆压力测试 (stress_noisy_ref_clone) | blocked | not_run |  |  |  |  |  |
| `mlx_dots_tts_full_int8_g64` | 中文手机录音参考克隆压力测试 (stress_phone_ref_clone) | blocked | not_run |  |  |  |  |  |

## 本地 TTS 覆盖状态

- Inventory CSV：`/Users/vanch/tts-test-project/reports/local_open_tts_inventory.csv`

| 模型 | 状态 | 路径 |
|---|---|---|
| `mlx_indextts2_standard_8bit` | installed_unified_adapter | `/Users/vanch/mlx-indextts2` |
| `mlx_indextts2_vietnamese_8bit` | installed_unified_adapter | `/Users/vanch/mlx-indextts2` |
| `mlx_voxcpm2_bf16_dit` | installed_unified_adapter | `/Users/vanch/mlx-voxcpm2` |
| `mlx_qwen3_tts_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_voice_design_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_custom_voice_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_omnivoice_8bit_trim60` | installed_unified_adapter | `/Users/vanch/mlx-omnivoice` |
| `mlx_dots_tts_full_int8_g64` | scored | `/Users/vanch/mlx-dots.tts` |
| `mlx_higgs_audio_v3_4b` | installed_unified_adapter | `/Users/vanch/mlx-higgs-audio` |
| `valtec_vietnamese_tts` | installed_unified_adapter | `/Users/vanch/valtec-tts` |
| `vieneu_tts_0_3b_q8_gguf_cpu` | installed_unified_adapter | `/Users/vanch/VieNeu-TTS` |
| `mlx_scenema_audio_int8_mlx_mps_service` | installed_unified_adapter | `/Users/vanch/mlx-scenema-audio` |
| `supertonic3_onnx_cpu` | installed_unified_adapter | `/Users/vanch/supertonic` |
| `mlx_audio_multi_model` | toolkit_not_single_model | `/Users/vanch/mlx-audio` |
| `cloudflare_edge_tts` | excluded_not_open_source_model | `/Users/vanch/cloudflare-edge-tts` |
| `speech_to_speech` | excluded_pipeline_wrapper | `/Users/vanch/speech-to-speech` |

## 结论

- `coverage_pct >= 80` 才进入正式排名准备态；低覆盖样本仍保留用于定位缺失指标。
- 失败模型或缺指标模型不会被伪造成完整分数，阻塞原因写在 `adapter_status` 和 `metric_failures`。
- 结果面板可用 `python scripts/render_dashboard.py --run-id <id>` 生成中文静态音频面板。
