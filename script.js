let mainHeight = document.querySelector('.main').clientHeight;
const stuff = document.querySelector('.stuff');
let stuffHeight = stuff.clientHeight;
let aboutHeight = document.querySelector('.about').clientHeight;
let contactHeight = document.querySelector('.contact').clientHeight;
const stuffLineContainer = document.querySelector('.stuff__line__container');
const stuffHeader = document.querySelector('.stuff__header');
const aboutSec = document.querySelector('.about');
const aboutLineContainer = document.querySelector('.about__line__container');
const stuffContainer = document.querySelector('.stuff__container');
const stuffTech = document.querySelector('.stuff__tech');
const contactLineContainer = document.querySelector('.contact__line__container');
const textContainerItemUP = document.querySelectorAll('.text-container__item');
console.log(textContainerItemUP);

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelector('.preloader__text')
    preloader.classList.add('preloader--up');
    preloaderText.classList.add('preloader__text--up');
})

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
        for (i = 0; i < textContainerItemUP.length; i++) {
            textContainerItemUP[i].classList.remove('text-container__item--up');
        }


    } else {
        aboutSec.classList.add('about--up');
        aboutLineContainer.classList.add('about__line__container--up');

        for (i = 0; i < textContainerItemUP.length; i++) {
            textContainerItemUP[i].classList.add('text-container__item--up');
        }
    }
})
document.addEventListener('scroll', () => {
    if (scrollY > (mainHeight / 1.2)) {
        stuffHeader.classList.remove('stuff__header--up')
        stuffTech.classList.remove('stuff__tech--up')
    } else {
        stuffHeader.classList.add('stuff__header--up')
        stuffTech.classList.add('stuff__tech--up')
    }
})
document.addEventListener('scroll', () => {

    if (scrollY > stuffHeight + aboutHeight + (contactLineContainer.clientHeight / 2.1)) {

        contactLineContainer.classList.add('contact__line__container--anim')
    } else {
        contactLineContainer.classList.remove('contact__line__container--anim')
    }
})