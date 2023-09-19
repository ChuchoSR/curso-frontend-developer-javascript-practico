const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')//usando el metodo classList.toggle pone o quita la clase inactive

}