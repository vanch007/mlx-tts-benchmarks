# mlx-tts-benchmark - 汇总报表

- Run ID：`v02_plus_vieneu_lux_scenema_20260610_091619`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/v02_plus_vieneu_lux_scenema_20260610_091619/metrics.csv`。
- 标准：`configs/capability_radar_research_zh.json`，9 项研究版 TTS 能力雷达评分；逐样本客观指标仍保留在 metrics/scored CSV。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。
- 已从主评分隐藏 73 条能力边界外、诊断或专项记录；这些项目不进入主榜和样本摘要，边界内专项可在试听页按层级查看。

## 榜单

| 排名 | 项目 | 评分样本数 | 质量分 | 全能分 | 广度 | 能力覆盖率 | 内容准确与可懂度 | 自然度与音频质量 | 多语种能力 | 方言能力 | 音色克隆与鲁棒性 | 情绪、风格与韵律控制 | 复杂文本与副语言能力 | 短段落连续性（分钟级长文待测） | RTF 生成效率 | 可排名 |
|---:|---|---:|---:|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_qwen3_tts` | 37 | 89.74 | 87.306 | 8/9 | 100.0 | 96.754 | 83.636 | 90.31 | 95.0 | 88.008 | 92.389 | 0.0 | 95.392 | 68.687 | no |
| 2 | `mlx_audio8_air` | 44 | 88.367 | 73.692 | 7/9 | 100.0 | 96.604 | 83.646 | 86.163 | 75.002 | 73.42 | 0.0 | 0.0 | 95.737 | 42.701 | no |
| 3 | `mlx_breeze_tts2` | 23 | 87.611 | 73.536 | 7/9 | 100.0 | 94.3 | 81.233 | 0.0 | 0.0 | 81.881 | 91.514 | 94.188 | 95.0 | 48.095 | no |
| 4 | `mlx_higgs_audio` | 75 | 87.499 | 81.285 | 8/9 | 100.0 | 93.228 | 80.056 | 84.719 | 0.0 | 68.581 | 91.159 | 90.342 | 93.577 | 67.861 | no |
| 5 | `mlx_drama3` | 32 | 86.448 | 80.738 | 9/9 | 94.881 | 95.107 | 83.692 | 57.069 | 95.0 | 69.85 | 95.161 | 93.519 | 93.09 | 0.0 | no |
| 6 | `mlx_moss_tts` | 54 | 86.329 | 81.415 | 9/9 | 100.0 | 96.657 | 83.388 | 78.063 | 95.0 | 68.311 | 61.955 | 96.342 | 95.198 | 40.962 | no |
| 7 | `mlx_confucius4_tts` | 29 | 86.163 | 78.857 | 7/9 | 100.0 | 94.873 | 74.996 | 87.868 | 0.0 | 77.63 | 89.816 | 0.0 | 91.805 | 44.223 | no |
| 8 | `mlx_cosyvoice3` | 35 | 86.154 | 78.561 | 7/9 | 100.0 | 84.782 | 80.929 | 92.369 | 0.0 | 77.495 | 94.029 | 0.0 | 94.583 | 39.011 | no |
| 9 | `mlx_zonos3` | 60 | 86.132 | 77.018 | 7/9 | 100.0 | 89.18 | 78.729 | 81.356 | 0.0 | 62.912 | 92.297 | 0.0 | 94.368 | 99.886 | no |
| 10 | `mlx_omnivoice` | 71 | 84.82 | 80.027 | 9/9 | 100.0 | 94.494 | 63.713 | 75.773 | 92.02 | 71.453 | 89.007 | 93.739 | 87.01 | 77.439 | no |
| 11 | `mlx_indextts2.5` | 32 | 83.783 | 77.012 | 7/9 | 100.0 | 88.288 | 77.527 | 86.203 | 0.0 | 77.402 | 86.681 | 0.0 | 92.806 | 35.78 | no |
| 12 | `mlx_voxcpm2` | 64 | 83.246 | 80.898 | 9/9 | 100.0 | 91.097 | 73.219 | 84.421 | 87.882 | 64.839 | 91.922 | 84.549 | 93.869 | 60.115 | no |
| 13 | `mlx_ming3_0.5b` | 32 | 81.44 | 81.44 | 9/9 | 100.0 | 90.301 | 79.097 | 71.029 | 24.243 | 77.82 | 92.339 | 88.694 | 89.483 | 87.138 | no |
| 14 | `mlx_ming3_tiny_7.9b` | 32 | 81.154 | 81.154 | 9/9 | 100.0 | 86.651 | 75.97 | 82.084 | 47.871 | 81.077 | 91.872 | 92.707 | 94.055 | 34.587 | no |
| 15 | `mlx_dots_tts` | 48 | 80.777 | 76.442 | 8/9 | 100.0 | 87.442 | 65.861 | 85.377 | 79.181 | 70.412 | 90.786 | 0.0 | 90.211 | 63.735 | no |
| 16 | `mlx_fireredtts3` | 46 | 79.404 | 67.978 | 7/9 | 100.0 | 96.15 | 77.489 | 66.246 | 42.495 | 66.861 | 0.0 | 0.0 | 92.656 | 55.658 | no |
| 17 | `mlx_drama3_ja` | 42 | 60.779 | 60.778 | 9/9 | 100.0 | 59.393 | 81.458 | 35.546 | 19.09 | 47.878 | 84.363 | 93.75 | 75.645 | 0.0 | no |
| 18 | `mlx_indextts2_vietnamese` | 16 | 57.12 | 54.079 | 7/9 | 100.0 | 29.93 | 76.502 | 95.0 | 0.0 | 44.827 | 67.781 | 0.0 | 70.418 | 14.877 | no |
| 19 | `mlx_supertonic` | 38 | 94.387 | 65.736 | 6/9 | 100.0 | 97.034 | 90.486 | 91.021 | 0.0 | 0.0 | 0.0 | 94.353 | 96.348 | 100.0 | no |
| 20 | `mlx_kitten_tts2_mini` | 22 | 94.123 | 62.105 | 5/9 | 100.0 | 98.06 | 89.754 | 86.075 | 0.0 | 0.0 | 0.0 | 0.0 | 97.167 | 88.557 | no |
| 21 | `mlx_kitten_tts2_nano` | 14 | 93.44 | 62.279 | 5/9 | 100.0 | 97.78 | 89.466 | 89.629 | 0.0 | 0.0 | 0.0 | 0.0 | 97.183 | 84.561 | no |
| 22 | `mlx_reverb` | 18 | 92.533 | 75.852 | 6/9 | 100.0 | 97.972 | 90.614 | 95.587 | 0.0 | 74.589 | 0.0 | 0.0 | 97.454 | 80.029 | no |
| 23 | `mlx_kitten_tts2_pico` | 14 | 90.411 | 59.912 | 5/9 | 100.0 | 96.345 | 83.894 | 84.607 | 0.0 | 0.0 | 0.0 | 0.0 | 95.871 | 80.763 | no |
| 24 | `mlx_kokoro` | 20 | 87.235 | 58.05 | 5/9 | 100.0 | 85.916 | 83.38 | 90.525 | 0.0 | 0.0 | 0.0 | 0.0 | 95.671 | 86.024 | no |
| 25 | `mlx_pocket_tts_v4` | 18 | 86.946 | 71.283 | 6/9 | 100.0 | 95.323 | 87.22 | 90.293 | 0.0 | 56.523 | 0.0 | 0.0 | 96.405 | 100.0 | no |
| 26 | `mlx_fireredaudio` | 22 | 85.773 | 69.354 | 6/9 | 100.0 | 93.313 | 78.679 | 0.0 | 0.0 | 80.541 | 94.289 | 0.0 | 93.629 | 30.455 | no |
| 27 | `mlx_voxmel` | 20 | 75.437 | 52.722 | 5/9 | 100.0 | 78.509 | 74.982 | 0.0 | 0.0 | 62.242 | 0.0 | 0.0 | 92.594 | 46.259 | no |
| 28 | `mlx_voxmel_03b` | 20 | 70.644 | 49.183 | 5/9 | 100.0 | 71.606 | 74.153 | 0.0 | 0.0 | 55.407 | 0.0 | 0.0 | 89.572 | 35.653 | no |

## 样本摘要

