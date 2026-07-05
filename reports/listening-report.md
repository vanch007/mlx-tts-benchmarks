# Vietnamese TTS long-form comparison — 2026-05-16

## Inputs

- Text: Vietnamese long-form comparison prompt from the original local benchmark run.
- Reference audio original: `Bạn khỏe không .m4a`
- Reference audio normalized WAV: [ban_khoe_khong_ref_24k.wav](../audio/reference/ban_khoe_khong_ref_24k.wav)
- Exact ref_text used for cloning-capable models: `Bạn khỏe không?`
- ASR check: OpenAI Whisper `tiny`, `--language Vietnamese`; this is a quick sanity transcript, not a final quality grade.

## Outputs

| Model | Ref audio? | Duration | Wall time | RTF | ASR similarity* | Output | Note |
|---|---:|---:|---:|---:|---:|---|---|
| Supertonic 3 preset F1 | False | 100.177s | 15.801s | 0.1577 | 0.8142 | [supertonic_F1_vi_long.wav](../audio/supertonic/supertonic_F1_vi_long.wav) | 固定音色；不使用参考音频克隆 |
| IndexTTS2 Vietnamese 8bit | True | 80.132s | 58.807s | 0.7339 | 0.7859 | [indextts2_vi_ref_long.wav](../audio/indextts2/indextts2_vi_ref_long.wav) | 使用参考音频克隆；越南语专用模型 |
| Qwen3-TTS Base int8 | True | 54.560s | 19.190s | 0.3517 | 0.7202 | [qwen3_tts_vi_ref_long.wav](../audio/qwen3-tts/qwen3_tts_vi_ref_long.wav) | 使用参考音频+ref_text ICL；lang-code=vi |
| OmniVoice 8bit | True | 110.221s | 40.508s | 0.3675 | 0.7548 | [omnivoice_vi_ref_long.wav](../audio/omnivoice/omnivoice_vi_ref_long.wav) | 使用参考音频+ref_text；实验性越南语对比 |

*ASR similarity is computed against the full input text from Whisper tiny transcript; use it only as a coarse content-readback signal because tiny Whisper misrecognizes Vietnamese TTS accents.

## Combined listening file

- Montage order: reference clip → Supertonic → IndexTTS2 → Qwen3-TTS → OmniVoice
- File: [vietnamese_tts_comparison_montage.wav](../audio/montage/vietnamese_tts_comparison_montage.wav)

<audio controls src="../audio/montage/vietnamese_tts_comparison_montage.wav"></audio>

### Individual listening files

Reference:

<audio controls src="../audio/reference/ban_khoe_khong_ref_24k.wav"></audio>

Supertonic 3 preset F1:

<audio controls src="../audio/supertonic/supertonic_F1_vi_long.wav"></audio>

IndexTTS2 Vietnamese 8bit:

<audio controls src="../audio/indextts2/indextts2_vi_ref_long.wav"></audio>

Qwen3-TTS Base int8:

<audio controls src="../audio/qwen3-tts/qwen3_tts_vi_ref_long.wav"></audio>

OmniVoice 8bit:

<audio controls src="../audio/omnivoice/omnivoice_vi_ref_long.wav"></audio>

## Quick ASR previews

### Supertonic 3 preset F1

Sáng nay, tôi thức dậy khi thành phố vẫn còn rất in tỉnh. Ngoài cửa số, ánh năng đầu tiên, dơi xuống những máy nhà màu sám, còn trên con đường nhỏ và người bán hàng đã bắt đầu chuẩn bị cho một ngày mới. Tôi phá một tách, cà phê, mờ cuốn số cú và viết

### IndexTTS2 Vietnamese 8bit

Sáng nay, tôi thức dạy khi thành phố phận còn rất in tỉn, ngoài cửa sỏng. Anh nắng đầu tiên rồi xuống những máy nhà màu sáng, còn truyên con đường nhỏ. Và người bán hàng đã bắt đầu chủvệ cho một ngày mới, từ phá một tất cả phê. Mở cũng sổ củ, và viết

### Qwen3-TTS Base int8

Sáng nay, tôi thức dậy khi thành phố vẫn còn rất in tính, ngoài cửa sổ ánh nặng đầu tiên dơi xuống những mãi nhà mồ sám, còn trên con đường nhỏ, và người bán hàng đã bắt đầu trình bị cho một ngày mới. Thôi phá một cách gà phê mở quín sổ cú và viết lạ

### OmniVoice 8bit

Sáng nay, tôi thức dậy, khi thành phố vẫn còn rất in tính, ngoài cửa số, anh nắng đầu tiên giời xuống nhựng lại nhà 1 3, còn trên con đường nhỏ, vài người banh hàng đã bắt đầu xuyền bị xơ một ngày mới, tôi phá một tay cà phê mà quên sổ cú và viết lại
