const products = [
    {name:"Smart TV", price:900},
    {name:"Smartphone", price:700},
    {name:"Laptop", price:1200},
    {name:"Smart Watch", price:250}
];

let cartCount = 0;

const productList = document.getElementById("product-list");
const cartDisplay = document.getElementById("cart-count");
const popup = document.getElementById("popup");

// Create product cards dynamically
products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${product.name}</h3>
        <div class="price">$${product.price}</div>
        <button>Add to Cart</button>
    `;

    const button = card.querySelector("button");

    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;

        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        },1500);
    });

    productList.appendChild(card);
});