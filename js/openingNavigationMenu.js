var openMenu = document.querySelector(".open-menu");
var menuMobile = document.querySelector(".menu-mobile");
var closeMenu = document.querySelector(".close-menu");
var img = document.querySelector(".img-main")

let width = window.innerWidth;

if (width <= 1000) {
    menuMobile.classList.add("hidden");
    img.src = "./img/image-hero-mobile.png";
} else if (width > 1000) {
    menuMobile.classList.remove("hidden");
    img.src = "./img/image-hero-desktop.png";
}

document.body.onresize = function() {

    if (document.body.clientWidth <= 981) {

        menuMobile.style.display = "none"
        img.src = "./img/image-hero-mobile.png";
        

    } else if (document.body.clientWidth > 981) {

        menuMobile.style.display = "inline"
        img.src = "./img/image-hero-desktop.png";

    }

 }

openMenu.addEventListener("click", function() {
    menuMobile.style.display = "inline"
    closeMenu.classList.remove("hidden");
})

closeMenu.addEventListener("click", function() {
    menuMobile.style.display = "none"
    this.classList.add("hidden");
})