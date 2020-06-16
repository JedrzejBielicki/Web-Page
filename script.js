const navBtn = document.querySelector('.nav__btn');
const menuCircle = document.querySelector('.circle');


navBtn.addEventListener('click', () => {
    menuCircle.classList.toggle('circle--active');
    navBtn.classList.toggle('open');
})