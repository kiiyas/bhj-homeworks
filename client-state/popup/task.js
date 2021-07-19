'use strict'

function getCookie(key) {
    const elements = document.cookie.split('; ');
    const cookie = elements.find(e => e.startsWith(key + '='));
    return cookie ? decodeURIComponent(cookie.substr((key + '=').length)) : null;
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.modal__close');
    getCookie('modal') ? '' : button.closest('.modal').classList.add('modal_active');
    
    button.addEventListener('click', () => {
        button.closest('.modal').classList.remove('modal_active');
        document.cookie = 'modal=closed';
    });
});