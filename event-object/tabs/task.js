'use strict'

const tab = document.querySelector('.tab__navigation');
const tabList = document.querySelectorAll('.tab');

const tabContent = document.querySelector('.tab__contents')
const tabContentList = document.querySelectorAll('.tab__content');
 
tab.addEventListener('click', (event) => {
    const activeTab = tab.querySelector('.tab_active');
    toRestatus (activeTab, 'tab_active');

    const activeContentTab =  tabContent.querySelector('.tab__content_active');
    toRestatus (activeContentTab, 'tab__content_active');

    let index = Array.from(tabList).indexOf(event.target);  
    toRestatus (tabList[index], 'tab_active');
    toRestatus (tabContentList[index], 'tab__content_active');
});

function toRestatus (element, status) {
    element.classList.toggle(status);
}