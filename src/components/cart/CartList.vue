<template>
	<div class="col-lg-3 cart-list-box">
		<div class="text-center display-4">
			<i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
		</div>
		<hr />

		<span v-for="cartItem in cartItems" :key="cartItem.id">
			<app-cart-list-item :cartItem="cartItem"></app-cart-list-item>
		</span>

		<div class="m-3 tq-box">
			<span class="float-left total-quantity">Total Quantity: <span class="total-quantity-number">{{ cartTotalQuantity }}</span></span>
			<span class="float-right remove pointer-hand" @click="removeAllCartItems()"><i class="fas fa-calendar-alt"></i> Remove all</span>
		</div>
		<button class="btn btn-info form-control mt-3">Checkout (<span class="total-price">${{ cartTotalPrice }}</span>)</button>
	</div>
</template>

<script>
import CartListItem from "./CartListItem"
import { mapGetters, mapActions } from "vuex"

export default {
	name: "CartList",
	data() {
		return {

		}
	},
	computed: {
		...mapGetters([
			"cartItems",
			"cartTotalPrice",
			"cartTotalQuantity"
		])
	},
	components: {
		appCartListItem: CartListItem,
	},
	methods: {
		...mapActions(["removeAllCartItems"])
	},
	created() {
		this.$store.dispatch("getCartItems")
	}
}
</script>

/** Global styles */
<style>

.pointer-hand {
	cursor: pointer;
}

</style>


<style scoped>
/** Cart List */

.cart-list-box {
	height: 80vh;
	font-size: 1.1rem;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	overflow-x: hidden important;
	overflow-y: auto important;
}

.tq-box {
	font-size: 1rem;
}

.total-price {
	font-weight: bolder;
	color: yellow;
}

.total-quantity-number {
	font-size: 1.1rem;
	font-weight: bold;
}

.remove {
	font-size: 1.1rem;
	font-weight: bold;
	color: red;
}

.cart-icon{
	animation-duration: 5s;
	animation-name: slidein;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

@keyframes slidein {
	from {
		margin-left: -90%;
		color: rgb(20, 20, 3);
	}

	to {
		margin-left: 60%;
		color: green;
	}
}


</style>