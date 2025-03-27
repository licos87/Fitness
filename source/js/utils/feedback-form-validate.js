const form = document.querySelector('.feedback__form');
const nameInput = document.querySelector('.feedback__form-input-name');
const phoneInput = document.querySelector('.feedback__form-input-phone');
const errorNameText = form.querySelector('.feedback__form-error-name');
const errorPhoneText = form.querySelector('.feedback__form-error-phone');

function checkValidityName(name) {
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
  const nameValue = name.value.trim();
  return nameValue !== '' && nameRegex.test(nameValue);
}

function checkValidityPhone(phone) {
  const phoneValue = phone.value.trim();
  const phoneRegexp = /^(\+7|8)[\s(-]?\d{3}[)\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  return phoneValue !== '' && phoneRegexp.test(phoneValue);
}

function formValidation(e) {
  nameInput.style.borderBottom = '1px solid #74819c';
  phoneInput.style.borderBottom = '1px solid #74819c';
  errorNameText.style.visibility = 'hidden';
  errorPhoneText.style.visibility = 'hidden';
  if (!checkValidityName(nameInput)) {
    e.preventDefault();
    nameInput.style.borderBottom = '1px solid #ff121f';
    errorNameText.textContent = 'Введите корректное имя';
    errorNameText.style.visibility = 'visible';
  }

  if (!checkValidityPhone(phoneInput)) {
    e.preventDefault();
    phoneInput.style.borderBottom = '1px solid #ff121f';
    errorPhoneText.style.visibility = 'visible';
    errorPhoneText.textContent = 'Введите корректный номер телефона';
  }
}

form.addEventListener('submit', (e) => formValidation(e));
