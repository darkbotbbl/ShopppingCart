<template>
	<div class="col-lg-3 cart-list-box">
		<div class="text-center display-4">
			<i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
			<span class="float-right"><i class="fas fa-house-damage"></i></span> <!-- replace this with a storefront-->
		</div>
		<hr />

		<app-cart-list-item></app-cart-list-item>
		
		<div class="m-3 tq-box">
			<span class="float-left total-quantity">Total Quantity: <span class="total-quantity-number">2</span></span>
			<span class="float-right remove"><i class="fas fa-calendar-alt"></i> Remove all</span>
		</div>
		<button class="btn btn-info form-control mt-3">Checkout (<span class="total-price">$39.98</span>)</button>
	</div>
</template>


<script>
import CartListItem from "./CartListItem"

export default {
	name: "CartList",
	data() {
		return {

		}
	},
	components: {
		appCartListItem: CartListItem,
	}
}
</script>


<style scoped>
/** Cart List */

.cart-list-box {
	height: 80vh;
	font-size: 1.1rem;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	overflow-x: hidden important;
	overflow-y: auto important;
}

.cart-list-box div:nth-child(1) {
	margin-top: 25vh;
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
	animation-duration: 1s;
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