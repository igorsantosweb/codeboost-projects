const menuMobile = () => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-header="nav"]');
  const btn = document.querySelector('[data-header="btn-mobile"]');

  if(header && nav && btn) {
    const html = document.documentElement;

    function handleClickBtn() {
      const menuMobileIsAcitve = nav.classList.contains('active');
      
      if(menuMobileIsAcitve) {
        closeMenuMobile();
      } else {
        showMenuMobile();
      }
    }

    function handleOutsideClickMenu({ target }) {
      if(target === nav) {
        closeMenuMobile();
      } else {
        console.log(target);
      }
    }

    function showMenuMobile() {
      header.classList.add('header-mobile-active');
      nav.classList.add('active');

      html.style = 'overflow: hidden';
    }
    
    function closeMenuMobile() {
      header.classList.remove('header-mobile-active');
      nav.classList.remove('active');

      html.style = 'overflow: unset';
    }

    btn.addEventListener('click', handleClickBtn);
    nav.addEventListener('click', handleOutsideClickMenu);
  }
}

export default menuMobile;