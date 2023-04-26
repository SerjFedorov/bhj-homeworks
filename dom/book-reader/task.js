const changeSize = document.querySelector('.book');// ищем текст книги
const sizes = [... document.querySelectorAll('.font-size')];// ищем все font size

function onClick(el) {
    el.preventDefault(); //останавливаем переход пос ссылке
        sizes.forEach((el) => { //перебериаем все классы и 
        el.classList.remove('font-size_active');// удаляем все актив классы
    }
)

const target = el.target;// устанавливаем таргет мыши
target.classList.add('font-size_active');//добавляем активный класс лист выбранному таргету

    if (target.classList.contains('font-size_small')) { //логика добавления и удаления классов 
    changeSize.classList.add('book_fs-small');
    changeSize.classList.remove('book_fs-big');
    } else if (target.classList.contains('font-size_big')) {
    changeSize.classList.add('book_fs-big')
    changeSize.classList.remove('book_fs-small');
    } else if (target.classList.contains('font-size_active')) {
    changeSize.classList.remove('book_fs-big', 'book_fs-small');
    }
}
    
sizes.forEach((size) => {
size.addEventListener('click', onClick); //обработчик события по клику для всего массива кнопок вызывет функцию onClick
});

// доп

const changeColores = document.querySelector('.book'); // создадим для цветов
const colores = [...document.querySelectorAll('.color')];//найдем все colors тк и фон и текст имеют
// color можно использовать 1 функцию

function clickTextColor(e){
    e.preventDefault(); //останавливаем переход пос ссылке
        colores.forEach((e) => { //перебериаем все классы и 
        e.classList.remove('color_active');// удаляем все актив классы
    })
const otherTarget = e.target;
otherTarget.classList.add('color_active');
//цвет
if (otherTarget.classList.contains('text_color_black')) {
    changeColores.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
    changeColores.classList.add('book_color-black');
} else if (otherTarget.classList.contains('text_color_gray')) {
    changeColores.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
    changeColores.classList.add('book_color-gray');
} else if (otherTarget.classList.contains('text_color_whitesmoke')){
    changeColores.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
    changeColores.classList.add('book_color-whitesmoke');
} 
//фон
else if (otherTarget.classList.contains('bg_color_black')){
    changeColores.classList.remove('book_bg-gray', 'book_bg-white', 'book_bg-black');
    changeColores.classList.add('book_bg-black');
} else if (otherTarget.classList.contains('bg_color_gray')){
    changeColores.classList.remove('book_bg-gray', 'book_bg-white', 'book_bg-black');
    changeColores.classList.add('book_bg-gray');
} else if (otherTarget.classList.contains('bg_color_white')){
    changeColores.classList.remove('book_bg-gray', 'book_bg-white', 'book_bg-black');
    changeColores.classList.add('book_bg-white');
}}

colores.forEach((color) => {// обработчик для цвета текста и фона
    color.addEventListener('click', clickTextColor);
})
