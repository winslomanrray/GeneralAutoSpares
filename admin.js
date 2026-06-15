let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    const container = document.getElementById("admin-products");

    container.innerHTML = "";

    products.forEach((product, index) => {
        container.innerHTML += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <p>${product.category}</p>
                <button onclick="deleteProduct(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const details = document.getElementById("details").value;

    if (!name || !price || !category) {
        alert("Please fill all required fields");
        return;
    }

    products.push({
        name,
        price: Number(price),
        category,
        details
    });

    saveProducts();
    renderProducts();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("details").value = "";

    alert("Product added successfully");
}

function deleteProduct(index) {
    products.splice(index, 1);

    saveProducts();
    renderProducts();
}

renderProducts();