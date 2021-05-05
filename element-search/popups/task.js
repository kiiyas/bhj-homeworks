'use strict'

const mainPopup = document.getElementById('modal_main');
const successPopup = document.getElementById('modal_success');
const popupСlose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');
let closeTimes = popupСlose.length;

mainPopup.classList.add('modal_active'); 

for (let i = 0; i < closeTimes; i++) {
    popupСlose[i].onclick = function() {
        this.closest('.modal').classList.remove('modal_active');
        //коммент преподавателя:
        //Так функция более универсальна и закрывает любое одно окно 
        //к которому принадлежит элемент закрытия
        
        //mainPopup.classList.remove('modal_active');
        //successPopup.classList.remove('modal_active');
    }
}
//!коммент преподавателя:
//Например можно было сделать, чтобы на кнопке “Сделать хорошо” срабатывало два обработчика: 
//один будет закрывать текущее модальное окно (который вы реализовали выше), а второй 
//будет отображать второе модальное окно.
showSuccess[0].addEventListener('click', () => successPopup.classList.add('modal_active'));
/*
showSuccess[0].onclick = function() {
    mainPopup.classList.remove('modal_active');
    successPopup.classList.add('modal_active');
}
*/

//? для любого количества модалок - заменить mainPopup и successPopup на 
//? один document.getElementsByClassName('modal'), и подбирать по [0], [1] ...
