# mlx-tts-benchmark - 汇总报表

- Run ID：`v02_plus_vieneu_lux_scenema_20260610_091619`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/v02_plus_vieneu_lux_scenema_20260610_091619/metrics.csv`。
- 标准：`configs/capability_radar_research_zh.json`，9 项研究版 TTS 能力雷达评分；逐样本客观指标仍保留在 metrics/scored CSV。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。
- 已从主评分隐藏 42 条能力边界外、诊断或专项记录；这些项目不进入主榜和样本摘要，边界内专项可在试听页按层级查看。

## 榜单

| 排名 | 项目 | 评分样本数 | 质量分 | 全能分 | 广度 | 能力覆盖率 | 内容准确与可懂度 | 自然度与音频质量 | 多语种能力 | 方言能力 | 音色克隆与鲁棒性 | 情绪、风格与韵律控制 | 复杂文本与副语言能力 | 短段落连续性（分钟级长文待测） | RTF 生成效率 | 可排名 |
|---:|---|---:|---:|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_qwen3_tts` | 26 | 88.384 | 74.433 | 7/9 | 80.0 | 96.336 | 78.505 | 18.016 | 0.0 | 89.715 | 83.954 | 0.0 | 95.999 | 82.309 | no |
| 2 | `mlx_higgs_audio` | 37 | 83.917 | 74.251 | 8/9 | 81.389 | 88.104 | 80.498 | 28.681 | 0.0 | 80.393 | 86.071 | 89.176 | 92.851 | 49.41 | no |
| 3 | `mlx_voxcpm2` | 53 | 82.399 | 76.121 | 8/9 | 95.833 | 92.553 | 70.297 | 52.859 | 0.0 | 78.678 | 89.247 | 83.237 | 93.449 | 56.832 | no |
| 4 | `mlx_omnivoice` | 39 | 81.829 | 73.432 | 8/9 | 93.333 | 93.313 | 70.949 | 33.01 | 0.0 | 75.786 | 86.225 | 91.114 | 87.9 | 63.323 | no |
| 5 | `mlx_breeze_tts2` | 15 | 80.449 | 68.382 | 7/9 | 77.778 | 87.094 | 73.407 | 0.0 | 0.0 | 85.082 | 72.514 | 92.887 | 92.288 | 44.739 | no |
| 6 | `mlx_drama3` | 21 | 79.672 | 58.727 | 7/9 | 76.389 | 87.375 | 65.622 | 10.15 | 0.0 | 81.713 | 0.0 | 89.247 | 93.191 | 0.0 | no |
| 7 | `mlx_moss_tts` | 46 | 79.487 | 74.254 | 8/9 | 96.389 | 96.969 | 73.023 | 49.291 | 0.0 | 77.074 | 61.955 | 89.342 | 94.642 | 44.06 | no |
| 8 | `mlx_dots_tts` | 40 | 78.835 | 69.212 | 7/9 | 83.611 | 80.855 | 69.159 | 45.07 | 0.0 | 79.766 | 84.837 | 0.0 | 91.483 | 58.55 | no |
| 9 | `mlx_zonos2` | 41 | 77.85 | 69.259 | 7/9 | 73.056 | 93.569 | 64.894 | 44.201 | 0.0 | 77.538 | 76.726 | 0.0 | 92.344 | 27.148 | no |
| 10 | `mlx_ming3_0.5b` | 20 | 76.898 | 65.499 | 7/9 | 78.611 | 78.761 | 77.824 | 4.585 | 0.0 | 76.043 | 82.143 | 0.0 | 87.657 | 87.099 | no |
| 11 | `mlx_scenema_audio` | 28 | 75.604 | 63.584 | 8/9 | 76.667 | 73.832 | 64.876 | 11.221 | 0.0 | 78.73 | 86.904 | 86.554 | 85.089 | 19.378 | no |
| 12 | `mlx_ming_omni_tts` | 19 | 73.844 | 62.767 | 7/9 | 88.889 | 80.167 | 62.505 | 0.0 | 0.0 | 75.747 | 86.937 | 85.709 | 82.263 | 23.972 | no |
| 13 | `mlx_ming3_tiny_7.9b` | 20 | 64.81 | 51.805 | 7/9 | 78.611 | 55.147 | 70.352 | 6.16 | 0.0 | 44.928 | 86.83 | 0.0 | 91.054 | 30.937 | no |
| 14 | `mlx_supertonic` | 33 | 90.405 | 57.84 | 5/9 | 52.778 | 97.851 | 79.078 | 68.282 | 0.0 | 0.0 | 0.0 | 0.0 | 95.729 | 100.0 | no |
| 15 | `mlx_pocket_tts` | 14 | 85.148 | 63.61 | 6/9 | 57.222 | 97.549 | 74.157 | 11.638 | 0.0 | 80.802 | 0.0 | 0.0 | 97.249 | 97.111 | no |
| 16 | `mlx_audio8_tts` | 23 | 83.7 | 61.493 | 6/9 | 68.889 | 89.944 | 80.357 | 18.365 | 0.0 | 82.238 | 0.0 | 0.0 | 94.511 | 13.954 | no |
| 17 | `mlx_fireredaudio` | 14 | 78.328 | 64.229 | 6/9 | 66.667 | 85.274 | 70.235 | 0.0 | 0.0 | 84.844 | 82.111 | 0.0 | 89.989 | 10.828 | no |
| 18 | `mlx_indextts2.5` | 20 | 75.719 | 62.557 | 7/9 | 67.5 | 81.702 | 64.684 | 5.823 | 0.0 | 82.44 | 81.973 | 0.0 | 88.467 | 18.894 | no |
| 19 | `mlx_voxmel` | 12 | 75.361 | 54.26 | 5/9 | 55.556 | 57.221 | 96.552 | 0.0 | 0.0 | 69.62 | 0.0 | 0.0 | 100.0 | 62.593 | no |
| 20 | `mlx_indextts2` | 1 | 56.592 | 23.769 | 3/9 | 33.333 | 0.0 | 60.842 | 0.0 | 0.0 | 58.475 | 0.0 | 0.0 | 0.0 | 14.766 | no |

## 样本摘要

