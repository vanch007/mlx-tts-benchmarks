# Low-score retest and optimization queue

- Run ID: `v02_plus_vieneu_lux_scenema_20260610_091619`
- Generated: `2026-07-18T10:25:55`
- Queue rows: `287`

## Summary

| Bucket | Count |
|---|---:|
| `P0` | 10 |
| `P1` | 51 |
| `P2` | 221 |
| `P3` | 5 |

| Issue type | Count |
|---|---:|
| `axis_case_quality_low` | 233 |
| `performance_slow` | 29 |
| `axis_quality_low` | 11 |
| `content_or_audio_anomaly` | 6 |
| `case_quality_low` | 4 |
| `coverage_gap_boundary` | 4 |

## Project queues

Rows marked `coverage_gap_boundary` are not immediate retest work; they document score loss from the benchmark breadth policy or absent official capability.

### mlx_dots_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_style_transfer` 中文播客节奏参考迁移 | 13.926 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=2.9125; rtf=1.7563; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_emotion_prompt_en` 英文疑惑情绪参考迁移 | 20.966 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=4.2145; rtf=1.6331; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_whisper_style` 中文耳语参考风格迁移 | 23.491 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=1.346; rtf=1.5889; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 | 29.909 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=3.0174; rtf=1.4766; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_en_to_zh` 英文参考音色说中文克隆 | 39.634 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=3.0855; rtf=1.3064; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_yue_dialect` 粤语科普播客方言能力 | 41.491 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0455; wer=0.0455; utmos=2.8381; rtf=1.2739; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_vi_same` 越南语参考音色克隆 | 42.549 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0469; wer=0.0526; utmos=2.5124; rtf=1.2554; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `stress_long_zh` 中文长文本连续稳定性 | 42.623 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=2.7507; rtf=1.2541; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_3s_en` 三秒英文短参考音色克隆 | 43.417 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=4.1205; rtf=1.2402; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_zh_to_en` 中文参考音色说英文克隆 | 43.623 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=3.4805; rtf=1.2366; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_quality_low` | RTF 生成效率 |  | 43.853 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_polyglot_obama_es` 英文参考音色说西语克隆 | 44.274 | chosen_model=mlx_dots_tts_full_int8_g64; cer=0.0; wer=0.0; utmos=2.4427; rtf=1.2252; fail_flags=ok | retest this concrete low-scoring case for the affected axis |

### mlx_higgs_audio

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_whisper_style` 中文耳语参考风格迁移 | 7.463 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.1667; wer=0.1667; utmos=1.3938; rtf=1.8694; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_vi_same` 越南语参考音色克隆 | 18.537 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=3.5143; rtf=1.6756; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 | 28.777 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=4.1495; rtf=1.4964; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_vi_reading` 越南语短视频导购朗读 | 30.234 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=4.0864; rtf=1.4709; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_de_instruction` 德语清晰友好指令朗读 | 31.103 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=4.2957; rtf=1.4557; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_style_transfer` 中文播客节奏参考迁移 | 32.314 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=3.0746; rtf=1.4345; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_emotion_happy` 中文开心情绪标签控制 | 34.657 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=2.9518; rtf=1.3935; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `voxcpm2_song_zh_female` 中文女声歌曲风格生成 | 36.371 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0357; wer=0.0357; utmos=4.1153; rtf=1.3635; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_token_laugh` 英文笑声副语言控制 | 37.663 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=3.8305; rtf=1.3409; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_3s_en` 三秒英文短参考音色克隆 | 37.886 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=4.4839; rtf=1.337; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_ko_customer` 韩语客服确认话术朗读 | 38.491 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=4.0467; rtf=1.3264; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_en_same` 英文参考音色克隆 | 38.6 | chosen_model=mlx_higgs_audio_v3_4b; cer=0.0; wer=0.0; utmos=4.0959; rtf=1.3245; fail_flags=ok | retest this concrete low-scoring case for the affected axis |

