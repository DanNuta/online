let titleShop = document.getElementById("title_shop")
let total = document.getElementById("total");






function removeShop(idE){
    let shopArray = JSON.parse(localStorage.getItem("shop"));
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

    console.log(shopArray)


    let card;
    for(let i in shopArray){

        if(i == idE){
            totalPrice = totalPrice - shopArray[i].price

        }else{
            card = {
                ...card,
                [shopArray[i].id]: shopArray[i]
            }
        }
    }

    console.log("Card", card)
    localStorage.setItem("shop", JSON.stringify(card))
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice))
    localStorage.removeItem("shop");
}








function displayTotalPrice(){
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

    if(totalPrice != null){
        total.textContent = `${totalPrice} lei`

    }else{
        total.textContent = "0 lei"
    }

}

displayTotalPrice();


function getElementShop(){
    let shop = JSON.parse(localStorage.getItem("shop"));

    console.log(shop)
    
    if(shop != null){

      Object.values(shop).map(item => {
            titleShop.innerHTML += `
           

            <hr/>

            <div class="element_itself">

                <div class="element_products">
                    <div class="img_left">
                        <img src=${item.img} alt="" />
                    </div>
                    <div class="text_right">
                        <h2>${item.title}</h2>
                        <p>Cod: <span>${item.id}</span></p>
                        <p><h3>Descriere:</h3>${item.description}</p>
                    </div>
                </div>


                <div class="price_total_counter">

                    <div class="price">
                        
                        <p>${item.price} lei</p>
                    </div>
                    <div class="counter">
                        <h3>Cantitate:</h3>


                        <div class="counter">
                            <div class="number_counter"><h2>${item.inCard}</h2></div>
                            <div class="increase_decrease">
                                <button onclick="increade(${item.id})"  class='btn_top'><img src="../../../assets/icons/up_arrow.png"/></button>
                                <button onclick="decrease(${item.id})"  class='btn_bottom'><img src="../../../assets/icons/down_arro.png"/></button>
                            </div>
                        </div>





                    </div>

                    <div class="price_total">
                        <h3>Pret:</h3>
                        <p>${item.inCard * item.price} lei</p>
                    </div>

                    <div class="cancel_products">
                        <img onclick="removeShop(${item.id})"  src="../../../assets/icons/close.png" />
                    </div>


                </div>

            </div>
        
    `

        })

    
    }
    else{
        titleShop.textContent = "Acest cos nu are produse inca adaugate"
    }


    console.log(shop)

}






function increade(id){
    let element = JSON.parse(localStorage.getItem("shop"))

     element[id].inCard ++;

     localStorage.setItem("shop", JSON.stringify(element))
 
}


function decrease(id){
    let element = JSON.parse(localStorage.getItem("shop"))

    if(element[id].inCard < 2){
        return

    }else{
        element[id].inCard --;
        localStorage.setItem("shop", JSON.stringify(element))
    }

}







getElementShop();