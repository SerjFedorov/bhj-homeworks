const input = document.querySelector('#editor');

function msg() {
    let text = input.value;
    localStorage.setItem('inputValue', text);
}

function saveMsg() {
    let localText = localStorage.getItem('inputValue');
    if (localText) {
        input.value = localText;
    }
}

input.addEventListener('input', msg);
window.addEventListener('load', saveMsg);

const btn = document.querySelector('.btn');

function delLocal() {
    input.value = '';
    localStorage.clear();
    
}

btn.addEventListener('click', delLocal);