
document.addEventListener("DOMContentLoaded", function () {
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    /* desktopMenu.classList.toggle('inactive'); */
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
/*     mobileMenu.classList.toggle('inactive'); */

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }/* la condicion en cuestion se basa en que si el aside no está cerrado, entonces se le añade la clase inactive para cerrarlo */
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } /* la condicion en cuestion se basa en que si el mobileMenu no está cerrado, entonces se le añade la clase inactive para cerrarlo */

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    } /* aca tambinen se pone un condicional por si está abierto el menudesktop para cerrarlo automaticamente y no que simplemente quede solapado por el productDetail */


    aside.classList.toggle('inactive');

}
})

