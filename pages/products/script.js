let products = [
    {
        title: "Colier",
        description: "Lore ipsum",
        price: 10,
        img: "../../assets/header/bututerii3.png",
        filter: "inel",
        inCard: 0,
        id: 1
    },
    {
        title: "Colier",
        description: "Lore ipsum",
        price: 70,
        img: "../../assets/header/bututerii3.png",
        filter: "inel",
        inCard: 0,
        id: 2
    },
    {
        title: "Lant",
        description: "Lore ipsum",
        price: 60,
        img: "../../assets/header/bututerii2.png",
        filter: "lant",
        inCard: 0,
        id: 3
    },
    {
        title: "Tapca",
        description: "Lore ipsum",
        price: 30,
        img: "../../assets/header/bututerii1.png",
        filter: "cercei",
        inCard: 0,
        id: 4
    },
    {
        title: "Agrafa",
        description: "Lore ipsum",
        price: 40,
        img: "../../assets/header/bututerii1.png",
        filter: "cercei",
        inCard: 0,
        id: 5
    }
]


let burgerNavbar = document.querySelector(".li");

burgerNavbar.addEventListener("click", () =>{
    let mobile = document.querySelector("mobile_burger");

    mobile.classList.toggle("active_nav")

    
    
})


let arrowUp = document.querySelector(".arrow_up");

arrowUp.addEventListener("click", () =>{

    document.body.scrollIntoView({
      behavior: "smooth",
    });
    
  })





let elementCreateProducts = document.querySelector(".produscts_inside_filters");



const productsElement = () =>{
    let productsStorege = JSON.parse(localStorage.getItem("products"));

    console.log(productsStorege)

    Object.values(productsStorege).map(item =>{

        elementCreateProducts.innerHTML += `
        <div class="products">
        <a id="pages" href="../pageProduct/pages.html">
              <div class="img_description">
                     <div class="img">                 
                       <img class='img' src=${item.img} alt="Sfredel"  />
                     </div>
                      <h3 class='description_products'>
                          <p>${item.description}</p>
                      </h3>
              </div>

      </a>




          <div class="element_bottom_prodicts">

                  <div class="price">
                          <h2>${item.price} lei</h2>
                  </div>

                  

                 
                  <div  class="buy_wishList">
                     <ul class='buy_wishList_ul'>
                      <li id="shop_icon"><img src="../../assets/icons/shop.png" alt="" srcset=""></li>
                      <li id="wishlist" ><img src="../../assets/icons/Vector.png" alt="" srcset=""></li>
                     </ul>

                  </div>


                 
                  
          </div>
     </div>
        `
    })

}


productsElement();

let shopIcon = document.querySelectorAll("#shop_icon");
let wishList = document.querySelectorAll("#wishlist");

let categoryElement = document.querySelector(".category");
let category = Array.from(categoryElement.children);


for(let i = 0; i < category.length; i++){

    category[i].addEventListener("click", (e) =>{
        var value = e.target.value;
    
        console.log(e.target)
    
        let filter;
    
    
        for(let i = 0; i < products.length; i++){
    
            if(products[i].filter == value){
    
                filter = {
                    ...filter,
                    [products[i].id]: products[i]
    
                }
                
            }
            
        }
    
        localStorage.setItem("products", JSON.stringify(filter))
    
        console.log(filter)
    })
}














let pages = document.querySelectorAll("#pages");


// products



for(let i = 0; i < pages.length; i++){
    pages[i].addEventListener("click", () =>{
        addPages(products[i])
    })
}


function addPages(products){
    localStorage.setItem("pages", JSON.stringify(products))

}



// shoping card

for(let i = 0; i < shopIcon.length; i++){
    shopIcon[i].addEventListener("click", () =>{
        cardItems(products[i])
        totalPrice(products[i].price)
    }) 
}



function cardItems(product){
   
   setItems(product)
}


// add products in local storege function

function setItems(products){
    let productsShop = JSON.parse(localStorage.getItem("shop"));

    console.log("Produse",productsShop)

    if(productsShop != null){

            let card = {
                ...productsShop,
                [products.id]: products
            }

            
                card[products.id].inCard += 1 
                localStorage.setItem("shop", JSON.stringify(card))
            

            localStorage.setItem("shop", JSON.stringify(card))

        
    }
   else{
        
        let card = {
            [products.id]: products
        }
        card[products.id].inCard = 1


        localStorage.setItem("shop", JSON.stringify(card))
    }



    console.log(products)

}



// add total price

function totalPrice(productPrice){
    let price = localStorage.getItem("totalPrice");
    price = JSON.parse(price)

    if(price){
        localStorage.setItem("totalPrice", JSON.stringify(price + productPrice))

    }else{
        localStorage.setItem("totalPrice", JSON.stringify(productPrice))
    }
}




// add wishList
for(let i = 0; i < wishList.length; i++){
    wishList[i].addEventListener("click", () =>{
        wishListProducts(products[i])
        
    })
}


function wishListProducts(product){

    let productsShop = JSON.parse(localStorage.getItem("wishlist"));

    if(productsShop){

        let card = {
            ...productsShop,
            [product.id]: product
        }
        card[product.id].inCard = 1

        localStorage.setItem("wishlist", JSON.stringify(card))

    }else{
        
        let card = {
            [product.id]: product
        }
        card[product.id].inCard = 1
       
        localStorage.setItem("wishlist", JSON.stringify(card))
    }

}