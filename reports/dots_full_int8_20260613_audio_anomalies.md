# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`dots_full_int8_20260613`
- 音频异常样本数：`2`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_dots_tts_full_int8_g64` | 2 | 0 | 0 | 0 | 生成失败/跳过=2 |

## mlx_dots_tts_full_int8_g64

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| critical | 生成失败/跳过 | 中文噪声参考音频克隆压力测试 (`stress_noisy_ref_clone`) | adapter_status=blocked; missing or unsupported reference audio: | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 中文手机录音参考克隆压力测试 (`stress_phone_ref_clone`) | adapter_status=blocked; missing or unsupported reference audio: | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
