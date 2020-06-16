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
window.addEventListener("scroll", function () {
    parallax(".main__line1", window.scrollY, 1.5);
    parallax(".main__line2", window.scrollY, 1.3);
    parallax(".main__line3", window.scrollY, 1.1);

})