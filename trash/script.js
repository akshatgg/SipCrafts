function showPopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'block';
}

function closePopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
}

var title = document.getElementById("title");
var firstN = document.getElementById("firstN");
var lastN = document.getElementById("lastN");
var loginbutton = document.getElementById("Login");

function switchToSignUp() {
    title.innerText = "Sign up";
    firstN.style.display = 'block';
    lastN.style.display = 'block';
    loginbutton.innerText = "Register";
}

function switchToSignIn() {
    title.innerText = "Sign in";
    firstN.style.display = 'none';
    lastN.style.display = 'none';
    loginbutton.innerText = "Login";
}

// Call showPopup to open the signup page automatically when the page loads
showPopup();

// Attach click event listeners to the buttons
var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");

signinbtn.addEventListener("click", () => {
    switchToSignIn();
});

signupbtn.addEventListener("click", () => {
    switchToSignUp();
});
