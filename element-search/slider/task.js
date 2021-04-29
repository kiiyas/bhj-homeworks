'use strict'

const next = document.getElementsByClassName('slider__arrow_next');
const prev = document.getElementsByClassName('slider__arrow_prev');
let currentSlide = 0;

const sliderItems = document.getElementsByClassName('slider__item');
const sliderItemsLength = sliderItems.length;

const sliderDots = document.getElementsByClassName('slider__dot');
const sliderDotsLength = sliderDots.length;

next[0].onclick = function() {
    if (currentSlide == sliderItemsLength - 1) {
        sliderItems[0].classList.add('slider__item_active');
        sliderDots[0].classList.add('slider__dot_active');
        sliderItems[currentSlide].classList.remove('slider__item_active');
        sliderDots[currentSlide].classList.remove('slider__dot_active');
        currentSlide = 0;

    } else if (currentSlide == 0) {
        sliderItems[1].classList.add('slider__item_active');
        sliderDots[1].classList.add('slider__dot_active');
        sliderItems[0].classList.remove('slider__item_active');
        sliderDots[0].classList.remove('slider__dot_active');
        currentSlide++;

    } else {
        sliderItems[+currentSlide + 1].classList.add('slider__item_active');
        sliderDots[+currentSlide + 1].classList.add('slider__dot_active');
        sliderItems[currentSlide].classList.remove('slider__item_active');
        sliderDots[currentSlide].classList.remove('slider__dot_active');
        currentSlide++;
    }
}

prev[0].onclick = function() {    
    if (currentSlide == sliderItemsLength - 1) {
        sliderItems[sliderItemsLength - 2].classList.add('slider__item_active');
        sliderDots[sliderItemsLength - 2].classList.add('slider__dot_active');
        sliderItems[sliderItemsLength - 1].classList.remove('slider__item_active');
        sliderDots[sliderItemsLength - 1].classList.remove('slider__dot_active');
        currentSlide = sliderItemsLength - 2;

    } else if (currentSlide == 0) {
        sliderItems[sliderItemsLength - 1].classList.add('slider__item_active');
        sliderDots[sliderItemsLength - 1].classList.add('slider__dot_active');
        sliderItems[0].classList.remove('slider__item_active');
        sliderDots[0].classList.remove('slider__dot_active');
        currentSlide = (sliderItemsLength - 1);

    } else {
        sliderItems[+currentSlide - 1].classList.add('slider__item_active');
        sliderDots[+currentSlide - 1].classList.add('slider__dot_active');
        sliderItems[currentSlide].classList.remove('slider__item_active');
        sliderDots[currentSlide].classList.remove('slider__dot_active');
        currentSlide--;
    }
}


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

        currentSlide = i;
    }
}