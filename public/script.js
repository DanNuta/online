let slider = document.querySelector("#slider_tracker");
let slide = Array.from(slider.children);
let btnRight = document.getElementById("btn_right");
let btnLeft = document.getElementById("btn_left");

let arrowUp = document.querySelector(".arrow_up");

arrowUp.addEventListener("click", () =>{

    document.body.scrollIntoView({
      behavior: "smooth",
    });
    
  })

const slideWidth = slide[0].getBoundingClientRect().width;



slide.map((item, index) =>{
    item.style.left = slideWidth * index + "px"
})


btnRight.addEventListener("click", () =>{
    let curentSlide = slider.querySelector(".curent_slide");
    let nextSlide = curentSlide.nextElementSibling;
    let amountToMove = nextSlide.style.left;

    slider.style.transform = "translateX(-" + amountToMove + ")";

    curentSlide.classList.remove("curent_slide");
    nextSlide.classList.add("curent_slide") 
})


btnLeft.addEventListener("click", () =>{
    let curentSlide = slider.querySelector(".curent_slide");
    let prevSlide = curentSlide.previousElementSibling;
    let amountToMove = prevSlide.style.left;

    slider.style.transform = "translateX(-" + amountToMove + ")";


    curentSlide.classList.remove("curent_slide");
    prevSlide.classList.add("curent_slide")
})



let products = [
    {
        title: "Colier",
        description: "Lore ipsum",
        price: 10,
        img: "https://aureola-lombard.md/products/images/product-1-276.jpg",
        filter: "bijuterii",
        inCard: 0,
        id: 1
    },
    {
        title: "Colier",
        description: "Lore ipsum",
        price: 70,
        img: "https://www.aureola-lombard.md/products/images/product-4-256.jpg",
        filter: "bijuterii",
        inCard: 0,
        id: 2
    },
    {
        title: "Inel",
        description: "Lore ipsum",
        price: 60,
        img: "https://www.bijuteriastil.ro/files/cache/product/inel-aur-roz-18k-diamante-safir-roz-HO1198-cc-400x400.png",
        filter: "bijuterii",
        inCard: 0,
        id: 3
    },
    {
        title: "Tapca",
        description: "Lore ipsum",
        price: 30,
        img: "https://www.tezaurshop.ro/assets/produse/491024-0.png",
        filter: "bijuterii",
        inCard: 0,
        id: 4
    },
    {
        title: "Agrafa",
        description: "Lore ipsum",
        price: 40,
        img: "https://s.cdnmpro.com/125081904/custom/cat/cat_thumb_56.png",
        filter: "bijuterii",
        inCard: 0,
        id: 5
    }
]


window.onload = () =>{
    localStorage.setItem("products", JSON.stringify(products))
}



function showPage(){
    localStorage.setItem("pages", JSON.stringify(products[0]))
}

function showPage1(){
    localStorage.setItem("pages", JSON.stringify(products[1]))
}


function showPage2(){
    localStorage.setItem("pages", JSON.stringify(products[2]))
}




function addToWishlist(){
    let wishList = JSON.parse(localStorage.getItem("wishlist"))

    if(wishList){

        let wish = {
            ...wishList,
            [products[0].id]: products[0]
        }
        wish[products[0].id].inCard = 1
        localStorage.setItem("wishlist", JSON.stringify(wish))

    }else{

        let wish = {
            [products[0].id]: products[0]
        }
        wish[products[0].id].inCard = 1
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }

}



function addToWishlist1(){
    let wishList = JSON.parse(localStorage.getItem("wishlist"))

    if(wishList){

        let wish = {
            ...wishList,
            [products[1].id]: products[1]
        }
        wish[products[1].id].inCard = 1
        localStorage.setItem("wishlist", JSON.stringify(wish))

    }else{

        let wish = {
            [products[1].id]: products[1]
        }

        wish[products[1].id].inCard = 1
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }

}




function addToWishlist2(){
    let wishList = JSON.parse(localStorage.getItem("wishlist"))

    if(wishList){

        let wish = {
            ...wishList,
            [products[2].id]: products[2]
        }
        wish[products[2].id].inCard = 1
        localStorage.setItem("wishlist", JSON.stringify(wish))

    }else{

        let wish = {
            [products[2].id]: products[2]
        }

        wish[products[2].id].inCard = 1
        localStorage.setItem("wishlist", JSON.stringify(wish))
    }

}




