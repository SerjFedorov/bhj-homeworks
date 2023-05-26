const showWindow = document.querySelector('#subscribe-modal'); 
const closeWindow = document.querySelector('.modal__close');

function checkCookie() {
  const cookieValue = document.cookie.split('; ').find(key => key.startsWith('popupClosed='));
  if (cookieValue === 'popupClosed=true') {    
    showWindow.classList.remove('modal_active');
  } else {
    showWindow.classList.add('modal_active');
  }
}

closeWindow.addEventListener('click', () => {
  showWindow.classList.remove('modal_active');
  document.cookie = 'popupClosed=true';
});

window.addEventListener('load', checkCookie);







