# TTS 音频测试项目与当前评分标准适配性审计

- 日期：2026-06-22
- 审计对象：`data/test_cases.csv`、`data/test_case_library.csv`、`configs/capability_radar_research_zh.json`、`configs/comprehensive_test_suites_zh.json`
- 当前主 run：`v02_plus_vieneu_lux_scenema_20260610_091619`
- 结论级别：需要重构测试项分层；不建议直接继续在当前 52 个正式测试项上扩大补测。

## 结论

当前测试项目已经能覆盖本地模型能力边界，且边界内缺测为 0；但它还不是一个干净的“按评分标准设计”的测试集。主要问题是：很多测试项来自模型 demo 页面，后来被归入能力轴，但没有先定义标准题型，再把 demo 样例归档到对应题型。因此当前矩阵更像“能力边界验证 + demo 回归 + 综合评分”的混合体。

这会带来三个结果：

1. 综合榜可用，但解释性不够强：低覆盖专项和通用能力混在一起。
2. 某些能力轴被 demo 题目放大：方言、克隆、Scenema/Higgs 专项比基础内容准确更密。
3. 控制类自动评分偏弱：情绪、唱歌、动作、场景音效更多是在评内容准确、自然度和 RTF，缺少真正的控制命中指标。

## 当前标准与测试项结构

当前报告实际采用 `configs/capability_radar_research_zh.json` 的 8 轴研究雷达：

| 轴 | 权重 | 当前正式测试项数 |
|---|---:|---:|
| 内容准确与可懂度 | 18 | 3 |
| 自然度与音频质量 | 16 | 横向复用所有正式音频 |
| 多语种与方言 | 14 | 18 |
| 音色克隆与鲁棒性 | 14 | 9 |
| 情绪、风格与韵律控制 | 14 | 14 |
| 复杂文本与副语言能力 | 10 | 5 |
| 长文本稳定性 | 8 | 3 |
| RTF 生成效率 | 6 | 横向复用所有正式音频 |

当前测试库总计 55 项，其中 52 项为正式音频能力项，3 项为部署性能诊断项。主 run 有 287 条成功音频，UTMOS 和参考音频 SIM 均已补齐。

## 主要问题

### 1. 内容准确轴太薄

内容准确权重最高，但只有 3 个测试项：

- `core_zh_numbers`
- `core_en_numbers`
- `core_zh_en_codeswitch`

这不足以支撑“内容准确与可懂度”作为 18 权重的核心轴。它缺少：

- 中文多音字、儿化/轻声、标点停顿。
- 英文缩写、货币、日期、版本号、邮箱/URL。
- 多语种数字、单位和专名。
- 短句、长句、列表、问答等不同文本形态。

建议把内容准确扩到 8-10 项，并让它成为所有文本 TTS 模型的核心公共题。

### 2. 多语种与方言轴被方言 demo 拉偏

多语种与方言轴共有 18 项，其中中文方言 10 项。低覆盖项很多：

- `qwen_custom_beijing_dialect`：1 个项目
- `voxcpm2_minnan_dialect`：1 个项目
- `voxcpm2_shanghai_dialect`：1 个项目
- `voxcpm2_tianjin_dialect`：1 个项目
- `voxcpm2_dongbei_dialect`、`voxcpm2_henan_dialect`、`voxcpm2_shaanxi_dialect`、`voxcpm2_shandong_dialect`：2 个项目

这些项对 VoxCPM2 和 OmniVoice 的方言能力验证有价值，但不适合作为综合多语能力的同权正式题。建议拆成：

- `multilingual_core`：中、英、日、韩、西、法、德、越、印地、阿语等代表语言。
- `dialect_core`：粤语、四川话等多模型可测方言。
- `dialect_gallery`：闽南语、上海话、天津话、北京话等模型专项能力展示，不进入全局总分或只进入专项榜。

### 3. demo 专项命名还污染了标准题型

当前仍有明显模型来源命名：

- `voxcpm2_song_zh_female`
- `voxcpm2_song_en_pop`
- `voxcpm2_dongbei_dialect`
- `scenema_action_emotion_arc_en`
- `scenema_scene_sfx_en`
- `scenema_longform_en`
- `qwen_custom_beijing_dialect`

这些名称适合 demo 回归，不适合作为标准题库。标准题库应使用能力命名，例如：

- `song_zh_female_ballad`
- `song_en_pop_hook`
- `dialect_zh_dongbei`
- `action_emotion_arc_en`
- `scene_sfx_storm_en`
- `longform_en_character_continuity`
- `dialect_zh_beijing`

模型来源应放在 `source_demo`、`evidence_id` 或 `benchmark_family` 中，而不是 test id 里。

### 4. 低覆盖专项不应直接进入综合能力总分

正式 52 项中，16 项只覆盖 1-2 个项目。这些项是重要的能力边界验证，但会让综合评分混入“专用功能是否支持”的强惩罚。

建议增加测试项分层：

| 层级 | 用途 | 是否进入综合榜 |
|---|---|---|
| core_common | 多数模型可测的公共能力题 | 是 |
| core_capability | 某能力族模型可测的标准题 | 是，但按能力族覆盖计算 |
| specialty | 模型专项能力，如 Scenema 场景音效、Higgs token、IndexTTS 时长 | 不进入综合榜，只进专项榜 |
| demo_regression | 官方 demo 复现和参数正确性验证 | 不进入综合榜 |
| diagnostic | 性能、流式、批量、环境诊断 | 不进入综合音频能力榜 |

