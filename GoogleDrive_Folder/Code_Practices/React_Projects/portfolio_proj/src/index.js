var nav_icon = document.getElementById('nav-icon')

nav_icon.addEventListener('click', navClickHandler(nav_icon), false)

function navClickHandler(event, obj) {
    obj.children[0].classList.toggle('nav-line-actived-1');
    obj.children[2].classList.toggle('nav-line-actived-3')
}

