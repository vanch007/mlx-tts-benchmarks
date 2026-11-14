# 本地开源 TTS 模型能力边界深度审计

- 审计日期：2026-06-13
- 当前 run：`v02_plus_vieneu_lux_scenema_20260610_091619`
- 执行矩阵导出：`reports/model_capability_test_mapping_20260613.csv`
- 口径：以官方 GitHub / 官方 demo / 官方 Hugging Face 为能力上限，再以本地具体权重和 CLI 参数为可测边界。官方有但本地适配器没有参数入口的能力只记录，不进入正式评分。

## 本轮修正结论

1. Qwen3-TTS 必须拆成 Base、VoiceDesign、CustomVoice 三个权重边界：
   - Base：10 语言基础朗读、ICL/reference voice clone、参考驱动方言克隆，不测无参考方言标签和普通情绪标签。
   - VoiceDesign：自然语言声线设计和情绪/风格描述，不测克隆。
   - CustomVoice：官方预设 speaker；四川话走 `eric`，北京话走 `dylan`。
2. VoxCPM2 方言和唱歌必须走官方 `--control` 通道；方言使用 `广东话/四川话/...` 这种标签，不使用通用自然语言提示。
3. OmniVoice 的方言测试不能只靠目标文本，需走 `--instruct`；粤语已补为 `--instruct 粤语`。
4. Higgs Audio 支持唱歌/风格 token，本轮把唱歌风格纳入 `song_style`，命令文本前缀为 `<|style:singing|>`。
5. Scenema Audio 的表演、场景音效、唱歌和克隆必须走本地服务的官方 payload 语义：`mode`、`voice`、`raw_xml`、`reference_voice_url`、`background_sfx`，不能复用 VoxCPM2 的 `Song:` 控制词。
6. Supertonic 官方有 voice cloning 入口，但当前本地 ONNX 适配器只接入固定 voice style 和 inline expression tags；克隆暂不进入正式评分。
7. VieNeu/Valtec 只在本地当前权重边界内计入越南语 TTS/克隆；VieNeu v2/v3 新能力另开权重项后再测。

## 模型边界与测试项

| 具体模型 | 官方能力边界 | 本地参数入口 | 已匹配测试项 | 不纳入/待补 |
|---|---|---|---|---|
| `mlx_indextts2_standard_8bit` | IndexTTS2：zero-shot TTS、情绪/音色解耦、时长控制，标准 zh/en 权重。 | `mlx-indextts generate --profile standard -r <ref> --emotion <label> --target-duration <sec> --fit-duration` | zh/en 克隆、3 秒短参考、zh/en 跨语种克隆、情绪标签、3/10/20 秒时长控制。 | 越南语由单独 vi 权重承担；方言不纳入标准模型。 |
| `mlx_indextts2_vietnamese_8bit` | 本地 Vietnamese profile/权重扩展。 | `mlx-indextts generate --profile vietnamese -r <vi_ref>` | `clone_vi_same`。 | 不承担 zh/en、情绪、时长和跨语种。 |
| `mlx_voxcpm2_bf16_dit` | 30 语言、9 中文方言、Voice Design、Controllable/Ultimate Cloning、48kHz、Streaming；官方 demo 覆盖 Song。 | `mlx_voxcpm2.cli generate --control <官方标签> --reference-wav-path <ref> --feat-decoder-model-dir <bf16_dit> --inference-timesteps 10 --cfg-value ... --normalize --retry-badcase` | 基础多语、越南语、9 方言、声音设计、情绪、参考风格、同/跨语种克隆、Song、长文本、性能。 | Ultimate cloning 的 prompt audio + transcript、真实流式 TTFA 仍需专项。 |
| `mlx_qwen3_tts_official_int8` | Qwen3-TTS Base：10 语言、Base ICL voice clone、流式；不提供独立情绪向量。 | `mlx_qwen_tts.cli generate --require-official --lang-code <code> --ref-audio <ref> --ref-text <text>` | 10 语言朗读、同语种克隆、短参考克隆、参考驱动粤语/四川话克隆、长文本、性能。 | 越南语、无参考方言标签、VoiceDesign、CustomVoice、普通情绪标签。 |
| `mlx_qwen3_tts_voice_design_official_int8` | Qwen3 VoiceDesign：自然语言声线设计和自然语言控制。 | `mlx_qwen_tts.cli generate --instruct <voice/emotion description>` | 儿童女声、ASMR、体育解说、情绪标签三项。 | 克隆、越南语、预设 speaker。 |
| `mlx_qwen3_tts_custom_voice_official_int8` | Qwen3 CustomVoice：官方预设 speaker；本地可用 `serena/vivian/uncle_fu/ryan/aiden/ono_anna/sohee/eric/dylan`。 | `mlx_qwen_tts.cli generate --voice <speaker> --instruct <style>` | 四川话 `eric`、北京话 `dylan`、中文情绪标签。 | 不作为 Base 克隆或 VoiceDesign；其他 speaker 专项可后续扩展。 |
| `mlx_omnivoice_8bit_trim60` | 600+ languages、zero-shot cloning、voice design/instruct、auto voice、duration/speed 控制。 | `mlx_omnivoice.cli generate --instruct <attr> --ref-audio <ref> --ref-text <text> --duration <sec>` | 多语、越南语、粤语/四川/东北/河南/陕西/山东方言 instruct、同/跨语种克隆、声音设计、长文本。 | 本地 `[laughter]` 和强时长控制曾失败，未重新通过前不进正式控制 token/时长排名。 |
| `mlx_dots_tts_full_int8_g64` | dots.tts：2B continuous AR TTS、zero-shot/style cloning、cross-lingual/code-switch、expressiveness。 | `mlx-dots.tts --prompt-audio <ref> --prompt-text <text> --qwen-variant int8_g64 --component-variant int8_g64 --language <code>` | 同/跨语种克隆、越南语克隆、参考情绪/耳语/播客风格迁移。 | 无参考基础朗读、Higgs token、VoxCPM2 方言标签。 |
| `mlx_higgs_audio_v3_4b` | Higgs Audio：多语、voice clone、conversational TTS、inline emotion/style/prosody token、streaming。 | `scripts/run_tts.py --text '<|emotion:...|>...' --reference-audio <ref> --reference-text <text>` | 多语、越南语克隆、同/跨语种克隆、长文本、情绪 token、副语言 token、参考风格、唱歌 `<|style:singing|>`、性能。 | 不替代 Qwen VoiceDesign 的自由声线设计。 |
| `valtec_vietnamese_tts` | Vietnamese TTS / zero-shot Vietnamese voice cloning。 | `infer_zeroshot.py --cpu --reference <ref> --seed 2 --noise-scale 0.4 --noise-scale-w 0.35 --length-scale 1.3` | `clone_vi_same`。 | 非越南语、多语、流式、控制类。 |
| `vieneu_tts_0_3b_q8_gguf_cpu` | VieNeu 0.3B/GGUF：Vietnamese TTS、3-5 秒参考克隆、CPU 低延迟。 | `scripts/run_vieneu_tts.py --voice-id Binh` 或 `--ref-audio <ref> --ref-text <text>` | 越南语基础朗读、越南语克隆。 | VieNeu v2/v3 的双语、表情/非语言和对话模式未作为当前 0.3B 权重评分。 |
| `mlx_scenema_audio_int8_mlx_mps_service` | Scenema Audio：表演式 speech generation、voice design、emotion/action arcs、场景音效、10s reference clone、polyglot clone、长文本、singing prompt。 | `scripts/run_scenema_audio.py --mode voice_design|generate --voice <description> --raw-xml <speak/action> --reference-audio <ref> --background-sfx --pace 1.5 --vc-steps 25` | 声音设计、情绪动作标签、场景音效、Tarkin 英文克隆、Obama 英参西语克隆、长文本、唱歌风格。 | 阿语、越南语、本地中文方言、真实流式首包、Higgs/Supertonic token。 |
| `supertonic3_onnx_cpu` | Supertonic 3：31 语言、CPU/ONNX、本地合成、inline expression tags；官网有 voice cloning demo。 | `scripts/run_supertonic_onnx.py --voice-style <M/F>.json --lang <code>`，文本内 `<laugh>/<breath>/<sigh>` | 31 语言抽样、长文本、笑声/叹气/呼吸 inline tags、性能。 | 当前本地 ONNX 适配器未接入 voice cloning；不进克隆评分。 |

