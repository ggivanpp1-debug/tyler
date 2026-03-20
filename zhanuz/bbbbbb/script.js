// Простая плавная прокрутка
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Пример обработки кнопки
document.querySelectorAll(".primary").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Download started (demo version)");
    });
});
