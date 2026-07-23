# 音色相似度与克隆可用性验证报告

日期：2026-07-23

正式运行：`v02_plus_vieneu_lux_scenema_20260610_091619`

状态：`pass`（77/77 条正式克隆记录已重算，指标失败 0）

## 方法

- 后端：[SpeechBrain ECAPA-TDNN](https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb)，模型由 VoxCeleb1 + VoxCeleb2 训练，使用 speaker embedding 余弦相似度。
- 验证阈值：原始余弦 `0.25`，沿用 SpeechBrain [`SpeakerRecognition.verify_batch`](https://github.com/speechbrain/speechbrain/blob/develop/speechbrain/inference/speaker.py) 的默认阈值。
- 音频预处理：16 kHz 单声道、去直流、静音裁切；3 秒窗口、1.5 秒步长，最多 16 段。
- 稳定性：同时记录分段中位数与 P10；聚合余弦为 `0.65 × median + 0.35 × P10`，防止仅首段音色相似而后续漂移。
- 音色分：阈值 `0.25` 映射为 0.5，项目强匹配锚点 `0.80` 映射为 1.0。它是便于横向比较的校准分，不是“同一说话人概率”。
- 身份判定：聚合余弦低于 0.25 或 P10 低于 0.20 为不可用；未留出 0.10 余量或 P10 未越过阈值为边缘可用；其余为可用。
- 最终克隆可用性：身份分占 65%、内容准确占 20%、UTMOS 占 15%；CER 高于 0.30、UTMOS 低于 2.3 或身份失败时不可用，CER 高于 0.15、UTMOS 低于 3.0 或身份边缘时为边缘可用。
- 参考门禁：参考音频自身分段一致性低于 0.25 时标记 `not_scored`，不进入音色评分。

## 正负对照

以下对照均由实际 MPS 路径计算：

| 对照 | 原始余弦 | 分段 P10 | 音色分 | 身份判定 |
|---|---:|---:|---:|---|
| 同一参考音频自检 | 0.9487 | 0.9408 | 1.0000 | 可用 |
| VoxCPM2 英文克隆 vs 正确参考 | 0.6661 | 0.6656 | 0.8783 | 可用 |
| VoxCPM2 英文克隆 vs 错误中文参考 | 0.0764 | 0.0724 | 0.1534 | 不可用 |
| 两个不同参考说话人 | 0.0476 | 0.0402 | 0.0964 | 不可用 |

正确参考和错误参考之间有清晰间隔，阈值没有把异音色对照误判为可用。

## MPS 验证

PyTorch 官方建议将模型与张量迁移到 [`mps` device](https://docs.pytorch.org/docs/stable/notes/mps.html)，计时前后使用 [`torch.mps.synchronize()`](https://docs.pytorch.org/docs/stable/generated/torch.mps.synchronize.html)。本实现使用 FP32，不启用 autocast。

SpeechBrain 1.1 直接通过 `run_opts={"device":"mps"}` 加载会在初始化阶段触发 `device_type` 缺失；实现改为先在 CPU 加载，再将全部模块迁移到 MPS。为了减少图重复编译，还加入固定 8 段批次形状和参考 embedding 缓存。

同一组 10 条 `clone_en_same` 实测：

| 指标 | MPS | CPU |
|---|---:|---:|
| 冷启动总墙钟时间 | 3.48 s | 3.08 s |
| 排除首条后的单条中位时间 | 33.00 ms | 49.86 ms |
| 排除首条后的 9 条合计 | 308.46 ms | 468.25 ms |
| 与 CPU 的最大余弦差 | 0.0000 | — |

结论：单条冷启动仍以 CPU 更快；批量正式评估进入稳态后，MPS 单条中位时间约快 `1.51×`，且 10 条结果与 CPU 完全一致。自动模式因此优先 MPS，同时在输出中记录真实设备，运行时回退不会伪装成 MPS。

## 正式重算结果

- 77/77 条克隆记录：`adapter_status=success`、`fail_flags=ok`、`metric_failures` 为空。
- ASR：77/77 统一为本地 `qwen3_asr_1_7b_8bit`，不再混用 0.6B。
- 音色后端：77/77 为 `speechbrain_ecapa_voxceleb`。
- 设备：77/77 为实际 `mps`，CPU 回退 0。
- 身份判定：可用 72、边缘可用 5、不可用 0。
- 最终克隆可用性：可用 56、边缘可用 17、不可用 4、待补证据 0。
- 4 条最终不可用均由低 UTMOS 触发，而非音色身份失败：VoxCPM2 越南语、OmniVoice 越南语、IndexTTS2 越南语、Ming-omni 中文克隆。

评分变化符合门禁预期：低质量或边缘音色不再靠单个高 SIM 抬高克隆轴；Qwen3-TTS 克隆轴从 88.506 升至 89.068，其余有克隆能力的项目下降约 1.058–5.842 分，Supertonic 因无官方克隆能力保持 0。

## 已知边界

- ECAPA 模型卡明确提示：模型在训练域之外不保证同等性能。多语与跨语种结果仍属于统一客观代理，不替代最终人工试听。
- UTMOS 和 ASR 也是代理模型；因此报告同时展示原始余弦、P10、CER、UTMOS 和判定原因，避免只展示一个总分。
- 当前正式数据没有参考音频一致性失败；若未来参考自身分段一致性低于阈值，该记录会直接标记为不评分。
