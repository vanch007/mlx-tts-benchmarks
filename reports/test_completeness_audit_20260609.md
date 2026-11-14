# TTS 测试完整性审计

- 审计日期：2026-06-10
- 当前完整 run：`v02_qwen_asr17b_20260610_003340`
- 当前结果：`results/v02_qwen_asr17b_20260610_003340/metrics.csv`
- 当前能力边界：`reports/model_capability_boundary_official_github_zh.md`
- 异常分类：`reports/v02_qwen_asr17b_20260610_003340_audio_anomalies.md`

## 结论

当前边界内测试矩阵已补测完整，全部应测项都有生成音频、ASR、CER/WER 和 RTF。

- 应测矩阵：155 条。
- 当前边界内有效结果：155 条。
- 缺口：0 条。
- 多跑/边界外参与排名：0 条。
- 生成音频、ASR、CER/WER、RTF：155/155。
- ASR 口径：155/155 均使用 `mlx-community/Qwen3-ASR-1.7B-8bit`，报告字段为 `qwen3_asr_1_7b_8bit`，无 Whisper 回退。
- SIM：62/62 条有参考音频样本已打分；82 条无参考音频样本不计算 SIM。
- UTMOS：155/155。
- 榜单当前 10 个模型全部 `rank_ready=yes`。

## 补测完成项

| 模型 key | 模型 ID | 补测数量 | 补测用例 |
|---|---|---:|---|
| `indextts_vi` | `mlx_indextts2_vietnamese_8bit` | 1 | `clone_vi_same` |
| `qwen_voice_design` | `mlx_qwen3_tts_voice_design_official_int8` | 3 | `control_voice_design_child`, `control_voice_design_asmr`, `control_voice_design_sports` |
| `omnivoice` | `mlx_omnivoice_8bit_trim60` | 26 | `core_zh_numbers`, `core_en_numbers`, `core_zh_en_codeswitch`, `core_ja_reading`, `core_ko_customer`, `core_es_question`, `core_fr_long_sentence`, `core_de_instruction`, `core_vi_reading`, `core_hi_amount`, `core_ar_names`, `core_yue_dialect`, `control_voice_design_child`, `control_voice_design_asmr`, `control_voice_design_sports`, `control_emotion_happy`, `control_emotion_sad`, `control_emotion_angry`, `control_duration_3s`, `control_duration_10s`, `control_duration_20s`, `control_token_laugh`, `stress_long_zh`, `stress_long_en`, `perf_short_tts`, `perf_batch_10_samples` |
| `supertonic` | `supertonic3_onnx_cpu` | 11 | `core_en_numbers`, `core_ja_reading`, `core_ko_customer`, `core_es_question`, `core_fr_long_sentence`, `core_de_instruction`, `core_vi_reading`, `core_hi_amount`, `core_ar_names`, `control_token_laugh`, `stress_long_en` |

边界补测 run：`missing_boundary_retest_20260609_154751`，补测成功 31 条，其中 `clone_vi_same` 也重新覆盖了 OmniVoice。Supertonic 补测 run：`supertonic_full_20260610_000735`，补测成功 11 条。Qwen3-ASR 1.7B 复评 run 为 `v02_qwen_asr17b_20260610_003340`。

## 当前模型覆盖

| 模型 ID | 结果数 |
|---|---:|
| `mlx_omnivoice_8bit_trim60` | 35 |
| `mlx_voxcpm2_official_int8` | 32 |
| `mlx_higgs_audio_v3_4b` | 31 |
| `mlx_qwen3_tts_official_int8` | 21 |
| `mlx_dots_tts_mf_bf16` | 12 |
| `supertonic3_onnx_cpu` | 11 |
| `mlx_indextts2_standard_8bit` | 8 |
| `mlx_qwen3_tts_voice_design_official_int8` | 3 |
| `mlx_indextts2_vietnamese_8bit` | 1 |
| `valtec_vietnamese_tts` | 1 |

## 新增 inventory-only 本地仓库

| 仓库 | 状态 | 原因 |
|---|---|---|
| `VieNeu-TTS` | inventory-only | 本机仓库存在，但仓库目录和 HF cache 都未找到 backbone/codec checkpoint 文件。 |
| `scenema-audio` | inventory-only | 本机仓库存在，但仓库目录和 HF cache 都未找到 checkpoint/service 资产；README 首次启动会触发大体量下载，未自动执行。 |

## 已排除的旧边界外结果

旧 run 中有 22 条结果按当前边界不应参与报告，已从完整结果、dashboard 和试听页过滤。

典型原因：

- `mlx_indextts2_standard_8bit` 误跑越南语、风格迁移或控制 token。
- `mlx_qwen3_tts_official_int8` 误跑 VoiceDesign、四川话、跨语种和非官方控制 token。
- `mlx_higgs_audio_v3_4b` 误跑四川话。
- 旧 `not_applicable_capability` 空卡片已全部隐藏。

## 剩余问题

- `sim` 只对有 `reference_audio_path` 的用例计算；无参考音频朗读用例按标准不计算音色相似度。
- `utmos` 已按 SpeechMOS `utmos22_strong` 对全部成功音频计算。
- 音频/内容异常样本：9 条，来自 `mlx_dots_tts_mf_bf16`、`mlx_higgs_audio_v3_4b`、`mlx_omnivoice_8bit_trim60` 和 `mlx_voxcpm2_official_int8`。
- 性能提示样本：21 条，均为 `slow_generation`，只表示生成速度慢，不代表内容或听感异常。

当前异常重试后仍保留：

| 测试项 | 严重度 | 现象 |
|---|---|---|
| OmniVoice `core_hi_amount` | high | 内容严重错误，且存在大段静音 |
| OmniVoice `core_en_numbers` | medium | 内容错误偏高，需人工试听复核 ASR |
| VoxCPM2 `core_en_numbers` | medium | 内容错误偏高，需人工试听复核 ASR |
| VoxCPM2 `core_yue_dialect` | medium | 内容错误偏高，需人工试听复核 ASR |
| dots.tts `clone_en_same` | medium | 内容错误偏高，需人工试听复核 ASR |
| dots.tts `clone_vi_same` | medium | 内容错误偏高，需人工试听复核 ASR |
| Higgs `core_en_numbers` | medium | 内容错误偏高，需人工试听复核 ASR |
| Higgs `control_whisper_style` | medium | 内容错误偏高，需人工试听复核 ASR |

## 验证

```bash
PYTHONPATH=src python3 -m tts_eval validate --project . --results results/v02_qwen_asr17b_20260610_003340/metrics.csv
PYTHONPATH=src python3 -m unittest discover -s tests
python3 scripts/analyze_audio_anomalies.py --run-id v02_qwen_asr17b_20260610_003340 --metrics results/v02_qwen_asr17b_20260610_003340/metrics.csv
```

验证结果：`validate` 通过；26 个单元测试通过；异常分类报告已生成；`metric_failures=0`。
