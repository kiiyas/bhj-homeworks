'use strict'

const editor = document.getElementById('editor');
const reset = document.querySelector('.reset');

editor.value = localStorage.getItem('editor');

editor.addEventListener('input', () => {
  localStorage.setItem('editor', `${editor.value}`);
});

reset.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editor');
})