'use strict'

const mainPopup = document.getElementById('modal_main');
const successPopup = document.getElementById('modal_success');
const popupСlose = document.getElementsByClassName('modal__close');

mainPopup.classList.add('modal_active'); 

let closeTimes = popupСlose.length; 
//? для любого количества модалок - заменить mainPopup и successPopup на 
//? один document.getElementsByClassName('modal'), и подбирать по [0], [1] ...
for (let i = 0; i < closeTimes; i++) {
    if (i == 0 || i == 1 || i % 2 == 1) {
        popupСlose[i].onclick = function() {
            mainPopup.classList.remove('modal_active');
            successPopup.classList.add('modal_active');     
        }
    } else {
        popupСlose[i].onclick = function() {
            successPopup.classList.remove('modal_active');         
        }
    }
}  

//себе в помощь:
/*

popupСlose[0].onclick = function() {
    mainPopup.classList.remove('modal_active');
    successPopup.classList.add('modal_active');     
}

popupСlose[1].onclick = function() {
    mainPopup.classList.remove('modal_active');
    successPopup.classList.add('modal_active');     
}

popupСlose[2].onclick = function() {
    successPopup.classList.remove('modal_active');         
}

*/