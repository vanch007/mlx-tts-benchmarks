# OmniVoice Content Fidelity Optimization — 2026-05-15

## Root cause

The 8-row benchmark used OmniVoice CLI defaults through the shared runner: `--num-step 24` and implicit `--position-temperature 5.0`. The high stochastic position temperature changed masked-token fill order and caused short-line reference/leading-word drift, visible on rows `0001_speaker` and `0003_speaker` in the baseline ASR output.

## Fix

- Set OmniVoice content-fidelity defaults to `num_step=32` and `position_temperature=0.0`.
- Updated `run_backend_benchmark.py` to pass `--position-temperature 0.0` explicitly and use `--require-ref-text` for OmniVoice clone benchmarks.
- Kept the shared exact `ref_text` manifest; clean Qwen refs were tested but did not improve OmniVoice row-level content on this pilot.

## Results

| Run | Num step | Position temp | Gen RTF | Steady RTF rows 2-8 | Avg ASR content | Min ASR content | Content failures | Max leakage | Leakage failures |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Baseline | 24 | 5.0 implicit | 0.5818 | 0.5745 | 0.9171 | 0.7273 | 2/8 | 0.0870 | 0 |
| Fixed | 32 | 0.0 | 0.5145 | 0.5075 | 0.9574 | 0.8500 | 0/8 | 0.1000 | 0 |

## Artifacts

- Fixed output root: `/Users/vanch/tts_benchmarks/omnivoice_content_match_fixed_pilot8_20260515`
- Fixed combined WAV: `/Users/vanch/tts_benchmarks/omnivoice_content_match_fixed_pilot8_20260515/omnivoice/combined.wav`
- Fixed manifest: `/Users/vanch/tts_benchmarks/omnivoice_content_match_fixed_pilot8_20260515/omnivoice/manifest.csv`
- Fixed ASR scored CSV: `/Users/vanch/tts_benchmarks/omnivoice_content_match_fixed_pilot8_20260515/omnivoice/asr_scored.csv`
- Baseline ASR failures: `0001_speaker, 0003_speaker`
- Fixed ASR failures: `none`

## Fixed ASR excerpts

- `0001_speaker` score `0.8500`: 各位观众欢迎收听今日AI修仙群 / 虾BB报告
- `0002_speaker` score `1.0000`: 今天这群不叫聊天群
- `0003_speaker` score `1.0000`: 那叫什么
- `0004_speaker` score `1.0000`: 叫羊毛批发市场 / 顺便卖点人生苦难
- `0005_speaker` score `0.8889`: 第一案 薅羊毛大战
- `0006_speaker` score `0.9200`: 这个我熟日抛号 / 周抛号 / 共享额度反中立 / 废了改codex
- `0007_speaker` score `1.0000`: 还有人双开Codex
- `0008_speaker` score `1.0000`: 好家伙 / 别人双开游戏 / 他双开牛马
