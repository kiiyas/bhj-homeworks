'use strict'

const inputs = document.querySelectorAll('input');

for (let input of inputs) {
    input.addEventListener('change', () => {
        const parent = input.closest('li');
        const childrens = parent.querySelectorAll('input');

        //любой чекнутый инпут - чекает всех своих детей        
        if (input.checked) {            
            for (let child of childrens) {
                child.checked = true;
            }                
        } else {
            for (let child of childrens) {
                child.checked = false;
            }   
        } 
        
        //если сделать Array.from:
        //input.checked == true ? childrens.forEach(e => e.checked = true) 
        //: childrens.forEach(e => e.checked = false);        


        const groupParent = input.closest('ul.interests_active');
        const generalInterestParent = groupParent.closest('.interest');
        const generalInterest = generalInterestParent.querySelector('input');
        const siblings = Array.from(groupParent.querySelectorAll('input'));

        if (siblings.every(e => e.checked == true)) {
            generalInterest.checked = true;
            generalInterest.indeterminate = false;            
        } else if (siblings.every(e => e.checked == false)) {
            generalInterest.checked = false;
            generalInterest.indeterminate = false;            
        } else {
            generalInterest.indeterminate = true;
        }
    })
}

//комент преподавателя:
//рекурсия это инструмент, который можно использовать в этой задаче.
//С ним удобнее, так как мы еще и оптимизируем, разбивая на функции.
//Я вот рекомендую обычно сложный вариант задачи делать так:
//разбивать на 2 функции, одна проверяет вверх по дереву, 2ая вниз
//И рекурсию