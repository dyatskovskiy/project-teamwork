(() => {
  const buttonMenu = document.querySelector('.js-btn-hide');
  const onHideBtn = document.querySelector('.js-hide-on');
  const offHideBtn = document.querySelector('.js-hide-off');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtns = document.querySelectorAll('.js-close-menu');
  const body = document.querySelector('body');

  const toggleMenu = () => {
      mobileMenu.classList.toggle('is-open');
      body.classList.toggle('no-scroll');

  };

  const toggleButton = () => {
      buttonMenu.classList.toggle('is-hide');

  };
  openMenuBtn.addEventListener('click', toggleMenu);
  onHideBtn.addEventListener('click', toggleButton);
  offHideBtn.addEventListener('click', toggleButton);
  closeMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
  
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');

    body.classList.remove('no-scroll');
})

  
})();