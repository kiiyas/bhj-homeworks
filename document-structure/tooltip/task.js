'use strict'

const hasTooltip = document.querySelectorAll('a.has-tooltip');
//const tooltipDiv = document.querySelector('div.tooltip'); // если присваивать, всегда фолсит в клике

//подсказка удалится при клике на другую подсказу и на любое свободное место:
function hideActiveTips() {
    const active = document.getElementsByClassName('tooltip_active');
    if (active[0]) {
         active[0].classList.remove('tooltip_active');
     }
}

function createTip(item) {
    const tooltip = document.createElement('div');    
    tooltip.innerHTML = '<div class="tooltip tooltip_active">' + item.title + '</div>';
    tooltip.firstChild.style.cssText = `position: absolute; left: ${item.getBoundingClientRect().left}px; top: ${item.getBoundingClientRect().top + 20}px`;
    
    return tooltip.firstChild;
}

window.addEventListener('click', (e) => {
    hideActiveTips();
    for (let element of hasTooltip) {
        e.preventDefault();

        if (e.target == element && element.nextSibling == document.querySelector('div.tooltip')) { 
            document.querySelector('div.tooltip').remove();
        } else if (e.target == element) {
            const tooltip = createTip(element);
            element.insertAdjacentElement('afterEnd', tooltip);
        }       
    }
})