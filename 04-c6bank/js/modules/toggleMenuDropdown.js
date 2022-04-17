const toggleMenuDropdown = () => {
  const links = document.querySelectorAll('[data-dropdown="link"]');
  const submenus = document.querySelectorAll('[data-dropdown="menu"]');

  if(links.length && submenus.length) {
    function toggleSubmenu(indexTarget) {
      submenus[indexTarget].classList.toggle('active');
    }

    function removeSubmenu(indexTarget) {
      submenus[indexTarget].classList.remove('active');
    }

    function handleClickOutSide(elementTarget) {
      document.body.addEventListener('click', ({ target }) => {
          console.log(elementTarget, target);
      });
    }
  
    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        toggleSubmenu(index);
        handleClickOutSide(link);
      });
    });
  
    submenus.forEach((submenu, index) => {
      submenu.addEventListener('mouseleave', () => removeSubmenu(index));
    });
  }
}

export default toggleMenuDropdown;