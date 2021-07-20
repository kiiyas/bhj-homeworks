'use strict'

const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');

function formToggle() {
    form.closest('.signin').classList.toggle('signin_active');
}

if (localStorage.getItem('user_id')) {
    document.getElementById('user_id').textContent = localStorage.getItem('user_id');
    welcome.classList.add('welcome_active');
} else {
    formToggle();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', form.action);
    xhr.send(formData);
    
    xhr.addEventListener('load', () => {        
        if(xhr.response.success === true) {
            document.getElementById('user_id').innerText += `${xhr.response.user_id}`;
            formToggle();
            welcome.classList.add('welcome_active');
            localStorage.setItem('user_id', xhr.response.user_id);
        } else {
            const errorInput = document.getElementById('errorInput');
            if (!errorInput) {
                const element = document.createElement('div');
            element.innerHTML = '<span id="errorInput">Неправильные логин или пароль!</span>';
            form.closest('.signin').insertAdjacentElement('beforeEnd', element);

            const inputs = form.getElementsByClassName('control');
            for (let input of inputs) {
                input.value = '';
            }       
            }                 
        }        
    });
});