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

      

    let login=true;
        
    signupbtn.addEventListener("click", () => {
        login=true;
        title.innerText = "Sign up";
        firstN.style.display = 'block';
        lastN.style.display = 'block';
        loginbutton.innerText = "Register";
        
    });
    
    signinbtn.addEventListener("click", () => {
        login=false;
        title.innerText = "Sign in";
        firstN.style.display = 'none';
        lastN.style.display = 'none';
        loginbutton.innerText = "Login";
        
    });
   








    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function hoverHandler() {
            if (!this.classList.contains('darken')) {
                this.classList.add('darken');
                this.removeEventListener('mouseenter', hoverHandler);
            }
        });
    });