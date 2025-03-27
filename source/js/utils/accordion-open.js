const list = document.querySelector('.faq__category-questions-list');

function buttonToggle(e) {
  e.target.closest('.faq__questions-item').classList.toggle('faq__questions-item--opened');
}

list.addEventListener('click', (e) => buttonToggle(e));
