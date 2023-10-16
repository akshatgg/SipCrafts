document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const itemsPerPage = 6;
    const totalItems = shopItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const listContainer = document.getElementById('shop');
    const prevButton = document.querySelector('.Previ');
    const nextButton = document.querySelector('.Nexts');
    const pageButtons = document.querySelectorAll('.listpage li');

    function loadItems() {
      listContainer.innerHTML = ''; // Clear the list container
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

      for (let i = startIndex; i < endIndex; i++) {
        const item = shopItems[i];
        const itemElement = createItemElement(item);
        listContainer.appendChild(itemElement);
      }

      updatePagination();
    }

    function createItemElement(item) {
      // Create and return an HTML element for the shop item
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <div class="imag">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div class="content">
          <div class="title">${item.name}</div>
          <div class="details">${item.content}</div>
          <div class="price">${item.price}</div>
          <button class="add" onclick="addCart(${item.id}, '${item.name}', ${item.price}, '${item.img}')">Add to cart</button>
        </div>
      `;
      return itemElement;
    }

    function updatePagination() {
      pageButtons.forEach((button) => {
        const pageNumber = parseInt(button.textContent);
        button.classList.remove('active');
        if (pageNumber === currentPage) {
          button.classList.add('active');
        }
      });

      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
    }

    function changePage(page) {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        loadItems();
      }
    }

    // Initial page load
    loadItems();

    // Previous button click event
    prevButton.addEventListener('click', () => {
      changePage(currentPage - 1);
    });

    // Next button click event
    nextButton.addEventListener('click', () => {
      changePage(currentPage + 1);
    });

    // Page button click events
    pageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const pageNumber = parseInt(button.textContent);
        changePage(pageNumber);
      });
    });
  });



let product=[...document.querySelectorAll('.scrolling')]
let aftbtn=[...document.querySelectorAll('.aftbtn')]
let prebtn=[...document.querySelectorAll('.prebtn')]


product.forEach((item,i)=>
{
    let containerdimension=item.getBoundingClientRect();
    let containerwidth=containerdimension.width;


    aftbtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerwidth;
        
    })
    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerwidth;
    })
    
    function scrollToNextImage() {
        item.scrollLeft += containerwidth;
    }

    // Function to scroll to the next image every 5 seconds
    function autoSlide() {
        setInterval(scrollToNextImage, 7000); // 5000 milliseconds (5 seconds)
    }

    autoSlide();
    
})



const shop=document.getElementById("shop")

let basket = JSON.parse(localStorage.getItem('data')) || [];
let generateshop=()=>{
    
    shop.innerHTML=shopItems.map((x)=>{
        let {id,name,price,content,img}=x


        return `
        <div class="item">
        <div class="imag">
            <img src="${img}" alt="" />
        </div>
        <div class="content">   
            <div class="title">${name}</div>
            <div class="details">${content}
                </div>
                 <div class="price">${price}</div>
                 <button class="add" id="add" onclick="addCart('${id}','${name}','${price}','${img}')">Add to cart</button>
        </div>
    </div> 
        `
       
        
    
    })

}

let addCart=(id,name,price,img)=>{
basket.push({
  id:id,
  item:1,
  name:name,
  price:price,
  img:img
})
localStorage.setItem('data',JSON.stringify(basket))
calculate()
}

// number of cart items //

let calculate=()=>{
  let cart_count=document.getElementById("cart_count")
  // let BtnAddToCart=document.getElementById("add")
  // let count=0;
  // BtnAddToCart.addEventListener('onclick',()=>{
  //   count=count+1
  //   cart_count.innerHTML=count;
  //   })
    let cart_amount=basket.length
    cart_count.innerHTML=cart_amount
    
    
  }
  
  calculate()
generateshop();
