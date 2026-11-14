# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`scenema_p0_seed42_20260707`
- 音频异常样本数：`2`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 0 | 2 | 0 | 内容错误偏高=2 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | 日语汇率新闻朗读 (`core_ja_reading`) | CER=0.3125，WER=0.3125。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 英文参考音色说日语克隆 (`xling_en_to_ja`) | CER=0.5429，WER=0.5429。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
