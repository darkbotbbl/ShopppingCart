<template>
    <div>
        <div>
            <span class="float-left p-item-title">{{ productItem.title }}</span>
            <span class="float-right">
                <button class="btn btn-success" @click="addCartItem(productItem)">Add to Cart</button>
            </span><br />
            <p class="item-description mt-2">
                {{ productItem.description }}<br>
                <span class="item-price">${{ productItem.price }}</span>
            </p>
        </div><br>
    </div>
</template>


<script>
import { mapActions } from "vuex"

export default {
    name: "ProductListItem",
    data() {
        return {

        }
    },
    methods: {
        ...mapActions([
            "addCartItem"
        ])
    },
    props: ["productItem"]
}
</script>


<style scoped>
.p-item-title {
    font-size: 1.3rem;
    font-weight: bold;
}

.item-description {
    margin-bottom: 0;
}

.item-price {
    font-weight: bold;
    color: teal;
}

</style>