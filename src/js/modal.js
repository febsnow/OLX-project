const refs = {
  openModalSearchBtn: document.querySelector('[data-modal-search]'),
  openModalSearchMobileBtn: document.querySelector('[data-modal-search-mobile]'),
  openModalLoginBtn: document.querySelector('[data-modal-login]'),
  openModalCreateBtn: document.querySelector('[data-modal-create]'),
  openModalCreateMobileBtn: document.querySelector('[data-modal-create-mobile]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalSearchBtn.addEventListener('click', toggleModal);
refs.openModalSearchMobileBtn.addEventListener('click', toggleModal);
refs.openModalLoginBtn.addEventListener('click', toggleModal);
refs.openModalCreateBtn.addEventListener('click', toggleModal);
refs.openModalCreateMobileBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}
