# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`probe_voxcpm2_happy_current_20260713b`
- 音频异常样本数：`0`
- 性能提示样本数：`1`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_voxcpm2_bf16_dit` | 0 | 0 | 0 | 1 | 生成过慢=1 |

## mlx_voxcpm2_bf16_dit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| low | 生成过慢 | 中文开心情绪标签控制 (`control_emotion_happy`) | RTF=3.0315，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
