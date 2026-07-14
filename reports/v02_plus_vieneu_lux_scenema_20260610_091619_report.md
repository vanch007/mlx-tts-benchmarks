# mlx-tts-benchmark - 汇总报表

- Run ID：`v02_plus_vieneu_lux_scenema_20260610_091619`。
- 指标 CSV：`/Users/vanch/tts-test-project/results/v02_plus_vieneu_lux_scenema_20260610_091619/metrics.csv`。
- 标准：`configs/capability_radar_research_zh.json`，9 项研究版 TTS 能力雷达评分；逐样本客观指标仍保留在 metrics/scored CSV。
- 口径：优先使用新 run 的 manifest/metrics；缺少 `--run-id` 或新 metrics 不存在时回退历史 pilot8/full64。
- 已从主评分隐藏 34 条能力边界外、诊断或专项记录；这些项目不进入主榜和样本摘要，边界内专项可在试听页按层级查看。

## 榜单

| 排名 | 项目 | 评分样本数 | 能力总分 | 能力覆盖率 | 内容准确与可懂度 | 自然度与音频质量 | 多语种能力 | 方言能力 | 音色克隆与鲁棒性 | 情绪、风格与韵律控制 | 复杂文本与副语言能力 | 长文本稳定性 | RTF 生成效率 | 可排名 |
|---:|---|---:|---:|---:|---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---:|---|
| 1 | `mlx_voxcpm2` | 36 | 95.037 | 100.0 | 100.0 | 91.011 | 100.0 | 100.0 | 96.927 | 96.943 | 96.46 | 93.625 | 42.245 | yes |
| 2 | `mlx_moss_tts` | 28 | 93.38 | 100.0 | 100.0 | 90.63 | 98.52 | 100.0 | 91.339 | 86.998 | 100.0 | 93.625 | 57.024 | yes |
| 3 | `mlx_omnivoice` | 30 | 91.974 | 98.611 | 100.0 | 91.454 | 87.5 | 95.687 | 92.236 | 88.71 | 99.579 | 91.804 | 45.175 | yes |
| 4 | `mlx_higgs_audio` | 32 | 90.36 | 88.889 | 97.054 | 91.168 | 100.0 | 0.0 | 92.457 | 96.854 | 96.391 | 91.489 | 39.019 | yes |
| 5 | `mlx_qwen3_tts` | 23 | 88.928 | 84.722 | 100.0 | 90.716 | 62.5 | 100.0 | 98.214 | 97.477 | 0.0 | 93.625 | 78.161 | yes |
| 6 | `mlx_zonos2` | 26 | 88.715 | 77.778 | 100.0 | 91.238 | 99.075 | 0.0 | 93.693 | 99.147 | 0.0 | 93.195 | 41.707 | no |
| 7 | `mlx_dots_tts` | 27 | 88.285 | 88.889 | 89.517 | 89.767 | 96.313 | 91.375 | 95.033 | 97.055 | 0.0 | 93.625 | 43.853 | yes |
| 8 | `mlx_ming_omni_tts` | 19 | 80.709 | 88.889 | 91.63 | 91.648 | 0.0 | 100.0 | 98.214 | 99.221 | 96.46 | 92.851 | 16.14 | yes |
| 9 | `mlx_scenema_audio` | 28 | 80.388 | 86.111 | 83.862 | 89.618 | 64.611 | 0.0 | 90.628 | 93.117 | 96.46 | 75.178 | 19.408 | yes |
| 10 | `mlx_indextts2` | 20 | 75.177 | 68.056 | 97.437 | 86.1 | 12.5 | 0.0 | 97.959 | 91.552 | 0.0 | 84.177 | 11.961 | no |
| 11 | `mlx_supertonic` | 11 | 65.216 | 55.556 | 100.0 | 92.942 | 100.0 | 0.0 | 0.0 | 0.0 | 0.0 | 95.37 | 100.0 | no |

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
| `mlx_scenema_audio_int8_mlx_mps_service` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.2812 |  |  | 1.2672 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.3429 | 0.7757 | 3.3869 | 1.288 |  |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.2024 |  |  | 0.758 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2949 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.9375 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文疑惑情绪参考迁移 (control_emotion_prompt_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6251 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文耳语参考风格迁移 (control_whisper_style) | success | qwen3_asr_1_7b_8bit | 0.1667 |  |  | 1.8694 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.9665 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8342 | utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.0269 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.2212 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.0326 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.0884 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.1944 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7976 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3302 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7935 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7675 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文女声歌曲风格生成 (voxcpm2_song_zh_female) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3542 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2974 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.6813 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.122 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.459 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4393 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4395 | utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.3578 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.1143 |  |  | 1.517 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7716 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0286 |  |  | 1.2775 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2028 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1275 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4709 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0514 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.2 | 0.8635 | 4.3414 | 0.8911 |  |
| `mlx_moss_tts_local_transformer_v1_5` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8306 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0103 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1029 | utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.4584 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4591 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1436 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.469 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.5369 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4709 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4743 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.5847 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.4659 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7712 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.3289 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.3723 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7616 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9219 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9296 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 |  |  | 1.8743 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3313 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0417 | 0.8242 | 2.7947 | 1.2173 |  |
| `mlx_higgs_audio_v3_4b` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.461 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2171 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2883 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4557 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1962 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2041 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3245 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0862 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3801 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.1 |  |  | 1.1492 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2133 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0476 |  |  | 0.8107 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9758 | utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.8211 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7755 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6756 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_vietnamese_8bit` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7416 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_voice_design_official_int8` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.5211 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_voice_design_official_int8` | 中文近讲 ASMR 女声音色设计 (control_voice_design_asmr) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.467 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_voice_design_official_int8` | 西语体育解说角色音色设计 (control_voice_design_sports) | success | qwen3_asr_1_7b_8bit | 0.0556 |  |  | 0.5437 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3335 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1371 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.068 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1136 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2293 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9938 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2823 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4468 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2133 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7061 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.52 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 中文播客节奏参考迁移 (control_style_transfer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4345 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文笑声副语言控制 (control_token_laugh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3409 | utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文三秒目标时长控制 (control_duration_3s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 4.6316 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文十秒目标时长控制 (control_duration_10s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4544 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_indextts2_standard_8bit` | 中文二十秒目标时长控制 (control_duration_20s) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8604 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8882 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1235 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 四川话日常沟通方言能力 (core_sichuan_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.6192 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文数字、时间与订单号朗读 (core_zh_numbers) | success | qwen3_asr_1_7b_8bit | 0.0286 |  |  | 1.78 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.9019 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0571 |  |  | 1.9362 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 粤语科普播客方言能力 (core_yue_dialect) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.9816 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.163 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4856 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.9926 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文儿童故事女声音色设计 (control_voice_design_child) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5781 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3979 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 中文开心情绪标签控制 (control_emotion_happy) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.1698 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文流行歌曲风格生成 (voxcpm2_song_en_pop) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7995 | utmos:No module named 'soundfile' |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3737 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2045 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5775 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.205 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.275 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2188 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1926 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5643 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2392 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7092 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0345 |  |  | 1.1967 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.5048 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0385 |  |  | 1.2297 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1907 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2014 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.05 |  |  | 1.3577 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0571 |  |  | 1.1963 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2057 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1924 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2105 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.341 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文悲伤情绪标签控制 (control_emotion_sad) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0597 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文愤怒情绪标签控制 (control_emotion_angry) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0052 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0119 |  |  | 1.2341 | utmos:No module named 'soundfile' |
| `mlx_zonos2_bf16` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.278 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0103 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0267 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8389 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8801 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0199 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0486 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9374 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 越南语参考音色克隆 (clone_vi_same) | success | qwen3_asr_1_7b_8bit | 0.0156 |  |  | 0.8631 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0217 |  |  | 0.6575 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.8821 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1528 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0872 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色说日语克隆 (xling_en_to_ja) | success | qwen3_asr_1_7b_8bit | 0.0286 |  |  | 1.1325 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0833 |  |  | 0.9639 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.88 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.0861 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 中文长文本连续稳定性 (stress_long_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.9855 | utmos:No module named 'soundfile' |
| `mlx_moss_tts_local_transformer_v1_5` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.2391 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 英文数字、时间与价格朗读 (core_en_numbers) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0646 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 日语汇率新闻朗读 (core_ja_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0884 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0875 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0863 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.064 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.092 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 越南语短视频导购朗读 (core_vi_reading) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0699 | asr_whisper:missing cached whisper model: mlx-community/whisper-large-v3-turbo;utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 印地语金额、日期和姓名朗读 (core_hi_amount) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0912 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 阿拉伯语城市名与数字朗读 (core_ar_names) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0759 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0366 | utmos:No module named 'soundfile' |
| `mlx_supertonic3_mlx` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.0422 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中英混读品牌与订单号朗读 (core_zh_en_codeswitch) | success | qwen3_asr_1_7b_8bit | 0.0571 |  |  | 0.8685 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 韩语客服确认话术朗读 (core_ko_customer) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 5.0327 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 西语疑问句语调与停顿 (core_es_question) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.7345 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 法语长句呼吸与音色稳定 (core_fr_long_sentence) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.3636 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 德语清晰友好指令朗读 (core_de_instruction) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.768 | utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色克隆 (clone_en_same) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.3196 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文参考音色克隆 (clone_zh_same) | success | qwen3_asr_1_7b_8bit | 0.1 |  |  | 3.8007 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 三秒英文短参考音色克隆 (clone_3s_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 2.7417 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文参考音色说中文克隆 (xling_en_to_zh) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 4.4769 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 中文参考音色说英文克隆 (xling_zh_to_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 3.289 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_scenema_audio_int8_mlx_mps_service` | 英文长文本连续稳定性 (stress_long_en) | success | qwen3_asr_1_7b_8bit | 0.0189 |  |  | 3.3303 | utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8944 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_qwen3_tts_official_int8` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.3475 | utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.6772 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.8948 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_omnivoice_8bit_trim60` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.01 |  |  | 0.651 | utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文表演式参考音色克隆 (scenema_clone_tarkin_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.4964 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文参考音色说西语克隆 (scenema_polyglot_obama_es) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 1.1845 | sim:No module named 'librosa';utmos:No module named 'soundfile' |
| `mlx_higgs_audio_v3_4b` | 英文长文本角色连续性 (scenema_longform_en) | success | qwen3_asr_1_7b_8bit | 0.0 |  |  | 0.7642 | utmos:No module named 'soundfile' |

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
| `mlx_supertonic3_mlx` | scored | `/Users/vanch/mlx-supertonic` |
| `mlx_ming_omni_tts_16_8b_a3b_bf16` | scored | `/Users/vanch/mlx-Ming-omni-tts` |
| `mlx_zonos2_bf16` | scored | `/Users/vanch/mlx-ZONOS2` |
| `mlx_moss_tts_local_transformer_v1_5` | scored | `/Users/vanch/mlx-MOSS-TTS-Local-Transformer-v1.5` |
| `mlx_audio_multi_model` | toolkit_not_single_model | `/Users/vanch/mlx-audio` |
| `cloudflare_edge_tts` | excluded_not_open_source_model | `/Users/vanch/cloudflare-edge-tts` |
| `speech_to_speech` | excluded_pipeline_wrapper | `/Users/vanch/speech-to-speech` |

## 结论

- `coverage_pct >= 80` 才进入正式排名准备态；低覆盖样本仍保留用于定位缺失指标。
- 失败项目或缺指标项目不会被伪造成完整分数，阻塞原因写在 `adapter_status` 和 `metric_failures`。
- 结果面板可用 `python scripts/render_dashboard.py --run-id <id>` 生成中文静态音频面板。
