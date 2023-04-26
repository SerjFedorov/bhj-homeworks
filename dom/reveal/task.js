const reveals =[...document.querySelectorAll('.reveal')];// ищем все все онка

function isVisible(el) {
    const elRect= el.getBoundingClientRect();// находим координаты
    const { top, bottom } = elRect;//записываем координаты
    if (bottom > 0 && top > window.innerHeight ) { // если окно не в области видимости возвращаем false
        return false;
    }//если в зоне видимости добавляем активный класс
    el.classList.add('reveal_active');
    return true;           
}

document.addEventListener('scroll', rectVis );//устанавливаем обработчик события на прокрукрутку

function rectVis() { //
    reveals.forEach(function(reveal) {// перебираем каждый элемент из массива reveals и вызываем текущий(reveal)  
        isVisible(reveal);//в функции isVisible(reveal) для каждого элемента
    }
)};