### mlx_indextts2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_duration_20s` 中文二十秒目标时长控制 | 32.961 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=1.4246; rtf=0.8604; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_duration_10s` 中文十秒目标时长控制 | 41.339 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=1.8714; rtf=1.4544; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `clone_vi_same` 越南语参考音色克隆 | 42.934 | chosen_model=mlx_indextts2_vietnamese_8bit; cer=0.0; wer=0.0; utmos=2.0898; rtf=1.7416; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `stress_long_zh` 中文长文本连续稳定性 | 43.952 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=2.3688; rtf=1.6706; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_emotion_happy` 中文开心情绪标签控制 | 45.188 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=2.3625; rtf=3.0269; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `core_zh_en_codeswitch` 中英混读品牌与订单号朗读 | 46.806 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=2.5448; rtf=1.7823; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `core_zh_numbers` 中文数字、时间与订单号朗读 | 49.581 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0286; wer=0.0286; utmos=2.6936; rtf=1.4847; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_emotion_angry` 中文愤怒情绪标签控制 | 51.601 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=2.5139; rtf=2.3578; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_emotion_sad` 中文悲伤情绪标签控制 | 52.489 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=2.7261; rtf=2.4584; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `clone_zh_same` 中文参考音色克隆 | 55.992 | chosen_model=mlx_indextts2_standard_8bit; cer=0.0; wer=0.0; utmos=2.9289; rtf=1.7716; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_quality_low` | 自然度与音频质量 |  | 59.365 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_3s_en` 三秒英文短参考音色克隆 |  | low/slow_generation: RTF=2.0326，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |

### mlx_ming_omni_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `clone_zh_same` 中文参考音色克隆 | 27.188 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=1.3927; rtf=1.4856; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `stress_long_zh` 中文长文本连续稳定性 | 28.795 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0119; wer=0.0119; utmos=1.3504; rtf=1.2949; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `core_zh_numbers` 中文数字、时间与订单号朗读 | 32.918 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0571; wer=0.0857; utmos=1.6159; rtf=1.78; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `scenema_longform_en` 英文长文本角色连续性 | 35.039 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0526; utmos=1.6218; rtf=1.2974; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `voxcpm2_song_zh_female` 中文女声歌曲风格生成 | 36.117 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=1.7161; rtf=1.3542; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_emotion_angry` 中文愤怒情绪标签控制 | 38.455 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=1.7176; rtf=1.9665; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_voice_design_asmr` 中文近讲 ASMR 女声音色设计 | 43.219 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=2.0445; rtf=1.8342; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `control_voice_design_child` 英文儿童故事女声音色设计 | 45.479 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=2.0922; rtf=1.5781; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `stress_long_en` 英文长文本连续稳定性 | 46.315 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=2.1368; rtf=1.3737; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `core_sichuan_dialect` 四川话日常沟通方言能力 | 51.267 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0; wer=0.0; utmos=2.5529; rtf=1.7935; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_case_quality_low` | 自然度与音频质量 | `core_zh_en_codeswitch` 中英混读品牌与订单号朗读 | 51.548 | chosen_model=mlx_ming_omni_tts_16_8b_a3b_bf16; cer=0.0857; wer=0.1111; utmos=2.5551; rtf=1.9362; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P1 | `axis_quality_low` | 自然度与音频质量 |  | 52.236 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_moss_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P0 | `content_or_audio_anomaly` | 音色克隆与鲁棒性 | `xling_en_to_zh` 英文参考音色说中文克隆 |  | medium/high_content_error: CER=0.25，WER=0.25。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 | 3.571 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=4.0196; rtf=1.9375; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `moss_pause_markup_zh` MOSS 中文显式停顿标记 | 11.183 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=4.3293; rtf=1.8043; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `stress_long_en` 英文长文本连续稳定性 | 43.48 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=4.5359; rtf=1.2391; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_duration_10s` 中文十秒目标时长控制 | 48.183 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=3.8535; rtf=1.1568; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_zh_same` 中文参考音色克隆 | 48.411 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=3.1723; rtf=1.1528; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_en_to_ja` 英文参考音色说日语克隆 | 49.571 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0286; wer=0.0286; utmos=3.7065; rtf=1.1325; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_3s_en` 三秒英文短参考音色克隆 | 52.16 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=4.4981; rtf=1.0872; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_longform_en` 英文长文本角色连续性 | 52.223 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0526; utmos=4.4005; rtf=1.0861; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_hi_amount` 印地语金额、日期和姓名朗读 | 54.206 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=2.7235; rtf=1.0514; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_de_instruction` 德语清晰友好指令朗读 | 54.366 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0; wer=0.0; utmos=4.181; rtf=1.0486; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_ja_reading` 日语汇率新闻朗读 | 55.617 | chosen_model=mlx_moss_tts_local_transformer_v1_5; cer=0.0625; wer=0.0625; utmos=3.6959; rtf=1.0267; fail_flags=ok | retest this concrete low-scoring case for the affected axis |

