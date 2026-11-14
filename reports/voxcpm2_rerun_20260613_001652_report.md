# 本地开源 TTS 统一测试项目 - 汇总报表

- Run ID：`voxcpm2_rerun_20260613_001652`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/voxcpm2_rerun_20260613_001652/metrics.csv`。
- 标准：`configs/scoring_standard.json`，来自 `开源TTS测试标准.docx`。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。

## 榜单

| 排名 | 模型 | 样本数 | 总分 | 覆盖率 | content_intelligibility | naturalness_quality | speaker_clone_consistency | control_prosody_emotion_duration | multilingual_dialect_coverage | voice_design_robustness | deployment_performance | reference_compliance | 可排名 |
|---:|---|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_voxcpm2_bf16_dit` | 44 | 67.917 | 84.727 | 94.299 | 50.133 | 76.819 | 95.527 | 98.175 | 90.458 | 21.21 | 93.75 | yes |

## 样本摘要

| 模型 | 测试项 | 状态 | ASR | CER | SIM | UTMOS | RTF | 失败原因 |
|---|---|---|---|---:|---:|---:|---:|---|
| `mlx_voxcpm2_bf16_dit` | 中文数字、时间和订单号准确性 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6171 | 1.0968 |  |
| `mlx_voxcpm2_bf16_dit` | 英文数字、时间和价格准确性 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7402 | 1.0834 |  |
| `mlx_voxcpm2_bf16_dit` | 中英混读品牌和订单号 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.6855 | 1.0109 |  |
| `mlx_voxcpm2_bf16_dit` | 日语自然新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3774 | 1.0497 |  |
| `mlx_voxcpm2_bf16_dit` | 韩语客服短句朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6971 | 1.2141 |  |
| `mlx_voxcpm2_bf16_dit` | 西语疑问句自然语调 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.2618 | 1.3922 |  |
| `mlx_voxcpm2_bf16_dit` | 法语长句稳定性 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4793 | 1.1269 |  |
| `mlx_voxcpm2_bf16_dit` | 德语清晰指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.723 | 1.1498 |  |
| `mlx_voxcpm2_bf16_dit` | 越南语短视频风格朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7044 | 1.4049 |  |
| `mlx_voxcpm2_bf16_dit` | 越南语同语种音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7765 | 2.2715 | 1.6082 |  |
| `mlx_voxcpm2_bf16_dit` | 印地语金额日期朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4171 | 1.0779 |  |
| `mlx_voxcpm2_bf16_dit` | 阿拉伯语城市和数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4409 | 1.2231 |  |
| `mlx_voxcpm2_bf16_dit` | 粤语方言科普朗读 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.0828 | 1.2396 |  |
| `mlx_voxcpm2_bf16_dit` | 四川话方言朗读 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.07 | 1.1599 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 东北话方言朗读 (voxcpm2_dongbei_dialect) | success | qwen3_asr_1_7b_8bit | 0.0323 |  | 2.6944 | 0.9678 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 闽南语方言朗读 (voxcpm2_minnan_dialect) | success | qwen3_asr_1_7b_8bit | 0.2069 |  | 2.9346 | 0.9503 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 上海话/吴语方言朗读 (voxcpm2_shanghai_dialect) | success | qwen3_asr_1_7b_8bit | 0.0667 |  | 2.2985 | 0.9167 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 河南话方言朗读 (voxcpm2_henan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0588 |  | 2.4042 | 1.3864 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 陕西话方言朗读 (voxcpm2_shaanxi_dialect) | success | qwen3_asr_1_7b_8bit | 0.08 |  | 2.6257 | 1.2817 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 山东话方言朗读 (voxcpm2_shandong_dialect) | success | qwen3_asr_1_7b_8bit | 0.0435 |  | 1.2588 | 1.2977 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 天津话方言朗读 (voxcpm2_tianjin_dialect) | success | qwen3_asr_1_7b_8bit | 0.04 |  | 2.2265 | 1.1504 |  |
| `mlx_voxcpm2_bf16_dit` | 英语同语种音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8723 | 3.8957 | 1.5401 |  |
| `mlx_voxcpm2_bf16_dit` | 中文同语种音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.673 | 3.9185 | 1.1797 |  |
| `mlx_voxcpm2_bf16_dit` | 三秒英语参考音频克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7461 | 4.4028 | 1.4187 |  |
| `mlx_voxcpm2_bf16_dit` | 英文参考到中文跨语种克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7602 | 3.4611 | 1.3101 |  |
| `mlx_voxcpm2_bf16_dit` | 英文参考到日文跨语种克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.63 | 3.5416 | 1.1713 |  |
| `mlx_voxcpm2_bf16_dit` | 中文参考到英文跨语种克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.802 | 3.5473 | 1.5812 |  |
| `mlx_voxcpm2_bf16_dit` | 英文儿童女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1694 | 1.0214 |  |
| `mlx_voxcpm2_bf16_dit` | 中文 ASMR 音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4817 | 0.9707 |  |
| `mlx_voxcpm2_bf16_dit` | 西语体育解说音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3716 | 1.3277 |  |
| `mlx_voxcpm2_bf16_dit` | Scenema 英文同语种表演克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8793 | 4.3257 | 1.2355 |  |
| `mlx_voxcpm2_bf16_dit` | Scenema 英参西语跨语种克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6905 | 2.5861 | 1.8097 |  |
| `mlx_voxcpm2_bf16_dit` | Scenema 英文长文本连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2912 | 0.8956 |  |
| `mlx_voxcpm2_bf16_dit` | 英语疑惑情绪提示克隆 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8178 | 4.287 | 2.1109 |  |
| `mlx_voxcpm2_bf16_dit` | 中文轻声耳语风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7112 | 2.299 | 1.8714 |  |
| `mlx_voxcpm2_bf16_dit` | 中文播客节奏风格迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8594 | 2.5509 | 1.7835 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 中文女声钢琴歌曲风格 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.335 | 0.933 |  |
| `mlx_voxcpm2_bf16_dit` | VoxCPM2 英文流行歌曲风格 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.3064 | 1.2962 |  |
| `mlx_voxcpm2_bf16_dit` | 中文长文本稳定性压力测试 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9352 | 0.7784 |  |
| `mlx_voxcpm2_bf16_dit` | 英文长文本稳定性压力测试 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8427 | 0.9802 |  |
| `mlx_voxcpm2_bf16_dit` | 中文噪声参考音频克隆压力测试 (stress_noisy_ref_clone) | blocked | not_run |  |  |  |  |  |
| `mlx_voxcpm2_bf16_dit` | 中文手机录音参考克隆压力测试 (stress_phone_ref_clone) | blocked | not_run |  |  |  |  |  |
| `mlx_voxcpm2_bf16_dit` | 中文短句延迟性能测试 (perf_short_tts) | success | qwen3_asr_1_7b_8bit | 0.1667 |  | 3.3035 | 1.8638 |  |
| `mlx_voxcpm2_bf16_dit` | 中文批量生成性能测试 (perf_batch_10_samples) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3603 | 1.0641 |  |

## 本地 TTS 覆盖状态

- Inventory CSV：`/Users/vanch/tts-test-project/reports/local_open_tts_inventory.csv`

| 模型 | 状态 | 路径 |
|---|---|---|
| `mlx_indextts2_standard_8bit` | installed_unified_adapter | `/Users/vanch/mlx-indextts2` |
| `mlx_indextts2_vietnamese_8bit` | installed_unified_adapter | `/Users/vanch/mlx-indextts2` |
| `mlx_voxcpm2_bf16_dit` | scored | `/Users/vanch/mlx-voxcpm2` |
| `mlx_qwen3_tts_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_voice_design_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_custom_voice_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_omnivoice_8bit_trim60` | installed_unified_adapter | `/Users/vanch/mlx-omnivoice` |
| `mlx_dots_tts_mf_bf16` | installed_unified_adapter | `/Users/vanch/mlx-dots.tts` |
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
