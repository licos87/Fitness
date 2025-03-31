const list = document.querySelector('.faq__category-questions-list');

function buttonToggle(e) {
  e.target.closest('.faq__questions-item').classList.toggle('faq__questions-item--opened');
  e.target.closest('.faq__questions-item').querySelector('.faq__questions-button').classList.toggle('faq__questions-button--opened');
  e.target.closest('.faq__questions-item').querySelector('.faq__questions-button').classList.toggle('faq__questions-button--closed');
}

list.addEventListener('click', (e) => buttonToggle(e));
