# Low-score retest and optimization queue

- Run ID: `v02_plus_vieneu_lux_scenema_20260610_091619`
- Generated: `2026-07-14T19:11:21`
- Queue rows: `57`

## Summary

| Bucket | Count |
|---|---:|
| `P0` | 5 |
| `P1` | 31 |
| `P2` | 16 |
| `P3` | 5 |

| Issue type | Count |
|---|---:|
| `coverage_gap_retestable` | 36 |
| `performance_slow` | 13 |
| `content_or_audio_anomaly` | 3 |
| `case_quality_low` | 2 |
| `axis_quality_low` | 2 |
| `coverage_gap_boundary` | 1 |

## Project queues

Rows marked `coverage_gap_boundary` are not immediate retest work; they document score loss from the benchmark breadth policy or absent official capability.

### mlx_dots_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_quality_low` | RTF 生成效率 |  | 43.853 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_higgs_audio

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `coverage_gap_retestable` | 自然度与音频质量 |  | 21.589 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names;clone_en_same;clone_zh_same;clone_3 | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 音色克隆与鲁棒性 |  | 0.0 | missing=clone_en_same;clone_zh_same;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_en_to_ja;xling_zh_to_en;scenema_polyglot_obama_es | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 多语种能力 |  | 0.0 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 情绪、风格与韵律控制 |  | 49.574 | missing=control_emotion_prompt_en;control_whisper_style;control_style_transfer | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 长文本稳定性 |  | 0.0 | missing=stress_long_zh;stress_long_en;scenema_longform_en | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | RTF 生成效率 |  | 11.144 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names;clone_en_same;clone_zh_same;clone_3 | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 复杂文本与副语言能力 |  | 63.058 | missing=control_token_laugh | retest missing officially supported cases |

### mlx_indextts2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `coverage_gap_retestable` | 自然度与音频质量 |  | 27.32 | missing=clone_en_same;clone_zh_same;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_zh_to_en;control_emotion_happy;control_emotion_sad;control_emotion_angry; | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 音色克隆与鲁棒性 |  | 0.0 | missing=clone_en_same;clone_zh_same;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_zh_to_en | retest missing officially supported cases |
| P1 | `performance_slow` | 多语种能力 | `core_vi_reading` 越南语短视频导购朗读 |  | low/slow_generation: RTF=2.6706，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `coverage_gap_boundary` | 多语种能力 |  | 12.5 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_hi_amount;core_ar_names | document capability boundary; do not retest unless a new supported adapter/model is added |
| P1 | `coverage_gap_retestable` | 情绪、风格与韵律控制 |  | 0.0 | missing=control_emotion_happy;control_emotion_sad;control_emotion_angry;control_duration_3s;control_duration_10s;control_duration_20s | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | RTF 生成效率 |  | 5.83 | missing=clone_en_same;clone_zh_same;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_zh_to_en;control_emotion_happy;control_emotion_sad;control_emotion_angry; | retest missing officially supported cases |

### mlx_moss_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `coverage_gap_retestable` | 自然度与音频质量 |  | 23.118 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names;core_yue_dialect;clone_en_same;clon | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 音色克隆与鲁棒性 |  | 0.0 | missing=clone_en_same;clone_zh_same;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_en_to_ja;xling_zh_to_en;scenema_polyglot_obama_es | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 多语种能力 |  | 0.0 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 长文本稳定性 |  | 0.0 | missing=stress_long_zh;stress_long_en;scenema_longform_en | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 方言能力 |  | 0.0 | missing=core_yue_dialect | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | RTF 生成效率 |  | 13.663 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names;core_yue_dialect;clone_en_same;clon | retest missing officially supported cases |

