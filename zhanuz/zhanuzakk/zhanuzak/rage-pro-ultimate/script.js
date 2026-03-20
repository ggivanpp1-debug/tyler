// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements); // запускаем при загрузке

// Cursor glow
const cursor = document.querySelector(".cursor");

// Hero parallax
const heroBg = document.querySelector(".hero-bg");

document.addEventListener("mousemove", e => {
    // Cursor
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Hero parallax
    let x = (e.clientX / window.innerWidth - 0.5) * 30;
    let y = (e.clientY / window.innerHeight - 0.5) * 30;
    heroBg.style.transform = `translate(${x}px, ${y}px)`;
});
