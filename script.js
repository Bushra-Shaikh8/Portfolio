function toggleMenu() {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        header.classList.add("scrolled");
    } else if (window.scrollY < 50) {
        header.classList.remove("scrolled");
    }
}

function changeHeaderOnScroll() {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        const nav = document.querySelector("nav");
        if (!nav.classList.contains("active")) {
            header.classList.remove("scrolled");
        }
    }
}

window.addEventListener("scroll", changeHeaderOnScroll);