# Vietnamese voice-cloning deep comparison: IndexTTS2 vs Qwen3-TTS vs OmniVoice

## Correction

- Supertonic is excluded from this report because it is not a reference-audio cloning model.
- The Supertonic note previously added to `mlx-tts` was removed, and the Supertonic reference file was deleted from the skill.

## Test setup

- Root: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254`
- Cloning reference: `/Users/vanch/VideoLingo-plus/core/all_tts_functions/voice/Bạn khỏe không .m4a`
- Normalized reference WAV: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/ref/ban_khoe_khong_ref_24k.wav`
- Exact `ref_text`: `Bạn khỏe không?`
- MLX ASR: `mlx_whisper` + `mlx-community/whisper-large-v3-turbo`, fixed `--language vi`
- Reference ASR sanity check: `Bạn khỏe không?`
- Test rows: 6 categories: greeting, tone marks, raw digits/date/currency, punctuation/question, medium narration, long reflection.

## Overall result

| Rank by ASR CER | Model | Avg CER ↓ | Avg WER ↓ | Avg similarity ↑ | Worst CER | Ref phrase leaks | Repeat rate | Audio duration | Wall time | Wall RTF ↓ |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | IndexTTS2 Vietnamese 8bit | 0.0667 | 0.1230 | 0.9610 | 0.3143 | 0 | 0.0121 | 94.886s | 71.060s | 0.7489 |
| 2 | Qwen3-TTS Base official int8 | 0.1357 | 0.1250 | 0.9294 | 0.8143 | 0 | 0.0000 | 67.040s | 21.212s | 0.3164 |
| 3 | OmniVoice 8bit | 0.2045 | 0.2020 | 0.9231 | 1.0185 | 0 | 0.0000 | 125.446s | 50.624s | 0.4036 |

**Reading:** lower CER/WER is better. RTF here is wall time divided by generated segment duration and includes model load/warmup, because that is what the CLI batch run exposed consistently.

## Easy rows vs stress rows

Easy rows exclude raw numbers and the long paragraph.

| Subset | Model | Avg CER ↓ | Avg WER ↓ | Avg similarity ↑ |
|---|---|---:|---:|---:|
| Easy rows | IndexTTS2 Vietnamese 8bit | 0.0195 | 0.0238 | 0.9906 |
| Easy rows | Qwen3-TTS Base official int8 | 0.0000 | 0.0000 | 1.0000 |
| Easy rows | OmniVoice 8bit | 0.0057 | 0.0061 | 0.9952 |
| Stress rows | IndexTTS2 Vietnamese 8bit | 0.1611 | 0.3215 | 0.9019 |
| Stress rows | Qwen3-TTS Base official int8 | 0.4072 | 0.3750 | 0.7882 |
| Stress rows | OmniVoice 8bit | 0.6021 | 0.5938 | 0.7789 |

## Per-row ASR metrics

| Row | Category | IndexTTS2 CER/WER | Qwen3 CER/WER | OmniVoice CER/WER | Key finding |
|---|---|---:|---:|---:|---|
| vi_01_short_greeting | short_greeting | 0.0000/0.0000 | 0.0000/0.0000 | 0.0000/0.0000 | All models are near-perfect by MLX Whisper ASR. |
| vi_02_tone_marks | tone_marks | 0.0000/0.0000 | 0.0000/0.0000 | 0.0000/0.0000 | All models are near-perfect by MLX Whisper ASR. |
| vi_03_numbers_dates | numbers_dates_currency | 0.3143/0.6250 | 0.8143/0.7500 | 0.1857/0.2500 | Raw digits/date/currency are the hardest row: Qwen3 turns digits into nonsense; IndexTTS2 spells some parts incorrectly; OmniVoice is closest semantically but still changes amount wording. |
| vi_04_punctuation_question | punctuation_question | 0.0781/0.0952 | 0.0000/0.0000 | 0.0000/0.0000 | All pass; IndexTTS2 repeats “từng ý” once. |
| vi_05_medium_narration | medium_narration | 0.0000/0.0000 | 0.0000/0.0000 | 0.0229/0.0244 | All models are near-perfect by MLX Whisper ASR. |
| vi_06_long_reflection | long_reflection | 0.0079/0.0179 | 0.0000/0.0000 | 1.0185/0.9375 | OmniVoice adds a repeated unrelated subscription phrase after the target text; IndexTTS2 and Qwen3 stay on content. |

## Number-normalization probe

A separate one-row probe replaced digits with Vietnamese words. CER is less meaningful here because MLX Whisper normalizes spoken numbers back into digits, so the ASR text is more useful than the numeric score.

| Model | CER | WER | Similarity | ASR text |
|---|---:|---:|---:|---|
| IndexTTS2 Vietnamese 8bit | 0.6016 | 0.5833 | 0.5178 | Cuộc họp bắt đầu lúc 9h15 phút ngày 16 tháng 5 năm 2 1026 Chi phí dự kiến là 1.250.000 đồng |
| Qwen3-TTS Base official int8 | 0.5625 | 0.5556 | 0.5572 | Cuộc họp bắt đầu lúc 9h15 phút ngày 16 tháng 5 năm 2026, chi phí dự kiến là 1 triệu 250.000 đồng. |
| OmniVoice 8bit | 0.6406 | 0.6944 | 0.4956 | Cuộc họp bắt đầu lúc 9h15 phút ngày 16 tháng 5 năm 2026 Chi phí dự kiến là 1 triệu 250.000 đồng Điều này là 1 triệu 500.000 đồng |

Interpretation: Qwen3 benefits most from number pre-normalization; the previous raw-digit row became intelligible. OmniVoice still adds an extra wrong amount phrase. IndexTTS2 still has a year readback issue in this probe.

## Listening files

- Three-model combined montage order: reference → IndexTTS2 → Qwen3-TTS → OmniVoice
  - `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/vietnamese_clone_three_model_montage.wav`
- Casewise montage order per row: IndexTTS2 → Qwen3-TTS → OmniVoice
  - `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/vietnamese_clone_casewise_montage.wav`

Individual combined files:
- IndexTTS2 Vietnamese 8bit: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/indextts2_vi/combined.wav`
- Qwen3-TTS Base official int8: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/qwen3_tts/combined.wav`
- OmniVoice 8bit: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/omnivoice/combined.wav`

## Recommendation

1. **Best content fidelity for Vietnamese cloning:** IndexTTS2 Vietnamese. It has the lowest average CER/WER and no off-topic hallucination; main weakness is numeric/date/currency text.
2. **Best speed/content trade-off:** Qwen3-TTS. It is much faster than IndexTTS2 and perfect on normal prose in this test, but raw digits/date/currency are unsafe unless pre-normalized.
3. **Use OmniVoice cautiously for Vietnamese long-form.** Short and medium rows are strong, but the long paragraph produced an unrelated repeated “Hãy subscribe…” tail, so it needs chunking/stop-condition mitigation before production.

## Artifacts

- Summary CSV: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/analysis/summary.csv`
- Row metrics CSV: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/analysis/row_metrics.csv`
- MLX ASR JSON root: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/asr_mlx_whisper_large_v3_turbo`
- Number probe CSV: `/Users/vanch/tts_benchmarks/vietnamese_clone_deep_compare_20260516_110254/analysis/numbers_spelled_probe.csv`