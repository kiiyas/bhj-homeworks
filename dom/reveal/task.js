'use strict'

const revealElements = document.querySelectorAll('div.reveal');

function scrolling () {
    for (let e of revealElements) {
        if (e.getBoundingClientRect().top < window.innerHeight) {        
            e.classList.add('reveal_active');
        }
    }
}

window.addEventListener('scroll', scrolling);