### 5. 表达控制轴缺少真正的控制命中评分

当前情绪、风格、唱歌、动作、场景音效大多仍依赖这些代理指标：

- ASR 内容准确
- UTMOS 自然度
- SIM
- duration error
- speech-rate / pause proxy

这些不能证明“开心/悲伤/愤怒是否真的像该情绪”“唱歌是否真的有旋律”“场景音效是否真的存在”。建议把控制类拆成两种结果：

- `objective_proxy_score`：当前自动指标，继续保留。
- `control_claim_status`：`verified_by_model_param`、`proxy_only`、`needs_human_review`、`failed_control`。

正式分数里控制轴要降低纯代理权重，增加人工听审或专用分类器结果。没有验证前，控制类专项不应给太高置信度。

### 6. 克隆轴覆盖不错，但参考音频类型混在一起

音色克隆轴 9 项覆盖较好，但混合了几种难度：

- clean same-language clone
- 3 秒短参考
- cross-lingual clone
- Vietnamese clone
- Scenema 10-20 秒表演式参考

建议保留，但需要在分数里区分：

- `clone_clean_same_language`
- `clone_short_reference`
- `clone_cross_lingual`
- `clone_language_extension`
- `clone_expressive_long_reference`

否则同一个“克隆分”里混入太多不同失败模式，不利于解释模型强弱。

### 7. 长文本轴太少

长文本稳定性只有 3 项：

- `stress_long_zh`
- `stress_long_en`
- `scenema_longform_en`

建议扩到 5-6 项：

- 中文 30-60 秒说明文。
- 英文 30-60 秒叙事。
- 多句列表/编号。
- 对话式长文本。
- 超长 2-3 分钟压力项，作为 stress，不进默认综合榜。

长文本评分也应增加：

- truncation 检测。
- repeat loop 检测。
- chunk boundary discontinuity。
- speaker drift / timbre drift。

### 8. `source_demo` 审计字段不完整

`data/test_cases.csv` 有 `source_demo`，但 `data/test_case_library.csv` 的 `source_demo` 统计为空。研究矩阵报告里虽然能看到 `rank_dimension` 和 tags，但 provenance 字段不够干净。

建议统一加：

- `case_origin`: `standard_core` / `official_demo` / `local_stress` / `model_specific`
- `evidence_id`: 指向 `configs/model_capability_evidence.yaml`
- `scoring_tier`: `core_common` / `capability_standard` / `specialty` / `demo_regression` / `diagnostic`
- `human_review_required`: yes/no

## 推荐优化后的测试标准结构

### A. 综合榜核心题库

目标：30-35 项，按评分轴设计，而不是按 demo 收集。

建议结构：

| 轴 | 建议题数 | 当前题数 | 处理 |
|---|---:|---:|---|
| 内容准确 | 8-10 | 3 | 补充 |
| 自然音质 | 横向 | 横向 | 保留 |
| 多语基础 | 8-10 | 8 | 保留并清理语言边界 |
| 方言核心 | 2-4 | 10 | 保留粤语/四川，其他转专项 |
| 音色克隆 | 6-8 | 9 | 保留但分子类 |
| 表达控制 | 6-8 | 14 | 合并/转专项 |
| 复杂副语言 | 2-4 | 5 | 作为专项为主 |
| 长文本 | 5-6 | 3 | 补充 |
| RTF | 横向 | 横向 | 保留 |

### B. 专项能力榜

这些保留，但不和公共题同权：

- VoxCPM2 方言全量 gallery。
- Scenema action / scene SFX / singing。
- Higgs emotion/sfx token。
- IndexTTS2 duration control。
- Qwen CustomVoice preset speaker 方言。
- ZONOS2 quality/speaking-rate bucket。
- Supertonic expression tags。

### C. Demo 回归集

官方 demo 中的具体样例应该保留为 regression，不再当作标准题名。

用途：

- 检查 adapter 参数是否正确。
- 防止模型升级后能力退化。
- 试听官方 demo 场景。

输出单独页面：`demo_regression_report.html`。

## 建议的执行顺序

1. **不重跑音频，先重构元数据**
   - 增加 `scoring_tier`、`case_origin`、`evidence_id`。
   - 把 16 个低覆盖项移到 `specialty` 或 `demo_regression`。
   - 将模型名污染的 test id 迁移成中性 id，旧 id 做 alias。

2. **重算现有报告**
   - 综合榜只看 `core_common + capability_standard`。
   - 专项榜按能力轴单独排序。
   - demo regression 单独展示，不进总分。

3. **补充标准核心题**
   - 内容准确扩到 8-10 项。
   - 长文本扩到 5-6 项。
   - 控制类新增人工审核字段或专用分类器结果。

4. **再决定是否全量补测**
   - 仅新增题项需要生成新音频。
   - 单纯分层/重命名/评分口径调整不需要重新生成。

## 优先级

P0：

- 明确 `scoring_tier`，把低覆盖 demo 专项从综合榜移出。
- 统一 `configs/scoring_standard.json` 与 `capability_radar_research_zh.json`，避免旧 v0.2 标准继续误导。
- 给 `source_demo`/`case_origin` 补证据链。

P1：

- 内容准确补题。
- 长文本补题。
- 控制类加入 `human_review_required` 和控制命中状态。

P2：

- 方言 gallery、Scenema/Higgs/ZONOS2/Supertonic 专项榜页面。
- demo regression 报告页面。

