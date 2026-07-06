(function () {
  const storageKey = "mlxTtsBenchmarksLanguage";
  const zh = "zh-CN";
  const en = "en";

  const dictionary = {
    "mlx-tts-benchmark - 试听审核报告": "mlx-tts-benchmark - Audio Review Report",
    "mlx-tts-benchmark - 综合测试表": "mlx-tts-benchmark - Comprehensive Test Matrix",
    "mlx-tts-benchmark - 研究版 TTS 能力雷达评分": "mlx-tts-benchmark - Research TTS Capability Radar",
    "完整 HTML 报告和最终试听音频。音频按模型分组在": "Complete HTML reports and final listening audio. Audio is grouped by model under",
    "完整试听报告": "Complete Audio Review",
    "综合测试矩阵": "Comprehensive Test Matrix",
    "能力六边形报告": "Capability Hexagon Report",
    "中文": "Chinese",
    "英文": "English",
    "越南语": "Vietnamese",
    "其他语言": "Other Languages",
    "项目数": "Projects",
    "综合测试项": "Suites",
    "测试项": "Test Cases",
    "可试听音频": "Playable Audio",
    "可排名项目": "Rankable Projects",
    "项目": "Project",
    "项目总表 CSV": "Project Summary CSV",
    "能力长表 CSV": "Capability Axis CSV",
    "测试项分类 CSV": "Test Case CSV",
    "指标": "Metrics",
    "榜单": "Leaderboard",
    "能力评分": "Capability Score",
    "能力雷达评分": "Capability Radar",
    "研究版 TTS 能力雷达评分": "Research TTS Capability Radar",
    "把正式音频生成测试按研究型能力拆成 8 个维度：内容准确、自然音质、多语方言、音色克隆、表达控制、复杂文本/副语言、长文本稳定和 RTF 效率。综合榜按权重加权；专项榜按能力轴单独比较。": "The formal audio-generation tests are split into 8 research-oriented dimensions: content accuracy, natural audio quality, multilingual and dialect coverage, voice cloning, expressive control, complex text and paralinguistics, long-form stability, and RTF efficiency. The overall ranking is weighted; specialty rankings compare each capability axis separately.",
    "项目能力总览": "Project Capability Overview",
    "测试项按能力分类": "Test Cases by Capability",
    "每个子测试只归入一个主要能力轴；横向轴会复用所有正式音频样本。项目只按官方能力边界内应测项目计算覆盖。": "Each subtest belongs to one primary capability axis. Cross-cutting axes reuse all formal audio samples. Coverage is calculated only against the official applicable scope for each project.",
    "能力专项榜": "Capability Specialty Rankings",
    "专项榜只比较进入该能力轴的项目，综合榜仍按 8 轴全能覆盖加权。": "Specialty rankings only compare projects that enter that capability axis; the overall ranking is still weighted across the 8-axis capability coverage.",
    "全部项目": "All Projects",
    "全部测试项": "All Test Cases",
    "全部层级": "All Tiers",
    "当前可见音频：": "Visible audio: ",
    "搜索测试项、项目、子模型或文本": "Search test case, project, submodel, or text",
    "搜索项目或能力": "Search project or capability",
    "项目筛选": "Filter by project",
    "搜索测试项": "Search test cases",
    "子测试": "Subtests",
    "评分层级": "Scoring Tier",
    "语言": "Language",
    "能力轴": "Capability Axis",
    "能力": "Capability",
    "适用项目": "Applicable Projects",
    "已测项目": "Tested Projects",
    "已测": "Tested",
    "成功": "Success",
    "状态": "Status",
    "评分样本数": "Scored Samples",
    "能力总分": "Capability Score",
    "能力覆盖率": "Capability Coverage",
    "音色克隆": "Voice Cloning",
    "能力雷达总分": "Capability Radar Score",
    "最强能力": "Strongest Capability",
    "最弱能力": "Weakest Capability",
    "内容准确": "Content Accuracy",
    "自然音质": "Natural Quality",
    "多语方言": "Languages/Dialects",
    "表达控制": "Expressive Control",
    "复杂副语": "Complex/Para",
    "长文稳定": "Long-form Stability",
    "RTF效率": "RTF Efficiency",
    "能力分": "Capability Score",
    "质量分": "Quality Score",
    "覆盖": "Coverage",
    "成功/应测": "Success/Expected",
    "专项可排名": "Specialty Rankable",
    "已覆盖": "Covered",
    "无官方能力": "No Official Capability",
    "可排名": "Rankable",
    "内容准确与基础朗读": "Content Accuracy and Basic Reading",
    "检查数字、时间、代码混读、常规中文和英文朗读的内容准确性。": "Checks content accuracy for numbers, time expressions, code-switching, and standard Chinese and English reading.",
    "多语种基础朗读": "Basic Multilingual Reading",
    "用代表语言抽样评估模型多语种文本朗读能力。": "Uses representative languages to sample each model's multilingual text-reading ability.",
    "中文方言覆盖": "Chinese Dialect Coverage",
    "统一评估粤语、四川话、东北话、闽南语、上海话、河南话、陕西话、山东话、天津话等中文方言覆盖；同一方言测试项内，不同模型按官方能力走方言标签、预设说话人或参考音频克隆。": "Uniformly evaluates coverage of Cantonese, Sichuanese, Northeastern Mandarin, Minnan, Shanghainese/Wu, Henan, Shaanxi, Shandong, Tianjin, and other Chinese dialects. Within the same dialect case, each model uses its official capability path: dialect tags, preset speakers, or reference-audio cloning.",
    "同语种音色克隆": "Same-language Voice Cloning",
    "统一评估同语种参考音频克隆，包括短参考、中文、英文、越南语和表演式英文克隆。": "Uniformly evaluates same-language reference-audio cloning, including short references, Chinese, English, Vietnamese, and performative English cloning.",
    "跨语种音色克隆": "Cross-lingual Voice Cloning",
    "检查参考说话人身份跨语言迁移时的内容准确性和音色保持。": "Checks content accuracy and speaker-identity preservation when a reference speaker is transferred across languages.",
    "声音设计与角色描述": "Voice Design and Character Description",
    "评估无参考音频的自然语言音色设计、角色描述和声学场景控制。": "Evaluates natural-language voice design, character descriptions, and acoustic-scene control without reference audio.",
    "情绪、风格与韵律控制": "Emotion, Style, and Prosody Control",
    "统一评估情绪标签、参考风格迁移、耳语/播客节奏、动作标签和场景音频控制。": "Uniformly evaluates emotion tags, reference-style transfer, whisper or podcast pacing, action tags, and scene-audio control.",
    "唱歌风格与副语言控制": "Singing Style and Paralinguistic Control",
    "覆盖唱歌/音乐风格、笑声、叹气、哼唱、哭腔等非普通朗读能力；自动分只作为内容和音频质量代理。": "Covers non-standard reading abilities such as singing/music style, laughter, sighing, humming, and crying voice; automatic scores are used only as proxies for content and audio quality.",
    "时长控制": "Duration Control",
    "检查模型是否能按 3 秒、10 秒、20 秒目标时长生成。": "Checks whether models can generate to 3-second, 10-second, and 20-second target durations.",
    "长文本与连续性": "Long-form Text and Continuity",
    "检查长文本朗读、分段连续性、重复率、漏读和音色稳定性。": "Checks long-form reading, segment continuity, repetition, omissions, and speaker stability.",
    "部署性能": "Deployment Performance",
    "统一记录短句延迟、流式首包、批量生成、RTF 和 p95 延迟。": "Records short-utterance latency, streaming first-packet latency, batch generation, RTF, and p95 latency.",
    "不纳入能力评分": "Excluded from Capability Scoring",
    "内容准确与可懂度": "Content Accuracy and Intelligibility",
    "评估数字、代码、普通中文/英文朗读等基础内容是否准确可懂。": "Evaluates whether basic content such as numbers, code, and standard Chinese/English reading is accurate and intelligible.",
    "自然度与音频质量": "Naturalness and Audio Quality",
    "横向评估所有正式音频的 UTMOS、波形异常、噪声底、削波、静音和语速稳定性。": "Cross-evaluates UTMOS, waveform anomalies, noise floor, clipping, silence, and speaking-rate stability across all formal audio.",
    "多语种与方言": "Multilingual and Dialect Coverage",
    "评估多语种朗读、中文方言朗读和方言参考克隆覆盖。": "Evaluates multilingual reading, Chinese dialect reading, and dialect reference-cloning coverage.",
    "音色克隆与鲁棒性": "Voice Cloning and Robustness",
    "评估同语种、短参考、越南语、跨语种和表演式音色克隆。": "Evaluates same-language, short-reference, Vietnamese, cross-lingual, and performative voice cloning.",
    "评估声音设计、情绪标签、参考风格迁移、时长控制和模型原生控制参数是否生效。": "Evaluates voice design, emotion tags, reference-style transfer, duration control, and native model-control parameters.",
    "复杂文本与副语言能力": "Complex Text and Paralinguistic Capability",
    "评估唱歌风格、笑声、叹气、哭腔、呼吸等非普通朗读能力，以及复杂文本的可懂度代理。": "Evaluates non-standard reading abilities such as singing style, laughter, sighing, crying voice, and breathing, plus intelligibility proxies for complex text.",
    "长文本稳定性": "Long-form Stability",
    "评估长文本连续性、重复率、漏读、音色漂移和分段稳定性。": "Evaluates long-form continuity, repetition, omissions, speaker drift, and segment stability.",
    "RTF 生成效率": "RTF Generation Efficiency",
    "横向复用所有正式音频样本的 RTF 评估生成效率；不考核 TTFA、p95、批量或流式。": "Reuses RTF from all formal audio samples to evaluate generation efficiency; TTFA, p95, batch, and streaming are not scored here.",
    "RTF 计算口径": "RTF Calculation Scope",
    "RTF 不单独占用测试项分类；它读取每个项目在官方能力边界内成功生成样本的 RTF，并按同一阈值折算成生成效率分。": "RTF does not occupy a separate test-case category. It reads the RTF of successfully generated samples within each project's official capability boundary and maps it to an efficiency score using the same threshold.",
    "路径和命令": "Paths and Commands",
    "人工复核 no": "Manual review no",
    "生成慢": "Slow generation",
    "内容错误偏高": "High content error",
    "不适用": "N/A",
    "综合大项": "Suites",
    "单项目子项": "Single-project Cases",
    "正式": "Formal",
    "专项": "Specialty",
    "诊断": "Diagnostic",
    "能力边界外": "Outside capability boundary",
    "已隐藏 21 条能力边界外、诊断或被合并覆盖的记录；这些项目不参与试听和评分。": "21 records outside capability boundaries, diagnostic records, or merged-overridden records are hidden; they do not participate in listening review or scoring.",
    "内容准确与基础朗读": "Content Accuracy and Basic Reading",
    "中文数字、时间与订单号朗读": "Chinese numbers, time, and order ID reading",
    "英文数字、时间与价格朗读": "English numbers, time, and price reading",
    "中英混读品牌与订单号朗读": "Chinese-English brand and order ID code-switching",
    "日语汇率新闻朗读": "Japanese exchange-rate news reading",
    "韩语客服确认话术朗读": "Korean customer-service confirmation script",
    "西语疑问句语调与停顿": "Spanish question intonation and pauses",
    "法语长句呼吸与音色稳定": "French long-sentence breathing and timbre stability",
    "德语清晰友好指令朗读": "German clear and friendly instruction reading",
    "越南语短视频导购朗读": "Vietnamese short-video shopping guide reading",
    "印地语金额、日期和姓名朗读": "Hindi amount, date, and name reading",
    "阿拉伯语城市名与数字朗读": "Arabic city names and numbers reading",
    "粤语科普播客方言能力": "Cantonese science-podcast dialect ability",
    "四川话日常沟通方言能力": "Sichuanese daily-conversation dialect ability",
    "北京话预设音色方言专项": "Beijing dialect preset-voice specialty",
    "东北话官方样例方言专项": "Northeastern Mandarin official-sample dialect specialty",
    "闽南语官方样例方言专项": "Minnan official-sample dialect specialty",
    "上海话/吴语官方样例方言专项": "Shanghainese/Wu official-sample dialect specialty",
    "河南话官方样例方言专项": "Henan dialect official-sample specialty",
    "陕西话官方样例方言专项": "Shaanxi dialect official-sample specialty",
    "山东话官方样例方言专项": "Shandong dialect official-sample specialty",
    "天津话相声语气方言专项": "Tianjin crosstalk-style dialect specialty",
    "英文参考音色克隆": "English reference voice cloning",
    "中文参考音色克隆": "Chinese reference voice cloning",
    "三秒英文短参考音色克隆": "Three-second English short-reference voice cloning",
    "越南语参考音色克隆": "Vietnamese reference voice cloning",
    "英文表演式参考音色克隆": "Performative English reference voice cloning",
    "英文参考音色说中文克隆": "English reference voice speaking Chinese",
    "英文参考音色说日语克隆": "English reference voice speaking Japanese",
    "中文参考音色说英文克隆": "Chinese reference voice speaking English",
    "英文参考音色说西语克隆": "English reference voice speaking Spanish",
    "英文儿童故事女声音色设计": "English children's-story female voice design",
    "中文近讲 ASMR 女声音色设计": "Chinese close-mic ASMR female voice design",
    "西语体育解说角色音色设计": "Spanish sports-commentary character voice design",
    "中文开心情绪标签控制": "Chinese happy emotion-tag control",
    "中文悲伤情绪标签控制": "Chinese sad emotion-tag control",
    "中文愤怒情绪标签控制": "Chinese angry emotion-tag control",
    "英文疑惑情绪参考迁移": "English puzzled-emotion reference transfer",
    "中文耳语参考风格迁移": "Chinese whisper reference-style transfer",
    "中文播客节奏参考迁移": "Chinese podcast-pacing reference transfer",
    "英文动作标签情绪弧专项": "English action-tag emotional-arc specialty",
    "英文场景音效与台词专项": "English scene SFX and dialogue specialty",
    "中文女声歌曲风格生成": "Chinese female singing-style generation",
    "英文流行歌曲风格生成": "English pop-song style generation",
    "英文笑声副语言控制": "English laughter paralinguistic control",
    "英文哼声与叹气副语言控制": "English hum and sigh paralinguistic control",
    "英文哭腔副语言控制": "English crying-voice paralinguistic control",
    "中文三秒目标时长控制": "Chinese 3-second target-duration control",
    "中文十秒目标时长控制": "Chinese 10-second target-duration control",
    "中文二十秒目标时长控制": "Chinese 20-second target-duration control",
    "中文长文本连续稳定性": "Chinese long-form continuity stability",
    "英文长文本连续稳定性": "English long-form continuity stability",
    "英文长文本角色连续性": "English long-form character continuity",
    "中文短句生成延迟诊断": "Chinese short-utterance latency diagnostic",
    "英文流式首包延迟诊断": "English streaming first-audio latency diagnostic",
    "中文批量生成性能诊断": "Chinese batch-generation performance diagnostic"
  };

  const skipTags = new Set(["SCRIPT", "STYLE", "CODE", "AUDIO", "SOURCE", "TEXTAREA"]);
  const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length);
  const attrNames = ["placeholder", "aria-label", "title", "label"];

  function translateString(value, lang) {
    if (lang === zh || !value || !/[\u4e00-\u9fff]/.test(value)) return value;
    const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const prefix = match ? match[1] : "";
    let body = match ? match[2] : value;
    const suffix = match ? match[3] : "";
    if (dictionary[body]) return prefix + dictionary[body] + suffix;
    for (const key of sortedKeys) {
      body = body.split(key).join(dictionary[key]);
    }
    return prefix + body + suffix;
  }

  function collectOriginals(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.__i18nOriginal === undefined) node.__i18nOriginal = node.nodeValue;
    });
    document.querySelectorAll("*").forEach((el) => {
      for (const attr of attrNames) {
        if (el.hasAttribute(attr)) {
          if (!el.__i18nAttrs) el.__i18nAttrs = {};
          if (el.__i18nAttrs[attr] === undefined) el.__i18nAttrs[attr] = el.getAttribute(attr);
        }
      }
    });
  }

  function addSwitcher() {
    if (document.querySelector(".language-switcher")) return;
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language");
    switcher.innerHTML = '<button type="button" data-lang="zh-CN">中文</button><button type="button" data-lang="en">English</button>';
    const target = document.querySelector("header") || document.querySelector("main") || document.body;
    target.prepend(switcher);
    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-lang]");
      if (!button) return;
      setLanguage(button.dataset.lang);
    });
  }

  function addStyles() {
    if (document.getElementById("language-switcher-style")) return;
    const style = document.createElement("style");
    style.id = "language-switcher-style";
    style.textContent = `
      .language-switcher {
        display: inline-flex;
        gap: 0;
        align-items: center;
        margin: 0 0 14px;
        border: 1px solid var(--line, #d9e0ea);
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
      }
      .language-switcher button {
        height: 34px;
        border: 0;
        border-right: 1px solid var(--line, #d9e0ea);
        background: transparent;
        color: var(--muted, #64748b);
        cursor: pointer;
        font: inherit;
        font-size: 13px;
        font-weight: 650;
        padding: 0 12px;
      }
      .language-switcher button:last-child { border-right: 0; }
      .language-switcher button[aria-pressed="true"] {
        background: var(--accent, #0f766e);
        color: #fff;
      }
    `;
    document.head.appendChild(style);
  }

  function applyLanguage(lang) {
    collectOriginals(document.body);
    document.documentElement.lang = lang;
    document.querySelectorAll(".language-switcher button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (node.__i18nOriginal === undefined) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      node.nodeValue = lang === zh ? node.__i18nOriginal : translateString(node.__i18nOriginal, lang);
    });
    document.querySelectorAll("*").forEach((el) => {
      if (!el.__i18nAttrs) return;
      for (const attr of attrNames) {
        if (el.__i18nAttrs[attr] !== undefined) {
          el.setAttribute(attr, lang === zh ? el.__i18nAttrs[attr] : translateString(el.__i18nAttrs[attr], lang));
        }
      }
    });
  }

  function setLanguage(lang) {
    const next = lang === en ? en : zh;
    localStorage.setItem(storageKey, next);
    applyLanguage(next);
  }

  function init() {
    addStyles();
    addSwitcher();
    collectOriginals(document.body);
    setLanguage(localStorage.getItem(storageKey) || zh);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
