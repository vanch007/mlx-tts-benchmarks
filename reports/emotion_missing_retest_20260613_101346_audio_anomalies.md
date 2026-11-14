# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`emotion_missing_retest_20260613_101346`
- 音频异常样本数：`3`
- 性能提示样本数：`2`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_higgs_audio_v3_4b` | 0 | 0 | 0 | 1 | 生成过慢=1 |
| `mlx_scenema_audio_int8_mlx_mps_service` | 3 | 0 | 0 | 0 | 生成失败/跳过=3 |
| `mlx_voxcpm2_bf16_dit` | 0 | 0 | 0 | 1 | 生成过慢=1 |

## mlx_higgs_audio_v3_4b

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| low | 生成过慢 | 中文开心情绪控制 (`control_emotion_happy`) | RTF=2.2974，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| critical | 生成失败/跳过 | 中文愤怒情绪控制 (`control_emotion_angry`) | adapter_status=failed; returncode=1; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 中文开心情绪控制 (`control_emotion_happy`) | adapter_status=failed; returncode=1; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 中文悲伤情绪控制 (`control_emotion_sad`) | adapter_status=failed; returncode=1; output_exists=False | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |

## mlx_voxcpm2_bf16_dit

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| low | 生成过慢 | 中文开心情绪控制 (`control_emotion_happy`) | RTF=3.1342，生成慢于实时 2 倍以上。 | 优先作为性能优化项，不一定代表音频内容异常。 |
