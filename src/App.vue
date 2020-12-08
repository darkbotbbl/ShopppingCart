<template>
    <div id="app" class="container-fluid">
        <div class="row justify-content-center">
            <!-- CART LIST -->
            <app-cart-list></app-cart-list>
            <!-- PRODUCT LIST -->
            <app-product-list></app-product-list>
        </div>
    </div>
</template>


<script>
import CartList from "./components/cart/CartList"
import ProductList from "./components/product/ProductList"

export default {
    name: "App",
    data() {
        return {

        }
    },
    components: {
        appCartList: CartList,
        appProductList: ProductList,
    }
}
</script>


<style>

html {
    background-color: rgba(219, 198, 102, 0.575);
}
#app {
    margin: 8vh 0;
    background-color: rgba(219, 198, 102, 0.575);
}

</style>