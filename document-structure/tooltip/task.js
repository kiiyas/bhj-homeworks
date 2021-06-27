'use strict';

const hasTooltip = document.getElementsByClassName('has-tooltip');

for (let item of hasTooltip) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = item.title;
    
    tooltip.style.cssText = `position: absolute; left: ${item.getBoundingClientRect().left}px; top: ${item.getBoundingClientRect().top + 20}px`;
    item.append(tooltip);

    item.addEventListener('click', (e) => {
        e.preventDefault();
        const active = document.getElementsByClassName('tooltip_active')[0];
        if (active) {
            active.classList.remove('tooltip_active');
        }       

        tooltip.classList.add('tooltip_active');        
    });
}