const scrollAnimation = () => {
  const elements = document.querySelectorAll('[data-scroll]');
  
  function handleScrollWindow() {
    const windowScrollHalf = window.innerHeight * 0.6;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if(elementTop - windowScrollHalf < 0) {
        element.classList.add('visible');
      }
    })
  }

  window.addEventListener('scroll', handleScrollWindow);

  handleScrollWindow();
}

export default scrollAnimation;