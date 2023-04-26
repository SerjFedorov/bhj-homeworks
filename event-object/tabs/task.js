const tabs = [...document.querySelectorAll('.tab')];// все вкладки
const tabContents = [... document.querySelectorAll('.tab__content')];//содержимое вкладок

function onClick (el) {
    el.preventDefault();
    tabs.forEach((el) =>
    el.classList.remove('tab_active')); // удалим все активные классы

const target = el.target; // положение клика
target.classList.add('tab_active'); //добавляем класс по клику

tabContents.forEach((content) => { //перебираем все содержание вкладок и удаляем классы
content.classList.remove('tab__content_active');        
});
const index = tabs.indexOf(target); //найдем индекс
tabContents[index].classList.add('tab__content_active'); //добавим класс по индексу IND = tabContents[index];
}                                                        //IND.classList.add('tab__content_active')

tabs.forEach((elem) => {
elem.addEventListener('click', onClick)}) ////обработчик события по клику для всего массива 