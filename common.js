// Shared helpers for compare.html and listen.html. Data comes from site_data.js (window.SITE);
// language comes from i18n.js (window.I18N). Every helper returns text in the current language.
(function () {
  const S = window.SITE, L = window.I18N;
  const t = L.t;
  const byModel = Object.fromEntries(S.models.map(m => [m.id, m]));
  const byAxis = Object.fromEntries(S.axes.map(a => [a.id, a]));
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
  const fmt = (v, d = 0) => (v === null || v === undefined || Number.isNaN(v)) ? "–" : Number(v).toFixed(d);
  const params = () => new URLSearchParams(location.search);
  const setParams = obj => {
    const p = params();
    Object.entries(obj).forEach(([k, v]) => (v === null || v === "" || (Array.isArray(v) && !v.length)) ? p.delete(k) : p.set(k, Array.isArray(v) ? v.join(",") : v));
    history.replaceState(null, "", location.pathname + (p.toString() ? "?" + p : ""));
  };
  const SERIES = ["--s1", "--s2", "--s3", "--s4"];
  const DASH = ["", "6 4", "2 3", "10 3 2 3"];  // secondary encoding so identity is never colour alone
  const color = i => getComputedStyle(document.documentElement).getPropertyValue(SERIES[i]).trim();

  // ---- language-aware names
  const axisShort = a => L.pick(a, "short");
  const axisName = id => (byAxis[id] ? axisShort(byAxis[id]) : id);
  const caseName = c => L.pick(c, "name");
  const langName = code => { const e = S.langs[code]; return e ? e[L.zh ? 0 : 1] : code; };
  const tagTitle = s => L.pick(s, "title");
  const headline = m => L.pick(m, "headline");
  const groupName = g => g === "full" ? t("全功能组", "Full-featured") : t("专用与轻量组", "Focused & lightweight");
  const groupTag = g => g === "full" ? t("全功能", "Full") : t("专用", "Focused");
  const stateText = st => ({na: t("不支持", "Unsupported"), pending: t("待验证", "Pending"), miss: t("未生成", "Not generated"), untested: t("未测", "Untested")}[st] || "–");
  const rankText = (r, n) => t(`第 ${r}/${n}`, `#${r} of ${n}`);

  // Radar of up to four models. Axes a model does not support are drawn at the centre.
  function radar(models, axes, size = 380) {
    const c = size / 2, r = size / 2 - 64, n = axes.length;
    const pt = (i, v) => {
      const ang = -Math.PI / 2 + i * 2 * Math.PI / n;
      return [c + Math.cos(ang) * r * v / 100, c + Math.sin(ang) * r * v / 100];
    };
    let g = "";
    [20, 40, 60, 80, 100].forEach(v => {
      g += `<polygon points="${axes.map((_, i) => pt(i, v).join(",")).join(" ")}" fill="none" stroke="var(--line)" stroke-width="1"/>`;
    });
    axes.forEach((a, i) => {
      const [x, y] = pt(i, 100), [lx, ly] = pt(i, 124);
      g += `<line x1="${c}" y1="${c}" x2="${x}" y2="${y}" stroke="var(--line)"/>`;
      g += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="var(--muted)">${esc(axisShort(a))}${a.caveat ? "*" : ""}</text>`;
    });
    models.forEach((m, k) => {
      const pts = axes.map((a, i) => pt(i, m.cells[a.id].st === "ok" ? m.cells[a.id].v : 0));
      g += `<polygon points="${pts.map(p => p.join(",")).join(" ")}" fill="${color(k)}" fill-opacity=".08" stroke="${color(k)}" stroke-width="2" stroke-dasharray="${DASH[k]}" stroke-linejoin="round"/>`;
      pts.forEach((p, i) => {
        const cell = m.cells[axes[i].id];
        const label = cell.st === "ok" ? `${fmt(cell.v)} (${rankText(cell.rank, cell.n)})` : t("不支持或未计分", "unsupported or unscored");
        g += `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${color(k)}" stroke="var(--panel)" stroke-width="2"><title>${esc(m.label)} · ${esc(axisShort(axes[i]))}: ${label}</title></circle>`;
      });
    });
    return `<svg viewBox="0 0 ${size} ${size}" width="100%" style="max-width:${size + 40}px" role="img" aria-label="${t("能力雷达", "Capability radar")}">${g}</svg>`;
  }

  function legend(models) {
    return models.map((m, k) => `<span style="margin-right:14px;white-space:nowrap"><svg width="26" height="10"><line x1="1" y1="5" x2="25" y2="5" stroke="${color(k)}" stroke-width="3" stroke-dasharray="${DASH[k]}"/></svg> ${esc(m.label)}</span>`).join("");
  }

  // One sample card. opts.caseTitle replaces the model title; opts.extra goes at the right of the title row.
  function sampleCard(s, opts = {}) {
    const m = byModel[s.m];
    const metrics = [
      s.s !== null ? `<b class="num">${fmt(s.s)}</b> ${t("分", "pts")}${s.takes > 1 && s.mean !== null ? `<span class="muted">${t(`（${s.takes} 次平均 ${fmt(s.mean)}）`, ` (mean of ${s.takes} takes: ${fmt(s.mean)})`)}</span>` : ""}` : `<span class="muted">${t("未计分", "unscored")}</span>`,
      s.err !== null ? `${s.errk} ${fmt(s.err * 100, 1)}%` : "",
      s.utmos !== null ? `UTMOS ${fmt(s.utmos, 2)}` : "",
      s.sim !== null ? `${t("声纹", "Speaker sim")} ${fmt(s.sim, 2)}` : "",
      s.rtf !== null ? `RTF ${fmt(s.rtf, 2)}` : "",
    ].filter(Boolean).join(" · ");
    const title = opts.caseTitle ? esc(opts.caseTitle) : `${esc(m ? m.label : s.m)} ${m ? `<span class="tag ${m.group === "full" ? "full" : ""}">${groupTag(m.group)}</span>` : ""}`;
    return `<div class="panel sample" ${opts.color ? `style="border-top:3px solid ${opts.color}"` : ""}>
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:baseline"><div>${title}</div>${opts.extra || ""}</div>
      ${opts.note ? `<div class="hint" style="margin:2px 0 0">${esc(opts.note)}</div>` : ""}
      <div class="hint" style="margin:2px 0 0">${metrics}</div>
      ${s.a ? `<audio controls preload="none" src="${esc(s.a)}"></audio>` : `<div class="hint">${t("音频未发布", "Audio not published")}</div>`}
      ${s.asr ? `<details><summary style="font-size:12px;font-weight:500">${t("ASR 听写", "ASR transcript")}</summary><div class="hint">${esc(s.asr)}</div></details>` : ""}
    </div>`;
  }

  // Only one clip plays at a time.
  document.addEventListener("play", e => {
    document.querySelectorAll("audio").forEach(a => { if (a !== e.target) a.pause(); });
  }, true);

  window.SiteKit = {S, L, t, byModel, byAxis, esc, fmt, params, setParams, color, radar, legend, sampleCard, DASH,
    axisShort, axisName, caseName, langName, tagTitle, headline, groupName, groupTag, stateText, rankText};
})();
