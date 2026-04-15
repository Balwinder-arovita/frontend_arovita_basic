/* ============================================================
   Arovita — Shared Navbar + Footer
   Works with file://, live server, and any static host.
   ============================================================ */
(function(){

  /* ── Navbar HTML ── */
  const NAVBAR = `
<nav class="navbar" id="nav">
  <div class="nav-pill">
    <a href="index.html" class="nav-logo">
      <div class="logo-svg-wrap">
        <img src="logoPoppins.svg" alt="Arovita" width="38" height="38">
      </div>
      <span class="nav-brand">Aro<span>vita</span></span>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-a">Home</a>
      <div class="nav-dropdown-wrap">
        <a href="index.html#services" class="nav-a nav-services-btn">Services
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-inner">
            <a href="doctor.html" class="nav-dd-item">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              In-Clinic Visits
            </a>
            <a href="consult.html" class="nav-dd-item">
              <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              Tele-Consultation
            </a>
            <a href="lab-tests.html" class="nav-dd-item">
              <svg viewBox="0 0 24 24"><path d="M6 2v6l-2 4a6 6 0 0012 0L14 8V2"/><path d="M6 2h8"/></svg>
              Lab Tests
            </a>
            <a href="home-nurse.html" class="nav-dd-item">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
              Home Nurse
            </a>
            <a href="hms.html" class="nav-dd-item">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              HMS
            </a>
          </div>
        </div>
      </div>
      <a href="index.html#how-it-works" class="nav-a">How It Works</a>
      <a href="index.html#about" class="nav-a">About Us</a>
      <a href="mailto:hello@arovita.care" class="nav-a">Contact</a>
    </div>
    <div class="nav-right">
      <a href="https://my.arovita.care" class="nav-cta-btn">Login / Sign up</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-backdrop" id="mmBackdrop"></div>
  <div class="mobile-menu-panel">
    <div class="mm-label">Navigation</div>
    <a href="index.html" class="mm-link">
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
      Home
    </a>
    <a href="index.html#how-it-works" class="mm-link">
      <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
      How It Works
    </a>
    <a href="index.html#about" class="mm-link">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      About Us
    </a>
    <a href="mailto:hello@arovita.care" class="mm-link">
      <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      Contact
    </a>
    <div class="mm-sep"></div>
    <div class="mm-label">Services</div>
    <a href="doctor.html" class="mm-link">
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      In-Clinic Visits
    </a>
    <a href="consult.html" class="mm-link">
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      Tele-Consultation
    </a>
    <a href="lab-tests.html" class="mm-link">
      <svg viewBox="0 0 24 24"><path d="M6 2v6l-2 4a6 6 0 0012 0L14 8V2"/><path d="M6 2h8"/></svg>
      Lab Tests
    </a>
    <a href="home-nurse.html" class="mm-link">
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
      Home Nurse
    </a>
    <a href="hms.html" class="mm-link">
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      HMS
    </a>
    <div class="mm-cta">
      <a href="https://my.arovita.care" class="nav-cta-btn" style="display:flex;justify-content:center;border-radius:12px;width:100%">Login / Sign up</a>
    </div>
  </div>
</div>`;

  /* ── Footer HTML ── */
  const FOOTER = `
<footer class="footer" id="contact">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <img src="logoPoppins-white.svg" alt="Arovita" width="36" height="36">
          <span class="footer-brand">Aro<span>vita</span></span>
        </div>
        <p class="footer-desc">Building a connected ecosystem for continuous healthcare — across services, providers, and health data.</p>
        <div class="footer-social">
          <div class="fsb">f</div><div class="fsb">𝕏</div><div class="fsb">in</div><div class="fsb">▶</div>
        </div>
      </div>
      <div>
        <div class="footer-h">Services</div>
        <ul class="footer-links">
          <li><a href="doctor.html">In-Clinic Visits</a></li>
          <li><a href="consult.html">Tele-Consultation</a></li>
          <li><a href="lab-tests.html">Lab Tests</a></li>
          <li><a href="home-nurse.html">Home Nurse</a></li>
          <li><a href="#">Pharmacy <span style="font-size:10px;opacity:.5">(Coming Soon)</span></a></li>
          <li><a href="hms.html">Hospital Management System</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-h">Providers</div>
        <ul class="footer-links">
          <li><a href="mailto:hello@arovita.care">Provider Platform</a></li>
          <li><a href="mailto:hello@arovita.care">Partner with Arovita</a></li>
          <li><a href="hms.html">HMS for Hospitals</a></li>
        </ul>
        <div class="footer-h" style="margin-top:24px">Company</div>
        <ul class="footer-links">
          <li><a href="index.html#about">About</a></li>
          <li><a href="mailto:careers@arovita.care">Careers</a></li>
          <li><a href="mailto:hello@arovita.care">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-h">Resources</div>
        <ul class="footer-links">
          <li><a href="index.html#how-it-works">How it Works</a></li>
          <li><a href="index.html#ecosystem">Ecosystem</a></li>
          <li><a href="mailto:hello@arovita.care">ABHA Integration</a></li>
        </ul>
        <div class="footer-h" style="margin-top:24px">Legal</div>
        <ul class="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© Arovita Healthcare. All rights reserved.</div>
      <ul class="footer-links2">
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="mailto:hello@arovita.care">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>`;

  /* ── Inject into placeholders ── */
  function inject(){
    const navEl = document.getElementById('navbar-placeholder');
    const footEl = document.getElementById('footer-placeholder');
    if(navEl) navEl.outerHTML = NAVBAR;
    if(footEl) footEl.outerHTML = FOOTER;

    initNavbar();
    initCursor();
  }

  /* ── Navbar behaviour ── */
  function initNavbar(){
    const nav = document.getElementById('nav');
    const stb = document.getElementById('stb');
    if(nav){
      window.addEventListener('scroll', () => {
        nav.classList.toggle('sc', scrollY > 60);
        if(stb) stb.classList.toggle('show', scrollY > 400);
      });
    }

    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mmBackdrop = document.getElementById('mmBackdrop');

    function openMenu(){
      hamburger  && hamburger.classList.add('active');
      mobileMenu && mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      hamburger  && hamburger.classList.remove('active');
      mobileMenu && mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if(hamburger)  hamburger.addEventListener('click',  () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
    if(mmBackdrop) mmBackdrop.addEventListener('click', closeMenu);
    document.querySelectorAll('.mm-link').forEach(l => l.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeMenu(); closeDropdown(); } });

    /* ── Services dropdown (JS-driven, no CSS hover gap issues) ── */
    const ddWrap = document.querySelector('.nav-dropdown-wrap');
    const ddMenu = document.querySelector('.nav-dropdown');
    const ddBtn  = document.querySelector('.nav-services-btn');

    function openDropdown(){
      if(!ddMenu) return;
      ddMenu.classList.add('open');
      ddBtn && ddBtn.classList.add('dd-active');
    }
    function closeDropdown(){
      if(!ddMenu) return;
      ddMenu.classList.remove('open');
      ddBtn && ddBtn.classList.remove('dd-active');
    }

    if(ddBtn){
      ddBtn.addEventListener('click', e => {
        e.preventDefault();
        ddMenu.classList.contains('open') ? closeDropdown() : openDropdown();
      });
    }

    /* Close when clicking outside the dropdown */
    document.addEventListener('click', e => {
      if(ddWrap && !ddWrap.contains(e.target)) closeDropdown();
    });

    /* Also support hover on desktop — mouseenter/leave on the whole wrap */
    if(ddWrap){
      let leaveTimer;
      ddWrap.addEventListener('mouseenter', () => { clearTimeout(leaveTimer); openDropdown(); });
      ddWrap.addEventListener('mouseleave', () => { leaveTimer = setTimeout(closeDropdown, 120); });
    }
  }

  /* ── Custom cursor ── */
  function initCursor(){
    if(!window.matchMedia('(hover:hover)').matches) return;
    const cur     = document.getElementById('cur');
    const curRing = document.getElementById('curRing');
    if(!cur || !curRing) return;
    document.addEventListener('mousemove', e => {
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
      setTimeout(() => {
        curRing.style.left = e.clientX + 'px';
        curRing.style.top  = e.clientY + 'px';
      }, 80);
    });
    function bindHover(el){
      el.addEventListener('mouseenter', () => { cur.classList.add('hovered'); curRing.classList.add('hovered'); });
      el.addEventListener('mouseleave', () => { cur.classList.remove('hovered'); curRing.classList.remove('hovered'); });
    }
    document.querySelectorAll('a,button').forEach(bindHover);
    /* Re-bind after dynamic content (MutationObserver lite) */
    new MutationObserver(muts => muts.forEach(m =>
      m.addedNodes.forEach(n => { if(n.querySelectorAll) n.querySelectorAll('a,button').forEach(bindHover); })
    )).observe(document.body, { childList: true, subtree: true });
  }

  /* ── Intersection animations ── */
  function initAnimations(){
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fu,.sl-left,.sl-right').forEach(el => obs.observe(el));
  }

  /* ── Boot ── */
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => { inject(); initAnimations(); });
  } else {
    inject(); initAnimations();
  }

})();
