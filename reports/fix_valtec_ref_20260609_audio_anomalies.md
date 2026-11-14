# TTS 音频异常分类报告

- Run ID：`fix_valtec_ref_20260609`
- 异常样本数：`1`
- 说明：`slow_generation` 是性能异常，不一定代表音频听感错误；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `valtec_vietnamese_tts` | 0 | 0 | 1 | 0 | 内容错误偏高=1 |

## valtec_vietnamese_tts

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | 越南语同语种音色克隆 (`clone_vi_same`) | CER=0.2969，WER=0.3667。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
