from __future__ import annotations

import csv
import json
import re
import time
from difflib import SequenceMatcher
from pathlib import Path

from transformers import pipeline

root = Path('/Users/vanch/tts_benchmarks/omnivoice_clean_speaker_refs_trim60_full64_20260516/omnivoice')
manifest = root / 'manifest.csv'
out_csv = root / 'asr_full64_scored.csv'
out_json = root / 'asr_full64_summary.json'
PUNCT_RE = re.compile(r"[\s，。！？、,.!?;:：；「」『』“”\"'（）()【】\[\]《》<>…—_-]+")


def norm(text: str) -> str:
    return PUNCT_RE.sub('', (text or '').lower())


def similarity(a: str, b: str) -> float:
    aa, bb = norm(a), norm(b)
    if not aa and not bb:
        return 1.0
    if not aa or not bb:
        return 0.0
    return SequenceMatcher(None, aa, bb).ratio()


def main() -> None:
    with manifest.open('r', encoding='utf-8-sig', newline='') as f:
        rows = list(csv.DictReader(f))

    asr = pipeline('automatic-speech-recognition', model='openai/whisper-large-v3-turbo', device=-1)
    scored: list[dict[str, str]] = []
    start = time.perf_counter()
    for i, row in enumerate(rows, 1):
        audio = row.get('output_path') or row.get('output_wav') or ''
        asr_text = str(asr(audio)['text']).strip() if audio else ''
        expected = row.get('text') or row.get('expected_text') or ''
        ref_text = row.get('ref_text') or ''
        content_score = similarity(expected, asr_text)
        leakage_score = similarity(ref_text, asr_text) if ref_text else 0.0
        item = dict(row)
        item.update({
            'asr_text': asr_text,
            'content_score': f'{content_score:.4f}',
            'leakage_score': f'{leakage_score:.4f}',
            'content_pass': str(content_score >= 0.85),
            'leakage_pass': str(leakage_score < 0.65 or not ref_text),
        })
        scored.append(item)
        if i % 8 == 0:
            print(f'ASR {i}/{len(rows)}', flush=True)

    fieldnames = list(scored[0].keys()) if scored else []
    with out_csv.open('w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(scored)

    content_values = [float(r['content_score']) for r in scored]
    leakage_values = [float(r['leakage_score']) for r in scored]
    summary = {
        'rows': len(scored),
        'avg_content_score': round(sum(content_values) / len(content_values), 4),
        'min_content_score': round(min(content_values), 4),
        'max_leakage_score': round(max(leakage_values), 4) if leakage_values else 0.0,
        'content_failures': sum(r['content_pass'] == 'False' for r in scored),
        'leakage_failures': sum(r['leakage_pass'] == 'False' for r in scored),
        'elapsed_s': round(time.perf_counter() - start, 4),
        'csv': str(out_csv),
    }
    out_json.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(summary, ensure_ascii=False, indent=2), flush=True)


if __name__ == '__main__':
    main()
