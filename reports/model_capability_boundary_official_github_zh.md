# 本地开源 TTS 模型能力边界审计

- 审计日期：2026-06-13
- 审计口径：先按官方 GitHub / 官方模型家族能力核对，再落到本地实际权重目录；测试矩阵以具体权重模型为单位，不再把同一 repo 下的不同模型混成一个能力边界。
- 当前正式 run：`v02_plus_vieneu_lux_scenema_20260610_091619`
- 深度审计明细：`reports/model_capability_deep_research_20260613_zh.md`
- 可执行映射 CSV：`reports/model_capability_test_mapping_20260613.csv`

## 具体权重模型边界

| 模型 ID | 本地权重目录 | 官方/本地边界 | 正式测试范围 | 不进入测试的范围 |
|---|---|---|---|---|
| `mlx_indextts2_standard_8bit` | `/Users/vanch/mlx-indextts2/models/mlx-indexTTS2-standard-8bit` | IndexTTS2 标准模型，官方 zh/en 基线；支持 zero-shot 克隆、情绪/音色解耦、显式情绪控制；本地 MLX CLI 暴露 `--target-duration/--fit-duration`。 | 中文/英文克隆、标准模型跨中英文克隆、`--emotion` 情绪控制、`--target-duration` 时长控制。 | 越南语不归入标准模型；参考风格迁移不按标准模型能力测试。 |
| `mlx_indextts2_vietnamese_8bit` | `/Users/vanch/mlx-indextts2/models/mlx-indexTTS2-vietnamese-8bit` | 本地 Vietnamese profile/单独越南语权重，属于 IndexTTS2 本地扩展能力。 | 越南语同语种克隆 `clone_vi_same`。 | 中文/英文标准项、跨语种项、时长控制、泛化风格迁移不由该模型承担。 |
| `mlx_voxcpm2_bf16_dit` | main: `/Users/vanch/mlx-voxcpm2/models/VoxCPM2-official-mlx-int8-components`; DiT: `/Users/vanch/mlx-voxcpm2/models/VoxCPM2-official-mlx-bf16-components` | 官方 VoxCPM2：30 种语言、9 个中文方言、Voice Design、Controllable/Ultimate Cloning、48kHz、Streaming；官方 demo 还覆盖 Song/唱歌风格。当前本地口径为 int8 main + BF16 feat_decoder/DiT。 | 多语朗读、9 个中文方言、越南语、克隆、跨语种克隆、声音设计、参考风格/韵律类控制、Song/唱歌风格、性能。 | Higgs 专属 `<|...|>` 控制 token 不测；Ultimate cloning 的 prompt audio + transcript 和真实 TTFA 流式指标需后续专项用例。 |
| `mlx_qwen3_tts_official_int8` | `/Users/vanch/mlx-qwen3-tts/models/Qwen3-TTS-official-mlx-int8` | Qwen3-TTS Base/standard：10 语言，Base ICL voice clone，文本生成、流式；不提供 IndexTTS2 式独立情绪向量，也不提供无参考方言标签控制。 | 10 语言内基础朗读、同语种克隆、参考驱动方言克隆 `dialect_clone`、长文本、性能。 | 越南语、无参考 `dialect_tts` 方言标签控制、VoiceDesign 用例、CustomVoice 预设音色用例、普通 `emotion_label` 情绪标签用例。 |
| `mlx_qwen3_tts_voice_design_official_int8` | `/Users/vanch/mlx-qwen3-tts/models/Qwen3-TTS-VoiceDesign-official-mlx-int8` | Qwen3-TTS VoiceDesign 专用模型，官方自然语言声线设计权重。 | `text_voice_design` 声音设计用例。 | 基础朗读、克隆、越南语、跨语种、CustomVoice 预设音色、无声线描述的情绪标签用例。 |
| `mlx_qwen3_tts_custom_voice_official_int8` | `/Users/vanch/mlx-qwen3-tts/models/Qwen3-TTS-CustomVoice-official-mlx-int8` | Qwen3-TTS CustomVoice 专用模型，官方预设 speaker 权重；本地 CLI 可列出 `serena`、`vivian`、`uncle_fu`、`ryan`、`aiden`、`ono_anna`、`sohee`、`eric`、`dylan`。 | 四川话预设 speaker `eric`、北京话预设 speaker `dylan`、情绪标签/风格 instruct 专项。 | 不拿它冒充 Base ICL 克隆或 VoiceDesign。 |
| `mlx_omnivoice_8bit_trim60` | `/Users/vanch/mlx-omnivoice/models/OmniVoice-8bit` | 官方 OmniVoice：600+ languages、zero-shot voice cloning、voice design、non-verbal/pronunciation control、duration/speed；但本地 8bit adapter 的 `[laughter]` 和短时长控制在 2026-06-10 补测中出现内容严重错误。 | 多语朗读、越南语、跨语种克隆、声音设计、长文本。 | Higgs 专属 `<|emotion:...|>` / `<|sfx:...|>` token 不测；本地 adapter 未验证通过前不进入非语言 token 和时长控制正式排名。 |
| `mlx_dots_tts_full_int8_g64` | `/Users/vanch/mlx-dots.tts/models/mlx-dots-tts-mf-bf16` | 官方 dots.tts：continuation voice cloning、x-vector-only cloning、多语/code-switch、情感表达；MiniMax 多语评测含 Vietnamese。本地用 Full `int8_g64` 组件参数。 | 参考音频克隆、越南语克隆、跨语种克隆、参考风格/情感提示。 | 无参考基础朗读不测；Higgs 专属控制 token 不测。 |
| `mlx_higgs_audio_v3_4b` | `/Users/vanch/mlx-higgs-audio/models/higgs-audio-v3-tts-4b-mlx` | 官方 Higgs Audio v3：100+ languages、zero-shot cloning、conversational TTS、inline emotion/style/prosody、streaming。 | 基础朗读、多语、越南语克隆、跨语种克隆、长文本、`<|...|>` 控制 token、唱歌风格 `<|style:singing|>`、性能。 | 不替代 Qwen VoiceDesign 专用自然语言声线设计模型。 |
| `valtec_vietnamese_tts` | `/Users/vanch/valtec-tts/pretrained` | 官方 Valtec Vietnamese TTS：Vietnamese 最优，多说话人和 3-10 秒 zero-shot cloning；非实时流式。 | 越南语克隆。 | 非越南语、跨语种、流式、Higgs/Qwen/Omni 专属控制能力不测。 |
| `mlx_scenema_audio_int8_mlx_mps_service` | `/Users/vanch/mlx-scenema-audio/models` | 官方 Scenema Audio：基于 LTX 2.3 的表演式 speech generation；支持自然语言音色设计、`<action>` 情绪/动作标签、场景环境音、10-20 秒参考音频 zero-shot 克隆、英参跨语种 polyglot 克隆、长文本分段连续性；官方站点和 Gradio 示例包含 singing/歌唱 prompt。本地版本为 MLX 主干推理 + MPS/PyTorch SeedVC。 | `text_voice_design`、`performance_action`、`scene_sfx`、英文同语种克隆、英参西语跨语种克隆、英文长文本连续性、歌曲/歌唱风格，以及官方语言集合内的基础朗读抽样。 | 越南语、本地中文方言、流式首包、Higgs/Supertonic 专属控制 token、IndexTTS2 独立情绪向量、Qwen CustomVoice 预设 speaker 不测。 |

