/* Área de membros — biblioteca dark (visual mentoria) */

const START_MODULE_ID = 1; /* Cutilagem Russa — por onde a cliente começa */

const CAT_META = {
  todas: { label: "todas", color: null },
  base: { label: "base profissional", color: "var(--cat-base)", grad: "g-base", icon: "🧼" },
  formatos: { label: "formatos de unha", color: "var(--cat-formatos)", grad: "g-formatos", icon: "✏️" },
  gel: { label: "esmaltação & gel", color: "var(--cat-gel)", grad: "g-gel", icon: "💅" },
  along: { label: "alongamentos", color: "var(--cat-along)", grad: "g-along", icon: "✨" },
  art: { label: "nail art", color: "var(--cat-art)", grad: "g-art", icon: "🎨" },
  negocio: { label: "negócio & presença", color: "var(--cat-negocio)", grad: "g-negocio", icon: "📈" },
  bonus: { label: "bônus", color: "var(--cat-bonus)", grad: "g-bonus", icon: "🎁" },
  cilios: { label: "cílios", color: "var(--cat-cilios)", grad: "g-cilios", icon: "👁️" },
  tools: { label: "ferramentas", color: "var(--cat-tools)", grad: "g-tools", icon: "🛠️" },
};

const MODULE_ICONS = {
  1: "🧴",
  2: "💮",
  3: "🤍",
  4: "💎",
  5: "🌅",
  6: "📐",
  7: "🧊",
  8: "💠",
  9: "📱",
  10: "📸",
  11: "🧵",
  12: "✨",
  13: "📋",
  14: "🖤",
  15: "🦶",
  16: "💖",
  17: "🛒",
  18: "⬜",
  19: "🩰",
  20: "🪞",
  21: "📏",
  22: "🔧",
  23: "👰",
  24: "💰",
  25: "🤝",
};

/* Miniaturas 3D geradas (mockup de vídeo) */
function thumbForModule(id) {
  return `thumbs/m-${id}.jpg`;
}
function thumbForTool(id) {
  return `thumbs/tool-${id}.jpg`;
}
/* datas decorativas no estilo da referência (dia.mês) */
const THUMB_DATES = {
  1: "01.base",
  16: "02.base",
  25: "03.base",
  22: "04.base",
  13: "05.base",
  18: "06.fmt",
  19: "07.fmt",
  21: "08.fmt",
  4: "09.gel",
  3: "10.gel",
  2: "11.gel",
  7: "12.alo",
  8: "13.alo",
  6: "14.alo",
  11: "15.alo",
  5: "16.art",
  12: "17.art",
  20: "18.art",
  24: "19.neg",
  17: "20.neg",
  10: "21.neg",
  9: "22.neg",
  15: "23.bns",
  14: "24.bns",
  23: "25.bns",
  cilios: "cílios",
  cert: "tool",
  preco: "tool",
  legendas: "tool",
  brocas: "tool",
  sim: "tool",
};

const FILTER_ORDER = [
  "todas",
  "base",
  "formatos",
  "gel",
  "along",
  "art",
  "negocio",
  "bonus",
  "cilios",
  "tools",
];

function phaseToCat(phase) {
  if (phase === 1 || phase === "1") return "base";
  if (phase === 2 || phase === "2") return "formatos";
  if (phase === 3 || phase === "3") return "gel";
  if (phase === 4 || phase === "4") return "along";
  if (phase === 5 || phase === "5") return "art";
  if (phase === 6 || phase === "6") return "negocio";
  if (phase === "bonus") return "bonus";
  return "base";
}

