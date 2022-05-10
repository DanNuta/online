let pages = document.getElementById("pages");



function showPages(){
    let localPage = JSON.parse(localStorage.getItem("pages"));


    pages.innerHTML += `

       
        <div class="item">

            
        <div class='card_items'>

        <h4 class='title_responsive'>${localPage.title}</h4>


        <div class="left_images">
        <img class='img' src="${localPage.img}" alt="Sfredel"  />
        </div>

        <div class="right_text">
            <h4>${localPage.title}</h4>

            <div class="element_about_products">

                <div class="adauga_recenzie">
                    <div className="recenzii">
                        <span><img src="../../assets/icons/star.png" alt="" /></span>
                        <span><img src="../../assets/icons/star.png" alt="" /></span>
                        <span><img src="../../assets/icons/star.png" alt="" /></span>
                        <span><img src="../../assets/icons/star.png" alt="" /></span>
                        <span><img src="../../assets/icons/star.png" alt="" /></span>
                    </div>

                    <div class="nr_of_recenzie">
                        <p>(6) Recenzii</p>
                    </div>

                    <div class="space">
                        <p>|</p>
                    </div>

                    <div class="adauga_o_recenzie">
                        <p>Adauga o recenzie</p>
                    </div>
                </div>


                <div class="verify_element_stock">
                    <span><img src="../../assets/icons/verify.png" alt="" /> In stoc</span>
                    <p>Cod: <span>${localPage.id}</span></p>
                </div>


                <div class="price">
                    <span><h1 class='price_id'>${localPage.price} lei</h1> <sup>${localPage.price} lei</sup></span>
                </div>

            </div>


            <div class="description">
                <hr />
                <h2>Description:</h2>
                <p>${localPage.description}</p>
            </div>


            <div class="add_to_cart">

            
                <li id="shop_icon"><img src="../../assets/icons/shop.png" alt="" srcset=""></li>
                <li id="wishlist" ><img src="../../assets/icons/Vector.png" alt="" srcset=""></li>


            </div>
        </div>
        </div>




        </div>

    `

    
}

showPages()