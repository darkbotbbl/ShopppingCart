<template>
    <div>
        <div>
            <span class="float-left item-title font-weight-bold">{{ cartItem.title }}</span>
            <span class="float-right arrow-icons">
                <i class="fa fa-arrow-circle-up mr-1 arrow-up pointer-hand" aria-hidden="true" @click="addCartItem(cartItem)"></i>
                <i class="fa fa-arrow-circle-down arrow-down pointer-hand" aria-hidden="true" @click="removeCartItem(cartItem)"></i>
            </span>
        </div><br />
        <div>
            <span class="float-left text-info item-price">{{ cartItem.price }}$ each</span>
            <span class="float-right item-quantity">Quantity: {{ cartItem.quantity }}</span> 
        </div><br />
    </div>
</template>


<script>
import { mapActions } from "vuex"

export default {
    name: "CartListItem",
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(["addCartItem", "removeCartItem"])
    }
    ,
    props: ["cartItem"]
}
</script>


<style scoped>
.item-price {
	font-weight: bold;
	color: teal;
}

.arrow-up {
	color: green;
}

.arrow-down {
	color: red;
}
</style>