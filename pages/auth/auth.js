import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"



const firebaseConfig = {
    apiKey: "AIzaSyDbmX1fovWdQltDVF2DceU726G14rHUBls",
    authDomain: "online-project-ceiti.firebaseapp.com",
    projectId: "online-project-ceiti",
    storageBucket: "online-project-ceiti.appspot.com",
    messagingSenderId: "985584264370",
    appId: "1:985584264370:web:229d8134617a81ea1815ab"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);
  
  let arrowUp = document.querySelector(".arrow_up");

  arrowUp.addEventListener("click", () =>{
  
      document.body.scrollIntoView({
        behavior: "smooth",
      });
      
    })

  let btn = document.querySelector(".btn_submit");
  let error = document.querySelector(".error");
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  let nume = document.querySelector(".nume");
  let spanName = document.querySelector(".nume_firebase");
  let form = document.querySelector("form");


  form.addEventListener("submit", (e) =>{
      e.preventDefault();

      if(nume.value == ""){
          spanName.style.display = "block"
          return;
      }

      spanName.style.display = "none"


      authentification(email.value, password.value, nume.value);
       collectionElement();
      
 
 
       nume.value = ""
       password.value = "";
       email.value = ""

  })
 
   


















//   AJAX



// auth

async function authentification(email, password, nume){
  try{
    btn.innerHTML = "Loading..."
    const res =  await createUserWithEmailAndPassword(auth, email, password);
    const user = await  res.user;
    await updateProfile(user, {displayName: nume})

    await localStorage.setItem("user", JSON.stringify(user))
    error.innerHTML = ""

    console.log(res.user)
    btn.innerHTML = "Create acount"

  }catch(e){
      console.log(e.message)
      error.innerHTML = e.message
      btn.innerHTML = "Create acount"
  }
}

// db
async function collectionElement(){
    let user = JSON.parse(localStorage.getItem("user"));

    console.log(user)

    let userCollection = {
        email: user.email,
        nume: user.displayName
    }

    try{
        const docRef = await addDoc(collection(db, "users"), userCollection);


    }catch(e){
        console.log(e.message)

    }

}





  




