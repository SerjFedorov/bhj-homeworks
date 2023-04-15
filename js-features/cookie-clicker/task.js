const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clickCount = 0;
let changeImg = true;

image.onclick = function () { 
    clickCount++;
    counter.textContent = clickCount;
    if (changeImg) {
        image.width = 500;
        changeImg = false;        
    } else {
        image.width = 200;
        changeImg = true;       
    }    
}







