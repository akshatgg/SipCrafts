function showPopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'block';
}

function closePopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
}

// window.onload = showPopup;   

var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");
var title = document.getElementById("title");
var firstN = document.getElementById("firstN");
var lastN = document.getElementById("lastN");
var loginbutton=document.getElementById("Login");
var emailsignup=document.getElementById("Email");
var passignup=document.getElementById("password");
var emailsignin=document.getElementById("emails");
var passsignin=document.getElementById("passwords");
      

    let login=true;
    document.getElementById("signincont").style.display="none";
        document.getElementById("Logins").style.display="none";
    signupbtn.addEventListener("click", () => {
        login=true;
        title.innerText = "Sign up";
        document.getElementById("signupcont").style.display="block";
        document.getElementById("signincont").style.display="none";
        document.getElementById("Logins").style.display="none";
        document.getElementById("Login").style.display="block";
        loginbutton.innerText = "Register";
        
    });
    
    signinbtn.addEventListener("click", () => {
        login=false;
        title.innerText = "Sign in";
        document.getElementById("signupcont").style.display="none";
        document.getElementById("signincont").style.display="block  ";
        loginbutton.style.display="none";   
        document.getElementById("Logins").style.display="block";

    });
  



    document.addEventListener('DOMContentLoaded', function () {
        var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleFade'), {
            interval: 5000 // Set the interval to 7000 milliseconds (7 seconds)
        });
    });