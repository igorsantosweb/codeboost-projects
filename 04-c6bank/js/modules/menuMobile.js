const menuMobile = () => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-header="nav"]');
  const btn = document.querySelector('[data-header="btn-mobile"]');

  if(header && nav && btn) {
    const html = document.documentElement;

    function handleClickBtn() {
      header.classList.toggle('header-mobile-active');
      nav.classList.toggle('active');
      
      if(nav.classList.contains('active')) {
        html.style = 'overflow: hidden';
      } else {
        html.style = 'overflow: unset';
      }
    }

    btn.addEventListener('click', handleClickBtn);
  }
}

export default menuMobile;