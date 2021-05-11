'use strict'

const stringsToRotate = document.querySelectorAll('.rotator__case');
let i = 0;

function stringChange () {    
    for (let rotateCase of stringsToRotate) {
        if (rotateCase.classList.contains('rotator__case_active')) {
            rotateCase.classList.remove('rotator__case_active');
        }
    }

    stringsToRotate[i].classList.add('rotator__case_active');
    (i == stringsToRotate.length - 1) ? i = 0 : i++;
};

setInterval(stringChange, 1000);