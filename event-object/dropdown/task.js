const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownList.classList.add('dropdown__list_active');
});

for (let item of dropdownItems) {
  item.addEventListener('click', (event) => {
    event.preventDefault();    
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  })
}