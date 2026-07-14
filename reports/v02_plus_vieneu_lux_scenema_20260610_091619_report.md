# mlx-tts-benchmark - 汇总报表

- Run ID：`v02_plus_vieneu_lux_scenema_20260610_091619`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/v02_plus_vieneu_lux_scenema_20260610_091619/metrics.csv`。
- 标准：`configs/capability_radar_research_zh.json`，9 项研究版 TTS 能力雷达评分；逐样本客观指标仍保留在 metrics/scored CSV。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。
- 已从主评分隐藏 17 条能力边界外、诊断或专项记录；这些项目不进入主榜和样本摘要，边界内专项可在试听页按层级查看。

## 榜单

| 排名 | 项目 | 评分样本数 | 能力总分 | 能力覆盖率 | 内容准确与可懂度 | 自然度与音频质量 | 多语种能力 | 方言能力 | 音色克隆与鲁棒性 | 情绪、风格与韵律控制 | 复杂文本与副语言能力 | 长文本稳定性 | RTF 生成效率 | 可排名 |
|---:|---|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_voxcpm2` | 36 | 95.037 | 100.0 | 100.0 | 91.011 | 100.0 | 100.0 | 96.927 | 96.943 | 96.46 | 93.625 | 42.245 | yes |
| 2 | `mlx_dots_tts` | 27 | 88.285 | 88.889 | 89.517 | 89.767 | 96.313 | 91.375 | 95.033 | 97.055 | 0.0 | 93.625 | 43.853 | yes |
| 3 | `mlx_omnivoice` | 15 | 53.439 | 61.296 | 93.313 | 43.06 | 25.0 | 95.687 | 26.417 | 50.737 | 99.579 | 29.271 | 25.043 | no |
| 4 | `mlx_scenema_audio` | 16 | 46.238 | 52.976 | 56.421 | 50.181 | 14.834 | 0.0 | 31.002 | 93.117 | 96.46 | 28.62 | 13.537 | no |
| 5 | `mlx_moss_tts` | 7 | 41.438 | 38.889 | 96.969 | 23.118 | 0.0 | 0.0 | 0.0 | 86.998 | 100.0 | 0.0 | 13.663 | no |
| 6 | `mlx_qwen3_tts` | 7 | 37.128 | 28.986 | 96.336 | 26.782 | 0.0 | 50.0 | 0.0 | 49.574 | 0.0 | 0.0 | 23.137 | no |
| 7 | `mlx_indextts2` | 7 | 36.253 | 31.389 | 97.437 | 27.32 | 12.5 | 0.0 | 0.0 | 0.0 | 0.0 | 84.177 | 5.83 | no |
| 8 | `mlx_higgs_audio` | 8 | 34.58 | 29.63 | 90.588 | 21.589 | 0.0 | 0.0 | 0.0 | 49.574 | 63.058 | 0.0 | 11.144 | no |

## 样本摘要

