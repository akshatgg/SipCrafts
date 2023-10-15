document.addEventListener('DOMContentLoaded', function () {
    let thispage = 1;
    const limit = 6;
    const list = document.querySelectorAll('.list .item');

    function loadItems() {
        const begin = limit * (thispage - 1);
        const end = limit * thispage - 1;

        list.forEach((item, key) => {
            if (key >= begin && key <= end) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        updatePagination();
        
    }
    function updatePagination() {
        const count = Math.ceil(list.length / limit);
        const prevButton = document.querySelector('.Previ');
        const nextButton = document.querySelector('.Nexts');

        if (thispage > 1) {
            prevButton.classList.remove('disabled');
        } else {
            prevButton.classList.add('disabled');
        }

        if (thispage < count) {
            nextButton.classList.remove('disabled');
        } else {
            nextButton.classList.add('disabled');
        }
    }

    function changePage(page) {
        thispage = page;
        loadItems();
    }

    loadItems();

    const prevButton = document.querySelector('.Previ');
    const nextButton = document.querySelector('.Nexts');
    const pageButtons = document.querySelectorAll('.active');

    
    prevButton.addEventListener('click', () => {
        if (thispage > 1) {
            changePage(thispage - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        const count = Math.ceil(list.length / limit);
        if (thispage < count) {
            changePage(thispage + 1);
        }
    });

    pageButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            changePage(index + 1);
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

let generateshop=()=>{
    
    shop.innerHTML=shopItems.map((x)=>{
        let {id,name,price,content,img}=x


        return `
        <div>
        
        </div>
        `
       
        
    
    })
}

generateshop();
