# Low-score retest and optimization queue

- Run ID: `v02_plus_vieneu_lux_scenema_20260610_091619`
- Generated: `2026-07-07T22:45:14`
- Queue rows: `63`

## Summary

| Bucket | Count |
|---|---:|
| `P0` | 4 |
| `P1` | 43 |
| `P2` | 9 |
| `P3` | 7 |

| Issue type | Count |
|---|---:|
| `performance_slow` | 44 |
| `axis_quality_low` | 11 |
| `coverage_gap_boundary` | 4 |
| `content_or_audio_anomaly` | 2 |
| `case_quality_low` | 2 |

## Project queues

Rows marked `coverage_gap_boundary` are not immediate retest work; they document score loss from the benchmark breadth policy or absent official capability.

### mlx_dots_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_quality_low` | RTF 生成效率 |  | 43.41 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_higgs_audio

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_quality_low` | RTF 生成效率 |  | 40.784 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_indextts2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `performance_slow` | 内容准确与可懂度 | `core_en_numbers` 英文数字、时间与价格朗读 |  | low/slow_generation: RTF=3.2251，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 内容准确与可懂度 | `core_zh_numbers` 中文数字、时间与订单号朗读 |  | low/slow_generation: RTF=3.1022，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `axis_quality_low` | 自然度与音频质量 |  | 57.623 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_3s_en` 三秒英文短参考音色克隆 |  | low/slow_generation: RTF=3.9071，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_en_same` 英文参考音色克隆 |  | low/slow_generation: RTF=2.8211，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_vi_same` 越南语参考音色克隆 |  | low/slow_generation: RTF=4.0665，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_zh_same` 中文参考音色克隆 |  | low/slow_generation: RTF=2.128，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 |  | low/slow_generation: RTF=2.2212，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `xling_en_to_zh` 英文参考音色说中文克隆 |  | low/slow_generation: RTF=2.7283，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `xling_zh_to_en` 中文参考音色说英文克隆 |  | low/slow_generation: RTF=2.9275，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 多语种能力 | `core_vi_reading` 越南语短视频导购朗读 |  | low/slow_generation: RTF=3.5241，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `coverage_gap_boundary` | 多语种能力 |  | 11.381 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_hi_amount;core_ar_names | document capability boundary; do not retest unless a new supported adapter/model is added |

### mlx_ming_omni_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `axis_quality_low` | 自然度与音频质量 |  | 49.31 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_en_same` 英文参考音色克隆 |  | low/slow_generation: RTF=2.163，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `coverage_gap_boundary` | 多语种能力 |  | 0.0 | missing=core_ja_reading;core_ko_customer;core_es_question;core_fr_long_sentence;core_de_instruction;core_vi_reading;core_hi_amount;core_ar_names | document capability boundary; do not retest unless a new supported adapter/model is added |
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_angry` 中文愤怒情绪标签控制 |  | low/slow_generation: RTF=2.6566，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_happy` 中文开心情绪标签控制 |  | low/slow_generation: RTF=3.1698，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_voice_design_asmr` 中文近讲 ASMR 女声音色设计 |  | low/slow_generation: RTF=2.2803，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P2 | `axis_quality_low` | RTF 生成效率 |  | 16.752 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_moss_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_quality_low` | RTF 生成效率 |  | 53.418 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_omnivoice

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P2 | `axis_quality_low` | RTF 生成效率 |  | 43.589 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |
| P3 | `performance_slow` | 方言能力 | `core_sichuan_dialect` 四川话日常沟通方言能力 |  | low/slow_generation: RTF=2.0198，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |

### mlx_qwen3_tts

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `coverage_gap_boundary` | 多语种能力 |  | 55.235 | missing=core_vi_reading;core_hi_amount;core_ar_names | document capability boundary; do not retest unless a new supported adapter/model is added |

### mlx_scenema_audio

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P0 | `content_or_audio_anomaly` | 音色克隆与鲁棒性 | `xling_en_to_ja` 英文参考音色说日语克隆 |  | medium/high_content_error: CER=0.3714，WER=0.3714。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `content_or_audio_anomaly` | 多语种能力 | `core_ja_reading` 日语汇率新闻朗读 |  | medium/high_content_error: CER=0.2812，WER=0.2812。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| P0 | `case_quality_low` | 多语种能力 | `core_ja_reading` 日语汇率新闻朗读 | 52.915 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.2812; wer=0.2812; rtf=1.2672; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P0 | `case_quality_low` | 长文本稳定性 | `stress_long_zh` 中文长文本连续稳定性 | 44.02 | chosen_model=mlx_scenema_audio_int8_mlx_mps_service; cer=0.2024; wer=0.2024; rtf=0.758; fail_flags=ok | inspect adapter parameters/stdout/stderr and retest this case |
| P1 | `performance_slow` | 内容准确与可懂度 | `core_en_numbers` 英文数字、时间与价格朗读 |  | low/slow_generation: RTF=2.4717，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 内容准确与可懂度 | `core_zh_en_codeswitch` 中英混读品牌与订单号朗读 |  | low/slow_generation: RTF=2.6187，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 内容准确与可懂度 | `core_zh_numbers` 中文数字、时间与订单号朗读 |  | low/slow_generation: RTF=2.211，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_3s_en` 三秒英文短参考音色克隆 |  | low/slow_generation: RTF=2.7417，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_en_same` 英文参考音色克隆 |  | low/slow_generation: RTF=2.3196，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `clone_zh_same` 中文参考音色克隆 |  | low/slow_generation: RTF=3.8007，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `scenema_clone_tarkin_en` 英文表演式参考音色克隆 |  | low/slow_generation: RTF=5.517，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 音色克隆与鲁棒性 | `scenema_polyglot_obama_es` 英文参考音色说西语克隆 |  | low/slow_generation: RTF=5.0499，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |

### mlx_voxcpm2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_happy` 中文开心情绪标签控制 |  | low/slow_generation: RTF=2.8254，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_prompt_en` 英文疑惑情绪参考迁移 |  | low/slow_generation: RTF=2.1109，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P2 | `axis_quality_low` | RTF 生成效率 |  | 40.742 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

### mlx_zonos2

| Priority | Type | Axis | Case | Score | Evidence | Action |
|---|---|---|---|---:|---|---|
| P1 | `performance_slow` | 情绪、风格与韵律控制 | `control_emotion_happy` 中文开心情绪标签控制 |  | low/slow_generation: RTF=3.1086，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| P2 | `axis_quality_low` | RTF 生成效率 |  | 39.388 | axis quality score below 70 with sufficient coverage | inspect low-scoring cases inside this axis and retest with parameter/code fixes |

