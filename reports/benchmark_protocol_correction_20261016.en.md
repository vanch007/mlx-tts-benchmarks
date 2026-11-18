# Benchmark evaluation corrections — 2026-10-16

[中文版 / Chinese version](benchmark_protocol_correction_20261016.md)

This report is engineering validation and listening comparison on a development set. It is not a formal model ranking verified by an independent test set or blind listening.

## Corrected

- All historical records were kept (manifest of 469 rows; checked on 2026-11-14, the original text said “415”, which matches no file) and re-transcribed with MLX Qwen3-ASR 1.7B 8-bit. Per-row transcripts and audio SHA-256 hashes are kept.
- Speaker-similarity metrics and clone usability were recomputed against reference audio. Six stale Breeze `missing_cer` verdicts were fixed.
- Drama 3 Chinese and English cloning was regenerated from the actual text and reference. Chinese CER 0, English CER 0.0385; segment-aggregated cosine 0.5820 and 0.6359; both objective gates are usable. This verdict is not a human voice-similarity rating.
- For repeated records, the last successful revision in persisted record order is used; picking the best sample by RTF or quality was removed. Listening and scoring use the same order rule. Selection bias from the historical development phase cannot be removed retroactively.
- The content score no longer double-counts a pseudo-MOS derived from CER; the 1–5 scale of MOS/UTMOS is converted explicitly.
- Plain speaking rate is no longer evidence of emotion or paralinguistic control; without direct evidence the item is pending and contributes nothing to the total. Dialects without manual review earn no ability score. A 0 does not mean the model lacks the ability.
- CER is no longer treated as timbre drift, word overlap as confirmed reference leakage, or absence of failure flags as perfect robustness; the repetition rate subtracts the target text's own repetition baseline.
- “Long-text stability” was renamed “Short-paragraph continuity (minute-long text untested)”. Current samples are about 9–28 seconds.
- The overall score is labelled an exploratory proxy, every project's formal-ranking-ready status is “no”, and generation coverage and evidence coverage are reported separately.
- Added a per-checkpoint comparison table and a raw-metrics table for the shared English items; project roll-ups are not treated as single-checkpoint rankings.

## Audio kept but not scored for ability

- Higgs `clone_3s_en` actually used an 8.08-second reference, so it cannot validate 3-second cloning. The exact local weights are missing; the visible vanch007 Hugging Face repository and GitHub Releases do not contain them. To be retested once restored.
- MOSS `control_duration_20s` reaches the duration by inserting long pauses, so it does not count as natural-speech duration control.
- Two retired Qwen dialect items keep their historical records but do not enter formal item scoring.

## Experiments not yet done

An independent hold-out test set, multi-seed repeated trials, confidence intervals, native-speaker blind listening, minute-long text, multi-role identity consistency, and unified TTFA / concurrency / memory / steady-state timing are all outstanding. Historical input preprocessing, reference conditions and number of optimization rounds are still not fully consistent, so the corrections cannot turn a historical development set into a fair independent test.

Speaker ECAPA, UTMOS and ASR are objective proxies; they cannot support claims about subjective naturalness, emotional success or an inherent model weakness. Newly found automatic-metric anomalies should be treated as leads for investigation.

## Auditable outputs

- [Validation manifest](protocol_repair_20261016_validation.json)
- [Per-item evaluation manifest](v02_plus_vieneu_lux_scenema_20260610_091619_evaluation_manifest.csv)
- [Checkpoint comparison](v02_plus_vieneu_lux_scenema_20260610_091619_artifact_comparison.csv)
- [Shared English items](v02_plus_vieneu_lux_scenema_20260610_091619_common_task_comparison.csv)

The original data and the replaced published files are kept locally in `tts-test-project/results/protocol_repair_20261016/`. The scoring-engine regression check is 140 tests passed; data and citation checks follow the validation manifest.
- Speaker-similarity metrics and clone usability were recomputed against reference audio; six stale Breeze `missing_cer` verdicts were fixed.
- Added option 3 (Audio-LLM as a Judge) to strengthen voice-cloning and emotion evaluation: for all 112 cloning test pairs, Gemini multimodal audio evaluation produced subjective speaker-similarity (SMOS), emotion and tone vividness (EMOS) and overall naturalness, with structured diagnostic reasons. It removed the conservative penalty and veto a lone UTMOS applied to large emotional dynamics and breathing pauses, so voice-cloning scores of models that sound good, such as IndexTTS 2.5, returned to their real performance. (This was later revoked; see 2026-11-14 below.)

## 2026-11-14 method and data corrections

The following issues found by audit were fixed in the scoring engine and published files; no audio was regenerated:

