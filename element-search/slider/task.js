"use strict"
const slide = document.querySelectorAll('.slider__item'); //находим все слайды slider_item
const totalSlide = slide.length;//устанавливаем максимальное значение слайдов

let currectSlide = 0;//устанавливаем текущий слайд
slide[currectSlide].classList.add('slider__item_active');//активируем текущий слайд

const arrowPrev = document.querySelector('.slider__arrow_prev');//находим стрелочку назад
const arrowNext = document.querySelector('.slider__arrow_next');//находим стрелочку вперед

arrowPrev.addEventListener('click', prevSlide);// обработчики событий по клику для стрелок
arrowNext.addEventListener('click', nextSlide);

function prevSlide(){
    slide[currectSlide].classList.remove('slider__item_active');// удаляем активный класс с текущего слайда 
    currectSlide--; // уменьшаем и переприсваиваем
        if (currectSlide < 0){ // если мы на нулевом слайде то перейдем на последний слайд -1
        currectSlide = totalSlide - 1;
        }    
    slide[currectSlide].classList.add('slider__item_active');// добавим активный класс текущему слайду
}

function nextSlide(){
    slide[currectSlide].classList.remove('slider__item_active');// удаляем активный класс с текущего слайда 
    currectSlide++;//увелтчиваем переприсваиваем
        if (currectSlide >= totalSlide){ // если мы на последнем слайде, то перейдем на нулевой
        currectSlide = 0;
        }    
    slide[currectSlide].classList.add('slider__item_active');// добавим активный класс текущему слайду
}
