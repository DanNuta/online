import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDbmX1fovWdQltDVF2DceU726G14rHUBls",
    authDomain: "online-project-ceiti.firebaseapp.com",
    projectId: "online-project-ceiti",
    storageBucket: "online-project-ceiti.appspot.com",
    messagingSenderId: "985584264370",
    appId: "1:985584264370:web:229d8134617a81ea1815ab"
  };


  firebase.initializaApp(firebaseConfig);

  const auth = firebase.auth();


  console.log(auth)



  let btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) =>{
     

      console.log("click")

  })


  




