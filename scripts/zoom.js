const images = document.querySelectorAll(".zoomable");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-item");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
        document.body.classList.add("no-scroll");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.classList.remove("no-scroll");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("lightbox").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});