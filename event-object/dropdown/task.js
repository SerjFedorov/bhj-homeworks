
const menu = document.querySelector('.dropdown');//меню
const list = document.querySelector('.dropdown__list');//выпадающие меню
const link = document.querySelectorAll('.dropdown__link');//все ссылки

const value = document.querySelector('.dropdown__value');//текущие значение меню

menu.addEventListener('click', changeDrop); 

function changeDrop(drop) {
    let target = drop.target; // нажатие на элемент - таргет
    list.classList.toggle('dropdown__list_active');//показываем убираем выпадающие меню
    // if (target.classList.contains('dropdown__value')) {
    //     list.classList.add('dropdown__list_active')
    // } или toggle
    if (target.classList.contains('dropdown__link')) {//если таргет содержит класс то
        value.textContent = target.textContent;//меняем значение меню
    //     list.classList.remove('dropdown__list_active')
    }
    drop.preventDefault();//запрет перехода по ссылке
};