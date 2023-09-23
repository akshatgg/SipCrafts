function showPopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'block';
}

function closePopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
}

window.onload = showPopup;   

var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");
var title = document.getElementById("title");
var firstN = document.getElementById("firstN");
var lastN = document.getElementById("lastN");
var loginbutton=document.getElementById("Login");


let login = true;

function setup() {
    
    signupbtn.addEventListener("click", () => {
        login = false;
        title.innerText = "Sign up";
        firstN.style.display = 'block';
        lastN.style.display = 'block';
        loginbutton.innerText="Register";
        
        
    });
    signinbtn.addEventListener("click", () => {
        login = true;
        title.innerText = "Sign in";
        firstN.style.display = 'none';
        lastN.style.display = 'none';
        loginbutton.innerText="Login";
        
    });
}


// Call the setup function to set up the event listeners
setup();
