# TTS 音频异常分类报告

- Run ID：`fix_higgs_sampling_batch_20260609`
- 异常样本数：`3`
- 说明：`slow_generation` 是性能异常，不一定代表音频听感错误；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_higgs_audio_v3_4b` | 0 | 0 | 3 | 0 | 内容错误偏高=3 |

## mlx_higgs_audio_v3_4b

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | 英文哭腔控制 token (`control_token_crying`) | CER=0.3433，WER=0.2667。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 中文轻声耳语风格迁移 (`control_whisper_style`) | CER=0.4375，WER=0.4375。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 印地语金额日期朗读 (`core_hi_amount`) | CER=0.0345，WER=0.5。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
