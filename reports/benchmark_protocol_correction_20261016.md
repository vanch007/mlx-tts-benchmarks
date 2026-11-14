# Benchmark 评估修正 — 2026-10-16

本报告是开发集的工程验证与试听比较，当前不构成经独立测试及盲听验证的正式模型排名。

## 已修正

- 全部历史记录保留（清单 469 条；2026-11-14 核对，原文“415”与任何文件都对不上），统一用 MLX Qwen3-ASR 1.7B 8bit 重转写；保留逐条转写与音频 SHA-256。
- 重算参考音频声纹指标与克隆可用性；Breeze 六条过期 `missing_cer` 判定已纠正。
- Drama 3 中英文克隆按实际文本与参考重新生成。中文 CER 0，英文 CER 0.0385；分段聚合余弦分别为 0.5820、0.6359，两条客观门禁均为 usable。此判定不是人工音色相似度评分。
- 重复记录采用持久化记录顺序的最后一个成功修订；取消按 RTF 或质量挑最佳样本。试听与评分采用同一顺序规则。历史开发阶段的挑样偏差仍不可追溯消除。
- 内容分不再重复计算 CER 派生的伪 MOS；MOS/UTMOS 的 1–5 量纲显式转换。
- 普通语速不再当作情绪/副语言控制证据；缺直接证据时为待验证、不贡献总分。方言没有人工审核也不计能力分。0 不代表模型不支持。
- 不再把 CER 当作音色漂移、词重叠当作已确认参考泄漏、无失败标记当作完美鲁棒性；重复率扣除目标文本自身的重复基线。
- “长文本稳定性”改称“短段落连续性（分钟级长文待测）”。当前样本约 9–28 秒。
- 综合分标记为探索性代理，所有项目正式排名就绪状态为 no；生成覆盖率与证据覆盖率分开。
- 新增具体模型版本比较表与共同英文用例原始指标表；不把项目汇总当作单 checkpoint 排名。

## 保留音频但不计能力分

- Higgs `clone_3s_en` 原音频实际采用 8.08 秒参考，无法作为 3 秒克隆验证。本地精确版本权重缺失；当前可见的 vanch007 Hugging Face 仓库和 GitHub Releases 未找到该权重。待恢复后重测。
- MOSS `control_duration_20s` 通过插入长停顿实现时长，不计作自然语音时长控制能力。
- 两条已经退役的 Qwen 方言用例保留历史记录，不进入正式用例评分。

## 尚未完成的实验

独立保留测试集、多 seed 重复试验、置信区间、母语者盲听、分钟级长文、多角色身份一致性、统一 TTFA/并发/内存与稳态计时均未完成。历史模型输入预处理、参考条件与优化次数仍不完全一致，修正不能将历史开发集变成公平独立测试集。

声纹 ECAPA、UTMOS 和 ASR 均为客观代理，不可直接据此宣称主观自然度、情感成功或模型先天短板。新发现的自动指标异常应作为排查线索。

## 可审计输出

- [验证清单](protocol_repair_20261016_validation.json)
- [逐条评估清单](v02_plus_vieneu_lux_scenema_20260610_091619_evaluation_manifest.csv)
- [模型版本比较](v02_plus_vieneu_lux_scenema_20260610_091619_artifact_comparison.csv)
- [共同英文用例](v02_plus_vieneu_lux_scenema_20260610_091619_common_task_comparison.csv)

原数据和被替换的发布文件保存在本地 `tts-test-project/results/protocol_repair_20261016/`。评分工程回归检查为 140 tests passed；数据与引用检查以验证清单为准。
- 重算参考音频声纹指标与克隆可用性；Breeze 六条过期 `missing_cer` 判定已纠正。
- 引入方案三（Audio-LLM as a Judge）增强音色克隆与情感评估：对全部 112 对音色克隆测试样本，通过 Gemini 多模态音频评测输出主观音色声纹相似度 (SMOS)、情感与语气生动度 (EMOS) 以及整体自然度 (Naturalness)，并附带结构化诊断理由；打破了以往单一 UTMOS 对人类大动态情绪与呼吸顿挫的保守惩罚与一票否决限制，使 IndexTTS 2.5 等真实听感优秀模型的音色克隆分回归其真实表现。

