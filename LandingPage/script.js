const itemsPerPage = 6; // Number of items to display per page
let currentPage = 1;

function displayProducts(pageNumber) {
  const shopList = document.getElementById("shop");
  shopList.innerHTML = ""; // Clear the product list

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex && i < shopItems.length; i++) {
    const product = shopItems[i];
    const productDiv = document.createElement("div");
    productDiv.classList.add("item");

    // Create the product content
    const productContent = `
    <div id="${product.id}">
      <div class="imag">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="content">
        <div class="title">${product.name}</div>
        <div class="details">${product.content}</div>
        <div class="price">Price: $${product.price}</div>
        <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
      </div>
    `;

    productDiv.innerHTML = productContent;
    shopList.appendChild(productDiv);
  }
}

// Initial display
displayProducts(currentPage);

// Add event listeners to handle pagination
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(currentPage);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPages = Math.ceil(shopItems.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayProducts(currentPage);
  }
});

// Add event listeners for page numbers
for (let i = 1; i <= 3; i++) {
  document.getElementById(`page${i}`).addEventListener("click", () => {
    currentPage = i;
    displayProducts(currentPage);
  });
}
