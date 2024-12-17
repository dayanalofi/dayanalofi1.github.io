const images = document.querySelectorAll('.image-container img');
let currentImage = 0;

// Función para mostrar la siguiente imagen
function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

// Intervalo automático de cambio de imagen
setInterval(showNextImage, 3000);
