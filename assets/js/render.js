/* ============================================================
   render.js — SVG preview templates and DOM rendering functions
   Depends on data.js (window.portfolioData)
   ============================================================ */

/* --------------------------------------------------------
   SVG PREVIEW TEMPLATES
   Each project references one of these via its `preview` key.
   Project previews use viewBox="0 0 400 300" for consistency.
   -------------------------------------------------------- */

const previews = {

  iris: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0a0e1a"/>
    <rect x="0" y="0" width="400" height="24" fill="#161f36"/>
    <g fill="#5a6584">
      <circle cx="14" cy="12" r="4"/><circle cx="28" cy="12" r="4"/><circle cx="42" cy="12" r="4"/>
    </g>
    <text x="200" y="15" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#8d99b3" letter-spacing="1.5">~ / iris</text>
    <g font-family="JetBrains Mono, monospace" font-size="10">
      <text x="16" y="50"><tspan fill="#5ce0ff">❯</tspan> <tspan fill="#e8ecf3">iris run </tspan><tspan fill="#7ee787">--profile</tspan><tspan fill="#ffb84d"> dev</tspan></text>
      <text x="16" y="70" fill="#8d99b3">▸ router: matched <tspan fill="#7ee787">"build_flow"</tspan></text>
      <text x="16" y="86" fill="#8d99b3">▸ profile: <tspan fill="#ff7849">dev</tspan></text>
      <text x="16" y="102" fill="#8d99b3">▸ tools: [shell, fs, http]</text>
      <text x="16" y="124" fill="#7ee787">✓ policy check passed</text>
      <text x="16" y="146"><tspan fill="#5ce0ff">❯</tspan> <tspan fill="#e8ecf3">orchestrator.dispatch()</tspan></text>
      <text x="16" y="166" fill="#8d99b3">  → tool: <tspan fill="#5ce0ff">shell</tspan></text>
      <text x="16" y="182" fill="#8d99b3">    $ npm run build</text>
      <text x="16" y="202" fill="#7ee787">  → ok (3.2s)</text>
      <text x="16" y="222" fill="#8d99b3">  → tool: <tspan fill="#5ce0ff">fs.findText</tspan></text>
      <text x="16" y="238" fill="#7ee787">  → 12 matches</text>
      <text x="16" y="266" fill="#22304d">━━━━━━━━━━━━━━━━━━━━━</text>
      <text x="16" y="284"><tspan fill="#5ce0ff">❯</tspan> <tspan fill="#e8ecf3">_</tspan></text>
    </g>
  </svg>`,

  email: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0d1322"/>
    <rect x="0" y="0" width="400" height="30" fill="#161f36"/>
    <text x="16" y="20" font-family="JetBrains Mono, monospace" font-size="11" fill="#e8ecf3" letter-spacing="1">COMPOSE</text>
    <text x="384" y="20" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#7ee787">QUEUE · 5 / SENT · 47</text>
    <g font-family="JetBrains Mono, monospace" font-size="10">
      <text x="20" y="58" fill="#5a6584">TO ·</text>
      <rect x="50" y="48" width="330" height="16" rx="2" fill="#0a0e1a" stroke="#22304d"/>
      <text x="60" y="60" fill="#5ce0ff">{{ recipient.email }}</text>
      <text x="20" y="86" fill="#5a6584">CC ·</text>
      <rect x="50" y="76" width="330" height="16" rx="2" fill="#0a0e1a" stroke="#22304d"/>
      <text x="60" y="88" fill="#8d99b3">hr@company.com</text>
      <text x="20" y="114" fill="#5a6584">SUBJ ·</text>
      <rect x="60" y="104" width="320" height="16" rx="2" fill="#0a0e1a" stroke="#22304d"/>
      <text x="70" y="116" fill="#e8ecf3">Staj Başvurusu — {{ company }}</text>
      <text x="20" y="142" fill="#5a6584">BODY ·</text>
      <rect x="20" y="148" width="360" height="92" rx="2" fill="#0a0e1a" stroke="#22304d"/>
      <text x="30" y="166" fill="#8d99b3">Merhaba {{ name }},</text>
      <text x="30" y="184" fill="#8d99b3">{{ company }}'de staj imkanı</text>
      <text x="30" y="200" fill="#8d99b3">için başvuruyorum...</text>
      <text x="30" y="220" fill="#5ce0ff">— CV ve portfolyo linki ekte —</text>
    </g>
    <rect x="280" y="256" width="100" height="28" rx="3" fill="#5ce0ff"/>
    <text x="330" y="274" font-family="JetBrains Mono, monospace" font-size="10" fill="#0a0e1a" text-anchor="middle" font-weight="700" letter-spacing="2">SEND →</text>
    <text x="20" y="274" font-family="JetBrains Mono, monospace" font-size="9" fill="#7ee787">● SMTP ready</text>
  </svg>`,

  inspector: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0a0e1a"/>
    <rect x="0" y="0" width="400" height="24" fill="#161f36"/>
    <g fill="#5a6584">
      <circle cx="14" cy="12" r="4"/><circle cx="28" cy="12" r="4"/><circle cx="42" cy="12" r="4"/>
    </g>
    <text x="200" y="15" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="#8d99b3" letter-spacing="1.5">~ / inspect</text>
    <g font-family="JetBrains Mono, monospace" font-size="10">
      <text x="16" y="50"><tspan fill="#5ce0ff">❯</tspan> <tspan fill="#e8ecf3">inspect </tspan><tspan fill="#ffb84d">./package.json</tspan></text>
      <text x="16" y="72" fill="#7ee787">✓ name:</text>
      <text x="84" y="72" fill="#e8ecf3">my-app</text>
      <text x="16" y="88" fill="#7ee787">✓ version:</text>
      <text x="84" y="88" fill="#e8ecf3">1.2.0</text>
      <text x="16" y="108" fill="#8d99b3">scripts:</text>
      <text x="32" y="124" fill="#7ee787">• build</text>
      <text x="92" y="124" fill="#8d99b3">(ok)</text>
      <text x="32" y="140" fill="#7ee787">• test</text>
      <text x="84" y="140" fill="#8d99b3">(ok)</text>
      <text x="32" y="156" fill="#ffb84d">• lint</text>
      <text x="84" y="156" fill="#ffb84d">(warn)</text>
      <text x="16" y="180" fill="#8d99b3">dependencies:</text>
      <text x="32" y="196" fill="#e8ecf3">runtime · </text>
      <text x="100" y="196" fill="#5ce0ff">24 packages</text>
      <text x="32" y="212" fill="#e8ecf3">dev · </text>
      <text x="78" y="212" fill="#5ce0ff">12 packages</text>
      <text x="16" y="236" fill="#ffb84d">▸ TODO/FIXME scan ready</text>
      <text x="16" y="262" fill="#22304d">━━━━━━━━━━━━━━━━━━━━━</text>
      <text x="16" y="282" fill="#5a6584">[draft output]</text>
    </g>
  </svg>`,

  tracker: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0d1322"/>
    <rect x="0" y="0" width="400" height="34" fill="#161f36"/>
    <text x="16" y="22" font-family="JetBrains Mono, monospace" font-size="11" fill="#e8ecf3" letter-spacing="1">APPLICATIONS</text>
    <rect x="320" y="10" width="64" height="16" rx="3" fill="#5ce0ff"/>
    <text x="352" y="22" font-family="JetBrains Mono, monospace" font-size="9" fill="#0a0e1a" font-weight="700" text-anchor="middle">+ NEW</text>
    <g font-family="JetBrains Mono, monospace" font-size="8" fill="#5a6584" letter-spacing="1">
      <text x="20" y="54">COMPANY</text>
      <text x="180" y="54">ROLE</text>
      <text x="280" y="54">STATUS</text>
      <text x="360" y="54">DATE</text>
    </g>
    <line x1="16" y1="62" x2="384" y2="62" stroke="#22304d"/>
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#e8ecf3">
      <text x="20" y="82">Acme Corp</text>
      <text x="180" y="82" fill="#8d99b3">Frontend Intern</text>
      <rect x="278" y="73" width="60" height="12" rx="6" fill="rgba(126,231,135,0.15)" stroke="#7ee787" stroke-width="0.5"/>
      <text x="308" y="82" fill="#7ee787" font-size="8" text-anchor="middle">INTERVIEW</text>
      <text x="360" y="82" fill="#8d99b3">12/04</text>
    </g>
    <line x1="16" y1="92" x2="384" y2="92" stroke="#1a2540"/>
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#e8ecf3">
      <text x="20" y="112">Globex Inc.</text>
      <text x="180" y="112" fill="#8d99b3">Junior Dev</text>
      <rect x="278" y="103" width="60" height="12" rx="6" fill="rgba(255,184,77,0.15)" stroke="#ffb84d" stroke-width="0.5"/>
      <text x="308" y="112" fill="#ffb84d" font-size="8" text-anchor="middle">PENDING</text>
      <text x="360" y="112" fill="#8d99b3">08/04</text>
    </g>
    <line x1="16" y1="122" x2="384" y2="122" stroke="#1a2540"/>
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#e8ecf3">
      <text x="20" y="142">Initech</text>
      <text x="180" y="142" fill="#8d99b3">Software Intern</text>
      <rect x="278" y="133" width="60" height="12" rx="6" fill="rgba(92,224,255,0.15)" stroke="#5ce0ff" stroke-width="0.5"/>
      <text x="308" y="142" fill="#5ce0ff" font-size="8" text-anchor="middle">SENT</text>
      <text x="360" y="142" fill="#8d99b3">05/04</text>
    </g>
    <line x1="16" y1="152" x2="384" y2="152" stroke="#1a2540"/>
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#e8ecf3">
      <text x="20" y="172">Soylent</text>
      <text x="180" y="172" fill="#8d99b3">.NET Intern</text>
      <rect x="278" y="163" width="60" height="12" rx="6" fill="rgba(90,101,132,0.15)" stroke="#5a6584" stroke-width="0.5"/>
      <text x="308" y="172" fill="#8d99b3" font-size="8" text-anchor="middle">PLANNED</text>
      <text x="360" y="172" fill="#8d99b3">—</text>
    </g>
    <line x1="0" y1="240" x2="400" y2="240" stroke="#22304d"/>
    <g font-family="JetBrains Mono, monospace" font-size="9" fill="#8d99b3" letter-spacing="1">
      <text x="20" y="262">PLANNED VIEW · <tspan fill="#e8ecf3">mock data</tspan></text>
      <text x="200" y="262">STORAGE · <tspan fill="#5ce0ff">localStorage</tspan></text>
    </g>
    <text x="20" y="286" font-family="JetBrains Mono, monospace" font-size="8" fill="#5a6584" letter-spacing="1.5">[ DRAFT.PROTOTYPE ]</text>
  </svg>`,

  motion: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="g1mp" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22304d" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="400" height="300" fill="#0d1322"/>
    <rect width="400" height="300" fill="url(#g1mp)"/>
    <g stroke="#5ce0ff" stroke-width="1.8" fill="none" stroke-linecap="round">
      <circle cx="200" cy="80" r="16" fill="#0d1322" stroke-width="1.8"/>
      <line x1="200" y1="96" x2="200" y2="125"/>
      <line x1="155" y1="125" x2="245" y2="125"/>
      <line x1="155" y1="125" x2="120" y2="180"/>
      <line x1="120" y1="180" x2="105" y2="230"/>
      <line x1="245" y1="125" x2="285" y2="170"/>
      <line x1="285" y1="170" x2="310" y2="215"/>
      <line x1="200" y1="125" x2="200" y2="195"/>
      <line x1="170" y1="195" x2="230" y2="195"/>
      <line x1="170" y1="195" x2="160" y2="255"/>
      <line x1="230" y1="195" x2="245" y2="255"/>
    </g>
    <g fill="#5ce0ff">
      <circle cx="155" cy="125" r="3"/><circle cx="245" cy="125" r="3"/>
      <circle cx="120" cy="180" r="3"/><circle cx="105" cy="230" r="3"/>
      <circle cx="285" cy="170" r="3"/><circle cx="310" cy="215" r="3"/>
      <circle cx="200" cy="125" r="3"/><circle cx="170" cy="195" r="3"/>
      <circle cx="230" cy="195" r="3"/><circle cx="160" cy="255" r="3"/>
      <circle cx="245" cy="255" r="3"/>
    </g>
    <g stroke="#ff7849" stroke-width="1" fill="none" stroke-dasharray="2 2" opacity="0.85">
      <path d="M 245 125 A 22 22 0 0 1 285 170"/>
      <path d="M 120 180 A 25 25 0 0 0 105 230"/>
    </g>
    <g font-family="JetBrains Mono, monospace" font-size="9" fill="#ff7849">
      <text x="265" y="155">142°</text>
      <text x="80" y="210">87°</text>
    </g>
    <g font-family="JetBrains Mono, monospace" font-size="8" fill="#8d99b3" letter-spacing="1">
      <text x="14" y="22">[ POSE.LIVE ]</text>
      <text x="14" y="288">REPS · 12 / 15</text>
      <text x="386" y="288" text-anchor="end" fill="#7ee787">FORM · OK</text>
    </g>
    <rect x="14" y="28" width="80" height="3" fill="#5ce0ff" opacity="0.4"/>
    <rect x="14" y="28" width="50" height="3" fill="#5ce0ff"/>
  </svg>`,

  /* Used by the additional-background band */
  pentagon: `<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#8d99b3" stroke-width="1" fill="none">
      <polygon points="0,-30 26,-9 16,21 -16,21 -26,-9"/>
      <line x1="0" y1="-30" x2="0" y2="0"/>
      <line x1="26" y1="-9" x2="0" y2="0"/>
      <line x1="-26" y1="-9" x2="0" y2="0"/>
      <line x1="16" y1="21" x2="0" y2="0"/>
      <line x1="-16" y1="21" x2="0" y2="0"/>
    </g>
    <g fill="#8d99b3">
      <circle cx="0" cy="-30" r="2"/><circle cx="26" cy="-9" r="2"/>
      <circle cx="-26" cy="-9" r="2"/><circle cx="16" cy="21" r="2"/>
      <circle cx="-16" cy="21" r="2"/><circle cx="0" cy="0" r="2"/>
    </g>
  </svg>`

};

/* --------------------------------------------------------
   RENDER FUNCTIONS
   -------------------------------------------------------- */

function renderProjectCard(p) {
  const linksHTML = p.links.map(link => {
    if (link.pending) {
      return `<span class="pending">${link.label}</span>`;
    }
    return `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`;
  }).join('');

  const stackHTML = p.stack.map(s => `<span>${s}</span>`).join('');

  const cardClasses = ['project-card', 'reveal'];
  if (p.dev) cardClasses.push('dev');

  const bodyClasses = ['pc-body'];
  if (p.flip) bodyClasses.push('flip');

  const devOverlay = p.dev ? '<div class="dev-overlay">DEV BUILD</div>' : '';
  const svg = previews[p.preview] || '';

  return `
<article class="${cardClasses.join(' ')}">
  <div class="pc-header">
    <span class="id">${p.id}</span>
    <span class="filename">${p.filename}<span class="ext">${p.ext}</span></span>
    <span class="status ${p.status.class}"><span class="dot"></span> ${p.status.label}</span>
  </div>
  <div class="${bodyClasses.join(' ')}">
    <div class="pc-preview">
      ${devOverlay}
      ${svg}
    </div>
    <div class="pc-info">
      <h3>${p.title}</h3>
      <div class="role">${p.role}</div>
      <p class="desc">${p.description}</p>
      <div class="stack">${stackHTML}</div>
      <div class="links">${linksHTML}</div>
    </div>
  </div>
</article>`;
}

function renderProjects(containerEl, projects) {
  if (!containerEl) return;
  containerEl.innerHTML = projects.map(renderProjectCard).join('\n');
}

function renderExtraBand(containerEl, data) {
  if (!containerEl) return;
  const svg = previews[data.icon] || '';
  const tagsHTML = data.tags.map(t => `<span>${t}</span>`).join('');
  containerEl.innerHTML = `
<div class="extra-band reveal">
  <div class="ico-box">${svg}</div>
  <div class="txt">
    <h4>${data.title} <span class="tag">${data.tag}</span></h4>
    <p>${data.description}</p>
  </div>
  <div class="meta-tags">${tagsHTML}</div>
</div>`;
}

function renderStack(containerEl, panels) {
  if (!containerEl) return;
  containerEl.classList.add('reveal');
  containerEl.innerHTML = panels.map(panel => {
    const itemsHTML = panel.items.map(item => {
      const badge = item.level
        ? ` <span class="lv ${item.class || ''}">${item.level}</span>`
        : '';
      return `<li>${item.name}${badge}</li>`;
    }).join('');
    return `
<div class="stack-panel">
  <div class="ph"><div class="ico"></div>${panel.title} <span class="count">${panel.items.length} items</span></div>
  <ul>${itemsHTML}</ul>
</div>`;
  }).join('\n');
}


// Expose render functions for classic script loading.
window.renderProjects = renderProjects;
window.renderExtraBand = renderExtraBand;
window.renderStack = renderStack;
