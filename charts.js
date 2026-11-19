// Charts for the overview and listen pages: model map (scatter), ability heatmap, lollipop rankings,
// mini radars. Everything is inline SVG/CSS driven by window.SITE and re-rendered on language change.
(function () {
  const K = window.SiteKit, S = K.S, L = K.L, t = K.t;
  const {esc, fmt, byModel, axisShort, headline, tagTitle, rankText, groupName, groupTag} = K;
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

  // ---------- 6. interactive leaderboard (search, filters, sortable columns, top-3 medals)
  const LB = {q: "", grp: "all", clone: false, size: "any", lic: "any", key: "rank", dir: 1};
  const MEDAL = ["🥇", "🥈", "🥉"];
  const LICNAME = {permissive: ["开放许可", "Permissive"], noncommercial: ["非商用", "Non-commercial"], custom: ["自定义许可", "Custom licence"], restricted: ["有使用限制", "Use-restricted"]};
  const LICCOL = {permissive: "--good", noncommercial: "--bad", custom: "--pend", restricted: "--pend"};
  function lbRanks() {
    const r = {};
    ["full", "focused"].forEach(g => S.models.filter(m => m.group === g).sort((a, b) => b.quality - a.quality).forEach((m, i) => { r[m.id] = i + 1; }));
    return r;
  }
  function leaderboard() {
    const box = $("lb"); if (!box) return;
    const ranks = lbRanks();
    const ctl = $("lb-controls");
    const opt = (v, zh, en, cur) => `<option value="${v}"${cur === v ? " selected" : ""}>${t(zh, en)}</option>`;
    ctl.innerHTML = `<input type="search" id="lb-q" value="${esc(LB.q)}" placeholder="${t("搜索模型…", "Search models…")}" aria-label="${t("搜索模型", "Search models")}" style="min-width:180px">` +
      `<select id="lb-grp" aria-label="${t("分组", "Group")}">${opt("all", "全部分组", "All groups", LB.grp)}${opt("full", "全功能组", "Full-featured", LB.grp)}${opt("focused", "专用与轻量组", "Focused & lightweight", LB.grp)}</select>` +
      `<select id="lb-size" aria-label="${t("参数量", "Size")}">${opt("any", "任意参数量", "Any size", LB.size)}${opt("1", "≤ 1B", "≤ 1B", LB.size)}${opt("3", "≤ 3B", "≤ 3B", LB.size)}${opt("10", "≤ 10B", "≤ 10B", LB.size)}</select>` +
      `<select id="lb-lic" aria-label="${t("许可证", "Licence")}">${opt("any", "任意许可", "Any licence", LB.lic)}${opt("permissive", "仅开放许可（Apache/MIT/CC-BY）", "Permissive only (Apache/MIT/CC-BY)", LB.lic)}</select>` +
      `<label class="chip" style="display:inline-flex;gap:6px;align-items:center"><input type="checkbox" id="lb-clone"${LB.clone ? " checked" : ""}> ${t("支持克隆", "Voice cloning")}</label>`;
    $("lb-q").oninput = e => { LB.q = e.target.value; leaderboard(); $("lb-q").focus(); const v = $("lb-q").value; $("lb-q").setSelectionRange(v.length, v.length); };
    $("lb-grp").onchange = e => { LB.grp = e.target.value; leaderboard(); };
    $("lb-size").onchange = e => { LB.size = e.target.value; leaderboard(); };
    $("lb-lic").onchange = e => { LB.lic = e.target.value; leaderboard(); };
    $("lb-clone").onchange = e => { LB.clone = e.target.checked; leaderboard(); };

    const val = {
      rank: m => (m.group === "full" ? 0 : 1000) + ranks[m.id], quality: m => m.quality, full: m => m.full, langs: m => (m.langs ? m.langs : null), rtf: m => m.rtf, ttfa: m => (m.ttfa ? m.ttfa.p50 : null),
      size: m => (m.meta && m.meta.params_b !== null && m.meta.params_b !== undefined) ? m.meta.params_b : null,
    };
    let rows = S.models.filter(m => {
      if (LB.q && !(m.label + " " + m.id).toLowerCase().includes(LB.q.toLowerCase())) return false;
      if (LB.grp !== "all" && m.group !== LB.grp) return false;
      if (LB.clone && !m.clone) return false;
      if (LB.lic === "permissive" && !(m.meta && m.meta.license_class === "permissive")) return false;
      if (LB.size !== "any") { const sz = val.size(m); if (sz === null || sz > Number(LB.size)) return false; }
      return true;
    });
    const medals = (key, better) => {
      const ok = rows.filter(m => val[key](m) !== null && val[key](m) !== undefined).sort((a, b) => better === "max" ? val[key](b) - val[key](a) : val[key](a) - val[key](b));
      const out = {}; ok.slice(0, 3).forEach((m, i) => { out[m.id] = MEDAL[i]; }); return out;
    };
    const med = {quality: medals("quality", "max"), full: medals("full", "max"), langs: medals("langs", "max"), rtf: medals("rtf", "min"), ttfa: medals("ttfa", "min")};
    rows.sort((a, b) => {
      const av = val[LB.key](a), bv = val[LB.key](b);
      if (av === null || av === undefined) return 1; if (bv === null || bv === undefined) return -1;
      return (av - bv) * LB.dir;
    });
    const th = (k, zh, en, tip) => `<th class="num sortable${LB.key === k ? " on" : ""}" data-k="${k}" title="${esc(t(tip[0], tip[1]))}">${t(zh, en)}${LB.key === k ? (LB.dir < 0 ? " ▾" : " ▴") : ""}</th>`;
    const cell = (m, k, d) => { const v = val[k](m); const none = v === null || v === undefined || (k === "langs" && v === 0); return `<td class="num">${med[k] && med[k][m.id] ? med[k][m.id] + " " : ""}${none ? "–" : fmt(v, d)}</td>`; };
    const lic = m => { const c = m.meta && m.meta.license_class; if (!c) return "–"; return `<span class="tag" style="border-color:var(${LICCOL[c]});color:var(${LICCOL[c]})" title="${esc(m.meta.license)}">${t(LICNAME[c][0], LICNAME[c][1])}</span>`; };
    const sizeCell = m => { const v = val.size(m); const note = m.meta && m.meta.params_note ? m.meta.params_note : ""; return `<td class="num" title="${esc(note)}">${v === null ? "–" : (v < 0.1 ? (v * 1000).toFixed(v < 0.01 ? 1 : 0) + "M" : fmt(v, v < 10 ? 2 : 1) + "B")}</td>`; };
    box.innerHTML = `<div class="scroll"><table><thead><tr>${th("rank", "#", "#", ["组内名次（按质量分）", "Rank within its group (by quality)"])}<th>${t("模型", "Model")}</th>` +
      th("quality", "质量分", "Quality", ["只统计已测能力的加权分", "Weighted score over the abilities that were measured"]) + th("full", "全能分", "All-round", ["不支持的能力计 0", "Unsupported abilities count as 0"]) +
      `<th>${t("克隆", "Clone")}</th>` + th("langs", "语种", "Languages", ["评测过的语种数", "Languages evaluated"]) + th("rtf", "RTF", "RTF", ["生成耗时÷音频时长，越低越快", "Generation time ÷ audio duration; lower is faster"]) + th("ttfa", "首包 ms", "TTFA ms", ["流式首包延迟中位数（毫秒，批大小 1，克隆）；– 表示没有测过流式", "Median time to first audio chunk (ms, batch 1, cloning); – means streaming was not measured"]) +
      th("size", "参数量", "Size", ["上游模型卡的参数量；空白表示卡片没写", "Parameters from the upstream model card; – means the card gives none"]) + `<th>${t("许可", "Licence")}</th></tr></thead><tbody>` +
      rows.map(m => `<tr><td class="num">${ranks[m.id]}</td><td><a href="compare.html?m=${encodeURIComponent(m.id)}"><b>${esc(m.label)}</b></a> <span class="tag ${m.group === "full" ? "full" : ""}">${esc(groupTag(m.group))}</span></td>` +
        `<td class="num">${med.quality[m.id] ? med.quality[m.id] + " " : ""}${fmt(m.quality, 1)}${m.sd !== null && m.sd !== undefined ? ` <small class="muted">±${fmt(m.sd, 1)}</small>` : ""}</td>${cell(m, "full", 1)}<td>${m.clone ? "✓" : "–"}</td>${cell(m, "langs", 0)}${cell(m, "rtf", 2)}${cell(m, "ttfa", 0)}${sizeCell(m)}<td>${lic(m)}</td></tr>`).join("") + "</tbody></table></div>" +
      `<div class="hint">${t(`显示 ${rows.length} / ${S.models.length} 个模型。🥇🥈🥉 是当前筛选结果里该列的前三名。首包延迟只测了 7 个有流式接口的模型，其余显示 –。参数量取自上游模型卡（MoE 报总参数），4 个模型卡片没写则留空；许可是模型卡上的标注，商用前请读原文。`, `Showing ${rows.length} of ${S.models.length} models. 🥇🥈🥉 mark the top three in a column among the current results. TTFA was measured only for the 7 models with a streaming interface; others show –. Sizes come from the upstream model cards (MoE shows total parameters); four cards state none, shown as –. Licences are as labelled on the cards; read the text before commercial use.`)}</div>`;
    box.querySelectorAll("th.sortable").forEach(h => h.onclick = () => { const k = h.dataset.k; if (LB.key === k) LB.dir = -LB.dir; else { LB.key = k; LB.dir = (k === "rtf" || k === "ttfa" || k === "size" || k === "rank") ? 1 : -1; } leaderboard(); });
  }

  // ---------- 7. Pareto frontiers: quality vs speed, quality vs size
  function pareto(boxId, spec) {
    const box = $(boxId); if (!box) return;
    const ms = S.models.filter(m => spec.x(m) !== null && spec.x(m) !== undefined && spec.x(m) > 0);
    if (!ms.length) { box.innerHTML = ""; return; }
    const W = 520, H = 400, m0 = {l: 50, r: 18, t: 30, b: 50};
    const xs = ms.map(m => Math.log10(spec.x(m))), ys = ms.map(m => m.quality);
    const [x0, x1] = [Math.floor(Math.min(...xs) * 2) / 2 - 0.15, Math.ceil(Math.max(...xs) * 2) / 2 + 0.15];
    const [y0, y1] = [Math.floor(Math.min(...ys) / 10) * 10, 100];
    const X = v => m0.l + (Math.log10(v) - x0) / (x1 - x0) * (W - m0.l - m0.r), Y = v => H - m0.b - (v - y0) / (y1 - y0) * (H - m0.t - m0.b);
    // one frontier per group (a lightweight preset-voice model and a full-featured cloner are not alternatives):
    // sweep from the better x side; a model is on its group's frontier if its quality beats every model of the group with a better x
    const fronts = {}; const onFront = new Set();
    ["full", "focused"].forEach(grp => {
      const byBetter = ms.filter(m => m.group === grp).sort((a, b) => spec.better === "high" ? spec.x(b) - spec.x(a) : spec.x(a) - spec.x(b));
      let bestQ = -1; fronts[grp] = [];
      byBetter.forEach(m => { if (m.quality > bestQ) { fronts[grp].push(m); onFront.add(m.id); bestQ = m.quality; } });
    });
    let g = `<text x="${m0.l}" y="16" font-size="13" font-weight="600" fill="var(--ink)">${spec.title()}</text>`;
    for (let v = Math.ceil(y0 / 10) * 10; v <= y1; v += 10) g += `<line x1="${m0.l}" x2="${W - m0.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${m0.l - 6}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${v}</text>`;
    spec.ticks.forEach(v => { if (Math.log10(v) > x0 && Math.log10(v) < x1) g += `<line y1="${m0.t}" y2="${H - m0.b}" x1="${X(v)}" x2="${X(v)}" stroke="var(--line)"/><text x="${X(v)}" y="${H - m0.b + 16}" text-anchor="middle" font-size="11" fill="var(--muted)">${spec.tickLabel(v)}</text>`; });
    g += `<text x="${(m0.l + W - m0.r) / 2}" y="${H - 8}" text-anchor="middle" font-size="12" fill="var(--muted)">${spec.xLabel()}</text>`;
    g += `<text transform="translate(13 ${(m0.t + H - m0.b) / 2}) rotate(-90)" text-anchor="middle" font-size="12" fill="var(--muted)">${t("质量分 ↑", "Quality ↑")}</text>`;
    ["full", "focused"].forEach(grp => {
      const fs = [...fronts[grp]].sort((a, b) => X(spec.x(a)) - X(spec.x(b)));
      if (fs.length > 1) g += `<polyline fill="none" stroke="${css(grp === "full" ? FULL : FOCUSED)}" stroke-width="1.8" stroke-dasharray="5 4" points="${fs.map(m => `${X(spec.x(m))},${Y(m.quality)}`).join(" ")}"/>`;
    });
    let pts = "", labels = ""; const placed = [];
    ms.forEach(mm => {
      const cx = X(spec.x(mm)), cy = Y(mm.quality), c = css(mm.group === "full" ? FULL : FOCUSED), f = onFront.has(mm.id);
      const shape = mm.group === "full" ? `<circle cx="${cx}" cy="${cy}" r="${f ? 7 : 5.5}" fill="${c}" fill-opacity=".85" stroke="${f ? "var(--ink)" : "var(--panel)"}" stroke-width="${f ? 2.5 : 1.5}"/>`
        : `<rect x="${cx - 5}" y="${cy - 5}" width="10" height="10" rx="2" fill="${c}" fill-opacity=".85" stroke="${f ? "var(--ink)" : "var(--panel)"}" stroke-width="${f ? 2.5 : 1.5}" transform="rotate(45 ${cx} ${cy})"/>`;
      pts += `<g class="pt" tabindex="0" data-id="${mm.id}">${shape}<circle cx="${cx}" cy="${cy}" r="13" fill="transparent"/></g>`;
    });
    [...ms].sort((a, b) => (onFront.has(b.id) - onFront.has(a.id)) || b.quality - a.quality).forEach(mm => {
      const cx = X(spec.x(mm)), cy = Y(mm.quality), w = mm.label.length * 6 + 4;
      for (const [dx, anchor] of [[10, "start"], [-10, "end"]]) {
        const bx = anchor === "start" ? cx + dx : cx + dx - w, box2 = [bx, cy - 8, bx + w, cy + 8];
        if (box2[0] < m0.l || box2[2] > W - m0.r) continue;
        if (placed.some(p => !(box2[2] < p[0] || box2[0] > p[2] || box2[3] < p[1] || box2[1] > p[3]))) continue;
        placed.push(box2);
        labels += `<text x="${cx + dx}" y="${cy + 4}" text-anchor="${anchor}" font-size="11" ${onFront.has(mm.id) ? 'font-weight="600"' : ""} fill="var(--ink)" paint-order="stroke" stroke="var(--panel)" stroke-width="3">${esc(mm.label)}</text>`;
        break;
      }
    });
    box.innerHTML = `<div class="panel"><svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${esc(spec.title())}">${g}${labels}${pts}</svg>` +
      `<div class="hint">${spec.note(ms.length, S.models.length)}</div></div>`;
    box.querySelectorAll(".pt").forEach(el => { const mm = byModel[el.dataset.id]; bindTip(el, () => `<b>${esc(mm.label)}</b>${onFront.has(mm.id) ? ` <span class="pos">${t("● 在本组前沿上", "● on its group's frontier")}</span>` : ""}<br>${t("质量分", "Quality")} <b>${fmt(mm.quality, 1)}</b> · ${spec.tip(mm)}`, `compare.html?m=${encodeURIComponent(mm.id)}`); });
  }
  const paretoSpeed = () => pareto("pareto-speed", {x: m => m.rtf ? 1 / m.rtf : null, better: "high", ticks: [0.3, 1, 3, 10, 30], tickLabel: v => v + "×",
    title: () => t("质量 vs 速度", "Quality vs speed"), xLabel: () => t("速度 RTFx（音频时长÷生成耗时，对数刻度，越快越靠右）", "Speed RTFx (audio duration ÷ generation time, log scale; faster to the right)"),
    tip: m => `RTFx ${fmt(1 / m.rtf, 1)}×`, note: (n, all) => t(`虚线是各组自己的帕累托前沿（蓝：全功能，橙：专用与轻量），描黑边的点在前沿上：同组里没有别的模型又快又好。所有模型都在同一台 Mac 上跑，历史 RTF 的计时范围不完全一致，只能看量级。${n < all ? `（${all - n} 个无 RTF）` : ""}`, `Dashed lines are each group's own Pareto frontier (blue: full-featured, orange: focused), and outlined points sit on it: no other model of the same group is both faster and better. Every model ran on the same Mac, but historical RTF timings do not all cover the same scope, so read orders of magnitude only.${n < all ? ` (${all - n} without RTF)` : ""}`)});
  const paretoSize = () => pareto("pareto-size", {x: m => (m.meta && m.meta.params_b) ? m.meta.params_b : null, better: "low", ticks: [0.01, 0.03, 0.1, 0.3, 1, 3, 10, 30], tickLabel: v => v < 0.1 ? (v * 1000) + "M" : v + "B",
    title: () => t("质量 vs 参数量", "Quality vs model size"), xLabel: () => t("参数量（对数刻度，越大越靠右）", "Parameters (log scale; larger models to the right)"),
    tip: m => `${t("参数量", "Size")} ${m.meta.params_b < 0.1 ? (m.meta.params_b * 1000).toFixed(m.meta.params_b < 0.01 ? 1 : 0) + "M" : m.meta.params_b + "B"}`, note: (n, all) => t(`虚线是各组自己的前沿（蓝：全功能，橙：专用与轻量），描黑边的点在前沿上：同组里没有更小又更好的模型。参数量来自上游模型卡（MoE 取总参数），${all - n} 个模型卡片没写参数量，不在图里。`, `Dashed lines are each group's own frontier (blue: full-featured, orange: focused), and outlined points sit on it: no smaller model of the same group is also better. Sizes come from upstream model cards (MoE counts total parameters); ${all - n} cards state none, so those models are not plotted.`)});

  function renderAll() { scatter(); heat(); scenarios(); champions(); profiles(); leaderboard(); paretoSpeed(); paretoSize(); }
  window.Charts = {strip, renderAll};
  if ($("scatter")) { renderAll(); document.addEventListener("langchange", renderAll); }
})();
