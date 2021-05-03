'use strict'

const mainMenuItems = document.querySelectorAll('.menu__link');

for (let i = 0; i < mainMenuItems.length; i++ ) {
    let haveDropMenu = mainMenuItems[i].closest('.menu__item').querySelector('ul.menu_sub');
    if(haveDropMenu) { 
        mainMenuItems[i].addEventListener('click', function (event) {
        event.preventDefault();

        const dropMenuActive = document.querySelector('.menu_active');
            
        if (haveDropMenu.classList.contains('menu_active')) {
                haveDropMenu.classList.remove('menu_active')
            } else if (dropMenuActive) {
                dropMenuActive.classList.remove('menu_active');
                haveDropMenu.classList.add('menu_active');
            } else {
                haveDropMenu.classList.add('menu_active')
            };            
            })
    }
}

/*
const mainMenuItems = document.getElementsByClassName('menu__link');

let mainMenuLength = mainMenuItems.length;
for (let i = 0; i < mainMenuLength; i++) {    
    
    const dropMenu = mainMenuItems[i].closest('ul.menu_sub');    

    if (dropMenu) {
        mainMenuItems[i - 1].onclick = function() {
            if (document.querySelector('.menu_active')) {
                document.querySelector('.menu_active').classList.remove('menu_active');            
                }                      
            dropMenu.classList.add('menu_active');
            return false;
        }        
    };         
}
*/