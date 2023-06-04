// Obtener el carrusel y las imágenes DOM
const carousel = document.querySelector('.carousel');
const carouselImages = Array.from(document.querySelectorAll('.carousel img'));

// Definir el índice de la imagen actual
let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Función para avanzar al siguiente índice del carrusel
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  showImage(currentIndex);
}

// Mostrar la primera imagen del carrusel al cargar la página
showImage(currentIndex);

// Rotar el carrusel cada 3 segundos
setInterval(nextImage, 3000);
