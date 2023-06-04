// Obtener referencia a los botones de "Agregar al Carrito"
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