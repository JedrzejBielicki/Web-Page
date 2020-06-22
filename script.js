let mainHeight = document.querySelector('.main').clientHeight;
const stuff = document.querySelector('.stuff');
let stuffHeight = stuff.clientHeight;
let aboutHeight = document.querySelector('.about').clientHeight;
let contactHeight = document.querySelector('.contact').clientHeight;
const stuffLineContainer = document.querySelector('.stuff__line__container');
const stuffHeader = document.querySelector('.stuff__header');
const aboutSec = document.querySelector('.about');
const aboutLineContainer = document.querySelector('.about__line__container');
const navigationNumbers = document.querySelectorAll('.navigation__item');
const stuffContainer = document.querySelector('.stuff__container');


document.addEventListener('scroll', () => {

    if (scrollY > mainHeight / 2 && scrollY < mainHeight * 1.5) {
        stuff.classList.remove('stuff--up')
        stuffLineContainer.classList.remove('stuff__line__container--up')
        stuffContainer.classList.remove('stuff__container--up');
    } else {
        stuff.classList.add('stuff--up')
        stuffLineContainer.classList.add('stuff__line__container--up')
        stuffContainer.classList.add('stuff__container--up');
    }
})
document.addEventListener('scroll', () => {
    if (scrollY > mainHeight + (stuffHeight / 2)) {
        aboutSec.classList.remove('about--up');
        aboutLineContainer.classList.remove('about__line__container--up');

    } else {
        aboutSec.classList.add('about--up');
        aboutLineContainer.classList.add('about__line__container--up');

    }
})
document.addEventListener('scroll', () => {
    if (scrollY > (mainHeight / 1.2)) {
        stuffHeader.classList.remove('stuff__header--up')
    } else {
        stuffHeader.classList.add('stuff__header--up')
    }
})