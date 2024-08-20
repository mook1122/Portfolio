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


document.getElementById('move-about').addEventListener('click', () => {


    console.log(123);
    
    rightPageItems.forEach(pageItem => {
        if (pageItem.id === 'about') {
            pageItem.classList.add('active');
        } else {
            pageItem.classList.remove('active');
        }
    });

})