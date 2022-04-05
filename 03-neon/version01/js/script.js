function handleActionsMenuMobile() {
  const menuMobile = document.querySelector('[data-mobile="menu"]');
  const btnMobileOpen = document.querySelector('[data-mobile="btn-open"]');
  const btnMobileClose = document.querySelector('[data-mobile="btn-close"]');

  function toggleMenu() {
    menuMobile.classList.toggle('active');
  }

  btnMobileOpen.addEventListener('click', toggleMenu);
  btnMobileClose.addEventListener('click', toggleMenu);
}

function initMenuMobile() {
  const isMobileDevice = window.matchMedia('(max-width: 991px)').matches;

  if(isMobileDevice) {
    handleActionsMenuMobile();
  } 
}

initMenuMobile();
window.addEventListener('resize', initMenuMobile);

// Menu Scroll
const header = document.querySelector('[data-header]');

function fixedMenu() {
  if(window.pageYOffset > 80) {
    header.classList.add('fixed-menu');
  } else {
    header.classList.remove('fixed-menu');
  }
}

document.addEventListener('scroll', fixedMenu);