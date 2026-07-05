# OmniVoice clean-speaker-ref trim60 verification (2026-05-16)

## Root cause

The audible extra prefix in the standalone first segment was not stitching overlap. The individual WAV already contained the artifact. The trigger was scene-style reference audio with neighboring conversational context, which polluted OmniVoice voice-clone conditioning.

## Fix profile

- Clean speaker-level refs: `0526` for 逗哏, `0289` for 捧哏.
- `ref_context_trim_ms=60` before prompt encoding.
- Content fidelity profile: `num_step=32`, `position_temperature=0.0`, `guidance_scale=2.0`, `require_ref_text=True`.
- Stitching remains true silence-gap concatenation (`concat_with_silence`), not crossfade.

## Verification

### 8-row pilot

- Directory: `/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_pilot8_20260516`
- ASR summary: `rows=8`, `avg_content_score=0.9524`, `content_failures=0`
- Listening probe: `/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_pilot8_20260516/listening_probe/AB_old_then_clean_row1_first3s.wav`

### Full64 OmniVoice replay

- Directory: `/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_full64_20260516`
- Combined audio: `/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_full64_20260516/omnivoice/combined.wav`
- Segment manifest: `/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_full64_20260516/omnivoice/manifest.csv`
- Row1 listening probe: `/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_full64_20260516/listening_probe/row1_full64_first3s.wav`
- Metrics: `rows=64`, `generated_duration_s=175.76`, `generation_elapsed_s=118.013`, `generation_rtf=0.6714`, `avg_row_rtf=0.7131`

### Four-backend performance run

- Directory: `/Users/vanch/tts_benchmarks/mlx_four_backend_full64_cleanrefs_20260516`
- Successful backends: IndexTTS2, VoxCPM2, Qwen3-TTS.
- OmniVoice in that first run failed because its CLI did not yet parse JSON array manifests; fixed by adding JSON support and verified in the dedicated OmniVoice full64 replay above.

## Tests

- `/Users/vanch/mlx-omnivoice`: `pytest -q` → `15 passed`
- `/Users/vanch/.hermes/skills/mlx-tts`: `pytest tests/test_run_backend_benchmark.py -q` → `4 passed`
