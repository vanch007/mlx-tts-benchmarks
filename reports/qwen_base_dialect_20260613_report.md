# 本地开源 TTS 统一测试项目 - 汇总报表

- Run ID：`qwen_base_dialect_20260613`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/qwen_base_dialect_20260613/metrics.csv`。
- 标准：`configs/scoring_standard.json`，来自 `开源TTS测试标准.docx`。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。

## 榜单

| 排名 | 模型 | 样本数 | 总分 | 覆盖率 | content_intelligibility | naturalness_quality | speaker_clone_consistency | control_prosody_emotion_duration | multilingual_dialect_coverage | voice_design_robustness | deployment_performance | reference_compliance | 可排名 |
|---:|---|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_qwen3_tts_official_int8` | 22 | 69.178 | 81.091 | 92.063 | 69.714 | 84.718 | 97.444 | 95.027 | 91.223 | 47.276 | 87.5 | yes |

## 样本摘要

| 模型 | 测试项 | 状态 | ASR | CER | SIM | UTMOS | RTF | 失败原因 |
|---|---|---|---|---:|---:|---:|---:|---|
| `mlx_qwen3_tts_official_int8` | 中文数字、时间和订单号准确性 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.8312 | 0.6378 |  |
| `mlx_qwen3_tts_official_int8` | 英文数字、时间和价格准确性 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4883 | 0.426 |  |
| `mlx_qwen3_tts_official_int8` | 中英混读品牌和订单号 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0571 |  | 4.0895 | 0.4074 |  |
| `mlx_qwen3_tts_official_int8` | 日语自然新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1155 | 0.469 |  |
| `mlx_qwen3_tts_official_int8` | 韩语客服短句朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1484 | 0.4395 |  |
| `mlx_qwen3_tts_official_int8` | 西语疑问句自然语调 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7779 | 0.5173 |  |
| `mlx_qwen3_tts_official_int8` | 法语长句稳定性 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9718 | 0.4034 |  |
| `mlx_qwen3_tts_official_int8` | 德语清晰指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2722 | 0.4819 |  |
| `mlx_qwen3_tts_official_int8` | Qwen3 Base 粤语参考方言克隆 (qwen_base_yue_dialect_clone) | success | qwen3_asr_1_7b_8bit | 0.05 | 0.9322 | 2.27 | 0.8973 |  |
| `mlx_qwen3_tts_official_int8` | Qwen3 Base 四川话参考方言克隆 (qwen_base_sichuan_dialect_clone) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7712 | 2.2912 | 0.6231 |  |
| `mlx_qwen3_tts_official_int8` | 英语同语种音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9165 | 4.2239 | 0.5072 |  |
| `mlx_qwen3_tts_official_int8` | 中文同语种音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8677 | 3.6333 | 0.432 |  |
| `mlx_qwen3_tts_official_int8` | 三秒英语参考音频克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7978 | 4.4764 | 0.5003 |  |
| `mlx_qwen3_tts_official_int8` | Scenema 英文同语种表演克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.7922 | 0.7977 | 1.4817 | 0.5502 |  |
| `mlx_qwen3_tts_official_int8` | Scenema 英文长文本连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3971 | 0.3284 |  |
| `mlx_qwen3_tts_official_int8` | 中文长文本稳定性压力测试 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9238 | 0.3055 |  |
| `mlx_qwen3_tts_official_int8` | 英文长文本稳定性压力测试 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4183 | 0.3436 |  |
| `mlx_qwen3_tts_official_int8` | 中文噪声参考音频克隆压力测试 (stress_noisy_ref_clone) | blocked | not_run |  |  |  |  |  |
| `mlx_qwen3_tts_official_int8` | 中文手机录音参考克隆压力测试 (stress_phone_ref_clone) | blocked | not_run |  |  |  |  |  |
| `mlx_qwen3_tts_official_int8` | 中文短句延迟性能测试 (perf_short_tts) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6619 | 0.7474 |  |
| `mlx_qwen3_tts_official_int8` | 英文流式首包延迟测试 (perf_streaming_first_audio) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1011 | 0.4725 |  |
| `mlx_qwen3_tts_official_int8` | 中文批量生成性能测试 (perf_batch_10_samples) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1977 | 0.4509 |  |

## 本地 TTS 覆盖状态

- Inventory CSV：`/Users/vanch/tts-test-project/reports/local_open_tts_inventory.csv`

| 模型 | 状态 | 路径 |
|---|---|---|
| `mlx_indextts2_standard_8bit` | installed_unified_adapter | `/Users/vanch/mlx-indextts2` |
| `mlx_indextts2_vietnamese_8bit` | installed_unified_adapter | `/Users/vanch/mlx-indextts2` |
| `mlx_voxcpm2_bf16_dit` | installed_unified_adapter | `/Users/vanch/mlx-voxcpm2` |
| `mlx_qwen3_tts_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_voice_design_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_custom_voice_official_int8` | installed_unified_adapter | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_omnivoice_8bit_trim60` | installed_unified_adapter | `/Users/vanch/mlx-omnivoice` |
| `mlx_dots_tts_full_int8_g64` | installed_unified_adapter | `/Users/vanch/mlx-dots.tts` |
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
