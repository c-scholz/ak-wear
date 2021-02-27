<template>
    <div id="shoppingCartFooter">
        <div class="container noPadding4Ever">
            <div class="row shoppingCart">
                <div class="col-3 padding375">
                    <div class="shoppingCartContainer">
                        <div>
                            <img class="img-fluid" src="../../assets/img/add_product.svg">
                            <span class="ersteZeile">Hinzufügen</span>
                        </div>
                    </div>
                </div>
                <div class="col-3 padding375">
                    <div class="shoppingCartContainer inactive">
                        <div>
                            <img class="img-fluid" src="../../assets/img/add_hoodies.svg">
                            <span class="ersteZeile">Hoodies</span>
                        </div>
                    </div>
                </div>
                <div class="col-3 padding375">
                    <div class="shoppingCartContainer active">
                        <div>
                            <img class="img-fluid" src="../../assets/img/add_shirts.svg">
                            <span class="ersteZeile">Shirts</span>
                        </div>
                    </div>
                </div>
                <div class="col-3 padding375">
                    <div class="shoppingCartContainer inactive">
                        <div>
                            <img class="img-fluid" src="../../assets/img/add_bundles.svg">
                            <span class="ersteZeile">Bundles</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/* ###################### ONLINE SHOP - SHOPPING CART ###################### */
#shoppingCartFooter {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    border-top: 2px solid #f2f2f2;
    border-bottom: 2px solid #fff;
    margin-top: 15px;
}

.shoppingCartContainer {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 2px solid #f2f2f2;
    border-radius: 12px;
    padding: 7.5px 15px;
    cursor: pointer;
    -ms-user-select: None;
    -moz-user-select: None;
    -webkit-user-select: None;
    user-select: None;
    transition: all 0.25s;
}

.shoppingCartContainer:active,
.shoppingCartContainer:focus,
.shoppingCartContainer:hover {
    border-color: #1a1a1a;
    transition: all 0.25s;
}

.shoppingCartContainer.active {
    border-color: #1a1a1a;
}

.shoppingCartContainer.inactive {
    cursor: not-allowed;
}

.shoppingCartContainer.inactive:active,
.shoppingCartContainer.inactive:focus,
.shoppingCartContainer.inactive:hover {
    border-color: #f2f2f2;
}

.shoppingCartContainer.inactive div {
    opacity: 0.35;
}

.shoppingCart {
    padding: 7.5px 3.75px 7.5px;
    margin: 0 26px 0 19px;
}

.shoppingCart img {
    height: 40px;
    margin-right: 12px;
}

.shoppingCart .ersteZeile {
    position: relative;
    top: 3px;
    font-family: "Futura Bold Italic", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
}

@media (max-width: 991px) {
    .abstandhalterFooter {
        height: 74px;
    }

    .shoppingCartContainer {
        height: 58px;
        margin-bottom: -5.5px;
    }
    
    .shoppingCart img {
        margin-right: 0;
    }
    
    .shoppingCart .ersteZeile {
        display: none;
    }

    .shoppingCart > div {
        margin-bottom: 7.5px;
    }

    .shoppingCart > div:last-child {
        margin-bottom: 0;
    }

    .shoppingCart {
        margin: 0 26px 0 19px;
    }
    
    .shoppingCart .schwarzerBalken {
        display: none;
    }
}
/* ###################### ONLINE SHOP - SHOPPING CART ###################### */
</style>