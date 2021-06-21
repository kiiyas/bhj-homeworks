'use strict'

const interestGroups = document.querySelectorAll('div.interests > ul > li.interest > label > input');
const interests = document.querySelectorAll('li.interest > ul > li.interest');
//const form = document.querySelectorAll('div.interests');


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


//
//! для обработки вверх по дереву css селекторы подобрать точнее
/*
for (let interest of interests) {
    interest.addEventListener('change', () => {
        const parentList = interest.closest('ul.interests_active');
        const childElement = parentList.getElementsByTagName('input');  
        for (let element of childElement) {
            if (element.checked) {
                for (let interestGroup of interestGroups) {
                    interestGroup.indeterminate = true;
                }
            }
        } 
        
        

        
    });
}
*/