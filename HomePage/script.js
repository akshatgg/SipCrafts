var popup = document.querySelector("#loginpopup");

function showpopup() {
    popup.style.display = 'block';
}

function closepopup() {
    popup.style.display = 'none';
}

// popup.style.display = 'none';


window.addEventListener('load', showpopup);










// profile
const target = {
    clicked: 0,
    currentFollowers: 90,
    btn: document.querySelector("a.btn"),
    fw: document.querySelector("span.followers")
  };
  
  const follow = () => {
    target.clicked += 1;
    target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
  
    if (target.clicked % 2 === 0) {
      target.currentFollowers -= 1;
      target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
    }
    else {
      target.currentFollowers += 1;
    }
  
    target.fw.textContent = target.currentFollowers;
    target.btn.classList.toggle("following");
  }
  


  // dashboard
  const dashboard=document.querySelector('#dashboard')
  dashboard.style.display='none'
let dashboardPopup=()=>{
dashboard.style.display='block'
}
let closeDashboard=()=>{
  dashboard.style.display='none'

}

  