## 当前矩阵规模

- 当前 runner 选择结果：218 条 `模型 × 测试项`。
- 模型覆盖数：13 个具体权重/适配器。
- 能力覆盖：基础朗读、同语种克隆、跨语种克隆、方言、方言参考克隆、声音设计、情绪、风格迁移、副语言 token、唱歌、时长、长文本、流式/性能、越南语专项、Scenema 表演场景。
- 仍不进入正式评分的能力：
  - Scenema/VoxCPM2 真流式首包，需要服务端/流式协议专项。
  - VoxCPM2 Ultimate cloning 的 prompt transcript 双输入专项。
  - Supertonic voice cloning，本地 ONNX adapter 未接入。
  - VieNeu v2/v3 新能力，本地当前评分权重是 0.3B Q8 GGUF。
  - 中文噪声/手机参考音频压力测试因缺真实来源匹配参考音频，已从正式测试矩阵移除；后续拿到合规参考音频后再作为新测试项加入。

## 官方来源

- IndexTTS2 GitHub：`https://github.com/index-tts/index-tts`
- IndexTTS2 demo：`https://index-tts.github.io/index-tts2.github.io/`
- VoxCPM GitHub：`https://github.com/OpenBMB/VoxCPM/`
- VoxCPM2 demo：`https://openbmb.github.io/voxcpm2-demopage/`
- Qwen3-TTS GitHub：`https://github.com/QwenLM/Qwen3-TTS`
- Qwen3-TTS blog：`https://qwen.ai/blog?id=qwen3tts-0115`
- OmniVoice GitHub：`https://github.com/k2-fsa/OmniVoice`
- OmniVoice demo：`https://zhu-han.github.io/omnivoice/`
- dots.tts GitHub：`https://github.com/rednote-hilab/dots.tts`
- dots.tts demo：`https://rednote-hilab.github.io/dots.tts-demo/`
- Higgs Audio GitHub：`https://github.com/boson-ai/higgs-audio`
- Higgs TTS cookbook：`https://sgl-project.github.io/sglang-omni/cookbook/higgs_tts.html`
- Scenema Audio GitHub：`https://github.com/ScenemaAI/scenema-audio`
- Scenema Audio demo/site：`https://scenema.ai/audio`
- Supertonic GitHub：`https://github.com/supertone-inc/supertonic`
- Supertonic demo/site：`https://supertonic3.github.io/`
- VieNeu-TTS GitHub：`https://github.com/pnnbao97/VieNeu-TTS`
- VieNeu-TTS docs：`https://docs.vieneu.io/`
- Valtec Vietnamese TTS GitHub：`https://github.com/tronghieuit/valtec-tts`
- Valtec zero-shot Space：`https://huggingface.co/spaces/valtecAI-team/valtec-zeroshot-voice-cloning`
