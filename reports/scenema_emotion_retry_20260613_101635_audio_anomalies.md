# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`scenema_emotion_retry_20260613_101635`
- 音频异常样本数：`0`
- 性能提示样本数：`3`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 0 | 0 | 3 | 生成过慢=3 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| low | 生成过慢 | 中文愤怒情绪控制 (`control_emotion_angry`) | RTF=3.4471，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| low | 生成过慢 | 中文开心情绪控制 (`control_emotion_happy`) | RTF=3.6614，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| low | 生成过慢 | 中文悲伤情绪控制 (`control_emotion_sad`) | RTF=2.8548，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
