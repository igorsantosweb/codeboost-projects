const toggleMenuDropdown = () => {
  const links = document.querySelectorAll('[data-dropdown="link"]');
  const submenus = document.querySelectorAll('[data-dropdown="menu"]');

  if(links.length && submenus.length) {
    function toggleSubmenu(indexTarget) {
      submenus[indexTarget].classList.toggle('active');

      initOutsideClick(links[indexTarget], () => {
        submenus[indexTarget].classList.remove('active');
      });
    }

    function initOutsideClick(element, callback) {
      const html = document.documentElement;
      const outsideAttribute = 'data-outside';

      if(!element.hasAttribute(outsideAttribute)) {
        html.addEventListener('click', handleClickOutside);
        element.setAttribute(outsideAttribute, '');
      }

      function handleClickOutside({ target }) {
        if(!element.contains(target)) {
          callback();
          
          element.removeAttribute(outsideAttribute, '');
          html.removeEventListener('click', handleClickOutside);
        }
      }
    }

    function removeSubmenu(indexTarget) {
      submenus[indexTarget].classList.remove('active');
    }
  
    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        toggleSubmenu(index);
      });
    });
  
    submenus.forEach((submenu, index) => {
      submenu.addEventListener('mouseleave', () => removeSubmenu(index));
    });
  }
}

export default toggleMenuDropdown;