# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`probe_indextts_core_zh_numbers_seed42_20260713`
- 音频异常样本数：`0`
- 性能提示样本数：`1`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_indextts2_standard_8bit` | 0 | 0 | 0 | 1 | 生成过慢=1 |

## mlx_indextts2_standard_8bit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| low | 生成过慢 | 中文数字、时间与订单号朗读 (`core_zh_numbers`) | RTF=2.1252，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