### mlx_omnivoice

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_polyglot_obama_es` 英文参考音色说西语克隆 | 6.011 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0758; wer=0.1818; utmos=3.1077; rtf=1.8948; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_en_to_zh` 英文参考音色说中文克隆 | 7.183 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.1; wer=0.1; utmos=3.1669; rtf=1.8743; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_duration_3s` 中文三秒目标时长控制 | 10.44 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.2205; rtf=1.8173; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_en_same` 英文参考音色克隆 | 13.623 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.733; rtf=1.7616; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_sichuan_dialect` 四川话日常沟通方言能力 | 14.16 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.4247; rtf=1.7522; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 | 18.446 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.6006; rtf=1.6772; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_vi_reading` 越南语短视频导购朗读 | 31.611 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.0077; rtf=1.4468; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_en_to_ja` 英文参考音色说日语克隆 | 34.503 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0286; wer=0.0286; utmos=3.4897; rtf=1.3962; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_token_laugh` 英文笑声副语言控制 | 37.503 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=4.0566; rtf=1.3437; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_de_instruction` 德语清晰友好指令朗读 | 41.011 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.7177; rtf=1.2823; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_es_question` 西语疑问句语调与停顿 | 44.04 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0; wer=0.0; utmos=3.7207; rtf=1.2293; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_zh_to_en` 中文参考音色说英文克隆 | 44.726 | chosen_model=mlx_omnivoice_8bit_trim60; cer=0.0417; wer=0.1667; utmos=2.7947; rtf=1.2173; fail_flags=ok | retest this concrete low-scoring case for the affected axis |

### mlx_qwen3_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `coverage_gap_boundary` | 多语种能力 |  | 53.863 | missing=core_vi_reading;core_hi_amount;core_ar_names | document capability boundary; do not retest unless a new supported adapter/model is added |

### mlx_scenema_audio

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P0 | `content_or_audio_anomaly` | 内容准确与可懂度 | `core_zh_en_codeswitch` 中英混读品牌与订单号朗读 |  | medium/high_content_error: CER=0.2571，WER=0.1481。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `case_quality_low` | 内容准确与可懂度 | `core_zh_en_codeswitch` 中英混读品牌与订单号朗读 | 55.053 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.2571; wer=0.1481; rtf=0.8685; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P0 | `content_or_audio_anomaly` | 音色克隆与鲁棒性 | `xling_en_to_ja` 英文参考音色说日语克隆 |  | medium/high_content_error: CER=0.2857，WER=0.2857。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `content_or_audio_anomaly` | 多语种能力 | `core_ja_reading` 日语汇率新闻朗读 |  | medium/high_content_error: CER=0.3125，WER=0.3125。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `case_quality_low` | 多语种能力 | `core_hi_amount` 印地语金额、日期和姓名朗读 | 52.347 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.2414; wer=0.3182; rtf=0.8463; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P0 | `case_quality_low` | 多语种能力 | `core_ja_reading` 日语汇率新闻朗读 | 53.379 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.3125; wer=0.3125; rtf=1.6469; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P0 | `content_or_audio_anomaly` | 长文本稳定性 | `stress_long_zh` 中文长文本连续稳定性 |  | medium/high_content_error: CER=0.2857，WER=0.2857。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `case_quality_low` | 长文本稳定性 | `stress_long_zh` 中文长文本连续稳定性 | 35.874 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.2857; wer=0.2857; rtf=0.6752; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_3s_en` 三秒英文短参考音色克隆 |  | low/slow_generation: RTF=2.7417，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_en_same` 英文参考音色克隆 |  | low/slow_generation: RTF=2.3196，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_zh_same` 中文参考音色克隆 |  | low/slow_generation: RTF=3.8007，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 |  | low/slow_generation: RTF=5.517，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |

