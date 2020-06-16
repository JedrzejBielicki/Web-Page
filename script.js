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
window.addEventListener("scroll", () => {
    parallax(".main__line1", window.scrollY, 1.5);
    parallax(".main__line2", window.scrollY, 1.3);
    parallax(".main__line3", window.scrollY, 1.1);
})

// window.addEventListener('resize', () => {
//     let mainHeight = document.querySelector('.main').clientHeight;
//     console.log(mainHeight)
// })
let mainHeight = document.querySelector('.main').clientHeight;
const stuff = document.querySelector('.stuff');
const lineContainer = document.querySelector('.line__container')
document.addEventListener('scroll', () => {

    if (scrollY > mainHeight / 2) {
        stuff.classList.remove('stuff--up')
        lineContainer.classList.remove('line__container--up')
    } else {
        stuff.classList.add('stuff--up')
        lineContainer.classList.add('line__container--up')
    }
})