// =====================================
// оновлений
(() => {
  const refs = {
    homeLink: document.querySelector('.page-nav-link[href="../index.html"]'),
    favoritesLink: document.querySelector(
      '.page-nav-link[href="../favorites.html"]'
    ),
    pageHeader: document.querySelector('#page-header'),
    toggleMenuBtn: document.querySelector('#toggle-mobile-menu-btn'),
    menu: document.querySelector('#mobile-menu-container'),
    navLinks: document.querySelectorAll('.page-nav-link'),
    openMenuSvg: document.querySelector('#icon-burger'),
    closeMenuSvg: document.querySelector('#icon-close'),
    logo: document.querySelector('.logo'),
  };

  refs.homeLink.addEventListener('click', handleLinkClick);
  refs.favoritesLink.addEventListener('click', handleLinkClick);
  refs.toggleMenuBtn.addEventListener('click', toggleMenu);
  refs.navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeMenu);
  });

  function handleLinkClick(event) {
    event.preventDefault();
    const allLinks = document.querySelectorAll('.page-nav-link');

    allLinks.forEach(link => {
      link.style.backgroundColor = 'transparent';
      link.classList.remove('current');
    });

    event.target.style.backgroundColor = '#f6f6f6';
    event.target.classList.add('current');
  }

  function closeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.pageHeader.classList.remove('fixed');
    refs.closeMenuSvg.classList.add('is-hidden');
    refs.openMenuSvg.classList.remove('is-hidden');
    refs.logo.classList.remove('is-hidden');
  }

  function toggleMenu() {
    refs.pageHeader.classList.toggle('fixed');
    refs.menu.classList.toggle('is-hidden');
    refs.closeMenuSvg.classList.toggle('is-hidden');
    refs.openMenuSvg.classList.toggle('is-hidden');
    refs.logo.classList.toggle('is-hidden');
  }
})();
