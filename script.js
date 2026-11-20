const addButton = document.getElementById('addCart');
const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
let cartItems = 0;
let toastTimer;

addButton.addEventListener('click', () => {
  cartItems += 1;
  cartCount.textContent = cartItems;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
});

document.getElementById('cartBtn').addEventListener('click', () => {
  alert(`Your demo cart has ${cartItems} item(s). This concept website does not process real orders.`);
});

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
