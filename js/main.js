const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navButton.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();
});

window.addEventListener('click', function() {
    if (document.body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();
})

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navButton.classList.toggle('nav-button-close');
    document.body.classList.toggle('no-scroll');
}