### mlx_omnivoice

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P0 | `content_or_audio_anomaly` | 音色克隆与鲁棒性 | `xling_en_to_ja` 英文参考音色说日语克隆 |  | medium/high_content_error: CER=0.4857，WER=0.4857。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `case_quality_low` | 音色克隆与鲁棒性 | `xling_en_to_ja` 英文参考音色说日语克隆 | 37.755 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.4857; wer=0.4857; rtf=1.3962; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P1 | `coverage_gap_retestable` | 自然度与音频质量 |  | 43.06 | missing=core_ko_customer;core_es_question;core_de_instruction;core_vi_reading;core_ar_names;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_zh_to_en;scenema_ | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 音色克隆与鲁棒性 |  | 26.417 | missing=clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_zh_to_en;scenema_polyglot_obama_es | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 多语种能力 |  | 25.0 | missing=core_ko_customer;core_es_question;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 情绪、风格与韵律控制 |  | 50.737 | missing=control_voice_design_child;control_voice_design_asmr | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 长文本稳定性 |  | 29.271 | missing=stress_long_en;scenema_longform_en | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | RTF 生成效率 |  | 25.043 | missing=core_ko_customer;core_es_question;core_de_instruction;core_vi_reading;core_ar_names;clone_3s_en;clone_vi_same;scenema_clone_tarkin_en;xling_en_to_zh;xling_zh_to_en;scenema_ | retest missing officially supported cases |

### mlx_qwen3_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `coverage_gap_retestable` | 自然度与音频质量 |  | 26.782 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_yue_dialect;clone_en_same;clone_zh_same;clone_3s_en;scenema_clone_tarkin_en | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 音色克隆与鲁棒性 |  | 0.0 | missing=clone_en_same;clone_zh_same;clone_3s_en;scenema_clone_tarkin_en | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 多语种能力 |  | 0.0 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 情绪、风格与韵律控制 |  | 49.574 | missing=control_voice_design_child;control_voice_design_asmr;control_voice_design_sports | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 长文本稳定性 |  | 0.0 | missing=stress_long_zh;stress_long_en;scenema_longform_en | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | RTF 生成效率 |  | 23.137 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_yue_dialect;clone_en_same;clone_zh_same;clone_3s_en;scenema_clone_tarkin_en | retest missing officially supported cases |
| P2 | `coverage_gap_retestable` | 方言能力 |  | 50.0 | missing=core_yue_dialect | retest missing officially supported cases |

### mlx_scenema_audio

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P0 | `content_or_audio_anomaly` | 音色克隆与鲁棒性 | `xling_en_to_ja` 英文参考音色说日语克隆 |  | medium/high_content_error: CER=0.2857，WER=0.2857。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `content_or_audio_anomaly` | 多语种能力 | `core_ja_reading` 日语汇率新闻朗读 |  | medium/high_content_error: CER=0.2812，WER=0.2812。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `case_quality_low` | 多语种能力 | `core_ja_reading` 日语汇率新闻朗读 | 52.915 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.2812; wer=0.2812; rtf=0.7279; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P1 | `coverage_gap_retestable` | 内容准确与可懂度 |  | 56.421 | missing=core_zh_en_codeswitch | retest missing officially supported cases |
| P1 | `coverage_gap_retestable` | 自然度与音频质量 |  | 50.181 | missing=core_zh_en_codeswitch;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;clone_en_same;clone_zh_same;clone_3s_en;xling_en_to_zh;xling_zh_to_en;stre | retest missing officially supported cases |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 |  | low/slow_generation: RTF=5.517，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `scenema_polyglot_obama_es` 英文参考音色说西语克隆 |  | low/slow_generation: RTF=5.0499，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `coverage_gap_retestable` | 音色克隆与鲁棒性 |  | 31.002 | missing=clone_en_same;clone_zh_same;clone_3s_en;xling_en_to_zh;xling_zh_to_en | retest missing officially supported cases |
| P1 | `performance_slow` | 多语种能力 | `core_hi_amount` 印地语金额、日期和姓名朗读 |  | low/slow_generation: RTF=7.4802，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `coverage_gap_retestable` | 多语种能力 |  | 14.834 | missing=core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_ar_names | retest missing officially supported cases |
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_angry` 中文愤怒情绪标签控制 |  | low/slow_generation: RTF=3.4471，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_happy` 中文开心情绪标签控制 |  | low/slow_generation: RTF=3.6614，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |

### mlx_voxcpm2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_quality_low` | RTF 生成效率 |  | 42.245 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

