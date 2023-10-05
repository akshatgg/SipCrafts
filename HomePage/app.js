// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZlIj2sqmbbRAc6WgPjMXXj4jqOyc3no",
  authDomain: "authentication-d00d1.firebaseapp.com",
  projectId: "authentication-d00d1",
  storageBucket: "authentication-d00d1.appspot.com",
  messagingSenderId: "803610351890",
  appId: "1:803610351890:web:2dc3e4f6314a35bdc4fbcb",
  measurementId: "G-3RDWQNQP3L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);

//Getting all object from html//
var signinbtn = document.getElementById("signinbtn");
var signupbtn = document.getElementById("signupbtn");
var title = document.getElementById("title");
var firstN = document.getElementById("firstN");
var lastN = document.getElementById("lastN");
var loginbutton = document.getElementById("Login");
const passwords = document.getElementById("password").value;
const email = document.getElementById("Email").value;


  console.log("randi");
  document.getElementById("Login").addEventListener("click", function () {
    signInWithEmailAndPassword(auth, email, passwords)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          document.getElementById("logi").style.display = "none";
          document.getElementById("loginPopup").style.display = "none";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.onload;
      });
  });

