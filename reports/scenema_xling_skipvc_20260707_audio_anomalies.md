# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`scenema_xling_skipvc_20260707`
- 音频异常样本数：`1`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 1 | 0 | 0 | 内容严重错误=1 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| high | 内容严重错误 | 英文参考音色说日语克隆 (`xling_en_to_ja`) | CER=2.4286，内容几乎不可对齐。 | 优先人工试听；若确认异常，修正语言/提示词/参考文本或从该模型能力边界移除。 |
