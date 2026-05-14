/* ============================================================
   main.js — kicks everything off after DOM is ready
   Depends on: data.js, render.js
   ============================================================ */

(function () {
  'use strict';

  function init() {
    const data = window.portfolioData;
    if (!data) {
      console.error('portfolioData not found — check that data.js loaded before main.js');
      return;
    }

    // ---- Render dynamic sections ----
    window.renderProjects(
      document.getElementById('featured-projects'),
      data.projects.featured
    );

    window.renderProjects(
      document.getElementById('in-dev-projects'),
      data.projects.inDevelopment
    );

    window.renderExtraBand(
      document.getElementById('extras-container'),
      data.additional
    );

    window.renderStack(
      document.getElementById('stack-container'),
      data.stack
    );

    // ---- Scroll reveal animation ----
    // Elements with class "reveal" fade up as they enter the viewport.
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
      // Fallback: show everything immediately on older browsers.
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }

    // ---- Nav shrink on scroll ----
    const nav = document.querySelector('nav.mainnav');
    if (nav) {
      const onScroll = () => {
        if (window.scrollY > 60) {
          nav.style.padding = '10px 32px';
        } else {
          nav.style.padding = '14px 32px';
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
