/* ============================================================
   main.js — kicks everything off after DOM is ready
   Handles:
     - reading saved language from localStorage (default: tr)
     - rendering all sections in the chosen language
     - language toggle button click handler
     - scroll reveal animation
     - nav shrink on scroll
   ============================================================ */

(function () {
  'use strict';

  const LANG_KEY = 'portfolio_lang';
  const SUPPORTED_LANGS = ['tr', 'en'];
  const DEFAULT_LANG = 'tr';

  function getSavedLang() {
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage unavailable */ }
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) { /* ignore */ }
  }

  function applyLanguage(lang) {
    const data = window.portfolioData;
    if (!data) return;

    // 1) static texts (nav, hero, headings, profile, footer, ...)
    window.renderStaticTexts(data.staticTexts, lang);

    // 1.1) update CV PDF href according to active language
    const cvHref = data.staticTexts[lang] && data.staticTexts[lang].cvHref;
    if (cvHref) {
      document.querySelectorAll('.cv-link').forEach(link => {
        link.setAttribute('href', cvHref);
      });
    }

    // 2) dynamic sections
    const pendingFallback = (data.staticTexts[lang] && data.staticTexts[lang].pendingLinkLabel)
      || 'Repository Coming Soon';

    window.renderProjects(
      document.getElementById('featured-projects'),
      data.projects.featured,
      lang,
      data.statusLabels,
      pendingFallback
    );

    window.renderProjects(
      document.getElementById('in-dev-projects'),
      data.projects.inDevelopment,
      lang,
      data.statusLabels,
      pendingFallback
    );

    window.renderExtraBand(
      document.getElementById('extras-container'),
      data.additional,
      lang
    );

    window.renderStack(
      document.getElementById('stack-container'),
      data.stack,
      lang
    );

    // 3) update active state on the lang toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // 4) Re-attach the reveal observer for newly-rendered .reveal elements.
    setupRevealObserver();
  }

  // We keep one observer instance that we re-create per render pass,
  // because innerHTML wipes the previously observed nodes.
  function setupRevealObserver() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
  }

  function init() {
    const data = window.portfolioData;
    if (!data) {
      return;
    }

    // Initial render in the saved (or default) language.
    const startLang = getSavedLang();
    applyLanguage(startLang);

    // Bind language toggle buttons.
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (!lang || SUPPORTED_LANGS.indexOf(lang) === -1) return;
        saveLang(lang);
        applyLanguage(lang);
      });
    });

    // Nav shrink on scroll. Keep mobile padding compatible with responsive.css.
    const nav = document.querySelector('nav.mainnav');
    if (nav) {
      const onScroll = () => {
        const isMobile = window.matchMedia('(max-width: 960px)').matches;
        if (window.scrollY > 60) {
          nav.style.padding = isMobile ? '10px 18px' : '10px 32px';
        } else {
          nav.style.padding = isMobile ? '12px 18px' : '14px 32px';
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
