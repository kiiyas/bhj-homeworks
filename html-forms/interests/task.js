'use strict'

const interestGroups = document.querySelectorAll('div.interests > ul > li.interest > label > input');
const interests = document.querySelectorAll('li.interest > ul > li.interest > label > input');

for (let interestGroup of interestGroups) {
    interestGroup.addEventListener('change', () => {
        const parentList = interestGroup.closest('li');
        const childElement = parentList.getElementsByTagName('input');
        if (interestGroup.checked) {            
            for (let element of childElement) {
                element.checked = true;
            }                
        } else {
            for (let element of childElement) {
                element.checked = false;
            }   
        }        
    });
}

for (let interest of interests) {
    interest.addEventListener('change', () => {
        const siblingsInputs = interest.closest('ul.interests_active').getElementsByTagName('input');   
        const siblingsArr = Array.from(siblingsInputs);
        const parentMainInterest = interest.closest('ul.interests_active').closest('li.interest').querySelector('input.interest__check');
        
        if (siblingsArr.every((item) => (item.cheked == true))) {
            parentMainInterest.checked = true;
            parentMainInterest.indeterminate = false;
        } else if (siblingsArr.every((item) => (item.cheked == false))) {
            parentMainInterest.checked = false;
            parentMainInterest.indeterminate = false;
        } else {
            parentMainInterest.indeterminate = true;
        }        
    });
}