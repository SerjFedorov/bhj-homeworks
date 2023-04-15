const element = document.getElementById('timer');

let counter = setInterval( () => {
    let start = element.textContent; // textContent получает содержимое всех элементов, включая <script> и <style>, тогда как innerText этого не делает.
    //innerText умеет считывать стили и не возвращает содержимое скрытых элементов, тогда как textContent это делает.
    //Метод innerText позволяет получить CSS, а textContent — нет.
    --start;
    element.textContent = start;   
    if (start === 0) {
        alert('Вы победили в конкурсе!'); 
        clearInterval(counter);            
    }         
}, 1000);



const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hours = document.getElementById('hours');

let counterTimer = setInterval( () => {
    let startTimer = sec.textContent;
    startTimer--;  
    sec.textContent = startTimer;
    if (hours.textContent == 0 && min.textContent == 0 && sec.textContent == 0) {
        alert('Время вышло!'); 
        clearInterval(counterTimer);
        counterTimer = null;        
    }      
    if (startTimer === 0 ){
        sec.textContent = 59;
        min.textContent = min.textContent - 1; 
        if (min.textContent === 0) {
            min.textContent = 59;
            hours.textContent = hours.textContent -1;
            if (hours.textContent < 10 & hours.textContent >= 0) {
                hours.textContent = '0' + hours.textContent;    
                }                  
            }           
        if (min.textContent < 10 & min.textContent > 0) {
            min.textContent = '0' + min.textContent;    
        }         
    }           
    if (startTimer < 10 & startTimer > 0) {
        sec.textContent = '0' + startTimer;    
    }    
}, 1000);


