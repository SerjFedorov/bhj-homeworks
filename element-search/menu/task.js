"use strict"
const menuLinks = [...document.querySelectorAll('.menu__link')]; // выбираем все элементы с классом menu__link
const onClick = function(e) {
    const link = e.target; // <a>   e.target возвращает элемент, на котором было произведено событие.
    const item = link.closest('.menu__item');// li ближайши родитель с menu__item
    const menu = item.querySelector('.menu_sub');// Ul
if (!menu) {
    return;
}

menu.classList.toggle('menu_active');// используется для добавления или удаления класса menu_active у элемента menu. Если класс отсутствует, он будет добавлен, и наоборот, если класс уже есть, то он будет удален.

const mainMenu = item.closest('.menu_main'); //нахождение ближайшего родительского элемента с классом .menu_main, который является главным меню

const restMenus = [...mainMenu.querySelectorAll('.menu')] //выбираем все элементы с классом menu
    .filter(m => m !== menu) // фильтруем список, чтобы исключить элемент, который соответствует открытому меню
    .forEach(m => m.classList.remove('menu_active'));// удаляем класс у всех кроме октрытого меню
    e.preventDefault();// запрещаем переход по ссылке главного меню 
}

menuLinks.forEach(link => link.addEventListener('click', onClick));// обработчик события по клику для  menu__link