// Obtengo el carrusel y las imágenes DOM
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
//-------------------------------------------------No me funciono :(
// Codigo del intento del carrito de compras
// Obtengo referencia a los botones de "Agregar al Carrito"

let addToCartButtons = document.querySelectorAll('.add-to-cart');

// Contador del carrito
let cartCount = 0;
const cartElement = document.getElementById('cart');

// Agregar evento de clic a cada botón
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartElement.textContent = `Carrito: ${cartCount}`;
  });
});
//----------------------------------------------

 



