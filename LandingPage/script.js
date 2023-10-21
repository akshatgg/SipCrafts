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
      <div class="imag" id=image>
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="content">
        <div class="title">${product.name}</div>
        <div class="details">${product.content}</div>
        <div class="price">Price: $${product.price}</div>
        <button class="add" onclick="addCart('${product.id}','${product.img}','${product.name}','${product.price}')">Add to Cart</button>
      </div>
      </div>  
    `;

    productDiv.innerHTML = productContent;
    shopList.appendChild(productDiv);
  }
}

// Initial display
displayProducts(currentPage);

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

for (let i = 1; i <= 3; i++) {
  document.getElementById(`page${i}`).addEventListener("click", () => {
    currentPage = i;
    displayProducts(currentPage);
  });
}








//scro;;ing///
let product = [...document.querySelectorAll(".scrolling")];
let aftbtn = [...document.querySelectorAll(".aftbtn")];
let prebtn = [...document.querySelectorAll(".prebtn")];

product.forEach((item, i) => {
  let containerdimension = item.getBoundingClientRect();
  let containerwidth = containerdimension.width;

  aftbtn[i].addEventListener("click", () => {
    item.scrollLeft += containerwidth;
  });
  prebtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerwidth;
  });

  function scrollToNextImage() {
    item.scrollLeft += containerwidth;
  }

  // Function to scroll to the next image every 5 seconds
  function autoSlide() {
    setInterval(scrollToNextImage, 7000); // 5000 milliseconds (5 seconds)
  }

  autoSlide();
});






//making local storage//



// local storage of cart
// Wrap your code in a DOMContentLoaded event listener
let basket = JSON.parse(localStorage.getItem("data")) || [];
let shop = document.getElementById("shop");
document.addEventListener("DOMContentLoaded", function() {
  
  // Assuming you have selected the "shop" element correctly

  // let generateshop = () => {
  //   shop.innerHTML = shopItems.map((x) => {
  //     let { id, name, price, content, img } = x;

  //     return `
  //       <div class="item" id="${id}">
  //         <div class="imag">
  //           <img src="${img}" alt="" />
  //         </div>
  //         <div class="content">
  //           <div class="title">${name}</div>
  //           <div class="details">${content}</div>
  //           <div class="price">${price}</div>
  //        <button class="add" id="add" onclick="addCart('${id}','${name}','${price}','${img}')">Add to cart</button>
  //         </div>
  //       </div>`;
  //   });
  // };

  // // Call generateshop to populate the "shop" element
  // generateshop();
} );


let addCart = (id, img, name, price) => {
  basket.push({
    id: id,
    item: 1,
    name: name,
    price: price,
    img: img,
  });
  localStorage.setItem("data", JSON.stringify(basket));
  calculate();
  // generateshop();
};




// number of cart items //





let calculate = () => {
  let cart_count = document.getElementById("cart_count");
  // let BtnAddToCart=document.getElementById("add")
  // let count=0;
  // BtnAddToCart.addEventListener('onclick',()=>{
  //   count=count+1
  //   cart_count.innerHTML=count;
  //   })
  let cart_amount = basket.length;
  cart_count.innerHTML = cart_amount;
};

calculate();
// generateshop();




// Wrap your code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Your existing code

  // Function to handle hovering over a product image
  function handleImageHover(product) {
    const productImage = product.querySelector("img");

    productImage.addEventListener("mouseenter", () => {
      console.log("hii");
    });
  }

  // Find all product items and attach hover behavior
  const productItems = document.querySelectorAll(".item");
  productItems.forEach((product) => {
    handleImageHover(product);
  });
});






