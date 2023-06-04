// Obtengo el carrusel y las imágenes DOM
const carousel = document.querySelector('.carousel');
const carouselImages = Array.from(document.querySelectorAll('.carousel img'));

// Definir el índice de la imagen actual
let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
  carousel.style.transform = `translateX(-${index * 80}%)`;
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
const addToCartButtons = document.querySelectorAll('.add-to-cart');

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
//codigo del formulario
// obtengo las variables
function validateForm() {
  let name = document.getElementById('name').value;
  let lastName = document.getElementById('last-name').value;
  let email = document.getElementById('email').value;
  let suggestions = document.getElementById('suggestions').value;
  //validando que se entren los datos correctos y de manera obligatoria
  let errorMessages = '';
  
  if (name === '') {
    errorMessages += 'El nombre es obligatorio.\n';
  }
  
  if (lastName === '') {
    errorMessages += 'El apellido es obligatorio.\n';
  }
  
  if (email === '') {
    errorMessages += 'El correo electrónico es obligatorio.\n';
  } else if (!validateEmail(email)) {
    errorMessages += 'El correo electrónico no es válido.\n';
  }
  
  if (suggestions === '') {
    errorMessages += 'Por favor, ingrese sus sugerencias.\n';
  }
  
  if (errorMessages !== '') {
    alert(errorMessages);
    return false;
  }
}
//funcion para validar los caracteres del correo electronico
function validateEmail(email) {
  // Utilizamos una expresión regular para validar el formato del correo electrónico
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}