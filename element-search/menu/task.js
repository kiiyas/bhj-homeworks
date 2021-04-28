'use strict'

const mainMenuItems = document.getElementsByClassName('menu__link');
//const menuActive = document.querySelector('.menu_active');
//если присваивать, то перестает работать переключатель в строке 14-15 - почему?

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
