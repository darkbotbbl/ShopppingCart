<template>
    <div class="col-lg-8 product-list-box overflow-auto">
        <div class="text-center display-4">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
        </div>
        <hr />
        
        <div v-for="productItem in productItems" :key="productItem.id">
            <appProductListItem :productItem="productItem"/>
        </div>

        <div class="mb-5">
            <span class="float-right number-of-products">#products: {{ productCount }}</span>
        </div>
    </div>
</template>


<script>
import ProductListItem from "./ProductListItem"
import { mapGetters } from "vuex"

export default {
    name: "ProductList",
    data() {
        return {

        }
    },
    components: {
        appProductListItem: ProductListItem,
    },
    computed: {
        ...mapGetters([
            "productItems",
            "productCount"
        ])
    }
    ,
    created() {
        try {
            this.$store.dispatch("getProductItems")
        } catch (error) {
            console.log(error)
        }
    }
}
</script>


<style scoped>
/** product list */
.product-list-box {
    box-shadow: 0px 0px 4px 3px black;
    background-color: white;
    height: 80vh;

}

.number-of-products {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>