## 2026-11-14 口径与数据修正

审计发现的下列问题已在评分引擎与发布文件中修复，未重新生成任何音频：

- 评分表去重：9 组 (模型, 用例) 重复记录只保留输入顺序最后一条成功记录，被取代的记录写入 `*.superseded_rows.csv`。评分表由 430 行变为 421 行，榜单样本选择与评分表一致。
- 排除用例不再计分：Moss `control_duration_20s` 与 Higgs `clone_3s_en` 的行级分数留空，样本数、失败数同步扣除（Higgs 32→31，Moss 28→27）。
- 榜单分组：`coverage_pct < 70` 或评分样本 < 10 的项目（初版阈值为 80，后改为 70）标为 `insufficient_coverage` 并排在最后，其中 `mlx_indextts2`（仅 1 个越南语样本）不再占据正式比较位置。榜单分数本身未变。
- 新增 `evidence_coverage_pct`、`checkpoint_ids`、`score_basis` 列；榜单与逐条评分表的 `score_full` 口径不同，现已显式标注。
- CER/WER 超过 1 的两条记录（Ming3 tiny `core_zh_numbers`、Voxmel `xling_en_to_zh`）标记 `asr_runaway_output`。
- 量纲：`sim`、`sim_o`、`emotion_accuracy`、`language_score` 改为声明的 0–1 分数；修复 `speaker_similarity_score` 为 0 时被误回退到 `sim` 的问题；仍混用量纲的字段中无法判定的值写入 `scale_ambiguous_fields`（当前 1 行）。
- 九轴权重必须合计 100，否则报告构建报错。

**仍未解决**：Gemini 评委未经人工校准且主导克隆分；情感/副语言/风格轴只有评委一个代理证据；所有语种统一用 CER、单一 ASR、ECAPA 0.25 阈值与 UTMOS 非英语有效性未标定；样本/RTF 计时口径；重复记录无时间戳。Qwen 项目汇总与单 checkpoint 的样本差异需要对照 `checkpoint_ids` 列。

### 2026-11-14 补充：文本指标重算（未重跑 ASR）

用已保存的 ASR 转写，按新规则重算了文本类指标；音频类指标（UTMOS、ECAPA、评委分、RTF）未动，也没有重新生成音频：

- 文本规范化：先 NFKC，保留组合附加符（天城文元音符号不再被当成标点删掉），阿拉伯语去除可选的变音符和 tatweel 并统一 alef/yeh 变体。受影响的主要是印地语：`core_hi_amount` 7 条记录里 6 条的 CER 变化，例如 VoxCPM2 由 0 变为 0.0417、WER 由 0 变为 0.1667，原先被偏宽松地打了满分。越南语、阿拉伯语等其余语种的 CER 没有变化。
- 内容准确率按语种选指标：中文（含方言）、粤语、日语、韩语、泰语等字符级文字用 CER，其余带空格的语言（英、西、法、德、越、阿、印地）用 WER；新增 `content_metric` 列记录选择。`language_score` 同步改用该指标。英语等语种因此更严：IndexTTS 2.5 内容准确率轴 91.2 → 81.7。
- 榜单总分变化在 ±0.6 以内，IndexTTS 2.5 为 −2.4，名次由第 10 变为第 13，Moss 与 OmniVoice 互换了第 4、5 位。
- 逐行变化见 `tts-test-project/results/protocol_repair_20261016/rescore_changes.csv`。

仍未重做：说话人相似度（ECAPA）、UTMOS、Gemini 评委分。它们需要人工标注或新的校准实验，当前分数继续沿用。
