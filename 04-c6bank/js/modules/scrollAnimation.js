const scrollAnimation = () => {
  const sections = document.querySelectorAll('[data-scroll]');
  const windowScrollHalf = window.innerHeight * 0.5;

  function handleScrollWindow() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if(sectionTop - windowScrollHalf) {
        section.classList.add('visible');
      }
    })
  }

  window.addEventListener('scroll', handleScrollWindow);
}