function buildFeed() {
  const phases = [...PHASES, BONUS_PHASE];
  const order = [];
  const seen = new Set();

  phases.forEach((phase) => {
    (phase.modules || []).forEach((id) => {
      if (!seen.has(id) && MODULES[id]) {
        seen.add(id);
        order.push(id);
      }
    });
  });

  Object.keys(MODULES)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach((id) => {
      if (!seen.has(id)) {
        seen.add(id);
        order.push(id);
      }
    });

  const items = order.map((id) => {
    const m = MODULES[id];
    const cat = phaseToCat(m.phase);
    const meta = CAT_META[cat];
    const n = (m.sessions && m.sessions.length) || 0;
    return {
      kind: "curso",
      id: m.id,
      href: `#/curso/${m.id}`,
      title: cleanTitle(m.title).toLowerCase(),
      desc: m.whatYouGet || m.startHere || "",
      cat,
      catLabel: meta.label,
      color: meta.color,
      grad: id === START_MODULE_ID ? "g-featured" : meta.grad,
      icon: MODULE_ICONS[id] || meta.icon,
      thumbSrc: thumbForModule(id),
      thumbDate: THUMB_DATES[id] || "",
      featured: id === START_MODULE_ID,
      lessons: n,
      metaLine: `${n} aula${n === 1 ? "" : "s"} · ${m.tag || meta.label} · passo ${
        m.phase === "bonus" ? "bônus" : m.phase
      }`,
      thumbLabel: shortThumb(m.title),
      searchText: `${m.title} ${m.whatYouGet || ""} ${m.startHere || ""} ${meta.label}`.toLowerCase(),
    };
  });

  /* Cílios como card único da trilha */
  items.push({
    kind: "cilios",
    id: "cilios",
    href: "#/cilios",
    title: "extensão de cílios completa",
    desc: "Clássico fio a fio, europeu 4D, volume brasileiro e remoção — comece pelo clássico.",
    cat: "cilios",
    catLabel: CAT_META.cilios.label,
    color: CAT_META.cilios.color,
    grad: "g-cilios",
    icon: "👁️",
    thumbSrc: "thumbs/cilios.jpg",
    thumbDate: THUMB_DATES.cilios,
    featured: false,
    lessons: (CILIOS.sessions && CILIOS.sessions.length) || 0,
    metaLine: `${CILIOS.sessions.length} aulas · 4 técnicas · trilha cílios`,
    thumbLabel: "cílios · formação",
    searchText: "cílios extensao classico volume europeu remocao".toLowerCase(),
  });

  /* Ferramentas como cards */
  TOOLS.forEach((t) => {
    items.push({
      kind: "tool",
      id: t.id,
      href: t.link,
      external: true,
      title: t.title.toLowerCase(),
      desc: t.desc,
      cat: "tools",
      catLabel: CAT_META.tools.label,
      color: CAT_META.tools.color,
      grad: "g-tools",
      icon: t.icon || "🛠️",
      thumbSrc: thumbForTool(t.id),
      thumbDate: THUMB_DATES[t.id] || "tool",
      featured: false,
      lessons: 0,
      metaLine: `ferramenta · abrir`,
      thumbLabel: t.title.toLowerCase(),
      searchText: `${t.title} ${t.desc} ferramenta`.toLowerCase(),
    });
  });

  return items;
}

function cleanTitle(t) {
  return String(t || "")
    .replace(/^Curso de\s+/i, "")
    .replace(/^Curso\s+/i, "")
    .replace(/\s*[–—-]\s*Completo$/i, "")
    .trim();
}

function shortThumb(t) {
  const s = cleanTitle(t);
  if (s.length <= 28) return s.toLowerCase();
  return s.slice(0, 26).trim().toLowerCase() + "…";
}

/* ---------- Router ---------- */
function route() {
  const hash = (location.hash || "#/").replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "cursos" && !parts[1]) return { name: "home" };
  if (parts[0] === "curso" && parts[1]) return { name: "curso", id: Number(parts[1]) };
  if (parts[0] === "cilios") return { name: "cilios" };
  if (parts[0] === "ferramentas") return { name: "ferramentas" };
  return { name: "home" };
}

function go(path) {
  location.hash = path;
}

function backBtn(to, label = "Voltar") {
  return `<button class="back" type="button" data-go="${to}">← ${label}</button>`;
}

/* ---------- State (busca / filtro na home) ---------- */
const ui = {
  query: "",
  cat: "todas",
};

