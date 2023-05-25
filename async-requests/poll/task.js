let xhr = new XMLHttpRequest();

function show() {
    alert ('«Спасибо, ваш голос засчитан!»');
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200){
        const pollTitleDiv = document.querySelector('.poll__title');
        const pollAnswersPos = document.querySelector('.poll__answers');        

        const response = JSON.parse(xhr.responseText);
        const pollTitle = response.data.title;
        pollTitleDiv.innerText = pollTitle;
    
        const pollAnswers = response.data.answers; 

            pollAnswers.forEach((answer) => {
                const answerDiv = document.createElement('button'); 
                answerDiv.innerText = answer ;
                pollAnswersPos.appendChild(answerDiv);
                answerDiv.addEventListener('click', show);
                }
            ) 
        }
    }
)
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send();



