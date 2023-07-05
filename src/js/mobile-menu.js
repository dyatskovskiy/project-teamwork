(() => {
  const buttonMenu = document.querySelector('.js-btn-hide');
  const onHideBtn = document.querySelector('.js-hide-on');
  const offHideBtn = document.querySelector('.js-hide-off');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
  };

  const toggleButton = () => {
    buttonMenu.classList.toggle('is-hide');
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  onHideBtn.addEventListener('click', toggleButton);
  offHideBtn.addEventListener('click', toggleButton);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();