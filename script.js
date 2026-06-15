const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsBox = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

/* ---------------- DISPLAY PRODUCTS ---------------- */

function displayProducts(items) {
  productList.innerHTML = "";

  if (!items.length) {
    productList.innerHTML = "<h2>No products found</h2>";
    return;
  }

  items.forEach((product) => {

    productList.innerHTML += `
      <div class="product-card">

        <img src="${product.image}" />

        <h3>${product.name}</h3>
        <p>$${product.price}</p>

        <button onclick='addToCart(${JSON.stringify(product)})'>
          Add to Cart
        </button>

      </div>
    `;
  });
}

/* ---------------- CART ---------------- */

function addToCart(product) {
  const existing = cart.find(p => p.name === product.name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.reduce((a, b) => a + b.qty, 0);
}

/* ---------------- CART UI ---------------- */

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
  renderCart();
});

function closeCart() {
  cartModal.style.display = "none";
}

function renderCart() {
  cartItemsBox.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price * item.qty;

    cartItemsBox.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="40"/>
        <span>${item.name}</span>
        <span>$${item.price} x ${item.qty}</span>
        <button onclick="removeItem(${i})">X</button>
      </div>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
}

function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
  renderCart();
}

/* ---------------- CHECKOUT ---------------- */

function checkoutCart() {
  let msg = "Hello, I want to order:%0A";

  cart.forEach(i => {
    msg += `- ${i.name} x${i.qty} = $${i.price * i.qty}%0A`;
  });

  window.open(`https://wa.me/15088609417?text=${msg}`);
}

/* ---------------- CATEGORY FILTER FIX ---------------- */

function filterCategory(cat) {
  if (cat === "All") {
    displayProducts(products);
    return;
  }

  const filtered = products.filter(p => p.category === cat);
  displayProducts(filtered);
}

/* ---------------- SEARCH FIX ---------------- */

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

/* ---------------- INIT ---------------- */

displayProducts(products);