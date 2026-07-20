// =========================
// Amazon Clone JavaScript
// =========================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Amazon Clone Loaded Successfully!");
});

// ---------------------
// Search Functionality
// ---------------------

const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function searchProduct() {
    let value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter a product name.");
    } else {
        alert("Searching for: " + value);
    }
}

searchIcon.addEventListener("click", searchProduct);

searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchProduct();
    }
});

// ---------------------
// Cart Counter
// ---------------------

let cart = 0;

const cartBtn = document.querySelector(".nav-cart");

cartBtn.addEventListener("click", () => {
    cart++;
    cartBtn.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        Cart (${cart})
    `;
});

// ---------------------
// See More Buttons
// ---------------------

const seeMore = document.querySelectorAll(".box-content p");

seeMore.forEach((item) => {
    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
        alert("Opening Product Category...");
    });
});

// ---------------------
// Menu Button
// ---------------------

const menu = document.querySelector(".panel-all");

menu.addEventListener("click", () => {
    alert("Menu Clicked");
});

// ---------------------
// Back To Top
// ---------------------

const topBtn = document.querySelector(".foot-panell");

topBtn.style.cursor = "pointer";

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ---------------------
// Highlight Search Box
// ---------------------

searchInput.addEventListener("focus", () => {
    searchInput.style.background = "#ffffe0";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.background = "white";
});