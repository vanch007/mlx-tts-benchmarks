# 参考音频来源审计

- 审计日期：2026-06-10
- 口径：克隆、风格迁移、压力测试必须使用有明确来源、单说话人、可追溯文本的参考音频；本地派生噪声、电话带宽模拟、未知私人录音不能作为正式评分参考。

## 已确认可用

| 测试项 | 参考音频 | 来源 | 处理 |
|---|---|---|---|
| `control_style_transfer` 中文播客节奏风格迁移 | `voxcpm2_style_prompt1.wav` | VoxCPM2 官方 demo `Controllable Voice Cloning: Same Voice, Different Styles` 的 `audio/style_control/prompt1.wav` | 保留，用于风格/韵律迁移。 |
| 英文噪声 prompt 候选 | `omnivoice_noisy_en_prompt_8463.wav` | OmniVoice 官方 `Noise Robustness` demo 的 noisy prompt | 已入库为候选；只适合英文噪声 prompt 鲁棒性，不替代中文噪声/手机参考。 |

## 当前阻塞

| 测试项 | 原参考 | 问题 | 新状态 |
|---|---|---|---|
| `stress_noisy_ref_clone` 中文噪声参考音频克隆压力测试 | `noisy_single_speaker_zh_ref.wav` | 由 `dots_seedtts_zh_ref.wav` 本地加噪派生，不是来源对应的真实噪声录音。 | 改为 `source_matched_noisy_zh_ref_required`，无真实文件前阻塞，不打分。 |
| `stress_phone_ref_clone` 中文手机录音参考克隆压力测试 | `phone_simulated_single_speaker_zh_ref.wav` | 由 `dots_seedtts_zh_ref.wav` 本地电话带宽模拟，不是真实手机/电话参考音频。 | 改为 `phone_clean_single_speaker_placeholder`，无真实文件前阻塞，不打分。 |

## 候选来源

- VoxCPM2 官方 demo 页面：`https://openbmb.github.io/voxcpm2-demopage/`
- OmniVoice 官方 demo 页面：`https://zhu-han.github.io/omnivoice/`
- OpenSLR SLR123 MAGICDATA 普通话移动端会话语音：`https://www.openslr.org/123/`，数据量约 15G，不适合在未抽样前直接纳入当前项目。
- MagicData 中文电话自然会话数据：`https://www.magicdatatech.com/datasets/asr/mdt-asr-a007-mandarin-chinese-conversational-speech-recognition-corpus`，页面说明有 5.2h 开源子集，但当前没有可直接下载的小样本文件。
- MagicHub 电话语音数据：`https://magichub.com/datasets/mandarin-chinese-conversational-speech-corpus-telephony/`，页面说明为电话语音，但下载需要登录/授权。

## 执行规则

- 没有真实来源匹配参考音频时，压力项只能显示为阻塞，不能生成、不能计入 SIM/UTMOS/总分。
- 如果后续采集中文噪声或手机参考，必须补齐：来源页面或采集说明、单说话人确认、转写文本、时长、采样率、license/使用边界。
- 本地私有录音、会议录音、聊天录音默认不进入标准测试，除非用户明确指定并完成隐私与授权确认。
