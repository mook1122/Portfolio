const menuItems = document.querySelectorAll('.header-menu li');
const rightPageItems = document.querySelectorAll('.right-page-item');


menuItems.forEach(item => {
    item.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');

        menuItems.forEach(menuItem => {
            menuItem.classList.remove('test');
        });

        item.classList.add('test');

        rightPageItems.forEach(pageItem => {
            if (pageItem.id === targetId) {
                pageItem.classList.add('active');
            } else {
                pageItem.classList.remove('active');
            }
        });
    });
});


const mobileMenuIcon = document.querySelector('.mobile-header-menu');
const closeMenu = document.querySelector('.close-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-list li');

mobileMenuIcon.addEventListener('click', function () {
    mobileMenu.classList.add('open');
});

closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
});


mobileMenuItems.forEach(item => {
    item.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');

        mobileMenu.classList.remove('open');

        rightPageItems.forEach(pageItem => {
            if (pageItem.id === targetId) {
                pageItem.classList.add('active');
            } else {
                pageItem.classList.remove('active');
            }
        });
    });
});



document.getElementById('move-about').addEventListener('click', () => {

    rightPageItems.forEach(pageItem => {
        if (pageItem.id === 'about') {
            pageItem.classList.add('active');
        } else {
            pageItem.classList.remove('active');
        }
    });

})