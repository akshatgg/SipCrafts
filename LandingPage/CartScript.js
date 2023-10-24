let ShopingCart = document.getElementById("shoping-cart");
let label = document.getElementById("label");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculate = () => {
  let CartIcon = document.getElementById("cart_count");
  CartIcon.innerHTML = basket.length;
};

//Basket Items//

let generateCart = () => {
  if (basket.length != 0) {
    return (ShopingCart.innerHTML = basket.map((x) => {
      let { id, name, price, img, content } = x;

      return `
     <div class="cart_item" id='${id}'>
     <p>${name}</p>
     <div class='cart-items'>
     <img src='${img}' alt='' />
     </div>
     <p>${price}</p>
     <button class="rmv_btn" onclick="remove_from_Cart(${id})">Remove</button>
     </div>
     
     `;
    }));
  }
  else {
    swal({
      title: "Your Cart is Empty!",
      icon: "info",
      button: {
        text: "Get Back",
        closeModal: false,
      },
      allowOutsideClick: false, // Disable interaction with elements outside the dialog
    }).then((value) => {
      if (value) {
        window.location.href = './index.html';
      }
    });
  }
  
  
};
generateCart();
calculate();

//remove from cart//
let remove_from_Cart = (id) => {
  if (basket.length == 1) {
    location.reload();
  }
  basket = basket.filter((x) => x.id != id);
  localStorage.setItem("data", JSON.stringify(basket));
  
  calculate();
  generateCart();
  TotalAmount();
};

//adding total amount you want to paid//

// Define TotalAmount function
let TotalAmount = () => {
    let total = 0; // Initialize total to 0
    basket.forEach((x) => {
      total += parseInt(x.price, 10); // Parse price as an integer and add to the total
    });
  
    let totalElement = document.querySelector(".total"); // Use a class selector
    totalElement.innerHTML = total; // Display the total price
  };
  
  // Call TotalAmount function
  TotalAmount();





  ``