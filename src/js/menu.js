const menuBtnRef = document.querySelector('[data-menu-button]');
const menuCloseBtnRef = document.querySelector('[data-menu-inner-button]');
const mobileMenuRef = document.querySelector('[data-menu-mobile]');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
});

menuCloseBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  mobileMenuRef.classList.toggle('is-open');
});
