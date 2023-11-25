// // Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import {getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "verify-password-70ada.firebaseapp.com",
//   projectId: "verify-password-70ada",
//   storageBucket: "verify-password-70ada.appspot.com",
//   messagingSenderId: "1079707843778",
//   appId: "1:1079707843778:web:22dc2b96b2e30b37c24f5b",
//   measurementId: "G-29SJL1LY0X"
// };    
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
    
// const database=getDatabase(app);
// const auth = getAuth();
// // const analytics = getAnalytics(app);


// var signinbtn = document.getElementById("signinbtn");
// var signupbtn = document.getElementById("signupbtn");
// var title = document.getElementById("title");
// var firstN = document.getElementById("firstN");
// var lastN = document.getElementById("lastN");
// var loginbutton=document.getElementById("Login");
// const passwords = document.getElementById("password").value;
// const email = document.getElementById("Email").value;









 
// // document.getElementById("Login").addEventListener("click", function () {
// //     signInWithEmailAndPassword(auth, email, passwords)
// //     .then((userCredential) => {
// //           console.log("RANDI");
// //         const user = userCredential.user;
        
// //           document.getElementById("logi").style.display = "none";
// //           document.getElementById("loginPopup").style.display = "none";
        
// //       })
// //       .catch((error) => {
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         console.error(errorCode, errorMessage); 
// //         window.onload;
// //       });
// //   });




// loginbutton.addEventListener('click',(e)=>{
//   var firstN = document.getElementById("firstN");
//   var lastN = document.getElementById("lastN");

//   const passwords = document.getElementById("password").value;
//   const email = document.getElementById("Email").value;
  

//   createUserWithEmailAndPassword(auth, email, passwords)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     set(ref(database, 'users/'  +  user.uid),{
//       email: email,
//       firstN: firstN,
//       lastN: lastN
      
//     })
//     alert('user created');
//     // ...

//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage);
// })
// })





  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvKcQXboatfSFYtlPNetdGwLOeS9T7Jk4",
    authDomain: "auth-4f3a1.firebaseapp.com",
    projectId: "auth-4f3a1",
    storageBucket: "auth-4f3a1.appspot.com",
    messagingSenderId: "718871430182",
    appId: "1:718871430182:web:8166623958be0fa78f12e7",
    measurementId: "G-Q1LLP7LFS2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth(app)
  const db=getDatabase()


function handleSignUp() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('User signed up successfully!');
    })

    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);
      alert(`Error signing up: ${errorMessage}`);
    });
}
























