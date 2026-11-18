// Language state shared by every page of the site (same storage key as language.js, which the legacy
// report pages use). English is the default; the choice is remembered and carried across pages.
(function () {
  const KEY = "mlxTtsBenchmarksLanguage", ZH = "zh-CN", EN = "en";
  let lang = EN;
  try { lang = localStorage.getItem(KEY) === ZH ? ZH : EN; } catch (e) { /* private mode */ }
  document.documentElement.lang = lang;

  const I18N = {
    get lang() { return lang; },
    get zh() { return lang === ZH; },
    t: (zh, en) => (lang === ZH ? zh : en),
    // pick obj.field or obj.field_en
    pick: (obj, field) => (lang === ZH ? obj[field] : (obj[field + "_en"] ?? obj[field])),
    set(next) {
      lang = next === ZH ? ZH : EN;
      try { localStorage.setItem(KEY, lang); } catch (e) { /* ignore */ }
      document.documentElement.lang = lang;
      sync();
      document.dispatchEvent(new CustomEvent("langchange", {detail: lang}));
    },
  };
  function sync() {
    document.querySelectorAll(".lang-sw button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const titles = document.documentElement.dataset;
    const el = document.querySelector("title");
    if (el && el.dataset.zh) el.textContent = lang === ZH ? el.dataset.zh : el.dataset.en;
  }
  function init() {
    const nav = document.querySelector("nav.top");
    if (nav && !nav.querySelector(".lang-sw")) {
      const box = document.createElement("div");
      box.className = "lang-sw";
      box.setAttribute("role", "group");
      box.setAttribute("aria-label", "Language");
      box.innerHTML = '<button type="button" data-lang="en">English</button><button type="button" data-lang="zh-CN">中文</button>';
      box.addEventListener("click", e => { const b = e.target.closest("button[data-lang]"); if (b) I18N.set(b.dataset.lang); });
      nav.appendChild(box);
    }
    sync();
  }
  window.I18N = I18N;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
