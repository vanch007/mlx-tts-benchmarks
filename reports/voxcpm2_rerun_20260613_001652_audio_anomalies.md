# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`voxcpm2_rerun_20260613_001652`
- 音频异常样本数：`5`
- 性能提示样本数：`1`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_voxcpm2_bf16_dit` | 2 | 0 | 3 | 1 | 疑似底噪/杂音=3；生成失败/跳过=2；生成过慢=1 |

## mlx_voxcpm2_bf16_dit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| critical | 生成失败/跳过 | 中文噪声参考音频克隆压力测试 (`stress_noisy_ref_clone`) | adapter_status=blocked; missing or unsupported reference audio: | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 中文手机录音参考克隆压力测试 (`stress_phone_ref_clone`) | adapter_status=blocked; missing or unsupported reference audio: | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| medium | 疑似底噪/杂音 | 西语疑问句自然语调 (`core_es_question`) | 噪声底约 -32.018 dBFS，语音/底噪差约 15.139 dB。 | 优先试听确认是否有持续底噪、嗡声或电流声；若确认，检查 vocoder、参考音频清洗和后处理增益。 |
| medium | 疑似底噪/杂音 | VoxCPM2 陕西话方言朗读 (`voxcpm2_shaanxi_dialect`) | 噪声底约 -32.232 dBFS，语音/底噪差约 16.581 dB。 | 优先试听确认是否有持续底噪、嗡声或电流声；若确认，检查 vocoder、参考音频清洗和后处理增益。 |
| medium | 疑似底噪/杂音 | VoxCPM2 山东话方言朗读 (`voxcpm2_shandong_dialect`) | 噪声底约 -32.965 dBFS，语音/底噪差约 15.926 dB。 | 优先试听确认是否有持续底噪、嗡声或电流声；若确认，检查 vocoder、参考音频清洗和后处理增益。 |
| low | 生成过慢 | 英语疑惑情绪提示克隆 (`control_emotion_prompt_en`) | RTF=2.1109，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
