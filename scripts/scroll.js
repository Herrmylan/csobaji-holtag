const navbar = document.querySelector(".custom-navbar");
const menu = document.querySelector(".navbar-collapse");
const bsCollapse = new bootstrap.Collapse(menu, {
    toggle: false
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        menu.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        menu.classList.remove("scrolled");
    }
    if (menu.classList.contains("show")) {
        bsCollapse.hide();
    }
});
