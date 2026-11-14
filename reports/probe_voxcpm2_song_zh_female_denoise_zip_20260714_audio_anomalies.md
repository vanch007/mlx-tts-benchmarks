# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`probe_voxcpm2_song_zh_female_denoise_zip_20260714`
- 音频异常样本数：`1`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_voxcpm2_bf16_dit` | 0 | 0 | 1 | 0 | 疑似底噪/杂音=1 |

## mlx_voxcpm2_bf16_dit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 疑似底噪/杂音 | 中文女声歌曲风格生成 (`voxcpm2_song_zh_female`) | 噪声底约 -31.762 dBFS，语音/底噪差约 15.071 dB。 | 优先试听确认是否有持续底噪、嗡声或电流声；若确认，检查 vocoder、参考音频清洗和后处理增益。 |
