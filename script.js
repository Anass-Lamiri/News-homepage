const container = document.querySelector('.container');
const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const navBarMenu = document.querySelector('.nav_bar-menu');



closeMenu.addEventListener('click', () => {
    container.removeAttribute("id", "overlay");
    openMenu.setAttribute("id", "active");
    closeMenu.setAttribute("id", "disabled");
    closeMenu.classList.toggle('menu_overlay');
})

openMenu.addEventListener('click', () => {
    container.setAttribute("id", "overlay");
    closeMenu.setAttribute("id", "active");
    openMenu.setAttribute("id", "disabled");
    closeMenu.classList.toggle('menu_overlay');
})