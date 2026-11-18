// Charts for the overview and listen pages: model map (scatter), ability heatmap, lollipop rankings,
// mini radars. Everything is inline SVG/CSS driven by window.SITE and re-rendered on language change.
(function () {
  const K = window.SiteKit, S = K.S, L = K.L, t = K.t;
  const {esc, fmt, byModel, axisShort, headline, tagTitle, rankText, groupName} = K;
  const $ = id => document.getElementById(id);
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const FULL = "--s1", FOCUSED = "--s2";

  // ---------- tooltip (one shared element)
  let tip;
  function showTip(html, x, y) {
    if (!tip) { tip = document.createElement("div"); tip.className = "tip"; document.body.appendChild(tip); }
    tip.innerHTML = html; tip.style.display = "block";
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.min(Math.max(8, x + 14), window.innerWidth - w - 8) + "px";
    tip.style.top = Math.max(8, Math.min(y + 14, window.innerHeight - h - 8)) + "px";
  }
  const hideTip = () => { if (tip) tip.style.display = "none"; };
  function bindTip(el, htmlFn, href) {
    el.addEventListener("mousemove", e => showTip(htmlFn(), e.clientX, e.clientY));
    el.addEventListener("mouseleave", hideTip);
    el.addEventListener("focus", () => { const r = el.getBoundingClientRect(); showTip(htmlFn(), r.right, r.top); });
    el.addEventListener("blur", hideTip);
    if (href) { el.style.cursor = "pointer"; el.addEventListener("click", () => { location.href = href; }); el.addEventListener("keydown", e => { if (e.key === "Enter") location.href = href; }); }
  }
  const modelTip = m => `<b>${esc(m.label)}</b> <span class="muted">${t(`${m.tier} 档`, `tier ${m.tier}`)}</span><br>${esc(headline(m))}<br>${t("质量分", "Quality")} <b>${fmt(m.quality, 1)}</b> · ${t("全能分", "All-round")} <b>${fmt(m.full, 1)}</b> · RTF ${fmt(m.rtf, 2)}<br><span class="muted">${t("点击进入对比", "Click to compare")}</span>`;

  // ---------- 1. model map
  let mapX = "full";
  function scatter() {
    const box = $("scatter"); if (!box) return;
    const W = 1000, H = 540, m = {l: 58, r: 24, t: 24, b: 60};
    const ms = S.models.filter(x => mapX === "full" ? x.full !== null : x.rtf);
    const xv = x => mapX === "full" ? x.full : -Math.log10(x.rtf);
    const xs = ms.map(xv), ys = ms.map(x => x.quality);
    const pad = (a, b, p) => [a - (b - a) * p, b + (b - a) * p];
    const [x0, x1] = pad(Math.min(...xs), Math.max(...xs), 0.06), [y0, y1] = [Math.floor(Math.min(...ys) / 5) * 5 - 2, 100];
    const X = v => m.l + (v - x0) / (x1 - x0) * (W - m.l - m.r), Y = v => H - m.b - (v - y0) / (y1 - y0) * (H - m.t - m.b);
    let g = "";
    // gridlines + ticks
    for (let v = Math.ceil(y0 / 10) * 10; v <= y1; v += 10) g += `<line x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${m.l - 8}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${v}</text>`;
    if (mapX === "full") {
      for (let v = Math.ceil(x0 / 10) * 10; v <= x1; v += 10) g += `<line y1="${m.t}" y2="${H - m.b}" x1="${X(v)}" x2="${X(v)}" stroke="var(--line)"/><text x="${X(v)}" y="${H - m.b + 18}" text-anchor="middle" font-size="11" fill="var(--muted)">${v}</text>`;
    } else {
      [0.03, 0.1, 0.3, 1, 3].forEach(r => { const v = -Math.log10(r); if (v > x0 && v < x1) g += `<line y1="${m.t}" y2="${H - m.b}" x1="${X(v)}" x2="${X(v)}" stroke="var(--line)"/><text x="${X(v)}" y="${H - m.b + 18}" text-anchor="middle" font-size="11" fill="var(--muted)">${r}</text>`; });
    }
    g += `<text x="${(m.l + W - m.r) / 2}" y="${H - 12}" text-anchor="middle" font-size="12" fill="var(--muted)">${mapX === "full" ? t("全能分 → 覆盖的场景越多越靠右", "All-round score → covers more scenarios") : t("速度 → 越快越靠右（RTF，对数刻度，越小越快）", "Speed → faster to the right (RTF, log scale; lower is faster)")}</text>`;
    g += `<text transform="translate(14 ${(m.t + H - m.b) / 2}) rotate(-90)" text-anchor="middle" font-size="12" fill="var(--muted)">${t("质量分 ↑ 做得越好越靠上", "Quality score ↑ better at what it does")}</text>`;
    // "best" corner
    g += `<text x="${W - m.r - 6}" y="${m.t + 14}" text-anchor="end" font-size="12" font-weight="600" fill="var(--accent)">${t("又好又全 ↗", "Strong and broad ↗")}</text>`;
    // points, then greedy labels (best first)
    const placed = [];
    const order = [...ms].sort((a, b) => b.quality + b.full / 4 - (a.quality + a.full / 4));
    let labels = "", pts = "";
    ms.forEach(mm => {
      const cx = X(xv(mm)), cy = Y(mm.quality), c = css(mm.group === "full" ? FULL : FOCUSED);
      const shape = mm.group === "full" ? `<circle cx="${cx}" cy="${cy}" r="7" fill="${c}" fill-opacity=".85" stroke="var(--panel)" stroke-width="2"/>`
        : `<rect x="${cx - 6.5}" y="${cy - 6.5}" width="13" height="13" rx="2" fill="${c}" fill-opacity=".85" stroke="var(--panel)" stroke-width="2" transform="rotate(45 ${cx} ${cy})"/>`;
      pts += `<g class="pt" tabindex="0" data-id="${mm.id}" role="link" aria-label="${esc(mm.label)}">${shape}<circle cx="${cx}" cy="${cy}" r="14" fill="transparent"/></g>`;
    });
    order.forEach(mm => {
      const cx = X(xv(mm)), cy = Y(mm.quality), w = mm.label.length * 6.4 + 4;
      for (const [dx, anchor] of [[11, "start"], [-11, "end"]]) {
        const bx = anchor === "start" ? cx + dx : cx + dx - w;
        const box = [bx, cy - 8, bx + w, cy + 8];
        if (box[0] < m.l || box[2] > W - m.r) continue;
        if (placed.some(p => !(box[2] < p[0] || box[0] > p[2] || box[3] < p[1] || box[1] > p[3]))) continue;
        placed.push(box);
        labels += `<text x="${cx + dx}" y="${cy + 4}" text-anchor="${anchor}" font-size="11.5" fill="var(--ink)" paint-order="stroke" stroke="var(--panel)" stroke-width="3">${esc(mm.label)}</text>`;
        break;
      }
    });
    box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${t("模型地图：质量分对比全能分或速度", "Model map: quality vs all-round score or speed")}">${g}${labels}${pts}</svg>`;
    box.querySelectorAll(".pt").forEach(el => { const mm = byModel[el.dataset.id]; bindTip(el, () => modelTip(mm), `compare.html?m=${encodeURIComponent(mm.id)}`); });
    const leg = $("scatter-legend");
    if (leg) leg.innerHTML = `<span><svg width="14" height="14"><circle cx="7" cy="7" r="6" fill="${css(FULL)}"/></svg> ${t("全功能（支持克隆、≥7 项能力）", "Full-featured (cloning, ≥7 abilities)")}</span><span><svg width="14" height="14"><rect x="2.5" y="2.5" width="9" height="9" rx="1.5" transform="rotate(45 7 7)" fill="${css(FOCUSED)}"/></svg> ${t("专用 / 轻量", "Focused / lightweight")}</span>`;
    document.querySelectorAll("[data-mapx]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mapx === mapX)));
  }
  document.querySelectorAll("[data-mapx]").forEach(b => b.onclick = () => { mapX = b.dataset.mapx; scatter(); });

  // ---------- 2. heatmap
  let hmSort = "quality";
  function heat() {
    const box = $("heatmap"); if (!box) return;
    const val = (m, a) => (a === "quality" ? m.quality : a === "full" ? m.full : (m.cells[a].st === "ok" ? m.cells[a].v : -1));
    const cell = (m, a) => {
      const c = m.cells[a.id];
      if (c.st === "ok") { const p = Math.max(6, Math.min(92, (c.v - 45) / 55 * 92)); return `<div class="c${p > 52 ? " hot" : ""}" style="--p:${p}%" data-m="${m.id}" data-a="${a.id}" tabindex="0">${fmt(c.v)}</div>`; }
      return `<div class="c ${c.st}" data-m="${m.id}" data-a="${a.id}" tabindex="0">${c.st === "na" ? "–" : "?"}</div>`;
    };
    const head = `<div class="hm-row hm-head"><div class="nm"></div>${S.axes.map(a => `<button class="h${hmSort === a.id ? " on" : ""}" data-sort="${a.id}" title="${esc(L.pick(a, "title"))}">${esc(axisShort(a))}<small>${a.weight}%</small></button>`).join("")}<button class="h q${hmSort === "quality" ? " on" : ""}" data-sort="quality">${t("质量分", "Quality")}</button></div>`;
    const rows = g => [...S.models.filter(m => m.group === g)].sort((a, b) => val(b, hmSort) - val(a, hmSort)).map(m =>
      `<div class="hm-row"><a class="nm" href="compare.html?m=${encodeURIComponent(m.id)}"><b>${esc(m.label)}</b><i>${esc(m.tier)}</i></a>${S.axes.map(a => cell(m, a)).join("")}<div class="q">${fmt(m.quality, 1)}</div></div>`).join("");
    box.innerHTML = `<div class="hm" style="--cols:${S.axes.length}">${head}<div class="hm-grp">${groupName("full")}</div>${rows("full")}<div class="hm-grp">${groupName("focused")}</div>${rows("focused")}</div>`;
    box.querySelectorAll("[data-sort]").forEach(b => b.onclick = () => { hmSort = hmSort === b.dataset.sort ? "quality" : b.dataset.sort; heat(); });
    box.querySelectorAll(".c").forEach(el => {
      const m = byModel[el.dataset.m], a = S.axes.find(x => x.id === el.dataset.a), c = m.cells[a.id];
      bindTip(el, () => `<b>${esc(m.label)}</b> · ${esc(axisShort(a))}<br>${c.st === "ok" ? `<b>${fmt(c.v)}</b> (${rankText(c.rank, c.n)})` : K.stateText(c.st)}${a.caveat ? `<br><span class="muted">⚠ ${esc(L.pick(a, "caveat"))}</span>` : ""}`);
    });
    const lg = $("heat-legend");
    if (lg) lg.innerHTML = `<span class="ramp"><i style="background:color-mix(in oklab,var(--accent) 6%,var(--panel))"></i>45<i style="background:color-mix(in oklab,var(--accent) 50%,var(--panel))"></i>72<i style="background:color-mix(in oklab,var(--accent) 92%,var(--panel))"></i>100</span><span><i class="sw na"></i>${t("不支持", "Unsupported")}</span><span><i class="sw pending"></i>${t("待验证 / 未测", "Pending / untested")}</span>`;
  }

  // ---------- 3. lollipop ranking rows (scenario cards, champions)
  function lollipop(rows, lo = 60) {
    const pos = v => Math.max(0, Math.min(100, (v - lo) / (100 - lo) * 100));
    return `<div class="lol">${rows.map((r, i) => `<div class="lr"><span class="pk">${i + 1}</span><a class="ln" href="${r.href || "#"}">${esc(r.label)}${r.tag || ""}</a><div class="track"><i class="stem" style="width:${pos(r.v)}%"></i><i class="dot${i === 0 ? " top" : ""}" style="left:${pos(r.v)}%"></i></div><b class="num">${fmt(r.v)}</b></div>`).join("")}<div class="lol-axis"><div class="ax"><span>${lo}</span><span>${Math.round((lo + 100) / 2)}</span><span>100</span></div></div></div>`;
  }
  function scenarios() {
    const box = $("scenarios"); if (!box) return;
    box.innerHTML = S.scenarios.map(sc => {
      const top = sc.picks.slice(0, 5), ids = top.slice(0, 3).map(p => p.m).join(",");
      const rows = top.map(p => ({label: p.label, v: p.score, href: `compare.html?m=${encodeURIComponent(p.m)}`, tag: p.group === "full" ? "" : ` <span class="tag">${t("专用", "Focused")}</span>`}));
      const listen = sc.listen_case ? `listen.html?case=${encodeURIComponent(sc.listen_case)}&models=${ids}` : "listen.html";
      const lo = Math.max(40, Math.floor((Math.min(...top.map(p => p.score)) - 6) / 10) * 10);
      return `<div class="panel scen"><div class="sh"><b>${esc(L.pick(sc, "title"))}</b><span>${esc(L.pick(sc, "need"))}</span></div>${lollipop(rows, lo)}
        <div class="hint">${t(`按 ${sc.formula} 排序；${sc.candidates} 个模型符合条件`, `Ranked by ${sc.formula_en}; ${sc.candidates} models qualify`)}</div>
        <div class="acts"><a class="btn primary" href="${listen}">${t("听前 3 名 →", "Listen to the top 3 →")}</a><a class="btn" href="compare.html?m=${ids}">${t("对比这 3 个", "Compare these 3")}</a></div></div>`;
    }).join("");
  }
  function champions() {
    const box = $("champions"); if (!box) return;
    box.innerHTML = S.champions.map(ch => {
      const rows = ch.top.map(x => ({label: x.label, v: x.v, href: `compare.html?m=${encodeURIComponent(x.m)}`}));
      const lo = Math.max(40, Math.floor((Math.min(...ch.top.map(x => x.v)) - 6) / 10) * 10);
      return `<div class="panel champ"><div class="sh"><b>${esc(L.pick(ch, "title"))}</b><span>${t(`${ch.n} 个模型有分`, `${ch.n} models scored`)}</span></div>${lollipop(rows, lo)}${ch.caveat ? `<div class="hint">⚠ ${esc(L.pick(ch, "caveat"))}</div>` : ""}</div>`;
    }).join("");
  }

  // ---------- 4. profile cards with mini radar
  function miniRadar(m, size = 112) {
    const c = size / 2, r = size / 2 - 6, n = S.axes.length;
    const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [c + Math.cos(a) * r * v / 100, c + Math.sin(a) * r * v / 100]; };
    let g = [50, 100].map(v => `<polygon points="${S.axes.map((_, i) => pt(i, v).join(",")).join(" ")}" fill="none" stroke="var(--line)"/>`).join("");
    S.axes.forEach((_, i) => { const [x, y] = pt(i, 100); g += `<line x1="${c}" y1="${c}" x2="${x}" y2="${y}" stroke="var(--line)"/>`; });
    const col = css(m.group === "full" ? FULL : FOCUSED);
    const pts = S.axes.map((a, i) => pt(i, m.cells[a.id].st === "ok" ? Math.max(8, m.cells[a.id].v) : 0));
    g += `<polygon points="${pts.map(p => p.join(",")).join(" ")}" fill="${col}" fill-opacity=".22" stroke="${col}" stroke-width="1.8" stroke-linejoin="round"/>`;
    return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="${esc(m.label)}">${g}</svg>`;
  }
  function profiles() {
    const box = $("profiles-grid"); if (!box) return;
    const li = (arr, cls, mark) => arr.map(s => `<li class="${cls}">${mark} ${esc(tagTitle(s))} <b>${s.v}</b></li>`).join("");
    box.innerHTML = ["full", "focused"].map(g => `<h3 class="pg">${groupName(g)}</h3>` + S.models.filter(m => m.group === g).map(m => {
      const unsup = L.zh ? m.unsupported : m.unsupported_en;
      return `<div class="panel prof"><div class="pr-top"><div><div class="ph"><b>${esc(m.label)}</b><span class="tier">${esc(m.tier)}</span></div><div class="hint" style="margin:2px 0 6px">${esc(headline(m))}</div>
        <div class="nums"><span><b class="num">${fmt(m.quality, 1)}</b>${t("质量", "quality")}</span><span><b class="num">${fmt(m.full, 1)}</b>${t("全能", "all-round")}</span><span><b class="num">${m.langs}</b>${t("外语", "languages")}</span><span><b class="num">${fmt(m.rtf, 2)}</b>RTF</span></div></div>${miniRadar(m)}</div>
        <ul class="plain">${li(m.strengths, "pos", "＋")}${li(m.weaknesses, "neg", "－")}</ul>${unsup.length ? `<div class="hint" style="margin:4px 0 0">${t("不支持：", "Unsupported: ")}${unsup.map(esc).join(t("、", ", "))}</div>` : ""}
        <div class="acts"><a class="btn" href="listen.html?model=${encodeURIComponent(m.id)}">${t("试听", "Listen")}</a><a class="btn" href="compare.html?m=${encodeURIComponent(m.id)}">${t("对比", "Compare")}</a></div></div>`;
    }).join("")).join("");
  }

  // ---------- 5. score strip for the listen page: where each model's clip lands among all models
  function strip(el, samples, onPick) {
    if (!el) return;
    const ss = samples.filter(s => s.s !== null);
    if (!ss.length) { el.innerHTML = ""; return; }
    const W = 760, H = 86, l = 16, r = 16, lo = Math.max(0, Math.floor(Math.min(...ss.map(s => s.s)) / 10) * 10 - 0), X = v => l + (v - lo) / (100 - lo) * (W - l - r);
    let g = `<line x1="${l}" x2="${W - r}" y1="50" y2="50" stroke="var(--line)" stroke-width="2"/>`;
    for (let v = lo; v <= 100; v += 10) g += `<text x="${X(v)}" y="${H - 6}" text-anchor="middle" font-size="11" fill="var(--muted)">${v}</text><line x1="${X(v)}" x2="${X(v)}" y1="46" y2="54" stroke="var(--line)"/>`;
    const lanes = []; // stack dots that would overlap
    [...ss].sort((a, b) => b.s - a.s).forEach(s => {
      const cx = X(s.s); let lane = 0;
      while (lanes[lane] !== undefined && Math.abs(lanes[lane] - cx) < 11) lane++;
      lanes[lane] = cx;
      const m = byModel[s.m], cy = 50 - 14 * ((lane % 2) ? -Math.ceil(lane / 2) : Math.ceil(lane / 2)) * (lane ? 1 : 0);
      g += `<circle class="sd" data-id="${s.m}" tabindex="0" cx="${cx}" cy="${Math.max(10, Math.min(H - 22, cy))}" r="5.5" fill="${css(m && m.group === "full" ? FULL : FOCUSED)}" fill-opacity=".85" stroke="var(--panel)" stroke-width="1.5"/>`;
    });
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${t("各模型这条音频的得分分布", "Score of each model's clip")}">${g}</svg>`;
    el.querySelectorAll(".sd").forEach(d => { const s = ss.find(x => x.m === d.dataset.id); bindTip(d, () => `<b>${esc(byModel[s.m].label)}</b>: ${fmt(s.s)}`); d.addEventListener("click", () => onPick && onPick(s.m)); });
  }

  function renderAll() { scatter(); heat(); scenarios(); champions(); profiles(); }
  window.Charts = {strip, renderAll};
  if ($("scatter")) { renderAll(); document.addEventListener("langchange", renderAll); }
})();
