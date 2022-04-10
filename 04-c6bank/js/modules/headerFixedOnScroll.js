const headerFixedOnScroll = () => {
  const header = document.querySelector('[data-header]');
  
  function handleScroll() {
    if(window.pageYOffset > 110) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  window.addEventListener('scroll', handleScroll);
}

export default headerFixedOnScroll;