/* ---------- HOME ---------- */
function viewHome() {
  const feed = buildFeed();
  const q = (ui.query || "").trim().toLowerCase();

  let filtered = feed.filter((item) => {
    if (ui.cat !== "todas" && item.cat !== ui.cat) return false;
    if (q && !item.searchText.includes(q)) return false;
    return true;
  });

  /* Featured sempre no topo se estiver no filtro "todas" e sem busca */
  const featured =
    ui.cat === "todas" && !q
      ? filtered.find((i) => i.featured)
      : filtered.find((i) => i.featured && (ui.cat === "todas" || i.cat === ui.cat));

  const rest = filtered.filter((i) => !i.featured || (featured && i.id !== featured.id));
  /* se featured saiu do filtro, rest já tem tudo */

  const chips = FILTER_ORDER.map((key) => {
    const meta = CAT_META[key];
    const active = ui.cat === key ? "active" : "";
    const dot =
      key === "todas"
        ? ""
        : `<span class="dot" style="background:${meta.color}"></span>`;
    return `<button type="button" class="chip ${active}" data-cat="${key}">${dot}${meta.label}</button>`;
  }).join("");

  let listHtml = "";

  if (featured) {
    listHtml += renderCard(featured, true);
  }

  if (rest.length) {
    listHtml += `<p class="section-label">trilha completa</p>`;
    listHtml += rest.map((item) => renderCard(item, false)).join("");
  }

  if (!featured && !rest.length) {
    listHtml = `<div class="empty">Nada encontrado com esse filtro. Tenta outra palavra ou categoria.</div>`;
  }

  return `
    <div>
      <header class="hero">
        <div class="hero-kicker"><span class="dot"></span> área de membros · nail design</div>
        <h1 class="hero-title">
          sua formação completa<br />
          <span class="accent">pra atender com confiança</span>
        </h1>
        <p class="hero-sub">
          Trilha organizada do zero ao avançado: cutilagem, gel, alongamentos, nail art,
          cílios e ferramentas — tudo no lugar certo.
        </p>
      </header>

      <div class="search-wrap">
        <input
          id="searchInput"
          type="search"
          placeholder="buscar aula, técnica ou ferramenta…"
          value="${escapeAttr(ui.query)}"
          autocomplete="off"
        />
      </div>

      <div class="filters" id="filters">
        ${chips}
      </div>

      <div class="card-list" id="cardList">
        ${listHtml}
      </div>

      <p class="footer-note">Comece pela Cutilagem Russa. Depois siga a trilha no seu ritmo.</p>
    </div>
  `;
}

function renderCard(item, isFeaturedSlot) {
  const featuredClass = item.featured ? "featured" : "";
  const badge = item.featured
    ? `<span class="thumb-badge">início da trilha</span>`
    : "";
  const target = item.external ? ` target="_blank" rel="noopener"` : "";
  const extra =
    item.lessons >= 10
      ? `<span class="extra-badge">📦 ${item.lessons}</span>`
      : "";

  const label = item.featured ? "cutilagem russa" : item.thumbLabel;
  const date = item.thumbDate || "";
  const img = item.thumbSrc
    ? `<img class="thumb-img" src="${escapeAttr(item.thumbSrc)}" alt="" loading="lazy" />`
    : `<span class="thumb-icon" aria-hidden="true">${item.icon}</span>`;

  return `
    <a class="lesson-card ${featuredClass}" href="${item.href}"${target}>
      <div class="thumb ${item.grad} has-img">
        ${badge}
        ${img}
        <div class="thumb-overlay">
          <div class="thumb-title${item.featured ? " thumb-title-featured" : ""}">${escapeHtml(label)}</div>
          ${date ? `<div class="thumb-date">${escapeHtml(date)}</div>` : ""}
        </div>
      </div>
      <div class="body">
        <div class="cat-row">
          <span class="cat-label">
            <span class="dot" style="background:${item.color}"></span>
            ${escapeHtml(item.catLabel)}
          </span>
          ${extra}
        </div>
        <h2 class="card-title">${escapeHtml(item.title)}</h2>
        <p class="desc">${escapeHtml(item.desc)}</p>
        <div class="meta">
          <span><span class="play">▶</span> ${escapeHtml(item.metaLine)}</span>
        </div>
      </div>
    </a>
  `;
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}

