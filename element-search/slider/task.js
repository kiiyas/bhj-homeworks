'use strict'

const sliderItems = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

const sliderDots = document.getElementsByClassName('slider__dot');
const sliderDotsLength = sliderDots.length;

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