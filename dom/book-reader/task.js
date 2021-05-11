'use strict'

const bookContent = document.querySelector('div.book__content');

// fontSize part
const fontSizeSelector = document.querySelectorAll('a.font-size');

for (let i = 0; i < fontSizeSelector.length; i++) {
    fontSizeSelector[i].addEventListener('click', fontSizeChange);    
}

function fontSizeChange (event) {
    event.preventDefault();
    
    if (this.classList.contains('font-size_small')) {       
        activeClassRemove(fontSizeSelector, 'font-size_active'); 
        this.classList.add('font-size_active');
        bookContent.classList.remove('book_fs-big');
        bookContent.classList.add('book_fs-small');
    } else if (this.classList.contains('font-size_big')) {        
        activeClassRemove(fontSizeSelector, 'font-size_active'); 
        this.classList.add('font-size_active');
        bookContent.classList.remove('book_fs-small');
        bookContent.classList.add('book_fs-big');
    } else {        
        activeClassRemove(fontSizeSelector, 'font-size_active'); 
        this.classList.add('font-size_active');
        bookContent.classList.remove('book_fs-small');
        bookContent.classList.remove('book_fs-big');
    }
}



// textColor part
const textColorSelector = document.querySelectorAll('div.book__control_color > a.color');

for (let i = 0; i < textColorSelector.length; i++) {
    textColorSelector[i].addEventListener('click', textColorChange);    
}

function textColorChange (event) {
    event.preventDefault();
    
    if (this.classList.contains('text_color_gray')) {        
        activeClassRemove(textColorSelector, 'color_active');
        this.classList.add('color_active');          
        bookContent.classList.remove('book_color-whitesmoke');
        bookContent.classList.add('book_color-gray');
    } else if (this.classList.contains('text_color_whitesmoke')) {        
        activeClassRemove(textColorSelector, 'color_active');
        this.classList.add('color_active');
        bookContent.classList.remove('book_color-gray');
        bookContent.classList.add('book_color-whitesmoke');
    } else {        
        activeClassRemove(textColorSelector, 'color_active');
        this.classList.add('color_active');
        bookContent.classList.remove('book_color-whitesmoke');
        bookContent.classList.remove('book_color-gray');
    }
}



// backgroundColor part
const backgroundColorSelector = document.querySelectorAll('div.book__control_background > a.color');

for (let i = 0; i < backgroundColorSelector.length; i++) {
    backgroundColorSelector[i].addEventListener('click', backgroundChange);
}

function backgroundChange (event) {
    event.preventDefault();

    if (this.classList.contains('bg_color_gray')) {        
        activeClassRemove(backgroundColorSelector, 'color_active'); 
        this.classList.add('color_active');         
        bookContent.classList.remove('book_bg-black');
        bookContent.classList.add('book_bg-gray');
    } else if (this.classList.contains('bg_color_black')) {        
        activeClassRemove(backgroundColorSelector, 'color_active'); 
        this.classList.add('color_active');
        bookContent.classList.remove('book_bg-grey');
        bookContent.classList.add('book_bg-black');
    } else {
        activeClassRemove(backgroundColorSelector, 'color_active'); 
        this.classList.add('color_active');
        bookContent.classList.remove('book_bg-black');
        bookContent.classList.remove('book_bg-gray');
    }    
}


function activeClassRemove(selectorName, className) {
    for (let i = 0; i < selectorName.length; i++) {
        selectorName[i].classList.remove(className);
    }    
}