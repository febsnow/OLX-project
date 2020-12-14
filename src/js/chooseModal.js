import { refs } from './modal';
import search from '../templates/search.hbs';
import auth from '../templates/auth-form.hbs';
import makeCall from '../templates/create-call.hbs';

export default function chooseModal() {
  const checkType = refs.modalContent.getAttribute('action');
  if (checkType === 'search') {
    refs.modalForm.insertAdjacentHTML('beforeend', search());
  }
  if (checkType === 'login') {
    refs.modalForm.insertAdjacentHTML('beforeend', auth());
  }
  if (checkType === 'logout') {
    refs.modalForm.insertAdjacentHTML(
      'beforeend',
      (refs.modalForm.innerHTML = '<h1>Место для логаута</h>'),
    );
  }
  if (checkType === 'create') {
    refs.modalForm.insertAdjacentHTML('beforeend', makeCall());
  }
}
