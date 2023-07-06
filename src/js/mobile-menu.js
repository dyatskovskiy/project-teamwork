(() => {
  const buttonMenu = document.querySelector('.js-btn-hide');
  const onHideBtn = document.querySelector('.js-hide-on');
  const offHideBtn = document.querySelector('.js-hide-off');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtns = document.querySelectorAll('.js-close-menu');

  const toggleMenu = () => {
      mobileMenu.classList.toggle('is-open');

  };

  const toggleButton = () => {
      buttonMenu.classList.toggle('is-hide');

  };
  openMenuBtn.addEventListener('click', toggleMenu);
  onHideBtn.addEventListener('click', toggleButton);
  offHideBtn.addEventListener('click', toggleButton);
  closeMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
  
})();