| 项目/模型 | 测试项 | 状态 | ASR | CER | SIM | UTMOS | RTF | 失败原因 |
|---|---|---|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.1143 |  | 3.5572 | 0.7751 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.851 | 0.7591 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.2708 |  | 3.3652 | 0.8463 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.8905 | 0.7669 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0833 |  | 2.7992 | 1.1414 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0556 |  | 1.8041 | 2.4404 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8932 | 3.1735 | 5.517 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6537 | 2.7739 | 4.5256 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.015 |  | 4.524 | 2.8001 |  |
| `mlx_voxcpm2_bf16_dit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6171 | 1.0968 |  |
| `mlx_voxcpm2_bf16_dit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7402 | 1.0834 |  |
| `mlx_voxcpm2_bf16_dit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.6855 | 1.0109 |  |
| `mlx_voxcpm2_bf16_dit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3774 | 1.0497 |  |
| `mlx_voxcpm2_bf16_dit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6971 | 1.2141 |  |
| `mlx_voxcpm2_bf16_dit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8458 | 1.3477 |  |
| `mlx_voxcpm2_bf16_dit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4793 | 1.1269 |  |
| `mlx_voxcpm2_bf16_dit` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.723 | 1.1498 |  |
| `mlx_voxcpm2_bf16_dit` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7044 | 0.8252 |  |
| `mlx_voxcpm2_bf16_dit` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.735 | 2.2715 | 1.1579 |  |
| `mlx_voxcpm2_bf16_dit` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 3.4171 | 1.0779 |  |
| `mlx_voxcpm2_bf16_dit` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4409 | 1.2231 |  |
| `mlx_voxcpm2_bf16_dit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.0828 | 1.2396 |  |
| `mlx_voxcpm2_bf16_dit` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.07 | 1.1599 |  |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8783 | 3.8957 | 1.0465 |  |
| `mlx_voxcpm2_bf16_dit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5437 | 3.9185 | 0.8346 |  |
| `mlx_voxcpm2_bf16_dit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7489 | 4.4028 | 0.9889 |  |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7516 | 3.4611 | 0.8791 |  |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.5352 | 3.5416 | 0.8228 |  |
| `mlx_voxcpm2_bf16_dit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8184 | 3.5473 | 1.0732 |  |
| `mlx_voxcpm2_bf16_dit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1694 | 1.0214 |  |
| `mlx_voxcpm2_bf16_dit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4817 | 0.9707 |  |
| `mlx_voxcpm2_bf16_dit` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3716 | 1.3277 |  |
| `mlx_voxcpm2_bf16_dit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8917 | 4.3471 | 0.9289 |  |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6237 | 2.5861 | 1.2092 |  |
| `mlx_voxcpm2_bf16_dit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2912 | 0.8956 |  |
| `mlx_voxcpm2_bf16_dit` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8459 | 4.2839 | 1.6535 |  |
| `mlx_voxcpm2_bf16_dit` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6542 | 2.3724 | 1.7906 |  |
| `mlx_voxcpm2_bf16_dit` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9286 | 2.5434 | 1.7375 |  |
| `mlx_voxcpm2_bf16_dit` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.4652 | 0.9792 |  |
| `mlx_voxcpm2_bf16_dit` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.3064 | 1.1473 |  |
| `mlx_voxcpm2_bf16_dit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9352 | 0.7784 |  |
| `mlx_voxcpm2_bf16_dit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8427 | 0.9802 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.2623 | 3.335 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5322 | 3.4404 |  |
| `mlx_dots_tts_full_int8_g64` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0469 | 0.832 | 2.5124 | 0.9344 |  |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9587 | 3.6741 | 0.8139 |  |
| `mlx_dots_tts_full_int8_g64` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9106 | 2.8173 | 0.8346 |  |
| `mlx_dots_tts_full_int8_g64` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8608 | 4.1205 | 0.8056 |  |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7545 | 3.0855 | 0.7833 |  |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0571 | 0.6985 | 3.0752 | 0.8071 |  |
| `mlx_dots_tts_full_int8_g64` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8948 | 3.4805 | 0.7952 |  |
| `mlx_dots_tts_full_int8_g64` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9054 | 3.0174 | 1.0773 |  |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6647 | 2.4427 | 0.836 |  |
| `mlx_dots_tts_full_int8_g64` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9033 | 4.2145 | 1.6331 |  |
| `mlx_dots_tts_full_int8_g64` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6729 | 1.346 | 1.5889 |  |
| `mlx_dots_tts_full_int8_g64` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9222 | 2.9125 | 1.7563 |  |
| `mlx_omnivoice_8bit_trim60` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3834 | 1.2148 |  |
| `mlx_higgs_audio_v3_4b` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0357 |  | 4.1153 | 1.3635 |  |
| `mlx_higgs_audio_v3_4b` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3596 | 1.1903 |  |
| `mlx_voxcpm2_bf16_dit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8409 | 1.5023 |  |
| `mlx_voxcpm2_bf16_dit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5701 | 1.158 |  |
| `mlx_voxcpm2_bf16_dit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5529 | 1.277 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5912 | 1.1089 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7249 | 0.5448 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.9778 | 0.6252 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5353 | 1.04 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4513 | 0.427 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.8338 | 0.601 |  |
| `mlx_higgs_audio_v3_4b` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9518 | 1.3935 |  |
| `mlx_higgs_audio_v3_4b` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6746 | 1.2438 |  |
| `mlx_higgs_audio_v3_4b` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7501 | 1.1877 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7553 | 3.6614 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4701 | 2.8548 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.2818 | 3.4471 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4181 | 1.188 |  |
| `mlx_omnivoice_8bit_trim60` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4247 | 1.7522 |  |
| `mlx_dots_tts_full_int8_g64` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0857 |  | 3.4952 | 0.8345 |  |
| `mlx_dots_tts_full_int8_g64` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.467 | 1.1302 |  |
| `mlx_dots_tts_full_int8_g64` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.1515 | 1.158 |  |
| `mlx_dots_tts_full_int8_g64` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0938 |  | 3.9261 | 1.0773 |  |
| `mlx_dots_tts_full_int8_g64` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2174 | 1.0683 |  |
| `mlx_dots_tts_full_int8_g64` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1678 | 1.1124 |  |
| `mlx_dots_tts_full_int8_g64` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2156 | 1.12 |  |
| `mlx_dots_tts_full_int8_g64` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.298 | 1.1337 |  |
| `mlx_dots_tts_full_int8_g64` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8861 | 0.8976 |  |
| `mlx_dots_tts_full_int8_g64` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 3.46 | 1.1869 |  |
| `mlx_dots_tts_full_int8_g64` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0217 |  | 3.4973 | 1.1741 |  |
| `mlx_dots_tts_full_int8_g64` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0455 |  | 2.8381 | 1.2739 |  |
| `mlx_dots_tts_full_int8_g64` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8351 | 1.1665 |  |
| `mlx_dots_tts_full_int8_g64` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7507 | 1.2541 |  |
| `mlx_dots_tts_full_int8_g64` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3042 | 1.0802 |  |
| `mlx_indextts2_v25_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9415 | 2.3423 | 1.8613 |  |
| `mlx_indextts2_v25_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9878 | 3.1428 | 1.8017 |  |
| `mlx_indextts2_v25_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9105 | 2.4936 | 1.6385 |  |
| `mlx_indextts2_v25_8bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.125 | 0.8587 | 2.5823 | 2.0229 |  |
| `mlx_indextts2_v25_8bit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8474 | 2.1329 | 1.7016 |  |
| `mlx_indextts2_v25_8bit` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8849 | 2.3511 | 1.8557 |  |
| `mlx_indextts2_v25_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9808 | 3.5659 | 1.8783 |  |
| `mlx_indextts2_v25_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.914 | 2.6594 | 1.506 |  |
| `mlx_indextts2_v25_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7767 | 4.277 | 1.5239 |  |
| `mlx_indextts2_v25_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8194 | 2.9339 | 1.8497 |  |
| `mlx_indextts2_v25_8bit` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0571 | 0.7182 | 3.156 | 1.9232 |  |
| `mlx_indextts2_v25_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7987 | 4.0676 | 1.9281 |  |
| `mlx_indextts2_v25_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8483 | 3.8237 | 2.3669 |  |
| `mlx_indextts2_v25_8bit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7634 | 2.5751 | 1.7798 |  |
| `mlx_indextts2_v25_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9521 | 3.3554 | 0.8716 |  |
| `mlx_indextts2_v25_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9282 | 1.9893 | 2.652 |  |
| `mlx_indextts2_v25_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8828 | 2.5718 | 1.7054 |  |
| `mlx_indextts2_v25_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8547 | 2.0955 | 1.8701 |  |
| `mlx_indextts2_v25_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9305 | 2.0848 | 0.7655 |  |
| `mlx_indextts2_v25_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9351 | 3.3913 | 0.9268 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文三秒目标时长控制 (control_duration_3s) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8544 | 0.5445 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文十秒目标时长控制 (control_duration_10s) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8535 | 1.1568 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文二十秒目标时长控制 (control_duration_20s) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8618 | 0.4586 |  |
| `mlx_moss_tts_local_transformer_v1_5` | MOSS 中文显式停顿标记 (moss_pause_markup_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3293 | 1.8043 |  |
| `mlx_omnivoice_8bit_trim60` | 中文三秒目标时长控制 (control_duration_3s) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9815 | 3.2205 | 1.8173 |  |
| `mlx_omnivoice_8bit_trim60` | 中文十秒目标时长控制 (control_duration_10s) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6126 | 3.035 | 0.7988 |  |
| `mlx_omnivoice_8bit_trim60` | 中文二十秒目标时长控制 (control_duration_20s) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.0 | 2.6681 | 0.6198 |  |
| `mlx_omnivoice_8bit_trim60` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0566 | 1.3437 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.3438 |  | 4.0832 | 1.6469 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.2857 | 0.6453 | 3.7565 | 1.1967 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.2738 |  | 3.1812 | 0.6752 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.3504 | 1.2949 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8815 | 4.0196 | 1.9375 |  |
| `mlx_higgs_audio_v3_4b` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.853 | 4.4506 | 1.2564 |  |
| `mlx_higgs_audio_v3_4b` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.1667 | 0.7482 | 1.3938 | 1.8694 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.7176 | 1.9665 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.0445 | 1.8342 |  |
| `mlx_zonos2_bf16` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4515 | 1.3302 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5529 | 1.7935 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5931 | 1.7675 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.7161 | 1.3542 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.6218 | 1.2974 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9991 | 2.572 | 0.6813 |  |
| `mlx_higgs_audio_v3_4b` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6957 | 1.122 |  |
| `mlx_qwen3_tts_official_int8` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3561 | 0.5388 |  |
| `mlx_qwen3_tts_official_int8` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4274 | 0.4459 |  |
| `mlx_higgs_audio_v3_4b` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.2 | 0.6493 | 4.0947 | 1.1732 |  |
| `mlx_higgs_audio_v3_4b` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0467 | 1.3264 |  |
| `mlx_omnivoice_8bit_trim60` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4459 | 1.2028 |  |
| `mlx_omnivoice_8bit_trim60` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5045 | 1.1275 |  |
| `mlx_higgs_audio_v3_4b` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0864 | 0.7791 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 2.7235 | 1.0514 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.2 | 0.8598 | 4.3414 | 0.9063 |  |
| `mlx_zonos2_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1164 | 1.1029 |  |
| `mlx_qwen3_tts_official_int8` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4808 | 0.4712 |  |
| `mlx_qwen3_tts_official_int8` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2322 | 0.4212 |  |
| `mlx_qwen3_tts_official_int8` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0938 |  | 4.2099 | 0.6241 |  |
| `mlx_qwen3_tts_official_int8` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0159 |  | 3.6828 | 0.5135 |  |
| `mlx_qwen3_tts_official_int8` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3308 | 0.4326 |  |
| `mlx_qwen3_tts_official_int8` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2526 | 0.4538 |  |
| `mlx_qwen3_tts_official_int8` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9624 | 4.2431 | 0.4931 |  |
| `mlx_qwen3_tts_official_int8` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9028 | 3.6374 | 0.4503 |  |
| `mlx_qwen3_tts_official_int8` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7615 | 4.4565 | 0.5242 |  |
| `mlx_qwen3_tts_official_int8` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6744 | 0.3115 |  |
| `mlx_qwen3_tts_official_int8` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5129 | 0.3626 |  |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9135 | 3.733 | 1.7616 |  |
| `mlx_omnivoice_8bit_trim60` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9311 | 2.9833 | 0.9219 |  |
| `mlx_omnivoice_8bit_trim60` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7185 | 4.418 | 0.3454 |  |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.677 | 3.1669 | 1.8743 |  |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.6833 | 3.4897 | 0.4707 |  |
| `mlx_omnivoice_8bit_trim60` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0417 | 0.748 | 2.7947 | 1.2173 |  |
| `mlx_higgs_audio_v3_4b` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0961 | 1.2171 |  |
| `mlx_higgs_audio_v3_4b` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8114 | 1.2883 |  |
| `mlx_higgs_audio_v3_4b` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2957 | 1.4557 |  |
| `mlx_higgs_audio_v3_4b` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 4.3671 | 1.1962 |  |
| `mlx_higgs_audio_v3_4b` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8789 | 1.2041 |  |
| `mlx_higgs_audio_v3_4b` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9456 | 4.0959 | 1.3245 |  |
| `mlx_higgs_audio_v3_4b` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8868 | 3.7147 | 1.0862 |  |
| `mlx_higgs_audio_v3_4b` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7471 | 4.5042 | 1.2355 |  |
| `mlx_higgs_audio_v3_4b` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.7046 | 4.3368 | 1.1492 |  |
| `mlx_higgs_audio_v3_4b` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8308 | 4.1726 | 1.2133 |  |
| `mlx_higgs_audio_v3_4b` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0476 |  | 3.3913 | 0.8107 |  |
| `mlx_higgs_audio_v3_4b` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.552 | 0.9758 |  |
| `mlx_omnivoice_8bit_trim60` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6802 | 1.5373 | 0.3234 |  |
| `mlx_higgs_audio_v3_4b` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7449 | 3.5143 | 1.6756 |  |
| `mlx_indextts2_vietnamese_8bit` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6697 | 2.0898 | 1.7416 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4058 | 0.5211 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.737 | 0.467 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0556 |  | 4.305 | 0.5437 |  |
| `mlx_omnivoice_8bit_trim60` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9917 | 1.0105 |  |
| `mlx_omnivoice_8bit_trim60` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7207 | 1.2293 |  |
| `mlx_omnivoice_8bit_trim60` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3782 | 0.9092 |  |
| `mlx_omnivoice_8bit_trim60` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7177 | 1.2823 |  |
| `mlx_omnivoice_8bit_trim60` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0077 | 1.4468 |  |
| `mlx_omnivoice_8bit_trim60` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0538 | 1.2133 |  |
| `mlx_omnivoice_8bit_trim60` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3311 | 0.7061 |  |
| `mlx_omnivoice_8bit_trim60` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4286 | 0.52 |  |
| `mlx_higgs_audio_v3_4b` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9009 | 3.0746 | 1.4345 |  |
| `mlx_higgs_audio_v3_4b` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8305 | 1.3409 |  |
| `mlx_omnivoice_8bit_trim60` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4644 | 0.8882 |  |
| `mlx_qwen3_tts_official_int8` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9967 | 2.5854 | 0.9861 |  |
| `mlx_qwen3_tts_official_int8` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7486 | 2.8059 | 0.6192 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 1.6159 | 1.78 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5325 | 1.7815 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0571 |  | 2.5551 | 1.9362 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.582 | 1.9816 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7953 | 3.0117 | 1.3663 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8167 | 1.3927 | 0.9984 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6123 | 3.9474 | 1.171 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.0922 | 1.5781 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7412 | 3.2449 | 0.9548 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9836 | 3.1698 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0375 | 1.7995 |  |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.1368 | 1.3737 |  |
| `mlx_zonos2_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3612 | 1.2045 |  |
| `mlx_zonos2_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3778 | 1.5775 |  |
| `mlx_zonos2_bf16` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5543 | 1.205 |  |
| `mlx_zonos2_bf16` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4778 | 1.275 |  |
| `mlx_zonos2_bf16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4475 | 1.2188 |  |
| `mlx_zonos2_bf16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4587 | 1.1926 |  |
| `mlx_zonos2_bf16` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3385 | 1.4669 |  |
| `mlx_zonos2_bf16` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.8469 | 1.2118 |  |
| `mlx_zonos2_bf16` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6225 | 3.1654 | 1.6754 |  |
| `mlx_zonos2_bf16` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0833 |  | 2.8546 | 1.1967 |  |
| `mlx_zonos2_bf16` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6867 | 1.5048 |  |
| `mlx_zonos2_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0385 | 0.7512 | 3.965 | 1.2072 |  |
| `mlx_zonos2_bf16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.718 | 3.3571 | 1.1756 |  |
| `mlx_zonos2_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7598 | 4.4379 | 1.1828 |  |
| `mlx_zonos2_bf16` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.05 | 0.6148 | 4.0645 | 1.2399 |  |
| `mlx_zonos2_bf16` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0571 | 0.5845 | 3.2357 | 1.177 |  |
| `mlx_zonos2_bf16` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6846 | 4.3481 | 1.186 |  |
| `mlx_zonos2_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7602 | 4.1827 | 1.1673 |  |
| `mlx_zonos2_bf16` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5962 | 3.8683 | 1.1829 |  |
| `mlx_zonos2_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4248 | 1.341 |  |
| `mlx_zonos2_bf16` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.6309 | 1.0597 |  |
| `mlx_zonos2_bf16` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.439 | 1.0052 |  |
| `mlx_zonos2_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0119 |  | 2.5204 | 1.2341 |  |
| `mlx_zonos2_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8088 | 1.278 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6959 | 1.0267 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2491 | 0.8389 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1651 | 0.8801 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7178 | 1.0199 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.181 | 1.0486 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3826 | 0.9374 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0156 | 0.5389 | 2.8303 | 0.8631 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0217 |  | 3.5474 | 0.6575 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8353 | 4.1416 | 0.8821 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8643 | 3.1723 | 1.1528 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.837 | 4.4981 | 1.0872 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.5529 | 3.7065 | 1.1325 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0833 | 0.9157 | 4.011 | 0.9639 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7132 | 3.8772 | 0.88 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4005 | 1.0861 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8487 | 0.9855 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5359 | 1.2391 |  |
| `mlx_supertonic3_mlx` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.427 | 0.0646 |  |
| `mlx_supertonic3_mlx` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9808 | 0.0884 |  |
| `mlx_supertonic3_mlx` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9284 | 0.0875 |  |
| `mlx_supertonic3_mlx` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4936 | 0.0863 |  |
| `mlx_supertonic3_mlx` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.264 | 0.064 |  |
| `mlx_supertonic3_mlx` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2713 | 0.092 |  |
| `mlx_supertonic3_mlx` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5566 | 0.0699 |  |
| `mlx_supertonic3_mlx` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.047 | 0.0912 |  |
| `mlx_supertonic3_mlx` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3716 | 0.0759 |  |
| `mlx_supertonic3_mlx` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5214 | 0.0366 |  |
| `mlx_supertonic3_mlx` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5218 | 0.0422 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0571 |  | 3.7973 | 0.8685 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7702 | 5.0327 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6559 | 1.7345 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9666 | 1.3636 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5914 | 1.768 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8672 | 3.7264 | 2.3196 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.867 | 2.3756 | 3.8007 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7611 | 4.2956 | 2.7417 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.684 | 3.3033 | 4.4769 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8578 | 3.6662 | 3.289 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1384 | 1.6063 |  |
| `mlx_qwen3_tts_official_int8` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8324 | 4.18 | 0.5733 |  |
| `mlx_qwen3_tts_official_int8` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4121 | 0.3315 |  |
| `mlx_omnivoice_8bit_trim60` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7896 | 3.6006 | 0.8734 |  |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8717 | 3.1077 | 1.14 |  |
| `mlx_omnivoice_8bit_trim60` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.01 |  | 3.5174 | 0.651 |  |
| `mlx_higgs_audio_v3_4b` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7241 | 4.1495 | 0.7891 |  |
| `mlx_higgs_audio_v3_4b` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6825 | 3.733 | 0.7406 |  |
| `mlx_higgs_audio_v3_4b` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5572 | 0.7642 |  |
| `mlx_higgs_audio_v3_4b` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5532 | 1.0808 |  |
| `mlx_higgs_audio_v3_4b` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.1794 | 1.0785 |  |
| `mlx_higgs_audio_v3_4b` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.4709 | 1.2213 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4739 | 1.0838 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8599 | 1.2768 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.241 | 0.9805 |  |
| `mlx_omnivoice_8bit_trim60` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5182 | 1.0485 |  |
| `mlx_omnivoice_8bit_trim60` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0189 | 0.9606 |  |
| `mlx_omnivoice_8bit_trim60` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1132 | 1.1089 |  |
| `mlx_fireredaudio_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.8416 | 2.5904 | 1.4373 |  |
| `mlx_fireredaudio_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9379 | 3.6831 | 1.4596 |  |
| `mlx_fireredaudio_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.9207 | 2.6654 | 1.4528 |  |
| `mlx_fireredaudio_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9215 | 3.6676 | 1.5813 |  |
| `mlx_fireredaudio_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8881 | 2.6607 | 1.6429 |  |
| `mlx_fireredaudio_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7115 | 4.0674 | 1.7733 |  |
| `mlx_fireredaudio_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8304 | 4.2313 | 2.0386 |  |
| `mlx_fireredaudio_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.85 | 3.3465 | 2.1801 |  |
| `mlx_fireredaudio_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.082 | 2.7784 | 3.1956 |  |
| `mlx_fireredaudio_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.0 | 2.1395 | 6.0937 |  |
| `mlx_fireredaudio_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8673 | 4.0616 | 22.3818 |  |
| `mlx_fireredaudio_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9182 | 3.5393 | 6.9609 |  |
| `mlx_fireredaudio_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7764 | 1.7471 | 3.6084 |  |
| `mlx_fireredaudio_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9256 | 3.7068 | 2.8177 |  |
| `mlx_pocket_tts_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3465 | 0.0952 |  |
| `mlx_pocket_tts_8bit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4132 | 0.0847 |  |
| `mlx_pocket_tts_8bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7089 | 0.5519 |  |
| `mlx_pocket_tts_8bit` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4732 | 0.0874 |  |
| `mlx_pocket_tts_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5822 | 3.9434 | 0.0927 |  |
| `mlx_pocket_tts_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5757 | 4.3883 | 0.0834 |  |
| `mlx_pocket_tts_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6997 | 4.1255 | 0.0869 |  |
| `mlx_pocket_tts_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7378 | 4.0078 | 0.1099 |  |
| `mlx_pocket_tts_8bit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8123 | 3.373 | 0.1046 |  |
| `mlx_pocket_tts_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4543 | 0.0868 |  |
| `mlx_pocket_tts_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4451 | 0.0857 |  |
| `mlx_breeze_tts2_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.8998 | 3.3772 | 1.1697 |  |
| `mlx_breeze_tts2_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9706 | 3.655 | 1.1674 |  |
| `mlx_breeze_tts2_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.9214 | 3.3629 | 1.1561 |  |
| `mlx_breeze_tts2_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9557 | 3.7675 | 1.1726 |  |
| `mlx_breeze_tts2_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8609 | 3.1245 | 1.1589 |  |
| `mlx_breeze_tts2_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7596 | 4.3637 | 1.1774 |  |
| `mlx_breeze_tts2_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.05 | 0.7518 | 3.553 | 1.1528 |  |
| `mlx_breeze_tts2_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8527 | 3.6044 | 1.171 |  |
| `mlx_breeze_tts2_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7467 | 1.5334 |  |
| `mlx_breeze_tts2_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.1013 | 1.6418 |  |
| `mlx_breeze_tts2_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8503 | 4.0437 | 1.1982 |  |
| `mlx_breeze_tts2_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9281 | 3.566 | 1.1808 |  |
| `mlx_breeze_tts2_8bit` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9059 | 3.5838 | 1.1671 |  |
| `mlx_breeze_tts2_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8714 | 3.0601 | 1.101 |  |
| `mlx_breeze_tts2_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.934 | 3.7464 | 1.1077 |  |
| `mlx_audio8_tts_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0571 | 0.8205 | 4.2462 | 1.6887 |  |
| `mlx_audio8_tts_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8798 | 4.2011 | 1.5079 |  |
| `mlx_audio8_tts_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8304 | 4.2175 | 1.5346 |  |
| `mlx_audio8_tts_8bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8238 | 3.6676 | 1.5317 |  |
| `mlx_audio8_tts_8bit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8372 | 3.5563 | 1.5629 |  |
| `mlx_audio8_tts_8bit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8761 | 3.7184 | 1.6406 |  |
| `mlx_audio8_tts_8bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.85 | 3.961 | 1.6531 |  |
| `mlx_audio8_tts_8bit` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9602 | 3.8293 | 1.8218 |  |
| `mlx_audio8_tts_8bit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.1818 | 0.9934 | 2.8568 | 2.2552 |  |
| `mlx_audio8_tts_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8637 | 4.277 | 1.8198 |  |
| `mlx_audio8_tts_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8615 | 3.9223 | 1.8809 |  |
| `mlx_audio8_tts_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6697 | 4.4969 | 1.7989 |  |
| `mlx_audio8_tts_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.7361 | 4.1357 | 1.7994 |  |
| `mlx_audio8_tts_8bit` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0857 | 0.6171 | 4.2633 | 1.8372 |  |
| `mlx_audio8_tts_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8568 | 4.4512 | 2.2271 |  |
| `mlx_audio8_tts_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7726 | 4.3088 | 2.2838 |  |
| `mlx_audio8_tts_8bit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6751 | 3.9792 | 2.4346 |  |
| `mlx_audio8_tts_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8849 | 4.1707 | 2.9172 |  |
| `mlx_audio8_tts_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7687 | 3.431 | 3.5584 |  |
| `mlx_audio8_tts_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9199 | 4.105 | 3.3103 |  |
| `mlx_drama3_4bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.8014 | 3.5821 | 3.1846 |  |
| `mlx_drama3_4bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.901 | 3.6778 | 3.8955 |  |
| `mlx_drama3_4bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.9259 | 3.36 | 4.5416 |  |
| `mlx_drama3_4bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7775 | 3.5025 | 5.6478 |  |
| `mlx_drama3_4bit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7505 | 3.4673 | 5.0329 |  |
| `mlx_drama3_4bit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.2222 | 0.8474 | 3.0 | 4.8955 |  |
| `mlx_drama3_4bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7067 | 3.4296 | 4.4654 |  |
| `mlx_drama3_4bit` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7847 | 3.3473 | 4.5123 |  |
| `mlx_drama3_4bit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 2.8878 | 8.079 |  |
| `mlx_drama3_4bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0385 | 0.8541 | 4.4499 | 4.1306 |  |
| `mlx_drama3_4bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.802 | 3.0761 | 4.8293 |  |
| `mlx_drama3_4bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6844 | 4.5268 | 4.1201 |  |
| `mlx_drama3_4bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.8436 | 4.1981 | 4.7382 |  |
| `mlx_drama3_4bit` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6212 | 4.2571 | 3.4526 |  |
| `mlx_drama3_4bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7336 | 4.2514 | 4.4485 |  |
| `mlx_drama3_4bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7032 | 4.2397 | 6.9833 |  |
| `mlx_drama3_4bit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7226 | 3.7303 | 6.8621 |  |
| `mlx_drama3_4bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8714 | 3.7713 | 4.0135 |  |
| `mlx_drama3_4bit` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7618 | 3.1589 | 5.8885 |  |
| `mlx_drama3_4bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7646 | 3.0651 | 4.1528 |  |
| `mlx_drama3_4bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.854 | 4.078 | 4.665 |  |
| `mlx_ming3_0_5b_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.1143 |  | 3.8853 | 0.4198 |  |
| `mlx_ming3_0_5b_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4626 | 0.3675 |  |
| `mlx_ming3_0_5b_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.9511 | 0.4288 |  |
| `mlx_ming3_0_5b_8bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.1562 |  | 3.7411 | 0.4016 |  |
| `mlx_ming3_0_5b_8bit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7244 | 0.4312 |  |
| `mlx_ming3_0_5b_8bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.5667 |  | 3.1335 | 0.4403 |  |
| `mlx_ming3_0_5b_8bit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.2273 |  | 3.743 | 0.3945 |  |
| `mlx_ming3_0_5b_8bit` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8915 | 0.4425 |  |
| `mlx_ming3_0_5b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8733 | 4.1304 | 0.518 |  |
| `mlx_ming3_0_5b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7946 | 3.2916 | 0.4991 |  |
| `mlx_ming3_0_5b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6306 | 4.056 | 0.5024 |  |
| `mlx_ming3_0_5b_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5507 | 0.4666 |  |
| `mlx_ming3_0_5b_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9498 | 0.4194 |  |
| `mlx_ming3_0_5b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.0 | 4.3619 | 0.5176 |  |
| `mlx_ming3_0_5b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.08 |  | 3.8501 | 0.4398 |  |
| `mlx_ming3_0_5b_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8363 | 0.4699 |  |
| `mlx_ming3_0_5b_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.225 | 0.4424 |  |
| `mlx_ming3_0_5b_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6526 | 0.4339 |  |
| `mlx_ming3_0_5b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5469 | 1.0616 |  |
| `mlx_ming3_0_5b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.1069 |  | 4.4155 | 0.4185 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 1.5429 |  | 3.2198 | 1.0998 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0189 |  | 4.5051 | 1.2402 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0857 |  | 3.7743 | 1.3712 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.125 |  | 3.4954 | 1.376 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0714 | 1.5542 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2116 | 1.2754 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0455 |  | 2.6519 | 1.5348 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6631 | 1.3553 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.9744 |  | 1.5494 | 26.5518 | sim:insufficient voiced audio: 0.160s < 0.750s (/Users/vanch/tts-test-project/results/generated/20261021_231459/mlx_ming3_tiny_7_9b_8bit/clone_en_same.wav) |
| `mlx_ming3_tiny_7_9b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8564 | 3.0104 | 1.7576 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.963 |  | 2.5861 | 19.8499 | sim:insufficient voiced audio: 0.200s < 0.750s (/Users/vanch/tts-test-project/results/generated/20261021_231459/mlx_ming3_tiny_7_9b_8bit/clone_3s_en.wav) |
| `mlx_ming3_tiny_7_9b_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2182 | 1.4259 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0898 | 1.3244 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.0128 | 4.1885 | 1.4703 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4155 | 1.2861 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1536 | 1.8012 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0921 | 1.3262 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.16 | 1.4417 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.7749 | 1.2452 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4417 | 1.2866 |  |
| `mlx_voxmel_0_6b_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0909 |  |  | 0.8414 |  |
| `mlx_voxmel_0_6b_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8402 |  |
| `mlx_voxmel_0_6b_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.2286 |  |  | 0.8291 |  |
| `mlx_voxmel_0_6b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8952 |  |
| `mlx_voxmel_0_6b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8941 |  |
| `mlx_voxmel_0_6b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0494 |  |  | 0.8537 |  |
| `mlx_voxmel_0_6b_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 1.8 |  |  | 0.8623 |  |
| `mlx_voxmel_0_6b_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9262 |  |
| `mlx_voxmel_0_6b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.1429 |  |  | 1.0608 |  |
| `mlx_voxmel_0_6b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9542 |  |
| `mlx_voxmel_0_6b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9215 |  |
| `mlx_voxmel_0_6b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9767 |  |
| `mlx_higgs_audio_v3_4b` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6236 | 0.8779 |  |
| `mlx_higgs_audio_v3_4b` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6569 | 0.7418 |  |
| `mlx_higgs_audio_v3_4b` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.599 | 0.739 |  |
| `mlx_higgs_audio_v3_4b` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.031 | 0.7204 |  |
| `mlx_higgs_audio_v3_4b` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.1739 |  | 2.9203 | 0.7405 |  |
| `mlx_pocket_tts_8bit` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2239 | 0.574 |  |
| `mlx_pocket_tts_8bit` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.1222 |  | 2.5891 | 0.3318 |  |
| `mlx_pocket_tts_8bit` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.2394 |  | 4.3976 | 0.0988 |  |
| `mlx_audio8_tts_8bit` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9777 | 1.5031 |  |
| `mlx_audio8_tts_8bit` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0326 |  | 3.7459 | 1.3777 |  |
| `mlx_audio8_tts_8bit` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.012 |  | 3.6792 | 1.4254 |  |
| `mlx_voxcpm2_bf16_dit` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3121 | 0.9714 |  |
| `mlx_voxcpm2_bf16_dit` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2795 | 0.7282 |  |
| `mlx_voxcpm2_bf16_dit` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2827 | 0.726 |  |
| `mlx_voxcpm2_bf16_dit` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.1373 | 0.7001 |  |
| `mlx_voxcpm2_bf16_dit` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9704 | 0.7248 |  |
| `mlx_voxcpm2_bf16_dit` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.4123 | 0.7459 |  |
| `mlx_voxcpm2_bf16_dit` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8706 | 0.7478 |  |
| `mlx_voxcpm2_bf16_dit` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6092 | 0.7184 |  |
| `mlx_voxcpm2_bf16_dit` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.769 | 0.7069 |  |
| `mlx_voxcpm2_bf16_dit` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.0133 |  | 3.4786 | 0.7291 |  |
| `mlx_voxcpm2_bf16_dit` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.654 | 0.7129 |  |
| `mlx_voxcpm2_bf16_dit` | ml no reading (ml_no_reading) | success | mlx_whisper | 0.0 |  | 3.1851 | 0.7107 |  |
| `mlx_voxcpm2_bf16_dit` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.15 |  | 3.6577 | 0.7265 |  |
| `mlx_voxcpm2_bf16_dit` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.0 |  | 3.0144 | 0.7534 |  |
| `mlx_voxcpm2_bf16_dit` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.0204 |  | 3.3143 | 0.714 |  |
| `mlx_voxcpm2_bf16_dit` | ml fil reading (ml_fil_reading) | success | qwen3_asr_1_7b_8bit | 0.02 |  | 3.1431 | 0.696 |  |
| `mlx_voxcpm2_bf16_dit` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.0435 |  | 2.5892 | 0.711 |  |
| `mlx_omnivoice_8bit_trim60` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6989 | 0.4264 |  |
| `mlx_omnivoice_8bit_trim60` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0111 |  | 3.5718 | 0.3033 |  |
| `mlx_omnivoice_8bit_trim60` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5799 | 0.3136 |  |
| `mlx_omnivoice_8bit_trim60` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0171 | 0.321 |  |
| `mlx_omnivoice_8bit_trim60` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1109 | 0.32 |  |
| `mlx_omnivoice_8bit_trim60` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.4927 | 0.3199 |  |
| `mlx_omnivoice_8bit_trim60` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.0306 |  | 3.1856 | 0.3234 |  |
| `mlx_omnivoice_8bit_trim60` | ml fil reading (ml_fil_reading) | success | qwen3_asr_1_7b_8bit | 0.4 |  | 3.5791 | 0.3436 |  |
| `mlx_omnivoice_8bit_trim60` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.0435 |  | 3.0486 | 0.3314 |  |
| `mlx_supertonic3_mlx` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8007 | 0.0666 |  |
| `mlx_supertonic3_mlx` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6023 | 0.0433 |  |
| `mlx_supertonic3_mlx` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3558 | 0.0483 |  |
| `mlx_supertonic3_mlx` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8939 | 0.0457 |  |
| `mlx_supertonic3_mlx` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 4.1722 | 0.056 |  |
| `mlx_supertonic3_mlx` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4271 | 0.054 |  |
| `mlx_supertonic3_mlx` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0708 | 0.0499 |  |
| `mlx_supertonic3_mlx` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7971 | 0.0626 |  |
| `mlx_supertonic3_mlx` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.0133 |  | 3.9018 | 0.064 |  |
| `mlx_supertonic3_mlx` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0244 |  | 3.7434 | 0.0493 |  |
| `mlx_supertonic3_mlx` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8914 | 0.0591 |  |
| `mlx_supertonic3_mlx` | ml sk reading (ml_sk_reading) | success | mlx_whisper | 0.0 |  | 3.9154 | 0.0569 |  |
| `mlx_supertonic3_mlx` | ml sl reading (ml_sl_reading) | success | mlx_whisper | 0.0 |  | 4.0105 | 0.0458 |  |
| `mlx_supertonic3_mlx` | ml hr reading (ml_hr_reading) | success | mlx_whisper | 0.0 |  | 4.0798 | 0.0438 |  |
| `mlx_supertonic3_mlx` | ml hu reading (ml_hu_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2726 | 0.0524 |  |
| `mlx_supertonic3_mlx` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0222 |  | 4.2531 | 0.047 |  |
| `mlx_supertonic3_mlx` | ml bg reading (ml_bg_reading) | success | mlx_whisper | 0.0132 |  | 4.0129 | 0.0489 |  |
| `mlx_supertonic3_mlx` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.01 |  | 3.707 | 0.058 |  |
| `mlx_supertonic3_mlx` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 |  | 3.5333 | 0.045 |  |
| `mlx_supertonic3_mlx` | ml lt reading (ml_lt_reading) | success | mlx_whisper | 0.0114 |  | 4.0497 | 0.0404 |  |
| `mlx_supertonic3_mlx` | ml lv reading (ml_lv_reading) | success | mlx_whisper | 0.0 |  | 4.2335 | 0.0469 |  |
| `mlx_supertonic3_mlx` | ml et reading (ml_et_reading) | success | mlx_whisper | 0.0123 |  | 4.0702 | 0.0476 |  |
| `mlx_dots_tts_full_int8_g64` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7837 | 1.2687 |  |
| `mlx_dots_tts_full_int8_g64` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5379 | 0.6823 |  |
| `mlx_dots_tts_full_int8_g64` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1949 | 0.6976 |  |
| `mlx_dots_tts_full_int8_g64` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2065 | 0.7366 |  |
| `mlx_dots_tts_full_int8_g64` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6031 | 0.7033 |  |
| `mlx_dots_tts_full_int8_g64` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.4727 | 0.6969 |  |
| `mlx_dots_tts_full_int8_g64` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2558 | 0.6963 |  |
| `mlx_dots_tts_full_int8_g64` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0034 | 0.7035 |  |
| `mlx_dots_tts_full_int8_g64` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7332 | 0.6849 |  |
| `mlx_dots_tts_full_int8_g64` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0282 |  | 3.7139 | 0.688 |  |
| `mlx_dots_tts_full_int8_g64` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0222 |  | 3.3296 | 0.6913 |  |
| `mlx_dots_tts_full_int8_g64` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.01 |  | 1.9701 | 0.7321 |  |
| `mlx_dots_tts_full_int8_g64` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 |  | 2.9465 | 0.7001 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2883 | 0.8554 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2964 | 1.5429 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8442 | 1.4992 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.9867 |  | 3.7509 | 1.5349 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.7248 | 1.479 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0326 |  | 3.1941 | 1.4571 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8045 | 1.4822 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.705 | 1.4432 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.04 |  | 3.8136 | 1.4006 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.3537 |  | 3.1998 | 1.6169 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4894 | 1.526 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml hu reading (ml_hu_reading) | success | qwen3_asr_1_7b_8bit | 0.1139 |  | 3.7527 | 1.4762 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0222 |  | 3.681 | 1.4514 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.03 |  | 3.4122 | 1.5644 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml mk reading (ml_mk_reading) | success | qwen3_asr_1_7b_8bit | 0.0723 |  | 3.3106 | 1.4476 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml fa reading (ml_fa_reading) | success | qwen3_asr_1_7b_8bit | 0.2 |  | 3.5066 | 1.3949 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.1639 |  | 3.4297 | 1.5061 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.0714 |  | 3.5349 | 1.4751 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.0761 |  | 3.1648 | 1.5029 |  |
| `mlx_qwen3_tts_official_int8` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1501 | 0.8231 |  |
| `mlx_qwen3_tts_official_int8` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7105 | 0.7494 |  |
| `mlx_qwen3_tts_official_int8` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4773 | 0.8243 |  |
| `mlx_zonos2_bf16` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6797 | 2.5205 |  |
| `mlx_zonos2_bf16` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7573 | 1.9227 |  |
| `mlx_zonos2_bf16` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7992 | 2.0053 |  |
| `mlx_zonos2_bf16` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5148 | 2.213 |  |
| `mlx_zonos2_bf16` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8125 | 2.21 |  |
| `mlx_zonos2_bf16` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9718 | 2.3256 |  |
| `mlx_zonos2_bf16` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0241 |  | 2.4588 | 2.2728 |  |
| `mlx_zonos2_bf16` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.0625 |  | 3.1775 | 2.6988 |  |
| `mlx_zonos2_bf16` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.04 |  | 2.5836 | 3.1662 |  |
| `mlx_zonos2_bf16` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.1463 |  | 1.305 | 2.8699 |  |
| `mlx_zonos2_bf16` | ml no reading (ml_no_reading) | success | mlx_whisper | 0.0 |  | 2.4654 | 2.6993 |  |
| `mlx_zonos2_bf16` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 |  | 2.6738 | 2.7332 |  |
| `mlx_zonos2_bf16` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.0164 |  | 3.1547 | 2.3806 |  |
| `mlx_zonos2_bf16` | ml ta reading (ml_ta_reading) | success | mlx_whisper | 0.061 |  | 3.3615 | 2.5044 |  |
| `mlx_zonos2_bf16` | ml te reading (ml_te_reading) | success | mlx_whisper | 0.1618 |  | 3.0149 | 2.3089 |  |

## 本地 TTS 覆盖状态

- Inventory CSV：`/Users/vanch/tts-test-project/reports/local_open_tts_inventory.csv`

| 模型 | 状态 | 路径 |
|---|---|---|
| `mlx_indextts2_v25_8bit` | scored | `/Users/vanch/mlx-indextts2` |
| `mlx_indextts2_vietnamese_8bit` | scored | `/Users/vanch/mlx-indextts2` |
| `mlx_voxcpm2_bf16_dit` | scored | `/Users/vanch/mlx-voxcpm2` |
| `mlx_qwen3_tts_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_voice_design_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_custom_voice_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_omnivoice_8bit_trim60` | scored | `/Users/vanch/mlx-omnivoice` |
| `mlx_dots_tts_full_int8_g64` | scored | `/Users/vanch/mlx-dots.tts` |
| `mlx_higgs_audio_v3_4b` | scored | `/Users/vanch/mlx-higgs-audio` |
| `mlx_scenema_audio_int8_mlx_mps_service` | scored | `/Users/vanch/mlx-scenema-audio` |
| `mlx_supertonic3_mlx` | scored | `/Users/vanch/mlx-supertonic` |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | scored | `/Users/vanch/mlx-Ming-omni-tts` |
| `mlx_ming3_tiny_7_9b_8bit` | scored | `/Users/vanch/mlx-Ming-3.0-tts` |
| `mlx_ming3_0_5b_8bit` | scored | `/Users/vanch/mlx-Ming-3.0-tts` |
| `mlx_zonos2_bf16` | scored | `/Users/vanch/mlx-ZONOS2` |
| `mlx_moss_tts_local_transformer_v1_5` | scored | `/Users/vanch/mlx-MOSS-TTS-Local-Transformer-v1.5` |
| `mlx_fireredaudio_8bit` | scored | `/Users/vanch/mlx-FireRedAudio` |
| `mlx_breeze_tts2_8bit` | scored | `/Users/vanch/mlx-breeze-tts2` |
| `mlx_pocket_tts_8bit` | scored | `/Users/vanch/mlx-pocket-tts` |
| `mlx_audio8_tts_8bit` | scored | `/Users/vanch/mlx-audio8-tts` |
| `mlx_drama3_4bit` | scored | `/Users/vanch/drama-3-mlx` |
| `mlx_voxmel_0_6b_8bit` | scored | `/Users/vanch/mlx-voxmel` |
| `mlx_audio_multi_model` | toolkit_not_single_model | `/Users/vanch/mlx-audio` |
| `cloudflare_edge_tts` | excluded_not_open_source_model | `/Users/vanch/cloudflare-edge-tts` |
| `speech_to_speech` | excluded_pipeline_wrapper | `/Users/vanch/speech-to-speech` |

## 结论

- `coverage_pct >= 80` 才进入正式排名准备态；低覆盖样本仍保留用于定位缺失指标。
- 失败项目或缺指标项目不会被伪造成完整分数，阻塞原因写在 `adapter_status` 和 `metric_failures`。
- 结果面板可用 `python scripts/render_dashboard.py --run-id <id>` 生成中文静态音频面板。
