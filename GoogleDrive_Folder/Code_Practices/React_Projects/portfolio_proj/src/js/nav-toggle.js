(function () {
    window.onload = function () {
        var nav_icon = document.getElementById('nav-icon');
        nav_icon.addEventListener('click', navClickHandler(e, nav_icon), false);
    }
})()

function navClickHandler(e, obj) {
    console.log('1111');
    obj.children[0].classList.toggle('nav-line-actived-1');
    obj.children[1].classList.toggle('nav-line-actived-2');
    obj.children[2].classList.toggle('nav-line-actived-3');
    obj.children[0].classList.toggle('nav-line');
    obj.children[1].classList.toggle('nav-line');
    obj.children[2].classList.toggle('nav-line');

    var card = document.getElementsByClassName('nav-card');
    card[0].classList.toggle('card-child-1');
    card[1].classList.toggle('card-child-2');
    card[2].classList.toggle('card-child-3');
    card[3].classList.toggle('card-child-4');
    card[4].classList.toggle('card-child-5');
}

