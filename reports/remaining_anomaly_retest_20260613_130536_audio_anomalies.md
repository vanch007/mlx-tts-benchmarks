# 本地开源 TTS 统一测试项目 - 音频异常分类报告

- Run ID：`remaining_anomaly_retest_20260613_130536`
- 音频异常样本数：`5`
- 性能提示样本数：`0`
- 说明：`slow_generation` 只表示生成慢，不计入音频听感/内容异常；`high_content_error` 需要结合试听和 ASR 复核。

## 模型汇总

| 模型 | 严重 | 高 | 中 | 低 | 分类计数 |
|---|---:|---:|---:|---:|---|
| `mlx_omnivoice_8bit_trim60` | 0 | 0 | 1 | 0 | 内容错误偏高=1 |
| `mlx_scenema_audio_int8_mlx_mps_service` | 4 | 0 | 0 | 0 | 生成失败/跳过=4 |

## mlx_omnivoice_8bit_trim60

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| medium | 内容错误偏高 | 英文儿童女声音色设计 (`control_voice_design_child`) | CER=0.3412，WER=0.3529。 | 复核 ASR 转写与音频；若音频确实错读，调整 prompt、语言参数或模型筛选。 |

## mlx_scenema_audio_int8_mlx_mps_service

| 严重度 | 分类 | 测试项 | 诊断 | 建议 |
|---|---|---|---|---|
| critical | 生成失败/跳过 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | adapter_status=failed; scenema service is not reachable: <urlopen error [Errno 61] Connection refused> | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | adapter_status=failed; scenema service is not reachable: <urlopen error [Errno 61] Connection refused> | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | adapter_status=failed; scenema service is not reachable: <urlopen error [Errno 61] Connection refused> | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
| critical | 生成失败/跳过 | 阿拉伯语城市和数字朗读 (`core_ar_names`) | adapter_status=failed; scenema service is not reachable: <urlopen error [Errno 61] Connection refused> | 先修复适配器命令、参考音频或模型能力筛选；未成功样本不进入正常音频判断。 |
