const navBtn = document.querySelector('.nav__btn');
const menuCircle = document.querySelector('.circle');


navBtn.addEventListener('click', () => {
    menuCircle.classList.toggle('circle--active');
    navBtn.classList.toggle('open');
})

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}px)`;
}
document.addEventListener("scroll", () => {
    parallax(".main__line1", window.scrollY, 1.5);
    parallax(".main__line2", window.scrollY, 1.3);
    parallax(".main__line3", window.scrollY, 1.1);
})


let mainHeight = document.querySelector('.main').clientHeight;
const stuff = document.querySelector('.stuff');
let stuffHeight = stuff.clientHeight;
const stuffLineContainer = document.querySelector('.stuff__line__container');
const stuffHeader = document.querySelector('.stuff__header');
const aboutSec = document.querySelector('.about');
const aboutLineContainer = document.querySelector('.about__line__container');


document.addEventListener('scroll', () => {

    if (scrollY > mainHeight / 2 && scrollY < mainHeight * 1.5) {
        stuff.classList.remove('stuff--up')
        stuffLineContainer.classList.remove('stuff__line__container--up')

    } else {
        stuff.classList.add('stuff--up')
        stuffLineContainer.classList.add('stuff__line__container--up')

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