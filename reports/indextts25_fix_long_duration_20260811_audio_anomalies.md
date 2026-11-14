# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`indextts25_fix_long_duration_20260811`
- 音频异常样本数：`5`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_indextts2_v25_8bit` | 3 | 1 | 1 | 0 | 生成失败/跳过=3；内容严重错误=1；疑似底噪/杂音=1 |

## mlx_indextts2_v25_8bit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| critical | 生成失败/跳过 | 英文长文本角色连续性 (`scenema_longform_en`) | adapter_status=failed; returncode=2; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 英文长文本连续稳定性 (`stress_long_en`) | adapter_status=failed; returncode=2; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 中文长文本连续稳定性 (`stress_long_zh`) | adapter_status=failed; returncode=2; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| high | 内容严重错误 | 中文二十秒目标时长控制 (`control_duration_20s`) | CER=1.0，内容几乎不可对齐。 | 优先人工试听；若确认异常，修正语言/提示词/参考文本或从该模型能力边界移除。 |
| medium | 疑似底噪/杂音 | 中文二十秒目标时长控制 (`control_duration_20s`) | 噪声底约 -22.028 dBFS，语音/底噪差约 4.323 dB。 | 优先试听确认是否有持续底噪、嗡声或电流声；若确认，检查 vocoder、参考音频清洗和后处理增益。 |
