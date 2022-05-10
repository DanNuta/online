let nume = document.getElementById("nume"),
    email = document.getElementById("email"),
    telefon = document.getElementById("tel"),
    message = document.getElementById("mesage"),
    btnSubmit = document.getElementById("btn_submit"),
    numeSpan = document.querySelector(".nume_span"),
    emailSpan = document.querySelector(".email_span"),
    telSpan = document.querySelector(".tel_span"),
    mesageSpan = document.querySelector(".mesaj_span");


  btnSubmit.addEventListener("click", (e) =>{
      e.preventDefault();

      


      if(nume.value == "" || nume.value.length == 2){
          console.log("Trebuie sa introduci un nume")
          nume.style.backgroundColor = "rgba(237, 12, 12, 0.1)"
          numeSpan.style.display = "block"

          return
      }
      else if(email.value == ""){
          
          nume.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
          email.style.backgroundColor = "rgba(237, 12, 12, 0.1)"
          numeSpan.style.display = "none"
          emailSpan.style.display = "block"
          return
      }
      else if(telefon.value == "" || telefon.value.length != 9 ){
            nume.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
            email.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
            telefon.style.backgroundColor = "rgba(237, 12, 12, 0.1)"

            numeSpan.style.display = "none"
            emailSpan.style.display = "none"
            telSpan.style.display = "block"
          return
      }
      else if(message.value == ""){
        nume.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
        email.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
        telefon.style.backgroundColor = "rgba(39, 39, 39, 0.1"
        message.style.backgroundColor = "rgba(237, 12, 12, 0.1)"

        numeSpan.style.display = "none"
        emailSpan.style.display = "none"
        telSpan.style.display = "none"
        mesageSpan.style.display = "block"
          return
      }

        nume.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
        email.style.backgroundColor = "rgba(39, 39, 39, 0.1)"
        telefon.style.backgroundColor = "rgba(39, 39, 39, 0.1"
        message.style.backgroundColor = "rgba(39, 39, 39, 0.1)"

        numeSpan.style.display = "none"
        emailSpan.style.display = "none"
        telSpan.style.display = "none"
        mesageSpan.style.display = "none"

      let obj = {
          nume: nume.value,
          email: email.value,
          telefon: telefon.value,
          message: message.value
      }

      nume.value = ""
      email.value = ""
      telefon.value = ""
      message.value = ""

      console.log(obj)
  })