console.log("Cart.js loaded");

function addToCart(title, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ title, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${title} added to cart`);
}

// Render cart
const cartContainer = document.getElementById('cart-items');
const totalEl = document.getElementById('total');

if(cartContainer){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.title} - $${item.price}`;
    cartContainer.appendChild(div);
    total += item.price;
  });
  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}
