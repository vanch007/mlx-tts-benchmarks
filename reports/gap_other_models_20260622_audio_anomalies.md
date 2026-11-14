# mlx-tts-benchmark - 音频异常分类报告

- Run ID：`gap_other_models_20260622`
- 音频异常样本数：`2`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_indextts2_standard_8bit` | 1 | 0 | 0 | 0 | 生成失败/跳过=1 |
| `mlx_omnivoice_8bit_trim60` | 0 | 0 | 1 | 0 | 内容错误偏高=1 |

## mlx_indextts2_standard_8bit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| critical | 生成失败/跳过 | Scenema 英文同语种表演克隆 (`scenema_clone_tarkin_en`) | adapter_status=failed; returncode=1; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |

## mlx_omnivoice_8bit_trim60

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | Scenema 英文长文本连续性 (`scenema_longform_en`) | CER=0.3465，WER=0.2895。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |
