const cases = [... document.querySelectorAll('.rotator__case')];// поиск всех case
const totalCases = cases.length;
let currectCases = cases.findIndex(element => element.classList.contains('rotator__case_active'));//поиск текузего активного case
let intervalId = setInterval ( rotateCase, 1000);

function rotateCase(){
    cases[currectCases].classList.remove('rotator__case_active');//удаляем текущий
    currectCases++;
    if (currectCases >= totalCases) {//начинаем с начала
        currectCases = 0;
    }
    cases[currectCases].classList.add('rotator__case_active');// показываем следующий
//доп
    const speed = cases[currectCases].getAttribute('data-speed');//получаем значение скорости и цвети
    const color = cases[currectCases].getAttribute('data-color');
    cases[currectCases].style.color = color; // устанавливаем значение цвета на текущий
    
    clearInterval(intervalId);//сбрасываем интервал чтобы он начинался занового
    intervalId = setInterval(rotateCase, speed);//уст интервал с нужным значением скорости

}
// setInterval(rotateCase, 1000);


