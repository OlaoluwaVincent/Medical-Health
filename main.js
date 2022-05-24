const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavbtn = document.querySelector('#close__nav-btn');
const navItems = document.querySelector('#nav__items');

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavbtn.style.display = 'inline-block';
});

closeNavbtn.addEventListener('click', () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavbtn.style.display = 'none';
});

if (window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach((navItem) => {
        navItem.addEventListener('click', () => {
            navItems.style.display = 'none';
            openNavBtn.style.display = 'inline-block';
            closeNavbtn.style.display = 'none';
        });
    });
}

// NAV
window.addEventListener('scroll', () => {
    document
        .querySelector('nav')
        .classList.toggle('window-scroll', window.scrollY > 0);
});

// ////////////// SWIPER JS
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Responsive BreakPoints
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});