function handleClickBtnMobile() {
  const btn = document.querySelector('[data-menu="btn"]');
  const nav = document.querySelector('[data-menu="nav"]');

  function toggleMenuMobile() {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
  }

  if (btn && nav) {
    btn.addEventListener('click', toggleMenuMobile);
  }
}

handleClickBtnMobile();

function sectionScrollAnimation() {
  const sections = document.querySelectorAll('[data-animation="scroll"]');

  if (sections.length) {
    const windowScrollHalf = window.innerHeight * 0.5;

    function sectionToggleVisible() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop - windowScrollHalf < 0) {
          section.classList.add('active');
        }
      });
    }

    sectionToggleVisible();

    window.addEventListener('scroll', sectionToggleVisible);
  }
}

sectionScrollAnimation();