### mlx_voxcpm2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P0 | `content_or_audio_anomaly` |  | `voxcpm2_minnan_dialect` 闽南语官方样例方言专项 |  | medium/high_content_error: CER=0.4138，WER=0.4138。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_polyglot_obama_es` 英文参考音色说西语克隆 | 10.874 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=2.5861; rtf=1.8097; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_whisper_style` 中文耳语参考风格迁移 | 11.966 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=2.3724; rtf=1.7906; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_style_transfer` 中文播客节奏参考迁移 | 15.0 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=2.5434; rtf=1.7375; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_emotion_prompt_en` 英文疑惑情绪参考迁移 | 19.8 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=4.2839; rtf=1.6535; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_vi_same` 越南语参考音色克隆 | 22.389 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=2.2715; rtf=1.6082; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_zh_to_en` 中文参考音色说英文克隆 | 23.931 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=3.5473; rtf=1.5812; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_en_same` 英文参考音色克隆 | 26.28 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=3.8957; rtf=1.5401; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_emotion_happy` 中文开心情绪标签控制 | 28.44 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=3.8409; rtf=1.5023; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_3s_en` 三秒英文短参考音色克隆 | 33.217 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=4.4028; rtf=1.4187; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_vi_reading` 越南语短视频导购朗读 | 34.006 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=3.7044; rtf=1.4049; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_es_question` 西语疑问句语调与停顿 | 37.274 | chosen_model=mlx_voxcpm2_bf16_dit; cer=0.0; wer=0.0; utmos=2.8458; rtf=1.3477; fail_flags=ok | retest this concrete low-scoring case for the affected axis |

### mlx_zonos2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_case_quality_low` | RTF 生成效率 | `clone_vi_same` 越南语参考音色克隆 | 16.617 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=3.1654; rtf=1.7092; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_zh_en_codeswitch` 中英混读品牌与订单号朗读 | 24.143 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=2.3778; rtf=1.5775; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_ar_names` 阿拉伯语城市名与数字朗读 | 28.297 | chosen_model=mlx_zonos2_bf16; cer=0.0217; wer=0.1111; utmos=2.6867; rtf=1.5048; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_de_instruction` 德语清晰友好指令朗读 | 30.463 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=3.3385; rtf=1.4669; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `xling_en_to_zh` 英文参考音色说中文克隆 | 36.703 | chosen_model=mlx_zonos2_bf16; cer=0.05; wer=0.05; utmos=4.0645; rtf=1.3577; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `scenema_longform_en` 英文长文本角色连续性 | 37.657 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=4.4248; rtf=1.341; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `control_emotion_happy` 中文开心情绪标签控制 | 38.274 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=3.4515; rtf=1.3302; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `stress_long_en` 英文长文本连续稳定性 | 41.257 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=3.8088; rtf=1.278; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_ko_customer` 韩语客服确认话术朗读 | 41.429 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=2.4778; rtf=1.275; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_quality_low` | RTF 生成效率 |  | 41.922 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `core_vi_reading` 越南语短视频导购朗读 | 43.474 | chosen_model=mlx_zonos2_bf16; cer=0.12; wer=0.1333; utmos=1.8469; rtf=1.2392; fail_flags=ok | retest this concrete low-scoring case for the affected axis |
| P2 | `axis_case_quality_low` | RTF 生成效率 | `stress_long_zh` 中文长文本连续稳定性 | 43.766 | chosen_model=mlx_zonos2_bf16; cer=0.0; wer=0.0; utmos=2.5204; rtf=1.2341; fail_flags=ok | retest this concrete low-scoring case for the affected axis |

