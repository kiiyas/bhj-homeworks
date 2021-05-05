'use strict'

/*
const sliderItems = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

const sliderDots = document.getElementsByClassName('slider__dot');
const sliderDotsLength = sliderDots.length;

const position = document.getElementsByClassName('slider__item_active');


next.addEventListener('click', function () {
    let arr = Array.from(sliderItems)
    let index = arr.findIndex(hasActive);

    sliderItems[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');
    
    if (index == (arr.length - 1)) { index = -1 };     
    sliderItems[index + 1].classList.add('slider__item_active');
    sliderDots[index + 1].classList.add('slider__dot_active');
})

prev.addEventListener('click', function () {
    let arr = Array.from(sliderItems)
    let index = arr.findIndex(hasActive);

    sliderItems[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');
    
    if (index == 0) { index = arr.length };
    sliderItems[index - 1].classList.add('slider__item_active');    
    sliderDots[index - 1].classList.add('slider__dot_active');
})

function hasActive (e) {
    return e.classList.contains('slider__item_active');
}
*/
/*

  for (let i = 0; i < sliderDotsLength; i++) {
    sliderDots[i].onclick = function() {        
        for (let i = 0; i < sliderDotsLength; i++) {
            if (sliderItems[i].classList.contains('slider__item_active')) {
                sliderItems[i].classList.remove('slider__item_active');
                sliderDots[i].classList.remove('slider__dot_active');
            }
        }

        sliderItems[i].classList.add('slider__item_active');
        sliderDots[i].classList.add('slider__dot_active');
        sliderDots[hasActive].classList.add('slider__dot_active');
        currentSlide = i;
    }
}
*/


//!коммент преподавателя:
//Представьте, что вам в дальнейшем придётся расширять слайдер, например управлять им 
//по интервалу, по клику на клавиатуру или ещё иными действиями (например скролу колёсика мышки). 
//Все обработчики вам придётся реализовывать независимо, что будет сильно расширять программу. 
//В ней легко можно будет запутаться, а расширение будет не удобным.

//Попробуйте управление вынести в отдельную функцию. Напишите функцию, которая 
//аргументом принимает число и выставляет этот слайд.

const sliderItems = document.querySelectorAll('.slider__item');

const sliderDots = document.getElementsByClassName('slider__dot');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let slideArr = Array.from(sliderItems);
let position = slideArr.findIndex(hasActive);

next.addEventListener('click', function () {
    position == (slideArr.length - 1) ? position = 0 : position += 1;
    getStep (position);
})

prev.addEventListener('click', function () {
    position == 0 ? position = (slideArr.length - 1) : position -= 1;
    getStep (position);
})

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', function () {
        //position = та точка, по которой кликнули;
        getStep (position);        
    })


function getStep (position) { //передать сюда номер позиции в зависимости от нажатой кнопки    
    let index = slideArr.findIndex(hasActive);

    sliderItems[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');
    
    sliderItems[position].classList.add('slider__item_active');  //активировать слайд по переданной позиции
    sliderDots[position].classList.add('slider__dot_active');
}

function hasActive (e) {
    return e.classList.contains('slider__item_active');
}
