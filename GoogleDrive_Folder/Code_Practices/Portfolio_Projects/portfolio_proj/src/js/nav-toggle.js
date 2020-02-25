(function () {
    window.onload = function () {
        var nav_icon = document.getElementById('nav-icon');
        nav_icon.addEventListener('click',
            function () {
                console.log('1111');
                var nav_line = document.getElementsById('nav_line');
                nav_line.classList.toggle('nav-line-actived-1');
                nav_line.classList.toggle('nav-line');

                var cards = document.getElementsById('nav-card');
                cards.classList.toggle('card-child-1');
            },
            true);
    }
})()

function navClickHandler() {
    console.log('1111');
    var nav_icon = document.getElementById('nav-icon');
    nav_icon.children[0].classList.toggle('nav-line-actived-1');
    nav_icon.children[1].classList.toggle('nav-line-actived-2');
    nav_icon.children[2].classList.toggle('nav-line-actived-3');
    nav_icon.children[0].classList.toggle('nav-line');
    nav_icon.children[1].classList.toggle('nav-line');
    nav_icon.children[2].classList.toggle('nav-line');

    var cards = document.getElementsByClassName('nav-card');
    cards[0].classList.toggle('card-child-1');
    cards[1].classList.toggle('card-child-2');
    cards[2].classList.toggle('card-child-3');
    cards[3].classList.toggle('card-child-4');
    cards[4].classList.toggle('card-child-5');

    var nav_menu = document.getElementsByClassName('nav-menu');
    nav_menu.classList.toggle('bg');
}

