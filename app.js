/* Área de membros — navegação simples por telas */

function route() {
  const hash = (location.hash || "#/").replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "cursos" && !parts[1]) return { name: "cursos" };
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

/* ---------- HOME ---------- */
function viewHome() {
  return `
    <div>
      <div class="card">
        <div class="home-mark">ND</div>
        <p class="home-badge">Área de membros</p>
        <h1 class="title">Formação Completa<br /><em>Nail Design</em></h1>
        <p class="subtitle">
          Tudo no lugar certo. Escolha o curso, toque na aula e assista.
        </p>
        <div class="home-pills">
          <span>25 módulos</span>
          <span>100+ aulas</span>
          <span>5 ferramentas</span>
        </div>
      </div>

      <div class="stack">
        <a class="btn btn-primary" href="#/cursos">
          <span class="btn-ico">💅</span> Cursos Nail Designer
        </a>
        <a class="btn btn-secondary" href="#/cilios">
          <span class="btn-ico">✨</span> Extensão de Cílios
        </a>
        <a class="btn btn-gold" href="#/ferramentas">
          <span class="btn-ico">🛠</span> Ferramentas
        </a>
      </div>

      <p class="footer-note">Um toque em cada botão. Sem complicação.</p>
    </div>
  `;
}

/* ---------- LISTA DE CURSOS ---------- */
function viewCursos() {
  const phases = [...PHASES, BONUS_PHASE];
  let listHtml = "";

  phases.forEach((phase) => {
    listHtml += `<p class="phase-label">${phase.id === "bonus" ? "Bônus" : `Passo ${phase.id}`} · ${phase.title}</p>`;
    listHtml += `<div class="mod-list">`;
    phase.modules.forEach((id, idx) => {
      const m = MODULES[id];
      if (!m) return;
      const n = phase.id === "bonus" ? "★" : String(idx + 1);
      const bonusClass = phase.id === "bonus" ? "bonus" : "";
      listHtml += `
        <a class="mod-item ${bonusClass}" href="#/curso/${m.id}">
          <span class="mod-num">${n}</span>
          <span class="mod-text">
            <strong>${m.title}</strong>
            <small>${m.sessions.length} aula${m.sessions.length > 1 ? "s" : ""} · toque para abrir</small>
          </span>
          <span class="mod-arrow">›</span>
        </a>
      `;
    });
    listHtml += `</div>`;
  });

  return `
    <div>
      ${backBtn("#/", "Início")}
      <div class="page-head">
        <h1>Cursos Nail Designer</h1>
        <p>Siga a ordem dos passos. Toque no módulo e assista as aulas.</p>
      </div>
      <div class="tip">
        <strong>Por onde começar?</strong>
        Comece no Passo 1 (Base). Depois vá para Formatos, Gel, Alongamento e assim por diante.
      </div>
      ${listHtml}
    </div>
  `;
}

/* ---------- DENTRO DO MÓDULO ---------- */
function viewCurso(id) {
  const m = MODULES[id];
  if (!m) {
    return `
      <div>
        ${backBtn("#/cursos", "Cursos")}
        <div class="page-head"><h1>Módulo não encontrado</h1></div>
        <a class="btn btn-primary" href="#/cursos">Voltar aos cursos</a>
      </div>
    `;
  }

  const lessons = m.sessions
    .map(
      (s) => `
      <a class="lesson-btn" href="${s.link}" target="_blank" rel="noopener">
        <span class="lesson-n">${s.n}</span>
        <span class="name">${s.title}</span>
        <span class="play">▶</span>
      </a>
    `
    )
    .join("");

  return `
    <div>
      ${backBtn("#/cursos", "Todos os cursos")}
      <div class="page-head">
        <h1>${m.title}</h1>
        <p>${m.sessions.length} aula${m.sessions.length > 1 ? "s" : ""} · clique e assista</p>
      </div>
      <div class="tip">
        <strong>Por onde começar</strong>
        ${m.startHere}
      </div>
      <div class="lesson-list">
        ${lessons}
      </div>
      <div class="spacer"></div>
      <div class="stack">
        <a class="btn btn-light btn-sm" href="${m.link}" target="_blank" rel="noopener">Abrir pasta inteira no Drive</a>
      </div>
    </div>
  `;
}

/* ---------- CÍLIOS ---------- */
function lessonBtn(s) {
  return `
    <a class="lesson-btn" href="${s.link}" target="_blank" rel="noopener">
      <span class="lesson-n">${s.n}</span>
      <span class="name">${s.title}</span>
      <span class="play">▶</span>
    </a>
  `;
}

