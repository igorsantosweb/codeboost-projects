function handleClickBtnMobile() {
  const btn = document.querySelector('[data-menu="btn"]');
  const nav = document.querySelector('[data-menu="nav"]');

  function toggleMenuMobile() {
    nav.classList.toggle('active');
  }

  if (btn && nav) {
    btn.addEventListener('click', toggleMenuMobile);
  }
}

handleClickBtnMobile();