- Score-table de-duplication: for 9 (model, item) groups with duplicates only the last successful record in input order is kept; superseded records go to `*.superseded_rows.csv`. The score table went from 430 to 421 rows, and the leaderboard's sample selection matches it.
- Excluded items are no longer scored: row-level scores for Moss `control_duration_20s` and Higgs `clone_3s_en` are blank, and sample and failure counts were reduced accordingly (Higgs 32→31, Moss 28→27).
- Leaderboard grouping: projects with `coverage_pct < 70` or fewer than 10 scored samples (the first threshold was 80, later changed to 70) are marked `insufficient_coverage` and sorted last; `mlx_indextts2` (only 1 Vietnamese sample) no longer holds a formal comparison slot. The leaderboard scores themselves did not change.
- Added the `evidence_coverage_pct`, `checkpoint_ids` and `score_basis` columns; the `score_full` basis differs between the leaderboard and the per-item score table, and this is now labelled explicitly.
- Two records with CER/WER above 1 (Ming3 tiny `core_zh_numbers`, Voxmel `xling_en_to_zh`) are flagged `asr_runaway_output`.
- Scales: `sim`, `sim_o`, `emotion_accuracy` and `language_score` became declared 0–1 scores; fixed `speaker_similarity_score` being wrongly replaced by `sim` when it was 0; values in still-mixed-scale fields that cannot be decided are written to `scale_ambiguous_fields` (currently 1 row).
- The nine axis weights must total 100 or the report build fails.

**Still unresolved**: the Gemini judge is not human-calibrated and dominated the cloning score; emotion / paralinguistic / style axes have only the judge as proxy evidence; all languages use CER uniformly, a single ASR, the ECAPA 0.25 threshold and UTMOS validity for non-English is uncalibrated; sample / RTF timing scope; repeated records have no timestamps. Differences between a Qwen project roll-up and a single checkpoint must be checked against the `checkpoint_ids` column.

### 2026-11-14 addendum: text metrics recomputed (ASR not rerun)

Text metrics were recomputed under the new rules from the saved ASR transcripts; audio metrics (UTMOS, ECAPA, judge scores, RTF) were untouched and no audio was regenerated:

- Text normalization: NFKC first, combining marks kept (Devanagari vowel signs are no longer dropped as punctuation), and for Arabic optional diacritics and tatweel are removed and alef/yeh variants unified. This mainly affects Hindi: 6 of the 7 `core_hi_amount` records changed CER, for example VoxCPM2 went from 0 to 0.0417 and WER from 0 to 0.1667, having been scored full marks too leniently. CER for Vietnamese, Arabic and the other languages did not change.
- Content accuracy chooses its metric by language: CER for Chinese (including dialects), Cantonese, Japanese, Korean, Thai and other character-level scripts, WER for other space-delimited languages (English, Spanish, French, German, Vietnamese, Arabic, Hindi); the choice is recorded in a new `content_metric` column, and `language_score` uses it too. English and similar languages therefore became stricter: IndexTTS 2.5's content-accuracy axis went from 91.2 to 81.7.
- Leaderboard totals moved within ±0.6, except IndexTTS 2.5 at −2.4 (rank 10 → 13); Moss and OmniVoice swapped ranks 4 and 5.
- Row-level changes are in `tts-test-project/results/protocol_repair_20261016/rescore_changes.csv`.

Still not redone: speaker similarity (ECAPA), UTMOS and Gemini judge scores. They need human annotation or new calibration experiments, and current scores stand.

## 2026-11-14: cloning score moved to two local speaker models; the judge left scoring

- The Gemini SMOS described earlier (0.7-weight blend that bypassed the verdict cap) was **revoked**. Basis: across 209 real records, Gemini SMOS correlated with ECAPA and CAM++ at only 0.27 / 0.26, while ECAPA and CAM++ correlated with each other at 0.82; the judge's repeatability / position-bias / wrong-reference calibration could not be completed because the API quota ran out (only 41 successful calls).
- New cloning score = mean of the calibrated ECAPA and CAM++ (MLX, local `campplus_cn_common`) scores, then blended with the usability score under the original rules; if either model says unusable or marginal, the score is capped at 35 / 65. The SMOS column is kept for reference.
- The calibration set is small (11 same-speaker pairs, 220 different-speaker pairs, all from this project's reference audio; same-speaker pairs are halves of one clip, which is easier than real cloning), AUC about 0.987; the CAM++ threshold is an estimate (different-speaker mean shifted up by 0.10), **not** an independently validated threshold.
- Leaderboard changes: moss_tts rose to 3rd (+0.84), qwen3_tts and omnivoice each fell one place, breeze_tts2 passed ming3_0.5b; ming3_tiny −3.20, indextts2 −2.21 (still insufficient_coverage).
