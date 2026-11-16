# MLX TTS 本地横评

在 Apple Silicon 上用 MLX 本地运行开源 TTS 模型，用同一套测试题和同一套自动指标比较它们。

**入口页（榜单 + 评测方法 + 报告导航）：https://vanch007.github.io/mlx-tts-benchmarks/**

> 状态：开发集上的工程验证，分数是探索性代理，**不是正式排名**。缺少独立测试集、多次采样和完整盲听。

## 一分钟看懂

| 问题 | 答案 |
|---|---|
| 比了什么 | 20 个开源 TTS 项目，41 道测试题，覆盖 9 个能力维度 |
| 怎么跑的 | 全部在同一台 Mac 上用 MLX 本地推理；每个模型只安排它官方声明支持的题 |
| 怎么打分 | ASR（Qwen3-ASR 1.7B）转写算错字率；UTMOS 测自然度；ECAPA + CAM++ 两个声纹模型测克隆相似度；记录 RTF |
| 总分怎么来 | 能力分 = 已测题平均分 × 有效覆盖率；总分 = 9 个能力分按权重相加 |
| 谁能比较 | 覆盖率 ≥70% 且计分样本 ≥10 的项目进入“可比较”组；其余单独列为“覆盖不足” |

## 9 个能力维度与权重

| 能力 | 权重 | 怎么测 |
|---|---:|---|
| 内容准确 | 25% | 中日韩泰等按字错误率（CER），其他语言按词错误率（WER） |
| 自然音质 | 22% | UTMOS 加波形检查（爆音、噪声底、静音、语速） |
| 多语种 | 12% | 40 种非中英语言朗读；只测模型官方声明的语言，分母为全部 40 种，会得越多广度越高。部分模型的声明语言尚未生成（权重缺失），按未覆盖计 |
| 方言 | 3% | 需人工复核通过才计分（目前全部“待验证”） |
| 音色克隆 | 17% | ECAPA 与 CAM++ 声纹相似度平均；任一判“不可用”即封顶 |
| 表达控制 | 10% | 声音设计、情绪、风格、时长控制，需直接证据 |
| 复杂副语 | 3% | 唱歌、笑声、叹气等，需直接证据 |
| 段落连续性 | 5% | 约 9–28 秒短段落；分钟级长文未测 |
| RTF 效率 | 3% | 生成耗时 ÷ 音频时长 |

Gemini 音频评委（SMOS/EMOS）一致性校准未通过，只作为参考列展示，不参与任何计分。

## 报告

| 报告 | 用途 |
|---|---|
| [能力雷达](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_capability_hexagon.html) | 每个项目的 9 维分数、雷达图、单项排行 |
| [试听报告](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_audio_review.html) | 按题逐条试听，附 CER / 声纹 / UTMOS |
| [结果面板](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_dashboard.html) | 按 checkpoint 拆分的榜单、共同核心任务对比、RTF 排行、样本明细 |
| [综合测试矩阵](https://vanch007.github.io/mlx-tts-benchmarks/reports/v02_plus_vieneu_lux_scenema_20260610_091619_comprehensive_test_matrix.html) | 全部测试题与各模型是否应测 |
| [评估修正记录](reports/benchmark_protocol_correction_20261016.md) | 每次口径修正的原因、证据与影响 |
| [参评模型说明](docs/models.md) | 各模型上游 README 的能力摘要（非本评测结论） |

专项审计：[音色相似度验证](reports/speaker_similarity_validation_20260723.md) · [Breeze 8-bit 审计](reports/breeze_8bit_fast_depth_audit.md)（[试听](https://vanch007.github.io/mlx-tts-benchmarks/reports/breeze_8bit_fast_depth_audio_review.html)） · [低分根因审计](reports/low_score_root_cause_audit_20260718.md)

## 数据文件

- `reports/v02_plus_vieneu_lux_scenema_20260610_091619.leaderboard.csv`：项目榜单
- `reports/v02_plus_vieneu_lux_scenema_20260610_091619.scored.csv`：逐条评分
- `reports/v02_plus_vieneu_lux_scenema_20260610_091619_capability_hexagon_axes.csv`：项目 × 能力长表
- `audio/<model>/`：已发布的生成音频；`audio/*.wav`：参考音频

## 目录说明

- `index.html`、`reports/`、`audio/`、`docs/`：当前发布内容
- `archive/`：已归档的旧实验
- 根目录下以日期结尾的其他文件夹（如 `omnivoice_*_20260516`）是早期单项实验的历史产物，保留以免旧链接失效，不属于当前榜单

页面由评测引擎仓库的 `scripts/publish_protocol_repair.py` 统一生成，不要手工修改 `index.html` 和 `reports/` 下的生成文件。
