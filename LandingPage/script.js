document.addEventListener("DOMContentLoaded", function () {
  const shopItems = [
    // Your item data here
  ];

  const itemsPerPage = 6;
  let currentPage = 1;

  const listContainer = document.getElementById("shop");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const pageList = document.querySelector(".page-list");

  function loadItems() {
    listContainer.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < shopItems.length; i++) {
      const item = shopItems[i];
      const itemElement = createItemElement(item);
      listContainer.appendChild(itemElement);
    }
  }

  function createItemElement(item) {
    // Create and return an HTML element for the shop item
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
      <div class="imag">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="content">
        <div class="title">${item.name}</div>
        <div class="details">${item.content}</div>
        <div class="price">${item.price}</div>
      </div>
    `;
    return itemElement;
  }

  function updatePagination() {
    pageList.innerHTML = ""; // Clear the page buttons

    const totalPages = Math.ceil(shopItems.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("li");
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        loadItems();
        updatePagination();
      });
      pageList.appendChild(pageButton);
    }

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  loadItems();
  updatePagination();

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      loadItems();
      updatePagination();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(shopItems.length / itemsPerPage)) {
      currentPage++;
      loadItems();
      updatePagination();
    }
  });
});
  




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








// local storage of cart
// Wrap your code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
  let basket = JSON.parse(localStorage.getItem("data")) || [];
  
  // Assuming you have selected the "shop" element correctly
  let shop = document.getElementById("shop");

  let generateshop = () => {
    shop.innerHTML = shopItems.map((x) => {
      let { id, name, price, content, img } = x;

      return `
        <div class="item" id="${id}">
          <div class="imag">
            <img src="${img}" alt="" />
          </div>
          <div class="content">
            <div class="title">${name}</div>
            <div class="details">${content}</div>
            <div class="price">${price}</div>
         <button class="add" id="add" onclick="addCart('${id}','${name}','${price}','${img}')">Add to cart</button>
          </div>
        </div>`;
    });
  };

  // Call generateshop to populate the "shop" element
  generateshop();
} );


let addCart = (id, name, price, img) => {
  basket.push({
    id: id,
    item: 1,
    name: name,
    price: price,
    img: img,
  });
  localStorage.setItem("data", JSON.stringify(basket));
  calculate();
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
generateshop();

let Idfetch = () => {
  let product = document.getElementById("shop");
  product.addEventListener("mouseenter", () => {
    console.log("hiii");
      
  });

};

Idfetch();
