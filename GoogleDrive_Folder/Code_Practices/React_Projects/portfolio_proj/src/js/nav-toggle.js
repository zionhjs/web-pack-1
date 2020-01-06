(function () {
    window.onload = function () {
        var nav_icon = document.getElementById('nav-icon');
        nav_icon.addEventListener('click', navClickHandler(e, nav_icon), false);
    }

    function navClickHandler(e, obj) {
        console.log('1111');
        obj.children[0].classList.toggle('nav-line-actived-1');
        obj.children[2].classList.toggle('nav-line-actived-2');
        obj.children[2].classList.toggle('nav-line-actived-3');
    }
})()

