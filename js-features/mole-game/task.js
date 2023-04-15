"use strict"
const win = document.getElementById('dead');
const lose = document.getElementById('lost');

let clickWin = 0;
let clickLose = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
const hole = getHole(i);
hole.onclick = () => {
    if (hole.className.includes('hole_has-mole')) {
        clickWin++;
        win.textContent = clickWin;
        if (clickWin === 3) {
            alert('WIN')
        }
    } else {
        clickLose++;
        lose.textContent = clickLose;
        if (clickLose === 10) {
            alert('lose')           
        }
    }
}}
