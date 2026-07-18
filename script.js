function join() {
    window.open(
        "https://whatsapp.com/channel/0029VbBQLXQA89MaQLXx0M3D",
        "_blank"
    ).focus();
}

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const navLinks = nav.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});