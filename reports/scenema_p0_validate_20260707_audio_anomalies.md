# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`scenema_p0_validate_20260707`
- 音频异常样本数：`3`
- 性能提示样本数：`3`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 0 | 3 | 3 | 内容错误偏高=3；生成过慢=3 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | 日语汇率新闻朗读 (`core_ja_reading`) | CER=0.3438，WER=0.3438。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 中文长文本连续稳定性 (`stress_long_zh`) | CER=0.2976，WER=0.2976。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 内容错误偏高 | 英文参考音色说日语克隆 (`xling_en_to_ja`) | CER=0.4286，WER=0.4286。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| low | 生成过慢 | 日语汇率新闻朗读 (`core_ja_reading`) | RTF=4.4976，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| low | 生成过慢 | 中文长文本连续稳定性 (`stress_long_zh`) | RTF=3.3474，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| low | 生成过慢 | 英文参考音色说日语克隆 (`xling_en_to_ja`) | RTF=4.9845，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
