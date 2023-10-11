// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKkO-p8tKkXXDNLFLUP7f2fKX4JdDRENE",
  authDomain: "verify-password-70ada.firebaseapp.com",
  projectId: "verify-password-70ada",
  storageBucket: "verify-password-70ada.appspot.com",
  messagingSenderId: "1079707843778",
  appId: "1:1079707843778:web:22dc2b96b2e30b37c24f5b",
  measurementId: "G-29SJL1LY0X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const auth = getAuth();
// const analytics = getAnalytics(app);


var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");
var title = document.getElementById("title");
var firstN = document.getElementById("firstN");
var lastN = document.getElementById("lastN");
var loginbutton=document.getElementById("Login");
const passwords = document.getElementById("password").value;
const email = document.getElementById("Email").value;









 
// document.getElementById("Login").addEventListener("click", function () {
//     signInWithEmailAndPassword(auth, email, passwords)
//     .then((userCredential) => {
//           console.log("RANDI");
//         const user = userCredential.user;
        
//           document.getElementById("logi").style.display = "none";
//           document.getElementById("loginPopup").style.display = "none";
        
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(errorCode, errorMessage); 
//         window.onload;
//       });
//   });




loginbutton.addEventListener('click',(e)=>{
  var firstN = document.getElementById("firstN");
  var lastN = document.getElementById("lastN");

  const passwords = document.getElementById("password").value;
  const email = document.getElementById("Email").value;
  

  createUserWithEmailAndPassword(auth, email, passwords)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('user created');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
})
})


