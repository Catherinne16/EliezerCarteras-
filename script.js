let currentIndex = 0;

const images = document.querySelectorAll(".carousel-images img");
const carouselImages = document.querySelector(".carousel-images");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Asegura que no se salga del rango
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Manejadores de clic para los botones
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Cambiar imagen cada 4 segundos (automático)
setInterval(showNextImage, 4000);