function viewCilios() {
  let listHtml = "";

  if (CILIOS.modules && CILIOS.modules.length) {
    CILIOS.modules.forEach((mod) => {
      listHtml += `<p class="phase-label">${mod.title}</p>`;
      listHtml += `<div class="lesson-list">${mod.sessions.map(lessonBtn).join("")}</div>`;
    });
  } else {
    listHtml = `<div class="lesson-list">${(CILIOS.sessions || []).map(lessonBtn).join("")}</div>`;
  }

  return `
    <div>
      ${backBtn("#/", "Início")}
      <div class="page-head">
        <h1>Extensão de Cílios</h1>
        <p>${CILIOS.sessions.length} aulas profissionais · comece pelo Clássico</p>
      </div>
      <div class="tip">
        <strong>Por onde começar</strong>
        1º Clássico Fio a Fio → 2º Europeu 4D → 3º Volume Brasileiro → 4º Remoção.
      </div>
      ${listHtml}
      <div class="spacer"></div>
      <a class="btn btn-light btn-sm" href="${CILIOS.folder}" target="_blank" rel="noopener">Abrir pasta inteira no Drive</a>
    </div>
  `;
}

/* ---------- FERRAMENTAS ---------- */
function viewFerramentas() {
  const tools = TOOLS.map(
    (t) => `
    <a class="tool-btn" href="${t.link}" target="_blank" rel="noopener">
      ${t.title}
      <small>${t.desc}</small>
    </a>
  `
  ).join("");

  return `
    <div>
      ${backBtn("#/", "Início")}
      <div class="page-head">
        <h1>Ferramentas</h1>
        <p>Toque para abrir. São 5 ferramentas prontas.</p>
      </div>
      <div class="tool-list">
        ${tools}
      </div>
    </div>
  `;
}

/* ---------- BOTÃO FLUTUANTE ---------- */
function fabConfig(r) {
  // texto do botão principal + atalho rápido sugerido
  if (r.name === "cursos" || r.name === "curso") {
    return {
      label: "Acessar ferramentas",
      color: "blue",
      quick: "#/ferramentas",
      hide: "cursos",
    };
  }
  if (r.name === "ferramentas") {
    return {
      label: "Assistir cursos",
      color: "green",
      quick: "#/cursos",
      hide: "ferramentas",
    };
  }
  if (r.name === "cilios") {
    return {
      label: "Ir para outra seção",
      color: "blue",
      quick: null,
      hide: "cilios",
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
    { href: "#/", label: "Início", cls: "light", key: "home" },
    { href: "#/cursos", label: "Cursos Nail Designer", cls: "primary", key: "cursos" },
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
    if (r.name === "cursos" && l.key === "cursos") return false;
    if (r.name === "curso" && l.key === "cursos") return true;
    if (r.name === "ferramentas" && l.key === "ferramentas") return false;
    if (r.name === "cilios" && l.key === "cilios") return false;
    // se já está no módulo de fornecedores, some do menu
    if (r.name === "curso" && r.id === 17 && l.key === "fornecedores") return false;
    return true;
  });

  const backdrop = document.createElement("div");
  backdrop.className = "fab-backdrop";
  backdrop.id = "fabBackdrop";

  const wrap = document.createElement("div");
  wrap.className = "fab-wrap";
  wrap.id = "fabWrap";

  // Botão principal: se tem atalho rápido, vira link; o ◦ abre o menu com as outras seções
  const mainInner = cfg.quick
    ? `<a class="fab-main ${cfg.color === "green" ? "green" : ""}" href="${cfg.quick}" id="fabMainLink">
         <span>${cfg.label}</span>
         <span class="fab-arrow" aria-hidden="true">→</span>
       </a>
       <button type="button" class="fab-more" id="fabMore" aria-label="Ver outras seções" aria-expanded="false">☰</button>`
    : `<button type="button" class="fab-main ${cfg.color === "green" ? "green" : ""}" id="fabMainBtn" aria-expanded="false">
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
    const more = document.getElementById("fabMore");
    const btn = document.getElementById("fabMainBtn");
    if (more) more.setAttribute("aria-expanded", "false");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    wrap.classList.add("open");
    backdrop.classList.add("show");
    const more = document.getElementById("fabMore");
    const btn = document.getElementById("fabMainBtn");
    if (more) more.setAttribute("aria-expanded", "true");
    if (btn) btn.setAttribute("aria-expanded", "true");
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

  document.getElementById("fabMainBtn")?.addEventListener("click", () => {
    toggleMenu();
  });

  backdrop.addEventListener("click", closeMenu);

  wrap.querySelectorAll(".fab-menu a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });
}

/* ---------- RENDER ---------- */
function render() {
  const r = route();
  const root = document.getElementById("app");
  if (!root) return;

  let html = "";
  if (r.name === "home") html = viewHome();
  else if (r.name === "cursos") html = viewCursos();
  else if (r.name === "curso") html = viewCurso(r.id);
  else if (r.name === "cilios") html = viewCilios();
  else if (r.name === "ferramentas") html = viewFerramentas();
  else html = viewHome();

  root.innerHTML = html;

  root.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => {
      go(btn.getAttribute("data-go"));
    });
  });

  renderFab(r);
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", render);
