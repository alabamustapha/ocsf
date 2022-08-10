const navMobile = document.querySelector('.nav__mobile');
const list = document.querySelector('.nav__list');

navMobile.addEventListener('click', function(){
    list.classList.toggle('active');
})