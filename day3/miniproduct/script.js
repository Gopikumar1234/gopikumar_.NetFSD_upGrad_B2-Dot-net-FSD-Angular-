const products = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Charger"
];

const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const noResults = document.getElementById("noResults");

// Render products
function renderProducts(productArray) {
    productList.innerHTML = "";

    if (productArray.length === 0) {
        noResults.textContent = "No Results Found";
        return;
    }

    noResults.textContent = "";

    productArray.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
    });
}

// Filter products
function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.toLowerCase().includes(searchValue)
    );

    renderProducts(filtered);
}

// Event listener
searchInput.addEventListener("input", filterProducts);

// Initial load
renderProducts(products);