| 项目/模型 | 测试项 | 状态 | ASR | CER | SIM | UTMOS | RTF | 失败原因 |
|---|---|---|---|---:|---:|---:|---:|---|
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
| `mlx_moss_tts_local_transformer_v1_5` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8815 | 4.0196 | 1.9375 |  |
| `mlx_higgs_audio_v3_4b` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.853 | 4.4506 | 1.2564 |  |
| `mlx_higgs_audio_v3_4b` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.1667 | 0.7482 | 1.3938 | 1.8694 |  |
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
| `mlx_ming3_0_5b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8732 | 4.1304 | 0.7734 |  |
| `mlx_ming3_0_5b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7856 | 3.196 | 0.8931 |  |
| `mlx_ming3_0_5b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7576 | 4.2313 | 0.7047 |  |
| `mlx_ming3_0_5b_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5507 | 0.4666 |  |
| `mlx_ming3_0_5b_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9498 | 0.4194 |  |
| `mlx_ming3_0_5b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5996 | 4.2854 | 0.7009 |  |
| `mlx_ming3_0_5b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.08 |  | 3.8501 | 0.4398 |  |
| `mlx_ming3_0_5b_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8363 | 0.4699 |  |
| `mlx_ming3_0_5b_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.225 | 0.4424 |  |
| `mlx_ming3_0_5b_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6526 | 0.4339 |  |
| `mlx_ming3_0_5b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5469 | 1.0616 |  |
| `mlx_ming3_0_5b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.1069 |  | 4.4155 | 0.4185 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0571 |  | 3.3409 | 1.0664 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0189 |  | 4.3024 | 0.994 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 2.9615 | 1.042 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.1562 |  | 3.1283 | 1.1137 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2494 | 1.0737 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0956 | 1.1629 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1483 | 1.0977 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6952 | 1.1742 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8387 | 3.9287 | 1.1787 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8242 | 2.9063 | 1.0975 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7876 | 4.3359 | 1.1757 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0471 |  | 4.0285 | 1.1939 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6483 | 1.1254 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7595 | 4.0109 | 1.1289 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.065 |  | 4.1449 | 1.4203 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0483 | 1.4055 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7115 | 1.1344 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 1.5499 | 1.3089 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9711 | 1.1394 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4794 | 1.2504 |  |
| `mlx_voxmel_0_6b_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0909 |  | 2.5469 | 0.8414 |  |
| `mlx_voxmel_0_6b_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0359 | 0.8402 |  |
| `mlx_voxmel_0_6b_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.2286 |  | 2.5294 | 0.8291 |  |
| `mlx_voxmel_0_6b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6975 | 0.8952 |  |
| `mlx_voxmel_0_6b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4378 | 0.8941 |  |
| `mlx_voxmel_0_6b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0494 |  | 3.9455 | 0.8537 |  |
| `mlx_voxmel_0_6b_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 1.8 |  | 1.2465 | 0.8623 |  |
| `mlx_voxmel_0_6b_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.548 | 0.9262 |  |
| `mlx_voxmel_0_6b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.1429 |  | 1.4757 | 1.0608 |  |
| `mlx_voxmel_0_6b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1567 | 0.9542 |  |
| `mlx_voxmel_0_6b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.1821 | 0.9215 |  |
| `mlx_voxmel_0_6b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9004 | 0.9767 |  |
| `mlx_higgs_audio_v3_4b` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6236 | 0.8779 |  |
| `mlx_higgs_audio_v3_4b` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6569 | 0.7418 |  |
| `mlx_higgs_audio_v3_4b` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.599 | 0.739 |  |
| `mlx_higgs_audio_v3_4b` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.031 | 0.7204 |  |
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
| `mlx_moss_tts_local_transformer_v1_5` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.7248 | 1.479 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0326 |  | 3.1941 | 1.4571 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8045 | 1.4822 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.705 | 1.4432 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.04 |  | 3.8136 | 1.4006 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4894 | 1.526 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml hu reading (ml_hu_reading) | success | qwen3_asr_1_7b_8bit | 0.1139 |  | 3.7527 | 1.4762 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0222 |  | 3.681 | 1.4514 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml mk reading (ml_mk_reading) | success | qwen3_asr_1_7b_8bit | 0.0723 |  | 3.3106 | 1.4476 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml fa reading (ml_fa_reading) | success | qwen3_asr_1_7b_8bit | 0.2 |  | 3.5066 | 1.3949 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.0714 |  | 3.5349 | 1.4751 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.0761 |  | 3.1648 | 1.5029 |  |
| `mlx_qwen3_tts_official_int8` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1501 | 0.8231 |  |
| `mlx_qwen3_tts_official_int8` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7105 | 0.7494 |  |
| `mlx_qwen3_tts_official_int8` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4773 | 0.8243 |  |
| `mlx_higgs_audio_v3_4b` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0217 |  | 3.5575 | 0.6651 |  |
| `mlx_higgs_audio_v3_4b` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.05 |  | 3.7406 | 0.6717 |  |
| `mlx_higgs_audio_v3_4b` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.0133 |  | 3.2983 | 0.6484 |  |
| `mlx_higgs_audio_v3_4b` | ml no reading (ml_no_reading) | success | mlx_whisper | 0.0 |  | 3.7793 | 0.6399 |  |
| `mlx_higgs_audio_v3_4b` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8922 | 0.6326 |  |
| `mlx_higgs_audio_v3_4b` | ml sk reading (ml_sk_reading) | success | mlx_whisper | 0.0 |  | 3.9642 | 0.6286 |  |
| `mlx_higgs_audio_v3_4b` | ml sl reading (ml_sl_reading) | success | mlx_whisper | 0.0 |  | 3.7123 | 0.6493 |  |
| `mlx_higgs_audio_v3_4b` | ml hr reading (ml_hr_reading) | success | mlx_whisper | 0.0 |  | 4.1814 | 0.6454 |  |
| `mlx_higgs_audio_v3_4b` | ml hu reading (ml_hu_reading) | success | qwen3_asr_1_7b_8bit | 0.0886 |  | 4.1656 | 0.6462 |  |
| `mlx_higgs_audio_v3_4b` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0222 |  | 4.0699 | 0.6383 |  |
| `mlx_higgs_audio_v3_4b` | ml bg reading (ml_bg_reading) | success | mlx_whisper | 0.0132 |  | 3.7418 | 0.6483 |  |
| `mlx_higgs_audio_v3_4b` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.1 |  | 3.7424 | 0.6417 |  |
| `mlx_higgs_audio_v3_4b` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 |  | 3.4372 | 0.6704 |  |
| `mlx_higgs_audio_v3_4b` | ml lt reading (ml_lt_reading) | success | mlx_whisper | 0.0114 |  | 3.6852 | 0.6582 |  |
| `mlx_higgs_audio_v3_4b` | ml lv reading (ml_lv_reading) | success | mlx_whisper | 0.0 |  | 3.8232 | 0.6236 |  |
| `mlx_higgs_audio_v3_4b` | ml et reading (ml_et_reading) | success | mlx_whisper | 0.0 |  | 4.1566 | 0.6292 |  |
| `mlx_higgs_audio_v3_4b` | ml mk reading (ml_mk_reading) | success | qwen3_asr_1_7b_8bit | 0.012 |  | 3.1418 | 0.6391 |  |
| `mlx_higgs_audio_v3_4b` | ml fil reading (ml_fil_reading) | success | qwen3_asr_1_7b_8bit | 0.03 |  | 3.9205 | 0.6383 |  |
| `mlx_omnivoice_8bit_trim60` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.9792 |  | 1.5447 | 9.4112 |  |
| `mlx_omnivoice_8bit_trim60` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9041 | 0.2966 |  |
| `mlx_omnivoice_8bit_trim60` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5849 | 0.2918 |  |
| `mlx_omnivoice_8bit_trim60` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3566 | 0.3054 |  |
| `mlx_omnivoice_8bit_trim60` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.0533 |  | 3.5213 | 0.3123 |  |
| `mlx_omnivoice_8bit_trim60` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0244 |  | 3.6793 | 0.3268 |  |
| `mlx_omnivoice_8bit_trim60` | ml no reading (ml_no_reading) | success | mlx_whisper | 0.0 |  | 3.6482 | 0.3179 |  |
| `mlx_omnivoice_8bit_trim60` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2881 | 0.3347 |  |
| `mlx_omnivoice_8bit_trim60` | ml sk reading (ml_sk_reading) | success | mlx_whisper | 0.0 |  | 3.5884 | 0.3289 |  |
| `mlx_omnivoice_8bit_trim60` | ml sl reading (ml_sl_reading) | success | mlx_whisper | 0.0123 |  | 3.4652 | 0.5669 |  |
| `mlx_omnivoice_8bit_trim60` | ml hr reading (ml_hr_reading) | success | mlx_whisper | 0.0127 |  | 3.4548 | 0.5605 |  |
| `mlx_omnivoice_8bit_trim60` | ml hu reading (ml_hu_reading) | success | qwen3_asr_1_7b_8bit | 0.0127 |  | 2.6672 | 0.528 |  |
| `mlx_omnivoice_8bit_trim60` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0111 |  | 3.133 | 0.5751 |  |
| `mlx_omnivoice_8bit_trim60` | ml bg reading (ml_bg_reading) | success | mlx_whisper | 0.0 |  | 2.9907 | 0.8231 |  |
| `mlx_omnivoice_8bit_trim60` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.14 |  | 3.7232 | 0.849 |  |
| `mlx_omnivoice_8bit_trim60` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 |  | 3.1929 | 0.6728 |  |
| `mlx_omnivoice_8bit_trim60` | ml lt reading (ml_lt_reading) | success | mlx_whisper | 0.0341 |  | 3.1056 | 0.5743 |  |
| `mlx_omnivoice_8bit_trim60` | ml lv reading (ml_lv_reading) | success | mlx_whisper | 0.0247 |  | 3.8505 | 0.7606 |  |
| `mlx_omnivoice_8bit_trim60` | ml et reading (ml_et_reading) | success | mlx_whisper | 0.0123 |  | 3.5992 | 0.7836 |  |
| `mlx_omnivoice_8bit_trim60` | ml mk reading (ml_mk_reading) | success | qwen3_asr_1_7b_8bit | 0.012 |  | 2.9149 | 0.6186 |  |
| `mlx_omnivoice_8bit_trim60` | ml fa reading (ml_fa_reading) | success | qwen3_asr_1_7b_8bit | 0.1286 |  | 3.4509 | 0.6858 |  |
| `mlx_omnivoice_8bit_trim60` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.082 |  | 3.0325 | 0.7157 |  |
| `mlx_omnivoice_8bit_trim60` | ml ta reading (ml_ta_reading) | success | mlx_whisper | 0.0244 |  | 3.856 | 0.8373 |  |
| `mlx_omnivoice_8bit_trim60` | ml te reading (ml_te_reading) | success | mlx_whisper | 0.1618 |  | 3.3917 | 0.9386 |  |
| `mlx_higgs_audio_v3_4b` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3573 | 0.6807 |  |
| `mlx_higgs_audio_v3_4b` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1791 | 0.6757 |  |
| `mlx_higgs_audio_v3_4b` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9741 | 0.6447 |  |
| `mlx_higgs_audio_v3_4b` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2081 | 0.6806 |  |
| `mlx_higgs_audio_v3_4b` | ml fa reading (ml_fa_reading) | success | qwen3_asr_1_7b_8bit | 0.0571 |  | 2.946 | 0.6636 |  |
| `mlx_higgs_audio_v3_4b` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.0 |  | 3.7234 | 0.667 |  |
| `mlx_higgs_audio_v3_4b` | ml ta reading (ml_ta_reading) | success | mlx_whisper | 0.0244 |  | 4.3428 | 0.6737 |  |
| `mlx_higgs_audio_v3_4b` | ml te reading (ml_te_reading) | success | mlx_whisper | 0.1029 |  | 4.0649 | 0.672 |  |
| `mlx_higgs_audio_v3_4b` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.051 |  | 3.111 | 0.6459 |  |
| `mlx_higgs_audio_v3_4b` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.0652 |  | 3.037 | 0.6474 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0122 |  | 3.0335 | 1.6213 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.03 |  | 3.3878 | 1.6081 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.0 |  | 3.4853 | 1.5864 |  |
| `mlx_indextts2_v25_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7534 | 1.2207 |  |
| `mlx_indextts2_v25_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3613 | 0.9245 |  |
| `mlx_indextts2_v25_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6288 | 0.9844 |  |
| `mlx_indextts2_v25_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 1.0 |  | 1.2744 | 0.8427 |  |
| `mlx_indextts2_v25_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.1846 |  | 3.3662 | 1.0795 |  |
| `mlx_indextts2_v25_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3442 | 1.1914 |  |
| `mlx_indextts2_v25_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2598 | 1.3887 |  |
| `mlx_indextts2_v25_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2129 | 1.0548 |  |
| `mlx_voxcpm2_bf16_dit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0541 |  | 3.4319 | 0.6723 |  |
| `mlx_voxcpm2_bf16_dit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4603 | 0.6299 |  |
| `mlx_voxcpm2_bf16_dit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.1212 |  | 2.6091 | 0.6298 |  |
| `mlx_voxcpm2_bf16_dit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9766 | 0.6265 |  |
| `mlx_voxcpm2_bf16_dit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0952 |  | 4.1694 | 0.7237 |  |
| `mlx_voxcpm2_bf16_dit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3369 | 0.7503 |  |
| `mlx_voxcpm2_bf16_dit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2841 | 0.784 |  |
| `mlx_voxcpm2_bf16_dit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3947 | 0.7213 |  |
| `mlx_omnivoice_8bit_trim60` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3993 | 0.3039 |  |
| `mlx_omnivoice_8bit_trim60` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.24 | 0.2873 |  |
| `mlx_omnivoice_8bit_trim60` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4741 | 0.2925 |  |
| `mlx_omnivoice_8bit_trim60` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4877 | 0.2789 |  |
| `mlx_omnivoice_8bit_trim60` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.881 | 0.3047 |  |
| `mlx_omnivoice_8bit_trim60` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0236 | 0.3008 |  |
| `mlx_omnivoice_8bit_trim60` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2523 | 0.3222 |  |
| `mlx_omnivoice_8bit_trim60` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.441 | 0.2903 |  |
| `mlx_dots_tts_full_int8_g64` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.699 | 0.7441 |  |
| `mlx_dots_tts_full_int8_g64` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6217 | 0.6808 |  |
| `mlx_dots_tts_full_int8_g64` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6177 | 0.7 |  |
| `mlx_dots_tts_full_int8_g64` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4194 | 0.7193 |  |
| `mlx_dots_tts_full_int8_g64` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3803 | 0.7166 |  |
| `mlx_dots_tts_full_int8_g64` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2674 | 0.7003 |  |
| `mlx_dots_tts_full_int8_g64` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.1412 | 0.7606 |  |
| `mlx_dots_tts_full_int8_g64` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4006 | 0.6609 |  |
| `mlx_higgs_audio_v3_4b` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9941 | 0.6299 |  |
| `mlx_higgs_audio_v3_4b` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7264 | 0.6377 |  |
| `mlx_higgs_audio_v3_4b` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9412 | 0.6447 |  |
| `mlx_higgs_audio_v3_4b` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2075 | 0.698 |  |
| `mlx_higgs_audio_v3_4b` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4857 | 0.7478 |  |
| `mlx_higgs_audio_v3_4b` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4549 | 0.7018 |  |
| `mlx_higgs_audio_v3_4b` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.282 | 0.7595 |  |
| `mlx_higgs_audio_v3_4b` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5015 | 0.7288 |  |
| `mlx_supertonic3_mlx` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4712 | 0.0579 |  |
| `mlx_supertonic3_mlx` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3474 | 0.0475 |  |
| `mlx_supertonic3_mlx` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4457 | 0.0619 |  |
| `mlx_supertonic3_mlx` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4935 | 0.0447 |  |
| `mlx_ming3_0_5b_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.822 | 0.5502 |  |
| `mlx_ming3_0_5b_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0956 | 0.4545 |  |
| `mlx_ming3_0_5b_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.934 | 0.461 |  |
| `mlx_ming3_0_5b_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.865 | 0.5784 |  |
| `mlx_ming3_0_5b_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4924 | 0.5687 |  |
| `mlx_ming3_0_5b_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0047 | 0.6319 |  |
| `mlx_ming3_0_5b_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4691 | 0.6618 |  |
| `mlx_ming3_0_5b_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4879 | 0.7262 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.027 |  | 4.1921 | 0.781 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1335 | 0.9578 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1113 | 1.0391 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0229 | 0.8698 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4332 | 0.8211 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4402 | 0.9441 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3504 | 0.835 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4743 | 1.0743 |  |
| `mlx_breeze_tts2_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0674 | 1.8701 |  |
| `mlx_breeze_tts2_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.966 | 1.1688 |  |
| `mlx_breeze_tts2_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6816 | 1.2949 |  |
| `mlx_breeze_tts2_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5897 | 1.2398 |  |
| `mlx_breeze_tts2_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5779 | 1.2048 |  |
| `mlx_breeze_tts2_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.524 | 1.2496 |  |
| `mlx_breeze_tts2_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4339 | 1.2763 |  |
| `mlx_breeze_tts2_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.696 | 1.2935 |  |
| `mlx_voxmel_0_6b_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.9722 |  | 2.5095 | 1.528 |  |
| `mlx_voxmel_0_6b_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.0056 | 1.4298 |  |
| `mlx_voxmel_0_6b_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3973 | 1.3589 |  |
| `mlx_voxmel_0_6b_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3014 | 1.264 |  |
| `mlx_voxmel_0_6b_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0991 | 1.3331 |  |
| `mlx_voxmel_0_6b_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.972 | 1.4502 |  |
| `mlx_voxmel_0_6b_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2205 | 1.5059 |  |
| `mlx_voxmel_0_6b_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2608 | 1.3093 |  |
| `mlx_qwen3_tts_official_int8` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9577 | 1.6725 |  |
| `mlx_qwen3_tts_official_int8` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2568 | 1.3961 |  |
| `mlx_qwen3_tts_official_int8` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0298 | 1.1201 |  |
| `mlx_qwen3_tts_official_int8` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9301 | 1.0078 |  |
| `mlx_qwen3_tts_official_int8` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1963 | 1.3053 |  |
| `mlx_qwen3_tts_official_int8` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4262 | 1.2718 |  |
| `mlx_qwen3_tts_official_int8` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2209 | 1.7783 |  |
| `mlx_qwen3_tts_official_int8` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9711 | 1.1516 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6939 | 1.0762 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2867 | 1.1976 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3063 | 1.1529 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0183 | 1.2676 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0923 |  | 4.4733 | 1.4906 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5077 | 1.7209 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4818 | 2.12 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4821 | 1.4719 |  |
| `mlx_fireredaudio_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6679 | 1.3089 |  |
| `mlx_fireredaudio_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7932 | 1.3162 |  |
| `mlx_fireredaudio_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.27 | 1.3081 |  |
| `mlx_fireredaudio_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7643 | 1.2967 |  |
| `mlx_fireredaudio_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6666 | 1.3053 |  |
| `mlx_fireredaudio_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6953 | 1.3075 |  |
| `mlx_fireredaudio_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6669 | 1.3213 |  |
| `mlx_fireredaudio_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5455 | 1.3067 |  |
| `mlx_drama3_4bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4929 | 4.3996 |  |
| `mlx_drama3_4bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.479 | 3.9553 |  |
| `mlx_drama3_4bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6321 | 3.6004 |  |
| `mlx_drama3_4bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7184 | 3.7112 |  |
| `mlx_drama3_4bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2529 | 3.6759 |  |
| `mlx_drama3_4bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.377 | 3.8257 |  |
| `mlx_drama3_4bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0777 | 4.3245 |  |
| `mlx_drama3_4bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2629 | 3.9256 |  |
| `mlx_confucius4_tts_int8` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9577 | 2.4388 | 0.9556 |  |
| `mlx_confucius4_tts_int8` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.0873 | 1.0058 |  |
| `mlx_confucius4_tts_int8` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9319 | 2.7896 | 0.9692 |  |
| `mlx_confucius4_tts_int8` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9412 | 2.4313 | 1.2665 |  |
| `mlx_confucius4_tts_int8` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8301 | 2.2451 | 1.0921 |  |
| `mlx_confucius4_tts_int8` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7948 | 1.9 | 1.0315 |  |
| `mlx_confucius4_tts_int8` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9808 | 3.7402 | 1.2151 |  |
| `mlx_confucius4_tts_int8` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8942 | 2.0931 | 1.165 |  |
| `mlx_confucius4_tts_int8` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7683 | 3.9911 | 1.1622 |  |
| `mlx_confucius4_tts_int8` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8429 | 2.8647 | 1.4774 |  |
| `mlx_confucius4_tts_int8` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8954 | 3.7709 | 1.5783 |  |
| `mlx_confucius4_tts_int8` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9174 | 3.4849 | 2.4902 |  |
| `mlx_confucius4_tts_int8` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.015 | 0.9462 | 3.1214 | 1.4882 |  |
| `mlx_confucius4_tts_int8` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8654 | 2.1016 | 2.075 |  |
| `mlx_confucius4_tts_int8` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9965 | 3.0646 | 2.418 |  |
| `mlx_confucius4_tts_int8` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9182 | 2.4847 | 1.042 |  |
| `mlx_confucius4_tts_int8` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9106 | 2.3694 | 0.8825 |  |
| `mlx_confucius4_tts_int8` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9209 | 2.2146 | 0.9435 |  |
| `mlx_confucius4_tts_int8` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9073 | 2.4756 | 0.8991 |  |
| `mlx_confucius4_tts_int8` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8915 | 2.5554 | 0.8883 |  |
| `mlx_confucius4_tts_int8` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9592 | 3.1051 | 0.8887 |  |
| `mlx_confucius4_tts_int8` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9851 | 3.4985 | 0.9263 |  |
| `mlx_confucius4_tts_int8` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9752 | 3.0571 | 1.0692 |  |
| `mlx_confucius4_tts_int8` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.2589 | 0.9634 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0571 | 0.9129 | 2.7533 | 0.8195 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.1132 | 0.9381 | 3.6714 | 1.1182 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.1429 | 0.9157 | 2.9925 | 0.7653 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8539 | 2.847 | 1.3091 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8075 | 2.8754 | 1.7665 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7188 | 2.9161 | 1.1433 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7529 | 3.7487 | 1.9745 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9778 | 3.4636 | 1.551 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9142 | 2.8156 | 0.9153 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7674 | 4.476 | 1.3646 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7071 | 3.252 | 2.0399 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8578 | 4.3708 | 1.5524 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.924 | 3.9022 | 1.5744 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5987 | 3.2776 | 1.9157 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9583 | 3.6126 | 0.6954 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9043 | 2.5204 | 0.6182 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9505 | 3.7522 | 0.7993 |  |
| `mlx_cosyvoice3_0_5b_fp16` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7926 | 2.7478 | 1.2581 |  |
| `mlx_cosyvoice3_0_5b_fp16` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8074 | 2.893 | 1.355 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9257 | 3.0794 | 0.9328 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9373 | 2.6243 | 1.0216 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9312 | 3.0948 | 0.914 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9329 | 2.9958 | 0.7711 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0952 | 0.96 | 3.6926 | 1.0314 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9299 | 3.6997 | 1.1211 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9606 | 3.6079 | 1.5088 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9866 | 3.4658 | 1.0502 |  |
| `mlx_confucius4_tts_int8` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9486 | 2.8922 | 1.1904 |  |
| `mlx_confucius4_tts_int8` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.1143 | 0.6982 | 2.9522 | 1.0557 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7546 | 3.1881 | 2.3217 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.2 | 0.6746 | 3.6484 | 1.2998 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8599 | 1.4646 |  |
| `mlx_moss_tts_local_transformer_v1_5` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7488 | 1.4459 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.2264 | 0.8935 | 3.3467 | 3.0818 |  |
| `mlx_indextts2_vietnamese_8bit` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6984 | 2.2351 | 2.9619 |  |
| `mlx_indextts2_vietnamese_8bit` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6697 | 2.0898 | 2.9096 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.1154 | 0.8606 | 3.4655 | 3.4297 |  |
| `mlx_indextts2_vietnamese_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.2593 | 0.8036 | 4.0023 | 3.235 |  |
| `mlx_indextts2_vietnamese_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.2083 | 0.8113 | 3.3167 | 3.6636 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.1169 | 0.57 | 3.6336 | 4.8125 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.055 | 0.8824 | 3.2278 | 2.0694 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.1321 | 0.8312 | 3.3228 | 2.0014 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.25 | 0.8175 | 3.3632 | 1.9638 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.2667 | 0.8912 | 3.4499 | 2.0061 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0462 | 0.875 | 3.2985 | 1.8394 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.1616 | 0.8512 | 3.4844 | 1.5435 |  |
| `mlx_zonos3_mini_ptq` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0857 |  | 3.7622 | 0.1143 |  |
| `mlx_zonos3_mini_ptq` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3902 | 0.113 |  |
| `mlx_zonos3_mini_ptq` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0857 |  | 3.1687 | 0.1107 |  |
| `mlx_zonos3_mini_ptq` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4651 | 0.1253 |  |
| `mlx_zonos3_mini_ptq` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6301 | 0.125 |  |
| `mlx_zonos3_mini_ptq` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2979 | 0.1274 |  |
| `mlx_zonos3_mini_ptq` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6815 | 0.1119 |  |
| `mlx_zonos3_mini_ptq` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0952 | 0.1225 |  |
| `mlx_zonos3_mini_ptq` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8616 | 0.1243 |  |
| `mlx_zonos3_mini_ptq` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 3.4509 | 0.1221 |  |
| `mlx_zonos3_mini_ptq` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9937 | 0.1229 |  |
| `mlx_zonos3_mini_ptq` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5259 | 0.1047 |  |
| `mlx_zonos3_mini_ptq` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9921 | 0.1263 |  |
| `mlx_zonos3_mini_ptq` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.045 | 0.1163 |  |
| `mlx_zonos3_mini_ptq` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.522 | 0.1284 |  |
| `mlx_zonos3_mini_ptq` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2044 | 0.1068 |  |
| `mlx_zonos3_mini_ptq` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5344 | 0.1041 |  |
| `mlx_zonos3_mini_ptq` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8654 | 0.1178 |  |
| `mlx_zonos3_mini_ptq` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3812 | 0.1232 |  |
| `mlx_zonos3_mini_ptq` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3525 | 0.115 |  |
| `mlx_zonos3_mini_ptq` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9943 | 0.11 |  |
| `mlx_zonos3_mini_ptq` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6926 | 0.1151 |  |
| `mlx_zonos3_mini_ptq` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.8917 | 0.1126 |  |
| `mlx_zonos3_mini_ptq` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0109 |  | 3.9603 | 0.1157 |  |
| `mlx_zonos3_mini_ptq` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6841 | 0.1165 |  |
| `mlx_zonos3_mini_ptq` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.1 |  | 2.5266 | 0.1122 |  |
| `mlx_zonos3_mini_ptq` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.0133 |  | 3.207 | 0.1173 |  |
| `mlx_zonos3_mini_ptq` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4575 | 0.1147 |  |
| `mlx_zonos3_mini_ptq` | ml no reading (ml_no_reading) | success | mlx_whisper | 0.039 |  | 3.4646 | 0.1157 |  |
| `mlx_zonos3_mini_ptq` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2084 | 0.1175 |  |
| `mlx_zonos3_mini_ptq` | ml sk reading (ml_sk_reading) | success | mlx_whisper | 0.0 |  | 3.8688 | 0.1169 |  |
| `mlx_zonos3_mini_ptq` | ml hu reading (ml_hu_reading) | success | qwen3_asr_1_7b_8bit | 0.1519 |  | 2.836 | 0.1191 |  |
| `mlx_zonos3_mini_ptq` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0444 |  | 4.0719 | 0.1104 |  |
| `mlx_zonos3_mini_ptq` | ml bg reading (ml_bg_reading) | success | mlx_whisper | 0.0132 |  | 3.7284 | 0.1156 |  |
| `mlx_zonos3_mini_ptq` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.06 |  | 3.9777 | 0.1124 |  |
| `mlx_zonos3_mini_ptq` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 |  | 3.4851 | 0.1176 |  |
| `mlx_zonos3_mini_ptq` | ml he reading (ml_he_reading) | success | mlx_whisper | 0.0164 |  | 3.696 | 0.1127 |  |
| `mlx_zonos3_mini_ptq` | ml ta reading (ml_ta_reading) | success | mlx_whisper | 0.061 |  | 3.9737 | 0.1183 |  |
| `mlx_zonos3_mini_ptq` | ml te reading (ml_te_reading) | success | mlx_whisper | 1.5882 |  | 2.6004 | 0.1018 |  |
| `mlx_zonos3_mini_ptq` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.0204 |  | 3.9906 | 0.1162 |  |
| `mlx_zonos3_mini_ptq` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6876 | 0.1226 |  |
| `mlx_zonos3_mini_ptq` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5626 | 0.1172 |  |
| `mlx_zonos3_mini_ptq` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3145 | 0.1181 |  |
| `mlx_zonos3_mini_ptq` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4838 | 0.108 |  |
| `mlx_zonos3_mini_ptq` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0714 |  | 4.4806 | 0.111 |  |
| `mlx_zonos3_mini_ptq` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4249 | 0.1165 |  |
| `mlx_zonos3_mini_ptq` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4505 | 0.1289 |  |
| `mlx_zonos3_mini_ptq` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4843 | 0.1129 |  |
| `mlx_zonos3_mini_ptq` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8578 | 0.1284 |  |
| `mlx_zonos3_mini_ptq` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3875 | 0.1318 |  |
| `mlx_zonos3_mini_ptq` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7207 | 0.1245 |  |
| `mlx_zonos3_mini_ptq` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6222 | 3.1073 | 0.2957 |  |
| `mlx_zonos3_mini_ptq` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7691 | 3.8477 | 0.312 |  |
| `mlx_zonos3_mini_ptq` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0333 | 0.6987 | 3.2049 | 0.2054 |  |
| `mlx_zonos3_mini_ptq` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7318 | 4.4891 | 0.3069 |  |
| `mlx_zonos3_mini_ptq` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7331 | 4.2128 | 0.2914 |  |
| `mlx_zonos3_mini_ptq` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.3509 | 3.7044 | 0.2567 |  |
| `mlx_zonos3_mini_ptq` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7768 | 3.6883 | 0.1088 |  |
| `mlx_zonos3_mini_ptq` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7073 | 4.0605 | 0.2505 |  |
| `mlx_zonos3_mini_ptq` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7366 | 3.485 | 0.2982 |  |
| `mlx_audio8_realistic_air_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8943 | 4.0887 | 1.181 |  |
| `mlx_audio8_realistic_air_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9141 | 4.1425 | 1.2014 |  |
| `mlx_audio8_realistic_air_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8987 | 4.2309 | 1.2008 |  |
| `mlx_audio8_realistic_air_bf16` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7879 | 3.7327 | 1.2043 |  |
| `mlx_audio8_realistic_air_bf16` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7652 | 3.604 | 1.2116 |  |
| `mlx_audio8_realistic_air_bf16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8633 | 3.6418 | 1.2231 |  |
| `mlx_audio8_realistic_air_bf16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7972 | 3.8945 | 1.1642 |  |
| `mlx_audio8_realistic_air_bf16` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8286 | 3.9221 | 1.187 |  |
| `mlx_audio8_realistic_air_bf16` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.28 |  | 3.3648 | 1.1502 |  |
| `mlx_audio8_realistic_air_bf16` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.3438 | 0.7057 | 2.8195 | 1.2136 |  |
| `mlx_audio8_realistic_air_bf16` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 3.8371 | 1.1564 |  |
| `mlx_audio8_realistic_air_bf16` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.172 | 1.1692 |  |
| `mlx_audio8_realistic_air_bf16` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0909 | 1.0 | 2.97 | 1.3827 |  |
| `mlx_audio8_realistic_air_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8721 | 4.3153 | 1.2316 |  |
| `mlx_audio8_realistic_air_bf16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8175 | 3.7595 | 1.1909 |  |
| `mlx_audio8_realistic_air_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7605 | 4.4756 | 1.2213 |  |
| `mlx_audio8_realistic_air_bf16` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 | 0.8056 | 4.2069 | 1.2297 |  |
| `mlx_audio8_realistic_air_bf16` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.6808 | 4.2084 | 1.2158 |  |
| `mlx_audio8_realistic_air_bf16` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8831 | 4.45 | 1.1789 |  |
| `mlx_audio8_realistic_air_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8233 | 4.3661 | 1.206 |  |
| `mlx_audio8_realistic_air_bf16` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.706 | 3.6874 | 1.1997 |  |
| `mlx_audio8_realistic_air_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8853 | 4.2075 | 1.1094 |  |
| `mlx_audio8_realistic_air_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.802 | 3.2959 | 1.1317 |  |
| `mlx_audio8_realistic_air_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8767 | 4.2671 | 1.1636 |  |
| `mlx_audio8_realistic_air_bf16` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8501 | 1.8566 |  |
| `mlx_audio8_realistic_air_bf16` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0111 |  | 3.8386 | 1.722 |  |
| `mlx_audio8_realistic_air_bf16` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8445 | 1.6992 |  |
| `mlx_audio8_realistic_air_bf16` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0438 | 1.6893 |  |
| `mlx_audio8_realistic_air_bf16` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2694 | 1.5345 |  |
| `mlx_audio8_realistic_air_bf16` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.1395 | 1.4499 |  |
| `mlx_audio8_realistic_air_bf16` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7539 | 1.5411 |  |
| `mlx_audio8_realistic_air_bf16` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7174 | 1.3009 |  |
| `mlx_audio8_realistic_air_bf16` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.025 |  | 4.2587 | 1.2733 |  |
| `mlx_audio8_realistic_air_bf16` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0488 |  | 3.8765 | 1.2434 |  |
| `mlx_audio8_realistic_air_bf16` | ml no reading (ml_no_reading) | success | mlx_whisper | 0.026 |  | 4.1057 | 1.2393 |  |
| `mlx_audio8_realistic_air_bf16` | ml ms reading (ml_ms_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.011 | 1.1928 |  |
| `mlx_audio8_realistic_air_bf16` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8453 | 3.6957 | 1.2273 |  |
| `mlx_audio8_realistic_air_bf16` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8281 | 3.709 | 1.2218 |  |
| `mlx_audio8_realistic_air_bf16` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.844 | 3.7456 | 1.1925 |  |
| `mlx_audio8_realistic_air_bf16` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8195 | 3.6444 | 1.1758 |  |
| `mlx_audio8_realistic_air_bf16` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8968 | 4.0949 | 1.1934 |  |
| `mlx_audio8_realistic_air_bf16` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8311 | 4.3427 | 1.1752 |  |
| `mlx_audio8_realistic_air_bf16` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9153 | 4.151 | 1.1965 |  |
| `mlx_audio8_realistic_air_bf16` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8726 | 4.2733 | 1.1474 |  |
| `mlx_pocket_tts_v4` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0189 |  | 4.3137 | 0.0756 |  |
| `mlx_pocket_tts_v4` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6417 | 0.1812 |  |
| `mlx_pocket_tts_v4` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6248 | 0.1738 |  |
| `mlx_pocket_tts_v4` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4622 | 0.1844 |  |
| `mlx_pocket_tts_v4` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6397 | 3.9263 | 0.0835 |  |
| `mlx_pocket_tts_v4` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.4745 | 4.3262 | 0.0762 |  |
| `mlx_pocket_tts_v4` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6703 | 3.914 | 0.0731 |  |
| `mlx_pocket_tts_v4` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.771 | 3.8241 | 0.0814 |  |
| `mlx_pocket_tts_v4` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.369 | 3.294 | 0.1913 |  |
| `mlx_pocket_tts_v4` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2344 | 0.0725 |  |
| `mlx_pocket_tts_v4` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2387 | 0.0709 |  |
| `mlx_pocket_tts_v4` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9819 | 0.1732 |  |
| `mlx_pocket_tts_v4` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1554 | 0.1773 |  |
| `mlx_pocket_tts_v4` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4859 | 0.1783 |  |
| `mlx_pocket_tts_v4` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.11 | 0.0742 |  |
| `mlx_pocket_tts_v4` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7753 | 0.0713 |  |
| `mlx_pocket_tts_v4` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4348 | 0.0746 |  |
| `mlx_pocket_tts_v4` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4255 | 0.0733 |  |
| `mlx_fireredtts3_base_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9373 | 2.5355 | 0.978 |  |
| `mlx_fireredtts3_base_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.4569 | 0.978 |  |
| `mlx_fireredtts3_base_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9583 | 2.4595 | 0.993 |  |
| `mlx_fireredtts3_base_bf16` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.7812 | 0.9939 | 3.1635 | 1.038 |  |
| `mlx_fireredtts3_base_bf16` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.9259 | 0.9447 | 2.9176 | 2.408 |  |
| `mlx_fireredtts3_base_bf16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.2857 | 0.9814 | 3.1478 | 1.026 |  |
| `mlx_fireredtts3_base_bf16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0333 | 0.9271 | 3.4465 | 0.969 |  |
| `mlx_fireredtts3_base_bf16` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.2459 | 0.9986 | 3.1986 | 0.988 |  |
| `mlx_fireredtts3_base_bf16` | 越南语无参考文本朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7568 | 1.5161 | 0.976 |  |
| `mlx_fireredtts3_base_bf16` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.5291 | 1.4567 | 0.952 |  |
| `mlx_fireredtts3_base_bf16` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.2708 | 0.9456 | 3.4051 | 1.009 |  |
| `mlx_fireredtts3_base_bf16` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.6522 | 0.9602 | 2.8453 | 0.996 |  |
| `mlx_fireredtts3_base_bf16` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0455 | 1.0 | 2.2132 | 1.076 |  |
| `mlx_fireredtts3_base_bf16` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8302 | 1.4219 | 0.983 |  |
| `mlx_fireredtts3_base_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9873 | 3.805 | 1.011 |  |
| `mlx_fireredtts3_base_bf16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9678 | 2.5608 | 0.962 |  |
| `mlx_fireredtts3_base_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8173 | 3.2375 | 0.973 |  |
| `mlx_fireredtts3_base_bf16` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 1.05 | 0.9645 | 4.1663 | 0.989 |  |
| `mlx_fireredtts3_base_bf16` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.1143 | 0.8597 | 2.7983 | 0.981 |  |
| `mlx_fireredtts3_base_bf16` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0278 | 0.715 | 2.1299 | 0.982 |  |
| `mlx_fireredtts3_base_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9648 | 3.7661 | 0.999 |  |
| `mlx_fireredtts3_base_bf16` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.1818 | 0.8967 | 3.5633 | 0.986 |  |
| `mlx_fireredtts3_base_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9868 | 3.576 | 0.945 |  |
| `mlx_fireredtts3_base_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8828 | 1.8051 | 0.957 |  |
| `mlx_fireredtts3_base_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9926 | 3.6327 | 1.32 |  |
| `mlx_fireredtts3_base_bf16` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0204 | 0.9895 | 3.1757 | 1.063 |  |
| `mlx_fireredtts3_base_bf16` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9138 | 3.1795 | 1.151 |  |
| `mlx_fireredtts3_base_bf16` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9505 | 3.0866 | 1.122 |  |
| `mlx_fireredtts3_base_bf16` | ml id reading (ml_id_reading) | success | qwen3_asr_1_7b_8bit | 0.0396 | 0.9675 | 3.0214 | 1.115 |  |
| `mlx_fireredtts3_base_bf16` | ml th reading (ml_th_reading) | success | qwen3_asr_1_7b_8bit | 0.28 | 0.9362 | 3.1078 | 1.04 |  |
| `mlx_fireredtts3_base_bf16` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 | 0.8803 | 3.117 | 1.005 |  |
| `mlx_fireredtts3_base_bf16` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9981 | 3.1911 | 1.09 |  |
| `mlx_fireredtts3_base_bf16` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0602 | 0.8943 | 3.1213 | 1.069 |  |
| `mlx_fireredtts3_base_bf16` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.1585 | 0.9281 | 2.9132 | 1.122 |  |
| `mlx_fireredtts3_base_bf16` | ml cs reading (ml_cs_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8907 | 2.7985 | 1.096 |  |
| `mlx_fireredtts3_base_bf16` | ml ro reading (ml_ro_reading) | success | qwen3_asr_1_7b_8bit | 0.0333 | 0.8973 | 3.1028 | 1.069 |  |
| `mlx_fireredtts3_base_bf16` | ml el reading (ml_el_reading) | success | qwen3_asr_1_7b_8bit | 0.03 | 0.916 | 3.1898 | 1.13 |  |
| `mlx_fireredtts3_base_bf16` | ml uk reading (ml_uk_reading) | success | mlx_whisper | 0.0 | 0.9318 | 3.1423 | 1.117 |  |
| `mlx_fireredtts3_base_bf16` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9748 | 2.3776 | 0.981 |  |
| `mlx_fireredtts3_base_bf16` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9307 | 2.4121 | 1.004 |  |
| `mlx_fireredtts3_base_bf16` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9246 | 2.4973 | 0.956 |  |
| `mlx_fireredtts3_base_bf16` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9381 | 2.4897 | 0.996 |  |
| `mlx_fireredtts3_base_bf16` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.5583 | 0.993 |  |
| `mlx_fireredtts3_base_bf16` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9926 | 3.6352 | 0.973 |  |
| `mlx_fireredtts3_base_bf16` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.5744 | 0.996 |  |
| `mlx_fireredtts3_base_bf16` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.4164 | 1.043 |  |
| `mlx_voxmel_0_3b_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.2424 | 0.9261 | 2.5879 | 1.2906 |  |
| `mlx_voxmel_0_3b_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9937 | 3.1246 | 1.208 |  |
| `mlx_voxmel_0_3b_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.2286 | 0.8917 | 2.8147 | 1.1677 |  |
| `mlx_voxmel_0_3b_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.3102 | 1.3576 |  |
| `mlx_voxmel_0_3b_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9198 | 2.2135 | 1.076 |  |
| `mlx_voxmel_0_3b_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7014 | 3.8857 | 1.4044 |  |
| `mlx_voxmel_0_3b_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 1.0 | 0.0 | 1.3552 | 0.7916 |  |
| `mlx_voxmel_0_3b_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7927 | 2.7591 | 1.4548 |  |
| `mlx_voxmel_0_3b_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.974 | 0.0 | 1.2739 | 1.4263 |  |
| `mlx_voxmel_0_3b_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9789 | 3.2398 | 0.9234 |  |
| `mlx_voxmel_0_3b_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0238 | 0.926 | 1.7896 | 0.8572 |  |
| `mlx_voxmel_0_3b_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9857 | 2.9665 | 1.016 |  |
| `mlx_voxmel_0_3b_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.3243 | 0.9286 | 2.2933 | 1.1294 |  |
| `mlx_voxmel_0_3b_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9396 | 1.9314 | 1.1931 |  |
| `mlx_voxmel_0_3b_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9354 | 2.2014 | 1.0806 |  |
| `mlx_voxmel_0_3b_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9222 | 2.1198 | 1.0615 |  |
| `mlx_voxmel_0_3b_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0952 | 0.9994 | 3.086 | 1.2285 |  |
| `mlx_voxmel_0_3b_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9928 | 3.2025 | 1.3443 |  |
| `mlx_voxmel_0_3b_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 3.0839 | 1.3782 |  |
| `mlx_voxmel_0_3b_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 | 1.0 | 2.9561 | 1.299 |  |
| `mlx_kitten_tts2_mini` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4952 | 1.034 |  |
| `mlx_kitten_tts2_mini` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8025 | 0.544 |  |
| `mlx_kitten_tts2_mini` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0364 | 0.109 |  |
| `mlx_kitten_tts2_mini` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1488 | 0.202 |  |
| `mlx_kitten_tts2_mini` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0319 | 0.089 |  |
| `mlx_kitten_tts2_mini` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0224 | 0.132 |  |
| `mlx_kitten_tts2_mini` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 3.5056 | 0.186 |  |
| `mlx_kitten_tts2_mini` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4477 | 0.465 |  |
| `mlx_kitten_tts2_mini` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4223 | 0.567 |  |
| `mlx_kitten_tts2_mini` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.3016 | 0.133 |  |
| `mlx_kitten_tts2_mini` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0111 |  | 3.5824 | 0.121 |  |
| `mlx_kitten_tts2_mini` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4175 | 0.153 |  |
| `mlx_kitten_tts2_mini` | ml tr reading (ml_tr_reading) | success | qwen3_asr_1_7b_8bit | 0.023 |  | 3.7859 | 0.193 |  |
| `mlx_kitten_tts2_mini` | ml nl reading (ml_nl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9117 | 0.085 |  |
| `mlx_kitten_tts2_mini` | ml sv reading (ml_sv_reading) | success | qwen3_asr_1_7b_8bit | 0.025 |  | 4.0973 | 0.206 |  |
| `mlx_kitten_tts2_mini` | ml da reading (ml_da_reading) | success | qwen3_asr_1_7b_8bit | 0.0533 |  | 3.7148 | 0.177 |  |
| `mlx_kitten_tts2_mini` | ml fi reading (ml_fi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1027 | 0.147 |  |
| `mlx_kitten_tts2_mini` | ml sw reading (ml_sw_reading) | success | mlx_whisper | 0.0326 |  | 3.7505 | 0.07 |  |
| `mlx_kitten_tts2_mini` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4986 | 0.738 |  |
| `mlx_kitten_tts2_mini` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4716 | 0.977 |  |
| `mlx_kitten_tts2_mini` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4769 | 1.213 |  |
| `mlx_kitten_tts2_mini` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4735 | 0.887 |  |
| `mlx_kitten_tts2_nano` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4415 | 0.902 |  |
| `mlx_kitten_tts2_nano` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.668 | 0.177 |  |
| `mlx_kitten_tts2_nano` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.7903 | 0.087 |  |
| `mlx_kitten_tts2_nano` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9483 | 0.138 |  |
| `mlx_kitten_tts2_nano` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 3.0306 | 0.102 |  |
| `mlx_kitten_tts2_nano` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4447 | 0.448 |  |
| `mlx_kitten_tts2_nano` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4299 | 0.555 |  |
| `mlx_kitten_tts2_nano` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1514 | 0.124 |  |
| `mlx_kitten_tts2_nano` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.01 | 0.046 |  |
| `mlx_kitten_tts2_nano` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.528 | 0.096 |  |
| `mlx_kitten_tts2_nano` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4572 | 0.761 |  |
| `mlx_kitten_tts2_nano` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3416 | 0.948 |  |
| `mlx_kitten_tts2_nano` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3601 | 1.076 |  |
| `mlx_kitten_tts2_nano` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4427 | 0.802 |  |
| `mlx_kitten_tts2_pico` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0666 | 1.079 |  |
| `mlx_kitten_tts2_pico` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4059 | 0.079 |  |
| `mlx_kitten_tts2_pico` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2278 | 0.052 |  |
| `mlx_kitten_tts2_pico` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.4462 | 0.077 |  |
| `mlx_kitten_tts2_pico` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.125 |  | 2.8137 | 0.063 |  |
| `mlx_kitten_tts2_pico` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2082 | 0.476 |  |
| `mlx_kitten_tts2_pico` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1596 | 0.582 |  |
| `mlx_kitten_tts2_pico` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8771 | 0.089 |  |
| `mlx_kitten_tts2_pico` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1411 | 0.057 |  |
| `mlx_kitten_tts2_pico` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.6004 | 0.046 |  |
| `mlx_kitten_tts2_pico` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8396 | 0.835 |  |
| `mlx_kitten_tts2_pico` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1674 | 1.059 |  |
| `mlx_kitten_tts2_pico` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9052 | 1.376 |  |
| `mlx_kitten_tts2_pico` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0749 | 0.914 |  |
| `mlx_indextts2_v25_8bit` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8784 | 4.1072 | 2.416 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.4561 | 3.5291 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2018 | 1.6997 |  |
| `mlx_qwen3_tts_voice_design_official_int8` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6497 | 1.7973 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.3208 | 1.4323 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9502 | 1.7737 |  |
| `mlx_qwen3_tts_custom_voice_official_int8` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2366 | 2.1621 |  |
| `mlx_confucius4_tts_int8` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.914 | 4.0219 | 1.6493 |  |
| `mlx_confucius4_tts_int8` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6976 | 1.4431 | 1.7031 |  |
| `mlx_confucius4_tts_int8` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9727 | 2.5323 | 1.1784 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9397 | 3.2493 | 3.8512 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8863 | 3.6517 | 1.2821 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8194 | 3.8718 | 1.7294 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8096 | 4.1964 | 1.7913 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8924 | 3.7742 | 1.6049 |  |
| `mlx_cosyvoice3_0_5b_fp16` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7569 | 3.877 | 1.939 |  |
| `mlx_drama3_4bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7789 | 3.7629 | 4.921 |  |
| `mlx_drama3_4bit` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6619 | 1.3626 | 5.4065 |  |
| `mlx_drama3_4bit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.4524 | 4.3285 | 4.2092 |  |
| `mlx_higgs_audio_v3_4b` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.2387 | 0.6605 |  |
| `mlx_higgs_audio_v3_4b` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0785 | 0.6672 |  |
| `mlx_higgs_audio_v3_4b` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.1248 | 0.6318 |  |
| `mlx_indextts2_v25_8bit` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7949 | 2.9208 | 1.4211 |  |
| `mlx_indextts2_v25_8bit` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.791 | 3.0268 | 1.2961 |  |
| `mlx_indextts2_v25_8bit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8014 | 3.2432 | 1.4776 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5331 | 1.5028 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3261 | 1.754 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4874 | 1.5679 |  |
| `mlx_ming3_tiny_7_9b_8bit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8824 | 1.9959 |  |
| `mlx_ming3_0_5b_8bit` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.471 | 0.4158 |  |
| `mlx_ming3_0_5b_8bit` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.8882 | 0.3985 |  |
| `mlx_ming3_0_5b_8bit` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5533 | 0.4182 |  |
| `mlx_ming3_0_5b_8bit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.9074 | 0.5387 |  |
| `mlx_supertonic3_mlx` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3765 | 0.1183 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.1042 | 0.7942 | 3.2591 | 1.8308 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.15 | 0.8325 | 3.5293 | 1.6656 |  |
| `mlx_indextts2_vietnamese_8bit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8324 | 3.4612 | 1.653 |  |
| `mlx_voxcpm2_bf16_dit` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.833 | 0.7225 |  |
| `mlx_voxcpm2_bf16_dit` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.166 | 0.6202 |  |
| `mlx_voxcpm2_bf16_dit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 2.5539 | 0.6306 |  |
| `mlx_drama3_ja_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.88 | 3.5636 | 5.1121 |  |
| `mlx_drama3_ja_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.9022 | 3.9721 | 8.6334 |  |
| `mlx_drama3_ja_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 | 0.8161 | 3.9954 | 7.7538 |  |
| `mlx_drama3_ja_8bit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6697 | 3.4706 | 10.1468 |  |
| `mlx_drama3_ja_8bit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.1852 | 0.4698 | 3.4219 | 6.0428 |  |
| `mlx_drama3_ja_8bit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.9048 | 0.7079 | 3.7236 | 23.6786 |  |
| `mlx_drama3_ja_8bit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.8778 | 0.6963 | 3.3153 | 26.6477 |  |
| `mlx_drama3_ja_8bit` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.3115 | 0.6827 | 3.5817 | 7.2327 |  |
| `mlx_drama3_ja_8bit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.9091 |  | 2.0696 | 87.4866 | sim:insufficient voiced audio: 0.493s < 0.750s (/Users/vanch/tts-test-project/results/generated/drama3ja_20261126/mlx_drama3_ja_8bit/core_yue_dialect.wav) |
| `mlx_drama3_ja_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.9744 |  | 1.3824 | 58.3932 | sim:insufficient voiced audio: 0.557s < 0.750s (/Users/vanch/tts-test-project/results/generated/drama3ja_20261126/mlx_drama3_ja_8bit/clone_en_same.wav) |
| `mlx_drama3_ja_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.5 | 0.9133 | 3.9798 | 11.4487 |  |
| `mlx_drama3_ja_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.611 | 4.2025 | 6.329 |  |
| `mlx_drama3_ja_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.8 | 0.5716 | 4.1157 | 12.6818 |  |
| `mlx_drama3_ja_8bit` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.1429 | 0.6445 | 3.8488 | 8.5746 |  |
| `mlx_drama3_ja_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0556 | 0.6953 | 3.4137 | 7.9419 |  |
| `mlx_drama3_ja_8bit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.6941 |  | 4.1409 | 17.7481 |  |
| `mlx_drama3_ja_8bit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0499 | 3.4373 |  |
| `mlx_drama3_ja_8bit` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.2407 |  | 3.2023 | 7.0967 |  |
| `mlx_drama3_ja_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.9481 |  | 1.5886 | 152.7548 | sim:insufficient voiced audio: 0.186s < 0.750s (/Users/vanch/tts-test-project/results/generated/drama3ja_20261126/mlx_drama3_ja_8bit/scenema_clone_tarkin_en.wav) |
| `mlx_drama3_ja_8bit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7252 | 2.797 | 7.3069 |  |
| `mlx_drama3_ja_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.4 | 0.8341 | 4.1824 | 6.8233 |  |
| `mlx_drama3_ja_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8565 | 3.7627 | 26.6189 |  |
| `mlx_drama3_ja_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8199 | 4.2012 | 6.5188 |  |
| `mlx_drama3_ja_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.611 | 3.8659 | 8.3847 |  |
| `mlx_drama3_ja_8bit` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.8333 | 0.4258 | 2.6931 | 13.0385 |  |
| `mlx_drama3_ja_8bit` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7694 | 3.8207 | 14.1828 |  |
| `mlx_drama3_ja_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.5952 | 0.7718 | 3.8547 | 4.7816 |  |
| `mlx_drama3_ja_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.5409 | 0.7129 | 3.4088 | 6.1556 |  |
| `mlx_drama3_ja_8bit` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.3061 |  | 3.4785 | 9.7967 |  |
| `mlx_drama3_ja_8bit` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.7222 |  | 4.0246 | 3.8581 |  |
| `mlx_drama3_ja_8bit` | ml ru reading (ml_ru_reading) | success | qwen3_asr_1_7b_8bit | 0.427 |  | 3.441 | 3.1946 |  |
| `mlx_drama3_ja_8bit` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.6757 | 0.6858 | 3.7257 | 4.3816 |  |
| `mlx_drama3_ja_8bit` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.8276 | 0.788 | 2.9637 | 15.499 |  |
| `mlx_drama3_ja_8bit` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.1818 | 0.5649 | 3.2398 | 3.4451 |  |
| `mlx_drama3_ja_8bit` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.025 | 0.7417 | 3.9129 | 6.4256 |  |
| `mlx_drama3_ja_8bit` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.5238 | 0.8217 | 3.7791 | 11.4901 |  |
| `mlx_drama3_ja_8bit` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7951 | 3.8071 | 5.5692 |  |
| `mlx_drama3_ja_8bit` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.823 | 3.8216 | 6.5884 |  |
| `mlx_drama3_ja_8bit` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0404 | 0.8611 | 3.532 | 6.044 |  |
| `mlx_drama3_ja_8bit` | 英文情绪控制：开心 (control_emotion_en_happy) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7866 | 4.1114 | 9.3239 |  |
| `mlx_drama3_ja_8bit` | 英文情绪控制：悲伤 (control_emotion_en_sad) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8819 | 3.8374 | 8.025 |  |
| `mlx_drama3_ja_8bit` | 英文情绪控制：愤怒 (control_emotion_en_angry) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.7034 | 3.9448 | 5.3849 |  |
| `mlx_kokoro_82m_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.1143 |  | 3.9879 | 0.1946 |  |
| `mlx_kokoro_82m_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5147 | 0.8981 |  |
| `mlx_kokoro_82m_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.4 |  | 3.7743 | 0.198 |  |
| `mlx_kokoro_82m_bf16` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9122 | 0.168 |  |
| `mlx_kokoro_82m_bf16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.9068 | 0.3108 |  |
| `mlx_kokoro_82m_bf16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.492 | 0.2084 |  |
| `mlx_kokoro_82m_bf16` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0417 |  | 4.2976 | 0.2701 |  |
| `mlx_kokoro_82m_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5434 | 0.307 |  |
| `mlx_kokoro_82m_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.307 | 0.0851 |  |
| `mlx_kokoro_82m_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.546 | 0.38 |  |
| `mlx_kokoro_82m_bf16` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0852 | 0.1929 |  |
| `mlx_kokoro_82m_bf16` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6037 | 0.2199 |  |
| `mlx_kokoro_82m_bf16` | 中文日期、时间与单位朗读 (core_zh_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.6199 | 0.1695 |  |
| `mlx_kokoro_82m_bf16` | 中文多音字朗读 (core_zh_polyphone) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8336 | 0.1884 |  |
| `mlx_kokoro_82m_bf16` | 中文地址与人名朗读 (core_zh_address) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7491 | 0.1708 |  |
| `mlx_kokoro_82m_bf16` | 中文普通长句朗读 (core_zh_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.513 | 0.158 |  |
| `mlx_kokoro_82m_bf16` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5069 | 0.5539 |  |
| `mlx_kokoro_82m_bf16` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5332 | 0.6777 |  |
| `mlx_kokoro_82m_bf16` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5105 | 0.8754 |  |
| `mlx_kokoro_82m_bf16` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5202 | 0.6195 |  |
| `mlx_reverb_tts_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5168 | 0.6323 |  |
| `mlx_reverb_tts_bf16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3159 | 0.3897 |  |
| `mlx_reverb_tts_bf16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.7436 | 0.2906 |  |
| `mlx_reverb_tts_bf16` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.2746 | 0.3548 |  |
| `mlx_reverb_tts_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8536 | 3.7631 | 0.5238 |  |
| `mlx_reverb_tts_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.6057 | 4.1088 | 0.2354 |  |
| `mlx_reverb_tts_bf16` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.3194 | 0.8303 | 2.971 | 0.4503 |  |
| `mlx_reverb_tts_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8549 | 4.0536 | 0.4975 |  |
| `mlx_reverb_tts_bf16` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 | 0.8044 | 3.2084 | 0.9184 |  |
| `mlx_reverb_tts_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4818 | 0.1939 |  |
| `mlx_reverb_tts_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4997 | 0.578 |  |
| `mlx_reverb_tts_bf16` | ml it reading (ml_it_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0926 | 1.1806 |  |
| `mlx_reverb_tts_bf16` | ml pt reading (ml_pt_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.0809 | 0.6455 |  |
| `mlx_reverb_tts_bf16` | ml pl reading (ml_pl_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.1972 | 0.8657 |  |
| `mlx_reverb_tts_bf16` | 英文日期、时间与单位朗读 (core_en_date_units) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.459 | 0.505 |  |
| `mlx_reverb_tts_bf16` | 英文缩写词朗读 (core_en_acronyms) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4964 | 0.883 |  |
| `mlx_reverb_tts_bf16` | 英文同形异音词朗读 (core_en_homographs) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.429 | 0.7995 |  |
| `mlx_reverb_tts_bf16` | 英文普通长句朗读 (core_en_plain_long) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3953 | 0.6854 |  |

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
| `mlx_scenema_audio_int8_mlx_mps_service` | missing_checkpoint_or_project | `/Users/vanch/mlx-scenema-audio` |
| `mlx_supertonic3_mlx` | scored | `/Users/vanch/mlx-supertonic` |
| `mlx_kokoro_82m_bf16` | scored | `/Users/vanch/mlx-kokoro-tts` |
| `mlx_reverb_tts_bf16` | scored | `/Users/vanch/mlx-reverb-tts` |
| `mlx_kitten_tts2_mini` | scored | `/Users/vanch/mlx-kitten-tts2` |
| `mlx_kitten_tts2_nano` | scored | `/Users/vanch/mlx-kitten-tts2` |
| `mlx_kitten_tts2_pico` | scored | `/Users/vanch/mlx-kitten-tts2` |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | missing_checkpoint_or_project | `/Users/vanch/mlx-Ming-omni-tts` |
| `mlx_ming3_tiny_7_9b_8bit` | scored | `/Users/vanch/mlx-Ming-3.0-tts` |
| `mlx_ming3_0_5b_8bit` | scored | `/Users/vanch/mlx-Ming-3.0-tts` |
| `mlx_zonos2_bf16` | missing_checkpoint_or_project | `/Users/vanch/mlx-ZONOS2` |
| `mlx_zonos3_mini_ptq` | scored | `/Users/vanch/mlx-ZONOS3` |
| `mlx_moss_tts_local_transformer_v1_5` | scored | `/Users/vanch/mlx-MOSS-TTS-Local-Transformer-v1.5` |
| `mlx_fireredaudio_8bit` | scored | `/Users/vanch/mlx-FireRedAudio` |
| `mlx_confucius4_tts_int8` | scored | `/Users/vanch/mlx-audio` |
| `mlx_cosyvoice3_0_5b_fp16` | scored | `/Users/vanch/mlx-audio-plus` |
| `mlx_breeze_tts2_8bit` | scored | `/Users/vanch/mlx-breeze-tts2` |
| `mlx_pocket_tts_8bit` | installed_unified_adapter | `/Users/vanch/mlx-pocket-tts` |
| `mlx_pocket_tts_v4` | scored | `/Users/vanch/mlx-pocket-tts` |
| `mlx_audio8_tts_8bit` | missing_checkpoint_or_project | `/Users/vanch/mlx-audio8-tts` |
| `mlx_audio8_realistic_air_bf16` | scored | `/Users/vanch/mlx-audio8-tts` |
| `mlx_fireredtts3_base_bf16` | scored | `/Users/vanch/mlx-FireRedTTS3` |
| `mlx_drama3_4bit` | scored | `/Users/vanch/drama-3-mlx` |
| `mlx_drama3_ja_8bit` | scored | `/Users/vanch/drama-3-mlx` |
| `mlx_voxmel_0_3b_8bit` | scored | `/Users/vanch/mlx-voxmel` |
| `mlx_voxmel_0_6b_8bit` | scored | `/Users/vanch/mlx-voxmel` |
| `mlx_audio_multi_model` | toolkit_not_single_model | `/Users/vanch/mlx-audio` |
| `cloudflare_edge_tts` | excluded_not_open_source_model | `/Users/vanch/cloudflare-edge-tts` |
| `speech_to_speech` | excluded_pipeline_wrapper | `/Users/vanch/speech-to-speech` |

## 结论

- `coverage_pct >= 80` 才进入正式排名准备态；低覆盖样本仍保留用于定位缺失指标。
- 失败项目或缺指标项目不会被伪造成完整分数，阻塞原因写在 `adapter_status` 和 `metric_failures`。
- 结果面板可用 `python scripts/render_dashboard.py --run-id <id>` 生成中文静态音频面板。
