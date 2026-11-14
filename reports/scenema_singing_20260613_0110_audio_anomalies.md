# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`scenema_singing_20260613_0110`
- 音频异常样本数：`0`
- 性能提示样本数：`2`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 0 | 0 | 2 | 生成过慢=2 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| low | 生成过慢 | 英文流行歌曲风格 (`voxcpm2_song_en_pop`) | RTF=3.4404，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
| low | 生成过慢 | 中文女声歌曲风格 (`voxcpm2_song_zh_female`) | RTF=3.335，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
