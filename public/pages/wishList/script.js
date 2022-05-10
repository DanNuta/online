

let titleShop = document.getElementById("title_shop");
let addCard = document.getElementById("add_card");



let arrowUp = document.querySelector(".arrow_up");

arrowUp.addEventListener("click", () =>{

    document.body.scrollIntoView({
      behavior: "smooth",
    });
    
  })

function pagesShow(id){
    let wish = JSON.parse(localStorage.getItem("wishlist"));

    localStorage.setItem("pages", JSON.stringify(wish[id]))

    console.log(id)
}











function addToShop(){
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    let shop = JSON.parse(localStorage.getItem("shop"));

    if(wishlist){

        addCard.addEventListener("click", () =>{
            
            let card;
            let counter = 0;

            for(let i in wishlist){
                card = {
                    ...shop,
                    ...card,
                    [wishlist[i].id]: wishlist[i]
                }

                counter = counter + wishlist[i].price
            }

            console.log(counter)


            localStorage.setItem("shop", JSON.stringify(card))
            localStorage.setItem("totalPrice", JSON.stringify(counter))
        })
    }
    else{
        addCard.style.display = "none"
    }


}

addToShop();


function getElementShop(){
    let shop = JSON.parse(localStorage.getItem("wishlist"));
    
    if(shop != null){

      Object.values(shop).map(item => {
            titleShop.innerHTML += `
           
            <hr/>


            <div class="element_itself">

                  <a onclick="pagesShow(${item.id})" id="pages" href="../pageProduct/pages.html">
                    <div class="img_left">
                        <img src=${item.img} alt="" />
                    </div>
                    </a>

                    <div class="text_right">
                        <h2>${item.title}</h2>
                    </div>

                    <div>
                      <p><h3>Descriere:</h3>${item.description}</p>
                    </div>
                

                    <div class="price"> 
                        <p>${item.price} lei</p>
                    </div>

                
                    <div class="cancel_products">
                        <img onclick="removeShop(${item.id})"  src="../../../assets/icons/close.png" />
                    </div>

            </div>  
             `
        })



    
    }
    else{
        titleShop.textContent = "Acest cos nu are produse inca adaugate"
    }


   

}



function removeShop(idE){
    let shopArray = JSON.parse(localStorage.getItem("wishlist"));


    let card;
    for(let i in shopArray){

        if(i == idE){

        }else{
            card = {
                ...card,
                [shopArray[i].id]: shopArray[i]
            }
        }
    }

    localStorage.setItem("wishlist", JSON.stringify(card))

}


getElementShop();