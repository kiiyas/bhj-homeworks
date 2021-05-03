'use strict'

const mainPopup = document.getElementById('modal_main');
const successPopup = document.getElementById('modal_success');
const popupСlose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');
let closeTimes = popupСlose.length;

mainPopup.classList.add('modal_active'); 

for (let i = 0; i < closeTimes; i++) {
    popupСlose[i].onclick = function() {
        mainPopup.classList.remove('modal_active');
        successPopup.classList.remove('modal_active');
    }
}

showSuccess[0].onclick = function() {
    mainPopup.classList.remove('modal_active');
    successPopup.classList.add('modal_active');
}


//? для любого количества модалок - заменить mainPopup и successPopup на 
//? один document.getElementsByClassName('modal'), и подбирать по [0], [1] ...
