document.addEventListener(
  "DOMContentLoaded",
  function () {
    const modals = [
      "data-first-modal",
      "data-second-modal",
      "data-third-modal",
    ];


    modals.forEach((element) => {
      const openModalSelector = element + "-open";
      const closeModalSelector = element + "-close";

      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const closeModalBtns = document.querySelectorAll(
        `[${closeModalSelector}]`
      );
      const modal = document.querySelector(`[${element}]`);

      if (!modal) logModalError("Can`t find Modal with attribute " + modal);
      if (openModalBtns.length === 0)
        logModalError(
          "Can`t find Open modal button with attribute " + openModalSelector
        );
      if (closeModalBtns.length === 0)
        logModalError(
          "Can`t find Close modal button with attribute " + closeModalSelector
        );
      if (!modal || openModalBtns.length === 0 || closeModalBtns.length === 0)
        return;

      openModalBtns.forEach((openBtn) =>
        openBtn.addEventListener("click", toggleModal)
      );
      closeModalBtns.forEach((closeBtn) =>
        closeBtn.addEventListener("click", toggleModal)
      );
  function toggleModal() {
        document.body.classList.toggle("no-scroll");
  }
      function toggleModal() {
        document.body.classList.toggle("modal-open");
        modal.classList.toggle("is-hidden");
      }
    });
  },
  false
);

function logModalError(text) {
  const styles = "color: #bada55";
  console.log("%c" + text, styles);
}



// HEАКТУАЛЬНИЙ СКРИПТ ======================

// const buttonMenu = document.querySelector('.js-btn-hide');
// const onHideBtn = document.querySelector('.js-hide-on');
// const offHideBtn = document.querySelector('.js-hide-off');
// const mobileMenu = document.querySelector('.js-menu-container');
// const openMenuBtn = document.querySelector('.js-open-menu');
// const closeMenuBtn = document.querySelector('.js-close-menu');

// const toggleMenu = () => {
//     mobileMenu.classList.toggle('is-open');
// };
// const toggleButton = () => {
//     buttonMenu.classList.toggle('is-hide');
// };

// openMenuBtn.addEventListener('click', toggleMenu);
// closeMenuBtn.addEventListener('click', toggleMenu);
// onHideBtn.addEventListener('click', toggleButton);
// offHideBtn.addEventListener('click', toggleButton);
// // Close the mobile menu on wider screens if the device orientation changes
// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
// });
// ============================
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
