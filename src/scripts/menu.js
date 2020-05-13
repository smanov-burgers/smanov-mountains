document.addEventListener("DOMContentLoaded", function () {
    initCloseOverlay();
});

function initCloseOverlay() {
    const burgerBtn = document.querySelector(".header__hamburger"); 
    const menuElem = document.querySelector(".header__menu");
    const closeElement = menuElem.querySelector(".header__menu-close");
    const socialsWrapper = document.querySelector(".header__links");
    const socials = document.querySelector(".header__links .socials");

    burgerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        
        menuElem.querySelector(".nav").classList.toggle("nav--vertical");
        menuElem.classList.add("header__menu--active");
        menuElem.appendChild(socials);

        closeElement.classList.toggle("header__menu-close--visible")
    });

    closeElement.addEventListener("click", function (e) {
        e.preventDefault();
        menuElem.querySelector(".nav").classList.toggle("nav--vertical");
        menuElem.classList.remove("header__menu--active");
        closeElement.classList.toggle("header__menu-close--visible")
        socialsWrapper.appendChild(socials);
    });

    menuElem.addEventListener("click", function (e) {
        if (e.target === menuElem) {
            closeElement.click();
        }
    });
}