let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const slideNumber = document.getElementById("slideNumber");


// =========================
// TAMPILKAN SLIDE
// =========================

function showSlide(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= slides.length) {
        index = slides.length - 1;
    }

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlide = index;

    if (slideNumber) {
        slideNumber.textContent =
            `${currentSlide + 1} / ${slides.length}`;
    }
}


// =========================
// SLIDE BERIKUTNYA
// =========================

function nextSlide() {

    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }

}


// =========================
// KEMBALI KE AWAL
// =========================

function restart() {
    showSlide(0);
}


// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {

        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }

    }

});


// =========================
// SWIPE HP
// =========================

let touchStartX = 0;
let touchEndX = 0;


document.addEventListener("touchstart", function(event) {

    touchStartX =
        event.changedTouches[0].screenX;

});


document.addEventListener("touchend", function(event) {

    touchEndX =
        event.changedTouches[0].screenX;

    const jarak =
        touchEndX - touchStartX;


    if (Math.abs(jarak) < 70) {
        return;
    }


    // Geser ke kiri
    if (jarak < 0) {
        nextSlide();
    }


    // Geser ke kanan
    if (jarak > 0 && currentSlide > 0) {
        showSlide(currentSlide - 1);
    }

});


// =========================
// HATI
// =========================

function createHeart() {

    const container =
        document.querySelector(".hearts");

    if (!container) {
        return;
    }


    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";


    const bentukHati = [
        "❤️",
        "💕",
        "💗",
        "💖"
    ];


    heart.textContent =
        bentukHati[
            Math.floor(
                Math.random() *
                bentukHati.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (14 + Math.random() * 12) + "px";


    heart.style.animationDuration =
        (7 + Math.random() * 4) + "s";


    container.appendChild(heart);


    setTimeout(function() {

        if (heart) {
            heart.remove();
        }

    }, 11000);

}


// =========================
// HATI LEBIH RINGAN
// =========================

// Hanya satu hati setiap 2 detik
setInterval(createHeart, 2000);


// Hanya buat 3 hati pertama
setTimeout(createHeart, 500);
setTimeout(createHeart, 1200);
setTimeout(createHeart, 1900);


// =========================
// MULAI DARI SLIDE 1
// =========================

showSlide(0);