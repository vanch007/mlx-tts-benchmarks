# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`scenema_voice_design_fix_20260613_0126`
- 音频异常样本数：`3`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_scenema_audio_int8_mlx_mps_service` | 0 | 1 | 2 | 0 | 内容严重错误=1；内容错误偏高=1；疑似底噪/杂音=1 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| high | 内容严重错误 | 西语体育解说音色设计 (`control_voice_design_sports`) | CER=0.8333，内容几乎不可对齐。 | 优先人工试听；若确认异常，修正语言/提示词/参考文本或从该模型能力边界移除。 |
| medium | 内容错误偏高 | 中文 ASMR 音色设计 (`control_voice_design_asmr`) | CER=0.25，WER=0.25。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
| medium | 疑似底噪/杂音 | 西语体育解说音色设计 (`control_voice_design_sports`) | 噪声底约 -24.456 dBFS，语音/底噪差约 6.753 dB。 | 优先试听确认是否有持续底噪、嗡声或电流声；若确认，检查 vocoder、参考音频清洗和后处理增益。 |
