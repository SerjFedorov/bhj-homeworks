const form = document.querySelector('form');
const welcome = document.querySelector('.welcome');
const userId = document.querySelector('#user_id');
const signin = document.querySelector('.signin');

function userGreetings() {  
  const user_id = localStorage.getItem('user_id');  
  if (user_id) {
    signin.classList.remove('signin_active');
    welcome.textContent = `Добро пожаловать, пользователь #` + `${user_id}`;
    welcome.classList.add('welcome_active');
  } else {
    welcome.classList.remove('welcome_active');
  }
};
window.addEventListener('load' , userGreetings);

form.addEventListener('submit', (event) => {
  event.preventDefault();
const login = form.querySelector('[name="login"]').value;
const password = form.querySelector('[name="password"]').value;

fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify({ login, password }),
    }
  )
  .then(response => response.json())
  .then((response) => { 
    if (response.success === true) {signin.classList.remove('signin_active');
    localStorage.setItem('user_id', response.user_id);
    welcome.textContent = `Добро пожаловать, пользователь #` + `${response.user_id}`;
    welcome.classList.add('welcome_active');
    } else {
      alert('Неверный логин/пароль');} 
      }
    )
  }
); 