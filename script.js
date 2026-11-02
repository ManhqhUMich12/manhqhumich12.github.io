/* Progressive enhancement only: all website content is available without JavaScript. */
(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const navButton = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  let saved = null;
  try { saved = localStorage.getItem('qmh-theme-modern-v3'); } catch (_) {}
  root.dataset.theme = saved === 'dark' ? 'dark' : 'light';
  const setThemeLabel = () => { const text = root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'; themeButton?.setAttribute('aria-label', text); themeButton?.setAttribute('title', text); themeButton?.setAttribute('aria-pressed', String(root.dataset.theme === 'dark')); };
  setThemeLabel();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('qmh-theme-modern-v3',root.dataset.theme); } catch (_) {}
    setThemeLabel();
  });
  const closeMenu = () => {
    nav?.classList.remove('nav-open');
    navButton?.setAttribute('aria-expanded','false');
    navButton?.setAttribute('aria-label','Open navigation');
  };
  navButton?.addEventListener('click', () => {
    const open = nav?.classList.toggle('nav-open');
    navButton.setAttribute('aria-expanded',String(Boolean(open)));
    navButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event => { if(event.key === 'Escape') closeMenu(); });
  document.addEventListener('click',event => { if(nav && navButton && !nav.contains(event.target) && !navButton.contains(event.target)) closeMenu(); });
  document.querySelectorAll('.profile-photo').forEach(img => {
    img.addEventListener('error', () => img.classList.add('is-unavailable'));
    if(img.complete && img.naturalWidth === 0) img.classList.add('is-unavailable');
  });
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();