| 项目/模型 | 测试项 | 状态 | ASR | CER | SIM | UTMOS | RTF | 失败原因 |
|---|---|---|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.1143 |  |  | 0.7751 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7591 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.1034 |  |  | 7.4802 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7669 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0833 |  |  | 1.1414 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0556 |  |  | 2.4404 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 5.517 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 5.0499 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.045 |  |  | 4.1525 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0968 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0834 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0109 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0497 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2141 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3477 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1269 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1498 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4049 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6082 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0779 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2231 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2396 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1599 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5401 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1797 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4187 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3101 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 |  |  | 1.1713 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5812 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0214 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9707 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3277 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2355 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8097 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8956 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6535 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8714 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7835 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9792 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1473 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7784 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9802 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.335 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.4404 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0469 |  |  | 1.2554 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1924 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.179 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2402 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3064 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0571 |  |  | 1.2213 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2366 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4766 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2252 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6331 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5889 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7563 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | qwen base yue dialect clone (qwen_base_yue_dialect_clone) | success | qwen3_asr_1_7b_8bit | 0.05 |  |  | 0.8973 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | qwen base sichuan dialect clone (qwen_base_sichuan_dialect_clone) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.6231 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0455 |  |  | 1.6547 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0357 |  |  | 1.3635 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1903 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5023 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.158 | utmos:No module named 'soundfile' |
| `mlx_voxcpm2_bf16_dit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.277 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1089 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.5448 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.6252 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_custom_voice_official_int8` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.04 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_custom_voice_official_int8` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.427 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_custom_voice_official_int8` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.601 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3935 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2438 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1877 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.6614 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.8548 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.4471 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_custom_voice_official_int8` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.188 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7522 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0857 |  |  | 0.8345 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1302 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  |  | 1.158 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0938 |  |  | 1.0773 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0683 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1124 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.12 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1337 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.198 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1869 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0217 |  |  | 1.1741 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0455 |  |  | 1.2739 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1665 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2541 | utmos:No module named 'soundfile' |
| `mlx_dots_tts_full_int8_g64` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0802 | utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 |  |  | 1.4847 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7207 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7823 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6512 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6706 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.65 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_vietnamese_8bit` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.6706 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文三秒目标时长控制 (control_duration_3s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.5445 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文十秒目标时长控制 (control_duration_10s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1568 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文二十秒目标时长控制 (control_duration_20s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4586 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | MOSS 中文显式停顿标记 (moss_pause_markup_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8043 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文三秒目标时长控制 (control_duration_3s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8173 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文十秒目标时长控制 (control_duration_10s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7988 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文二十秒目标时长控制 (control_duration_20s) | success | qwen3_asr_1_7b_8bit | 0.1 |  |  | 0.6198 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3437 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.2812 |  | 3.4024 | 0.7279 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.2857 | 0.721 | 3.7565 | 1.1967 |  |
| `mlx_qwen3_tts_official_int8` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.3561 | 0.5388 |  |
| `mlx_qwen3_tts_official_int8` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4808 | 0.4712 |  |
| `mlx_qwen3_tts_official_int8` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.2322 | 0.4212 |  |
| `mlx_higgs_audio_v3_4b` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.5532 | 1.0808 |  |
| `mlx_higgs_audio_v3_4b` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.1794 | 1.0785 |  |
| `mlx_higgs_audio_v3_4b` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 |  | 3.4709 | 1.2213 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.4739 | 1.0838 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.8599 | 1.2768 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 4.241 | 0.9805 |  |
| `mlx_omnivoice_8bit_trim60` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.5182 | 1.0485 |  |
| `mlx_omnivoice_8bit_trim60` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.0189 | 0.9606 |  |
| `mlx_omnivoice_8bit_trim60` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  | 3.1132 | 1.1089 |  |
| `mlx_omnivoice_8bit_trim60` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0105 |  |
| `mlx_omnivoice_8bit_trim60` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9092 |  |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1825 |  |
| `mlx_omnivoice_8bit_trim60` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8208 |  |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.4857 |  |  | 1.3962 |  |
| `mlx_omnivoice_8bit_trim60` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4287 |  |

## 本地 TTS 覆盖状态

- Inventory CSV：`/Users/vanch/tts-test-project/reports/local_open_tts_inventory.csv`

| 模型 | 状态 | 路径 |
|---|---|---|
| `mlx_indextts2_standard_8bit` | scored | `/Users/vanch/mlx-indextts2` |
| `mlx_indextts2_vietnamese_8bit` | scored | `/Users/vanch/mlx-indextts2` |
| `mlx_voxcpm2_bf16_dit` | scored | `/Users/vanch/mlx-voxcpm2` |
| `mlx_qwen3_tts_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_voice_design_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_qwen3_tts_custom_voice_official_int8` | scored | `/Users/vanch/mlx-qwen3-tts` |
| `mlx_omnivoice_8bit_trim60` | scored | `/Users/vanch/mlx-omnivoice` |
| `mlx_dots_tts_full_int8_g64` | scored | `/Users/vanch/mlx-dots.tts` |
| `mlx_higgs_audio_v3_4b` | scored | `/Users/vanch/mlx-higgs-audio` |
| `mlx_scenema_audio_int8_mlx_mps_service` | scored | `/Users/vanch/mlx-scenema-audio` |
| `mlx_supertonic3_mlx` | installed_unified_adapter | `/Users/vanch/mlx-supertonic` |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | installed_unified_adapter | `/Users/vanch/mlx-Ming-omni-tts` |
| `mlx_zonos2_bf16` | installed_unified_adapter | `/Users/vanch/mlx-ZONOS2` |
| `mlx_moss_tts_local_transformer_v1_5` | scored | `/Users/vanch/mlx-MOSS-TTS-Local-Transformer-v1.5` |
| `mlx_audio_multi_model` | toolkit_not_single_model | `/Users/vanch/mlx-audio` |
| `cloudflare_edge_tts` | excluded_not_open_source_model | `/Users/vanch/cloudflare-edge-tts` |
| `speech_to_speech` | excluded_pipeline_wrapper | `/Users/vanch/speech-to-speech` |

## 结论

- `coverage_pct >= 80` 才进入正式排名准备态；低覆盖样本仍保留用于定位缺失指标。
- 失败项目或缺指标项目不会被伪造成完整分数，阻塞原因写在 `adapter_status` 和 `metric_failures`。
- 结果面板可用 `python scripts/render_dashboard.py --run-id <id>` 生成中文静态音频面板。
