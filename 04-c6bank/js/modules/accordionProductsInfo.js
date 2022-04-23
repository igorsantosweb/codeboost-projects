const accordionProductsInfo = () => {
  const btnsAccordion = document.querySelectorAll('[data-accordion="btn"]');
  const contentsAccordion = document.querySelectorAll('[data-accordion="content"]');

  if(btnsAccordion.length && contentsAccordion.length) {
    function handleClickBntAccordion(indexTarget) {
      [...btnsAccordion, ...contentsAccordion].forEach((element) => {
        element.classList.remove('active');
      });

      btnsAccordion[indexTarget].classList.add('active');
      contentsAccordion[indexTarget].classList.add('active');
    }

    btnsAccordion.forEach((btn, index) => {
      btn.addEventListener('click', () => handleClickBntAccordion(index));
    });
  }
}

export default accordionProductsInfo;