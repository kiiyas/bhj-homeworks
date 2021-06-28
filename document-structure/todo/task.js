'use strict'

const input = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');


function doElement() {
    const element = document.createElement('div');
    element.className = 'task';
    element.innerHTML = '<div class="task__title"> ' + input.value + '</div> \
    <a href="#" class="task__remove">&times;</a>';

    return element;
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value != '' 
    || e.key === 'NumpadEnter' && input.value != '') {
        e.preventDefault();
        const element = doElement();
        tasksList.insertAdjacentElement('beforeEnd', element);
        input.value = '';
    }    
});

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value !== '') {
        const element = doElement();
        tasksList.insertAdjacentElement('beforeEnd', element);
        input.value = '';
    }    
});

tasksList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
    e.target.closest('.task').remove()};
});