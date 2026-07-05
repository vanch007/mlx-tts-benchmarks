# OmniVoice Leading Prefix / Boundary Fix — 2026-05-15

## Root cause

The audible tiny extra syllable at the beginning of many combined segments came from stitching, not from the individual generated WAVs.

The old combined export used `combine_silence_ms=80`, but runtime treated it as a crossfade/overlap duration. So every boundary overlapped 80 ms of the previous segment tail with the next segment start.

## Evidence

| Metric | Before | After |
|---|---:|---:|
| Sum of 8 segment durations | 26.44s | 26.44s |
| Combined WAV duration | 25.88s | 27.00s |
| Boundary behavior | -0.56s overlap loss | +0.56s true silence gaps |
| Expected duration after fix | — | 27.00s |

## Fix

- Added `concat_with_silence()`.
- `OmniVoiceRuntime.batch(... combine=True ...)` now inserts real zero-silence gaps instead of crossfading separate dialogue turns.
- `scripts/replay_manifest.py` now exposes `--combine-silence-ms` while keeping `--combine-crossfade-ms` as a backward-compatible alias.

## New output

- Combined WAV: `/Users/vanch/tts_benchmarks/omnivoice_leading_prefix_fixed_pilot8_20260515/omnivoice/combined.wav`
- Boundary A/B probe: `/Users/vanch/tts_benchmarks/omnivoice_leading_prefix_fixed_pilot8_20260515/boundary_probe_ab_before_then_after.wav`
- Before boundary probe: `/Users/vanch/tts_benchmarks/omnivoice_leading_prefix_fixed_pilot8_20260515/boundary_probe_before_crossfade_overlap.wav`
- After boundary probe: `/Users/vanch/tts_benchmarks/omnivoice_leading_prefix_fixed_pilot8_20260515/boundary_probe_after_true_silence.wav`

## ASR sanity check on regenerated segments

- rows: `8`
- avg content score: `0.9574`
- content failures: `0`
- max leakage: `0.1000`
- leakage failures: `0`
- generation RTF: `0.4974`
