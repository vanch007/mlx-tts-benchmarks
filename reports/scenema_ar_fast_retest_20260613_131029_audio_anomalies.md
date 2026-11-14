# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`scenema_ar_fast_retest_20260613_131029`
- 音频异常样本数：`8`
- 性能提示样本数：`1`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 0 | 8 | 1 | 内容错误偏高=4；语速异常=4；生成过慢=1 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | CER=0.1739，WER=0.5556。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | CER=0.1739，WER=0.5556。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | CER=0.1739，WER=0.5556。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | CER=0.2391，WER=0.7778。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 语速异常 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | 语速偏慢，约 0.5996 token/s，语速分 0.0。 | 复核音频是否过快/过慢；若确认，调整 speed/length/max-token 参数或把该样本标为模型语速控制缺陷。 |
| medium | 语速异常 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | 语速偏慢，约 0.5996 token/s，语速分 0.0。 | 复核音频是否过快/过慢；若确认，调整 speed/length/max-token 参数或把该样本标为模型语速控制缺陷。 |
| medium | 语速异常 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | 语速偏慢，约 0.5996 token/s，语速分 0.0。 | 复核音频是否过快/过慢；若确认，调整 speed/length/max-token 参数或把该样本标为模型语速控制缺陷。 |
| medium | 语速异常 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | 语速偏慢，约 0.602 token/s，语速分 0.2。 | 复核音频是否过快/过慢；若确认，调整 speed/length/max-token 参数或把该样本标为模型语速控制缺陷。 |
| low | 生成过慢 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | RTF=2.3463，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