## 矩阵修正

- 越南语克隆 `clone_vi_same` 目标模型为：`mlx_indextts2_vietnamese_8bit`、`mlx_voxcpm2_bf16_dit`、`mlx_omnivoice_8bit_trim60`、`mlx_dots_tts_full_int8_g64`、`mlx_higgs_audio_v3_4b`、`valtec_vietnamese_tts`、`vieneu_tts_0_3b_q8_gguf_cpu`。
- `mlx_indextts2_standard_8bit` 不再参加越南语测试；`mlx_indextts2_vietnamese_8bit` 不参加标准 zh/en 测试。
- `mlx_qwen3_tts_official_int8` 不再参加 VoiceDesign 和普通 `emotion_label` 用例；`mlx_qwen3_tts_voice_design_official_int8` 只参加声音设计用例。
- 控制类用例必须使用模型自己的控制接口：IndexTTS2 用 `--emotion`，Higgs 用 `<|emotion:...|>/<|sfx:...|>`，Supertonic 用 `<laugh>/<breath>/<sigh>`，参考风格模型只用参考音频迁移，不把控制说明写进待朗读正文。
- `mlx_qwen3_tts_custom_voice_official_int8` 进入 CustomVoice 专项：四川话使用官方 `eric` speaker，情绪标签使用对应 speaker + instruct，不拿它冒充 Base 或 VoiceDesign。
- 方言代码必须精确匹配：`zh_sichuan` / `yue` 不再被拆成普通 `zh` 后无条件放行；Qwen3 Base 只进入带参考音频的 `dialect_clone`，不进入无参考 `dialect_tts`。
- Qwen3 Base 方言克隆补充两条用例：`qwen_base_yue_dialect_clone` 和 `qwen_base_sichuan_dialect_clone`；参考音频为 VoxCPM2 官方 demo 合成方言锚点，因此标记为 `synthetic_dialect_anchor`，不是人工录音正式 SIM 标准。
- Qwen3 CustomVoice 无参考方言补充北京话用例：`qwen_custom_beijing_dialect`，使用官方预设 speaker `dylan`；四川话继续使用 `eric`。
- VoxCPM2 方言补齐为官方 9 方言覆盖：粤语、吴语/上海话、东北话、河南话、陕西话、山东话、天津话、闽南语、四川话；新增 `voxcpm2_*_dialect` 专项只由 VoxCPM2 承担。
- 歌曲/唱歌风格专项复用 `voxcpm2_song_zh_female`、`voxcpm2_song_en_pop` 两个用例；VoxCPM2 使用官方 `Song: ...` 控制词，Higgs 使用 `<|style:singing|>`，Scenema 使用官方 Gradio 风格的 singing voice description + `<action>` prompt。自动指标只评估内容、音频质量、时长/性能代理，音乐性和演唱表现仍需人工听审。
- `scenema_audio` 改用 MLX 优化仓库 `/Users/vanch/mlx-scenema-audio`；新增 Scenema 专项用例 `scenema_action_emotion_arc_en`、`scenema_scene_sfx_en`、`scenema_clone_tarkin_en`、`scenema_polyglot_obama_es`、`scenema_longform_en`，参考音频来自 Scenema 本地 demo 的 16 秒 Tarkin/Obama 片段。
- 新 runner 默认不写“能力不适用”的 manifest 行；旧 metrics 中的 `not_applicable_capability` 会被试听页和 dashboard 隐藏。
