const headerFixedOnScroll = () => {
  const header = document.querySelector('[data-header]');
  const submenus = document.querySelectorAll('[data-dropdown="menu"]');

  let isAlreadySubmenusDisables = false;
  
  if(header && submenus.length) {
    function handleScroll() {

      if(window.pageYOffset > 110) {
        header.classList.add('active');

        // Disable all submenus acitve 
        if(!isAlreadySubmenusDisables) {
          submenus.forEach((submenu) => {
            submenu.classList.remove('active');
          });

          isAlreadySubmenusDisables = true;
        }

      } else {
        header.classList.remove('active');

        isAlreadySubmenusDisables = false;
      }
    }

    window.addEventListener('scroll', handleScroll);
  }
}

export default headerFixedOnScroll;