/* ---------- PLAYER (vídeo dentro da área) ---------- */
function extractDriveFileId(url) {
  if (!url) return null;
  const m =
    String(url).match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    String(url).match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

function isPlayableDriveLink(url) {
  return Boolean(extractDriveFileId(url));
}

function isLocalVideo(url) {
  if (!url) return false;
  const u = String(url);
  return (
    u.startsWith("videos/") ||
    u.startsWith("./videos/") ||
    u.startsWith("/videos/") ||
    /\.(mp4|webm|ogg|m4v)(\?|#|$)/i.test(u)
  );
}

function isPdfSession(s) {
  if (!s) return false;
  if (s.type === "pdf" || s.format === "pdf") return true;
  const link = String(s.link || "");
  if (/\.pdf(\?|#|$)/i.test(link)) return true;
  return false;
}

function toDriveDownloadUrl(url) {
  const id = extractDriveFileId(url);
  if (!id) return url;
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

function isPlayableMedia(url) {
  if (/\.pdf(\?|#|$)/i.test(String(url || ""))) return false;
  return isPlayableDriveLink(url) || isLocalVideo(url);
}

function toDrivePreviewUrl(url) {
  const id = extractDriveFileId(url);
  if (!id) return null;
  /* /preview é o formato que o Google permite embutir em iframe */
  return `https://drive.google.com/file/d/${id}/preview`;
}

function toDriveStreamCandidates(url) {
  const id = extractDriveFileId(url);
  if (!id) return [];
  return [
    `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`,
    `https://drive.google.com/uc?export=download&id=${id}&confirm=t`,
  ];
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/Android|iPhone|iPad|iPod|Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return true;
  }
  try {
    return window.matchMedia("(max-width: 820px) and (pointer: coarse)").matches;
  } catch (e) {
    return false;
  }
}

let playerHintTimer = null;

function ensurePlayerShell() {
  if (document.getElementById("videoPlayer")) return;

  const el = document.createElement("div");
  el.id = "videoPlayer";
  el.className = "video-player";
  el.hidden = true;
  el.innerHTML = `
    <div class="video-player-backdrop" data-close-player></div>
    <div class="video-player-panel" role="dialog" aria-modal="true" aria-labelledby="videoPlayerTitle">
      <div class="video-player-top">
        <div class="video-player-heading">
          <span class="video-player-kicker">reproduzindo aula</span>
          <h3 id="videoPlayerTitle">Aula</h3>
        </div>
        <button type="button" class="video-player-close" data-close-player aria-label="Fechar player">✕</button>
      </div>
      <div class="video-player-frame-wrap">
        <div class="video-player-loading" id="videoPlayerLoading" aria-hidden="true">
          <div class="video-player-spinner"></div>
          <p id="videoPlayerLoadingText">Carregando aula…</p>
        </div>
        <video
          id="videoPlayerNative"
          class="video-player-native"
          controls
          playsinline
          webkit-playsinline
          preload="metadata"
          hidden
        ></video>
        <iframe
          id="videoPlayerFrame"
          title="Player de aula"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowfullscreen
          loading="eager"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="video-player-hint" id="videoPlayerHint" hidden>
          <p id="videoPlayerHintText">Se o vídeo não aparecer, use o botão abaixo.</p>
          <a id="videoPlayerHintLink" class="btn btn-primary btn-sm video-player-hint-btn" href="#" target="_blank" rel="noopener">Assistir no Drive</a>
        </div>
      </div>
      <div class="video-player-actions">
        <a id="videoPlayerExternal" class="btn btn-primary btn-sm" href="#" target="_blank" rel="noopener">
          Assistir no Drive
        </a>
        <button type="button" class="btn btn-light btn-sm" data-close-player>Fechar</button>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  el.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-player]")) closePlayer();
  });

  const frame = el.querySelector("#videoPlayerFrame");
  frame.addEventListener("load", () => {
    const loading = document.getElementById("videoPlayerLoading");
    if (loading && !frame.hidden) loading.hidden = true;
    /* iframe carregou: tira qualquer aviso do meio da tela */
    if (!frame.hidden && frame.src && frame.src !== "about:blank") {
      if (playerHintTimer) {
        clearTimeout(playerHintTimer);
        playerHintTimer = null;
      }
      setPlayerHint("", { show: false });
    }
  });
}

function hideLoading() {
  const loading = document.getElementById("videoPlayerLoading");
  if (loading) loading.hidden = true;
}

function showLoading(text) {
  const loading = document.getElementById("videoPlayerLoading");
  const t = document.getElementById("videoPlayerLoadingText");
  if (t && text) t.textContent = text;
  if (loading) loading.hidden = false;
}

function setPlayerHint(html, { show = true, driveUrl = null } = {}) {
  const hint = document.getElementById("videoPlayerHint");
  const text = document.getElementById("videoPlayerHintText");
  const link = document.getElementById("videoPlayerHintLink");
  if (!hint) return;
  if (text && html) text.innerHTML = html;
  if (link && driveUrl) {
    link.href = driveUrl;
    link.hidden = false;
  } else if (link && !driveUrl) {
    link.hidden = true;
  }
  hint.hidden = !show;
}

function showHintSoon(driveUrl, delayMs = 2800) {
  const shell = document.getElementById("videoPlayer");
  if (playerHintTimer) clearTimeout(playerHintTimer);
  /* delayMs <= 0: não mostra overlay no meio do vídeo */
  if (!driveUrl || delayMs <= 0) return;
  playerHintTimer = setTimeout(() => {
    if (shell && shell.classList.contains("show")) {
      setPlayerHint(
        "Se a tela ficou preta, o celular bloqueou o vídeo embutido. Toque em <strong>Assistir no Drive</strong> embaixo.",
        { show: true, driveUrl }
      );
    }
  }, delayMs);
}

function useIframePlayer(previewUrl, { driveUrl = null, showHintMs = 0 } = {}) {
  const frame = document.getElementById("videoPlayerFrame");
  const native = document.getElementById("videoPlayerNative");
  if (native) {
    native.pause();
    native.removeAttribute("src");
    native.load();
    native.hidden = true;
  }
  /* limpa aviso do meio — o botão de baixo já basta */
  setPlayerHint("", { show: false });
  if (frame) {
    frame.hidden = false;
    frame.src = "about:blank";
    requestAnimationFrame(() => {
      frame.src = previewUrl;
    });
  }
  /* só agenda overlay se pedir delay > 0 (casos de falha) */
  if (driveUrl && showHintMs > 0) showHintSoon(driveUrl, showHintMs);
}

function playNativeVideo(src, { fallbackDriveUrl = null } = {}) {
  const native = document.getElementById("videoPlayerNative");
  const frame = document.getElementById("videoPlayerFrame");
  if (!native) {
    if (fallbackDriveUrl) {
      const preview = toDrivePreviewUrl(fallbackDriveUrl);
      if (preview) useIframePlayer(preview, { driveUrl: fallbackDriveUrl });
      else window.open(fallbackDriveUrl, "_blank", "noopener");
    }
    return;
  }

  if (frame) {
    frame.hidden = true;
    frame.src = "about:blank";
  }
  native.hidden = false;
  /* atributos críticos no iOS */
  native.setAttribute("playsinline", "");
  native.setAttribute("webkit-playsinline", "");
  native.controls = true;

  let settled = false;
  const onReady = () => {
    if (settled) return;
    settled = true;
    hideLoading();
    if (playerHintTimer) {
      clearTimeout(playerHintTimer);
      playerHintTimer = null;
    }
    setPlayerHint("", { show: false });
    /* no mobile o autoplay com som pode falhar — controls ficam visíveis */
    const p = native.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  native.onloadeddata = onReady;
  native.oncanplay = onReady;
  native.onerror = () => {
    if (settled) return;
    settled = true;
    hideLoading();
    if (fallbackDriveUrl) {
      const preview = toDrivePreviewUrl(fallbackDriveUrl);
      if (preview) useIframePlayer(preview, { driveUrl: fallbackDriveUrl, showHintMs: 800 });
      else {
        setPlayerHint("Não foi possível carregar este vídeo. Toque em <strong>Assistir no Drive</strong>.", {
          show: true,
          driveUrl: fallbackDriveUrl,
        });
      }
    } else {
      setPlayerHint("Não foi possível carregar este vídeo. Toque em <strong>Abrir em nova aba</strong>.", {
        show: true,
        driveUrl: src,
      });
    }
  };

  /* timeout mobile: se não carregar, mostra atalho */
  setTimeout(() => {
    if (!settled && native.readyState < 2) {
      setPlayerHint("Demorando para carregar… Você pode abrir em outra aba.", {
        show: true,
        driveUrl: fallbackDriveUrl || src,
      });
    }
  }, 4000);

  native.src = src;
  native.load();
}

function tryNativeThenIframe(url) {
  const preview = toDrivePreviewUrl(url);
  const native = document.getElementById("videoPlayerNative");
  const mobile = isMobileDevice();

  /*
   * No celular, stream direto do Drive quase sempre falha e deixa tela preta.
   * Vamos direto pro preview + atalho claro "Assistir no Drive".
   */
  if (mobile) {
    if (preview) {
      /* sem overlay no meio — botões de baixo (Assistir no Drive / Fechar) já resolvem */
      useIframePlayer(preview, { driveUrl: url, showHintMs: 0 });
      setTimeout(hideLoading, 1600);
    } else {
      hideLoading();
      setPlayerHint("Abra a aula no Drive para assistir no celular.", { show: true, driveUrl: url });
    }
    return;
  }

  const candidates = toDriveStreamCandidates(url);
  if (!native || !candidates.length) {
    if (preview) useIframePlayer(preview, { driveUrl: url });
    return;
  }

  let idx = 0;
  let settled = false;

  const failToNext = () => {
    if (settled) return;
    idx += 1;
    if (idx < candidates.length) {
      native.src = candidates[idx];
      native.load();
      return;
    }
    settled = true;
    useIframePlayer(preview, { driveUrl: url });
  };

  if (document.getElementById("videoPlayerFrame")) {
    document.getElementById("videoPlayerFrame").hidden = true;
    document.getElementById("videoPlayerFrame").src = "about:blank";
  }
  native.hidden = false;
  native.setAttribute("playsinline", "");
  native.controls = true;

  const onReady = () => {
    if (settled) return;
    settled = true;
    hideLoading();
    if (playerHintTimer) {
      clearTimeout(playerHintTimer);
      playerHintTimer = null;
    }
    setPlayerHint("", { show: false });
    native.play().catch(() => {});
  };

  native.onloadeddata = onReady;
  native.oncanplay = onReady;
  native.onerror = failToNext;

  setTimeout(() => {
    if (!settled && native.readyState < 2) failToNext();
  }, 2500);

  native.src = candidates[0];
  native.load();
}

function openPlayer(title, url) {
  ensurePlayerShell();
  if (!isPlayableMedia(url)) {
    window.open(url, "_blank", "noopener");
    return;
  }

  const shell = document.getElementById("videoPlayer");
  const titleEl = document.getElementById("videoPlayerTitle");
  const external = document.getElementById("videoPlayerExternal");
  const hintLink = document.getElementById("videoPlayerHintLink");
  const mobile = isMobileDevice();
  const local = isLocalVideo(url);

  titleEl.textContent = title || "Aula";
  external.href = url;
  if (local) {
    external.textContent = "Abrir em nova aba";
    external.className = "btn btn-light btn-sm";
  } else {
    external.textContent = "Assistir no Drive";
    /* no mobile o Drive embutido falha muito — botão principal em destaque */
    external.className = mobile ? "btn btn-primary btn-sm" : "btn btn-primary btn-sm";
  }
  if (hintLink) {
    hintLink.href = url;
    hintLink.textContent = local ? "Abrir em nova aba" : "Assistir no Drive";
  }

  setPlayerHint("", { show: false });
  showLoading(mobile && !local ? "Abrindo aula…" : "Carregando aula…");

  shell.hidden = false;
  document.body.classList.add("player-open");
  requestAnimationFrame(() => shell.classList.add("show"));

  if (local) {
    playNativeVideo(url);
  } else {
    /* mobile e desktop: sem cartão no meio do vídeo; atalho fica só embaixo */
    tryNativeThenIframe(url);
  }
}

function closePlayer() {
  const shell = document.getElementById("videoPlayer");
  if (!shell || shell.hidden) return;
  shell.classList.remove("show");
  document.body.classList.remove("player-open");
  const frame = document.getElementById("videoPlayerFrame");
  const native = document.getElementById("videoPlayerNative");
  if (playerHintTimer) {
    clearTimeout(playerHintTimer);
    playerHintTimer = null;
  }
  /* limpa para pausar o áudio/vídeo */
  setTimeout(() => {
    if (!shell.classList.contains("show")) {
      if (frame) {
        frame.src = "about:blank";
        frame.hidden = false;
      }
      if (native) {
        native.pause();
        native.removeAttribute("src");
        native.load();
        native.hidden = true;
      }
      setPlayerHint("", { show: false });
      shell.hidden = true;
    }
  }, 180);
}

function lessonBtn(s) {
  /* PDF: botão Baixar (não abre player de vídeo) */
  if (isPdfSession(s)) {
    const href = toDriveDownloadUrl(s.link) || s.link;
    return `
      <a class="lesson-btn lesson-btn-pdf" href="${escapeAttr(href)}" target="_blank" rel="noopener" download>
        <span class="lesson-n lesson-n-pdf">PDF</span>
        <span class="name">${escapeHtml(s.title)}</span>
        <span class="dl">Baixar</span>
      </a>
    `;
  }

  const playable = isPlayableMedia(s.link);
  if (playable) {
    return `
      <button
        type="button"
        class="lesson-btn"
        data-play-url="${escapeAttr(s.link)}"
        data-play-title="${escapeAttr(s.title)}"
      >
        <span class="lesson-n">${s.n}</span>
        <span class="name">${escapeHtml(s.title)}</span>
        <span class="play">▶</span>
      </button>
    `;
  }
  return `
    <a class="lesson-btn" href="${s.link}" target="_blank" rel="noopener">
      <span class="lesson-n">${s.n}</span>
      <span class="name">${escapeHtml(s.title)}</span>
      <span class="play">▶</span>
    </a>
  `;
}

function bindLessonPlayers(root) {
  root.querySelectorAll("[data-play-url]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openPlayer(btn.getAttribute("data-play-title"), btn.getAttribute("data-play-url"));
    });
  });
}

/* ---------- DENTRO DO MÓDULO ---------- */
function viewCurso(id) {
  const m = MODULES[id];
  if (!m) {
    return `
      <div>
        ${backBtn("#/", "Início")}
        <div class="page-head"><h1>Módulo não encontrado</h1></div>
        <a class="btn btn-primary" href="#/">Voltar ao início</a>
      </div>
    `;
  }

  const lessons = m.sessions.map(lessonBtn).join("");
  const allPdf = m.sessions.length && m.sessions.every(isPdfSession);
  const headSub = allPdf
    ? `${m.sessions.length} arquivo${m.sessions.length > 1 ? "s" : ""} PDF · toque em Baixar`
    : `${m.sessions.length} aula${m.sessions.length > 1 ? "s" : ""} · clique e assista aqui`;

  const startTip =
    id === START_MODULE_ID
      ? "Este é o ponto de partida da formação. Faça estas aulas primeiro."
      : m.startHere;

  return `
    <div>
      ${backBtn("#/", "Todas as aulas")}
      <div class="page-head">
        <h1>${escapeHtml(m.title)}</h1>
        <p>${headSub}</p>
      </div>
      <div class="tip">
        <strong>Por onde começar</strong>
        ${escapeHtml(startTip)}
      </div>
      <div class="lesson-list">
        ${lessons}
      </div>
    </div>
  `;
}

/* ---------- CÍLIOS ---------- */

function viewCilios() {
  let listHtml = "";

  if (CILIOS.modules && CILIOS.modules.length) {
    CILIOS.modules.forEach((mod) => {
      listHtml += `<p class="phase-label">${escapeHtml(mod.title)}</p>`;
      listHtml += `<div class="lesson-list">${mod.sessions.map(lessonBtn).join("")}</div>`;
    });
  } else {
    listHtml = `<div class="lesson-list">${(CILIOS.sessions || []).map(lessonBtn).join("")}</div>`;
  }

  return `
    <div>
      ${backBtn("#/", "Todas as aulas")}
      <div class="page-head">
        <h1>Extensão de Cílios</h1>
        <p>${CILIOS.sessions.length} aulas · comece pelo Clássico</p>
      </div>
      <div class="tip">
        <strong>Por onde começar</strong>
        1º Clássico Fio a Fio → 2º Europeu 4D → 3º Volume Brasileiro → 4º Remoção.
      </div>
      ${listHtml}
    </div>
  `;
}

/* ---------- FERRAMENTAS ---------- */
function viewFerramentas() {
  const tools = TOOLS.map(
    (t) => `
    <a class="tool-btn" href="${t.link}" target="_blank" rel="noopener">
      ${t.icon || "🛠️"} ${escapeHtml(t.title)}
      <small>${escapeHtml(t.desc)}</small>
    </a>
  `
  ).join("");

  return `
    <div>
      ${backBtn("#/", "Todas as aulas")}
      <div class="page-head">
        <h1>Ferramentas</h1>
        <p>Toque para abrir. São ${TOOLS.length} ferramentas prontas.</p>
      </div>
      <div class="tool-list">
        ${tools}
      </div>
    </div>
  `;
}

/* ---------- FAB ---------- */
function fabConfig(r) {
  if (r.name === "home") return null;
  if (r.name === "curso" || r.name === "cilios") {
    return {
      label: "Acessar ferramentas",
      color: "blue",
      quick: "#/ferramentas",
    };
  }
  if (r.name === "ferramentas") {
    return {
      label: "Ver todas as aulas",
      color: "green",
      quick: "#/",
    };
  }
  return null;
}

function renderFab(r) {
  document.getElementById("fabBackdrop")?.remove();
  document.getElementById("fabWrap")?.remove();
  document.querySelector(".page")?.classList.remove("has-fab");

  if (r.name === "home") return;

  const cfg = fabConfig(r);
  if (!cfg) return;

  document.querySelector(".page")?.classList.add("has-fab");

  const fornecedoresLink =
    (MODULES[17] && MODULES[17].sessions && MODULES[17].sessions[0] && MODULES[17].sessions[0].link) ||
    (MODULES[17] && MODULES[17].link) ||
    "https://drive.google.com/file/d/19im_DSWK0QT6CPEAYoCyHnpaabOEb5o1/view?usp=drive_link";

  const links = [
    { href: "#/", label: "Início · todas as aulas", cls: "light", key: "home" },
    { href: "#/cilios", label: "Curso de Cílios", cls: "primary", key: "cilios" },
    {
      href: fornecedoresLink,
      label: "Lista de Fornecedores",
      cls: "gold",
      key: "fornecedores",
      external: true,
    },
    { href: "#/ferramentas", label: "Ferramentas", cls: "secondary", key: "ferramentas" },
  ].filter((l) => {
    if (r.name === "ferramentas" && l.key === "ferramentas") return false;
    if (r.name === "cilios" && l.key === "cilios") return false;
    if (r.name === "curso" && r.id === 17 && l.key === "fornecedores") return false;
    return true;
  });

  const backdrop = document.createElement("div");
  backdrop.className = "fab-backdrop";
  backdrop.id = "fabBackdrop";

  const wrap = document.createElement("div");
  wrap.className = "fab-wrap";
  wrap.id = "fabWrap";

  const mainInner = cfg.quick
    ? `<a class="fab-main ${cfg.color === "green" ? "green" : ""}" href="${cfg.quick}" id="fabMainLink">
         <span>${cfg.label}</span>
         <span class="fab-arrow" aria-hidden="true">→</span>
       </a>
       <button type="button" class="fab-more" id="fabMore" aria-label="Ver outras seções" aria-expanded="false">☰</button>`
    : `<button type="button" class="fab-main" id="fabMainBtn" aria-expanded="false">
         <span>${cfg.label}</span>
         <span class="fab-arrow" aria-hidden="true">→</span>
       </button>`;

  wrap.innerHTML = `
    <div class="fab-menu" id="fabMenu" role="menu" aria-label="Ir para outra seção">
      ${links
        .map(
          (l) => `
        <a href="${l.href}" class="${l.cls}" role="menuitem"${
            l.external ? ' target="_blank" rel="noopener"' : ""
          }>
          ${l.label}
          <span class="arrow">→</span>
        </a>
      `
        )
        .join("")}
    </div>
    <div class="fab-bar">
      ${mainInner}
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(wrap);

  function closeMenu() {
    wrap.classList.remove("open");
    backdrop.classList.remove("show");
    document.getElementById("fabMore")?.setAttribute("aria-expanded", "false");
    document.getElementById("fabMainBtn")?.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    wrap.classList.add("open");
    backdrop.classList.add("show");
    document.getElementById("fabMore")?.setAttribute("aria-expanded", "true");
    document.getElementById("fabMainBtn")?.setAttribute("aria-expanded", "true");
  }

  function toggleMenu() {
    if (wrap.classList.contains("open")) closeMenu();
    else openMenu();
  }

  document.getElementById("fabMore")?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  document.getElementById("fabMainBtn")?.addEventListener("click", () => toggleMenu());
  backdrop.addEventListener("click", closeMenu);
  wrap.querySelectorAll(".fab-menu a").forEach((a) => a.addEventListener("click", () => closeMenu()));
}

/* ---------- RENDER + eventos da home ---------- */
function bindHome() {
  const input = document.getElementById("searchInput");
  if (input) {
    input.addEventListener("input", (e) => {
      ui.query = e.target.value;
      rerenderHomeKeepFocus();
    });
  }

  document.querySelectorAll("#filters .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      ui.cat = chip.getAttribute("data-cat") || "todas";
      render();
    });
  });
}

function rerenderHomeKeepFocus() {
  const root = document.getElementById("app");
  if (!root) return;
  const prev = document.getElementById("searchInput");
  const start = prev ? prev.selectionStart : null;
  const end = prev ? prev.selectionEnd : null;
  root.innerHTML = viewHome();
  bindHome();
  const input = document.getElementById("searchInput");
  if (input) {
    input.focus();
    if (start != null) input.setSelectionRange(start, end);
  }
}

function render() {
  const r = route();
  const root = document.getElementById("app");
  if (!root) return;

  let html = "";
  if (r.name === "home") html = viewHome();
  else if (r.name === "curso") html = viewCurso(r.id);
  else if (r.name === "cilios") html = viewCilios();
  else if (r.name === "ferramentas") html = viewFerramentas();
  else html = viewHome();

  root.innerHTML = html;

  root.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.getAttribute("data-go")));
  });

  if (r.name === "home") bindHome();
  bindLessonPlayers(root);

  renderFab(r);
  window.scrollTo(0, 0);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePlayer();
});

window.addEventListener("hashchange", () => {
  closePlayer();
  render();
});
document.addEventListener("DOMContentLoaded", render);
