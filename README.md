# MLX TTS Local Benchmark · MLX TTS 本地横评

[English](#english) · [中文](#中文)

---

## English

Open-source TTS models run locally with MLX on Apple Silicon and compared on the same test items with the same automatic metrics.

**Entry page (pick by need, compare, listen, leaderboard and method): https://vanch007.github.io/mlx-tts-benchmarks/** — every page has an English / 中文 switch and defaults to English.

> Status: engineering validation on a development set. Scores are exploratory proxies and **not an official ranking**. There is no independent test set, repeated sampling or full blind listening.

### At a glance

| Question | Answer |
|---|---|
| What was compared | 29 open-source TTS projects, 84 test items, 9 abilities |
| How it was run | All on the same Mac with MLX; each model runs only the items it officially claims to support |
| How it is scored | ASR (Qwen3-ASR 1.7B) transcription error rate; UTMOS naturalness; ECAPA + CAM++ speaker models for cloning similarity; RTF is recorded |
| Where the total comes from | Quality score = mean over the abilities a model was tested on; all-round score also counts unsupported abilities as 0 |
| Who is comparable | Projects with ≥70% coverage and ≥10 scored samples are “comparable”; the rest are listed separately as low-coverage |

### The 9 abilities and weights

| Ability | Weight | How it is measured |
|---|---:|---|
| Content accuracy | 25% | Character error rate (CER) for Chinese/Japanese/Korean/Thai, word error rate (WER) for other languages |
| Naturalness | 22% | UTMOS plus waveform checks (clipping, noise floor, silence, speaking rate) |
| Multilingual | 12% | Reading in 40 non-Chinese/English languages; only languages a model officially claims are tested |
| Dialects | 3% | Automatic verification (Qwen3-ASR language ID, Voxlect, MMS-LID), plus blind listening for a few undecidable items |
| Voice cloning | 17% | Mean ECAPA and CAM++ speaker similarity; capped if either says unusable |
| Expressive control | 10% | Voice design, emotion, style and duration control, with direct evidence |
| Complex paralinguistics | 3% | Singing, laughter, sighs and similar, with direct evidence |
| Paragraph continuity | 5% | Paragraphs of about 9–28 seconds; minute-long text is untested |
| Speed (RTF) | 3% | Generation time ÷ audio duration |

The Gemini audio judge (SMOS/EMOS) did not pass consistency calibration and is shown for reference only; it is not used in cloning scores. It does judge the expressive-control and paralinguistic axes, where it separates “present” from “absent” but not degrees.

### Pages

| Page | Use |
|---|---|
| [Overview & picks](https://vanch007.github.io/mlx-tts-benchmarks/) | Which model to pick for each need, winners per ability, model profiles, leaderboard, method |
| [Compare](https://vanch007.github.io/mlx-tts-benchmarks/compare.html) | Overlay 2–4 models, ability-by-ability gaps, same-item listening |
| [Listen](https://vanch007.github.io/mlx-tts-benchmarks/listen.html) | By item (all models ranked) or by model (worst clips first) |
| [Capability radar (detail)](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_capability_hexagon.html) | Per-project scores on 9 abilities, radar charts, per-ability rankings |
| [Audio review (detail)](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_audio_review.html) | Item-by-item listening with CER / speaker similarity / UTMOS |
| [Results dashboard](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_dashboard.html) | Per-checkpoint leaderboard, common-task comparison, RTF ranking, sample details |
| [Test matrix](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_comprehensive_test_matrix.html) | All test items and which models are expected to run them |
| [Evaluation corrections](reports/benchmark_protocol_correction_20261016.en.md) | Why each method correction was made, the evidence and the effect |
| [Model notes](docs/models.md) | Capability summaries from each model's upstream README (not this benchmark's conclusions) |

Specialty audits: [speaker similarity validation](reports/speaker_similarity_validation_20260723.md) · [Breeze 8-bit audit](reports/breeze_8bit_fast_depth_audit.md) ([audio](https://vanch007.github.io/mlx-tts-benchmarks/reports/breeze_8bit_fast_depth_audio_review.html)) · [low-score root-cause audit](reports/low_score_root_cause_audit_20260718.md) (these audits are in Chinese).

### Data files

- `reports/v02_plus_vieneu_lux_scenema_20260610_091619.leaderboard.csv`: project leaderboard
- `reports/v02_plus_vieneu_lux_scenema_20260610_091619.scored.csv`: per-item scores
- `reports/v02_plus_vieneu_lux_scenema_20260610_091619_capability_hexagon_axes.csv`: project × ability long table
- `site_data.js`: the data the Overview, Compare and Listen pages read
- `audio/<model>/`: published generated audio; `audio/*.wav`: reference audio

### Layout

- `index.html`, `compare.html`, `listen.html`, `site.css`, `i18n.js`, `common.js`, `language.js`, `site_data.js`, `reports/`, `audio/`, `docs/`: current published content
- `archive/`: archived old experiments
- Other folders at the root that end in a date (such as `omnivoice_*_20260516`) are historical products of early single-model experiments, kept so old links keep working; they are not part of the current leaderboard

Pages are generated by the evaluation engine repository (`scripts/publish_protocol_repair.py` and `scripts/build_site_home.py`); do not hand-edit the generated `index.html`, `compare.html`, `listen.html` or the files under `reports/`.

---

## 中文

在 Apple Silicon 上用 MLX 本地运行开源 TTS 模型，用同一套测试题和同一套自动指标比较它们。

**入口页（按需求选模型、多维对比、试听、榜单与评测方法）：https://vanch007.github.io/mlx-tts-benchmarks/** —— 每个页面都有 English / 中文 切换，默认英文。

> 状态：开发集上的工程验证，分数是探索性代理，**不是正式排名**。缺少独立测试集、多次采样和完整盲听。

### 一分钟看懂

| 问题 | 答案 |
|---|---|
| 比了什么 | 29 个开源 TTS 项目，84 道测试题，覆盖 9 个能力维度 |
| 怎么跑的 | 全部在同一台 Mac 上用 MLX 本地推理；每个模型只安排它官方声明支持的题 |
| 怎么打分 | ASR（Qwen3-ASR 1.7B）转写算错字率；UTMOS 测自然度；ECAPA + CAM++ 两个声纹模型测克隆相似度；记录 RTF |
| 总分怎么来 | 质量分 = 模型已测能力的加权平均；全能分把不支持的能力也按 0 计入 |
| 谁能比较 | 覆盖率 ≥70% 且计分样本 ≥10 的项目进入“可比较”组；其余单独列为“覆盖不足” |

### 9 个能力维度与权重

| 能力 | 权重 | 怎么测 |
|---|---:|---|
| 内容准确 | 25% | 中日韩泰等按字错误率（CER），其他语言按词错误率（WER） |
| 自然音质 | 22% | UTMOS 加波形检查（爆音、噪声底、静音、语速） |
| 多语种 | 12% | 40 种非中英语言朗读；只测模型官方声明的语言 |
| 方言 | 3% | 自动核验（Qwen3-ASR 语种识别、Voxlect、MMS-LID），少数判不准的条目由人工盲听补判 |
| 音色克隆 | 17% | ECAPA 与 CAM++ 声纹相似度平均；任一判“不可用”即封顶 |
| 表达控制 | 10% | 声音设计、情绪、风格、时长控制，需直接证据 |
| 复杂副语 | 3% | 唱歌、笑声、叹气等，需直接证据 |
| 段落连续性 | 5% | 约 9–28 秒短段落；分钟级长文未测 |
| RTF 效率 | 3% | 生成耗时 ÷ 音频时长 |

Gemini 音频评委（SMOS/EMOS）一致性校准未通过，只作为参考列展示，不参与克隆计分；它负责判定表达控制和复杂副语两个轴，能分清“有”和“没有”，分不出高低。

### 页面

| 页面 | 用途 |
|---|---|
| [总览与选型](https://vanch007.github.io/mlx-tts-benchmarks/) | 按需求选模型、各能力冠军、模型档案、榜单、评测方法 |
| [多维对比](https://vanch007.github.io/mlx-tts-benchmarks/compare.html) | 叠 2–4 个模型，逐项看差距，同题试听 |
| [试听](https://vanch007.github.io/mlx-tts-benchmarks/listen.html) | 按题目（所有模型排序）或按模型（从最差的听起） |
| [能力雷达（明细）](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_capability_hexagon.html) | 每个项目的 9 维分数、雷达图、单项排行 |
| [试听审核报告（明细）](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_audio_review.html) | 按题逐条试听，附 CER / 声纹 / UTMOS |
| [结果面板](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_dashboard.html) | 按 checkpoint 拆分的榜单、共同核心任务对比、RTF 排行、样本明细 |
| [综合测试矩阵](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_comprehensive_test_matrix.html) | 全部测试题与各模型是否应测 |
| [评估修正记录](reports/benchmark_protocol_correction_20261016.md) | 每次口径修正的原因、证据与影响 |
| [参评模型说明](docs/models.md) | 各模型上游 README 的能力摘要（非本评测结论） |

专项审计：[音色相似度验证](reports/speaker_similarity_validation_20260723.md) · [Breeze 8-bit 审计](reports/breeze_8bit_fast_depth_audit.md)（[试听](https://vanch007.github.io/mlx-tts-benchmarks/reports/breeze_8bit_fast_depth_audio_review.html)） · [低分根因审计](reports/low_score_root_cause_audit_20260718.md)

### 数据文件

- `reports/v02_plus_vieneu_lux_scenema_20260610_091619.leaderboard.csv`：项目榜单
- `reports/v02_plus_vieneu_lux_scenema_20260610_091619.scored.csv`：逐条评分
- `reports/v02_plus_vieneu_lux_scenema_20260610_091619_capability_hexagon_axes.csv`：项目 × 能力长表
- `site_data.js`：总览、对比、试听三个页面读取的数据
- `audio/<model>/`：已发布的生成音频；`audio/*.wav`：参考音频

### 目录说明

- `index.html`、`compare.html`、`listen.html`、`site.css`、`i18n.js`、`common.js`、`language.js`、`site_data.js`、`reports/`、`audio/`、`docs/`：当前发布内容
- `archive/`：已归档的旧实验
- 根目录下以日期结尾的其他文件夹（如 `omnivoice_*_20260516`）是早期单项实验的历史产物，保留以免旧链接失效，不属于当前榜单

页面由评测引擎仓库的 `scripts/publish_protocol_repair.py` 与 `scripts/build_site_home.py` 统一生成，不要手工修改生成的 `index.html`、`compare.html`、`listen.html` 和 `reports/` 下的生成文件。
