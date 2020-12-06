<template>
	<div>
		<div class="cart-list-box">

			<div class="cart-icon-box">
				<p class="text-center"><i class="fa fa-shopping-cart align-middle" aria-hidden="true"></i></p>
			</div>

			<div class="cart-item-box">
				<div class="row">
					<div class="col-8">
						<h6>The Fullstack Hoodie</h6>
						<p class="text-primary text-bold">19.99$ each</p>
					</div>
					<div class="4">
						<h6>
						<i class="fa fa-chevron-circle-up mr-1" aria-hidden="true"></i>
						<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
						</h6>
						<p class="">Quantity: 2</p>
					</div>
				</div>
			</div>

			<div class="cart-quantity-box">
				<div class="row justify-content-center">
					<div class="col-6">
						<p>Total Quantity: 2</p>
					</div>
					<div class="col-4">
						<p><i class="fas fa-calendar-minus"></i> Remove all</p>
					</div>
				</div>
			</div>

			<div class="checkout-btn-box">
				<button class="btn btn-success form-control">Checkout ($39.98)</button>
			</div>

		</div>
	</div>
</template>


<script>
export default {
	name: "CartList",
	data() {
		return {
			title: "CartList"
		}
	}
}
</script>


<style scoped>
.cart-list-box {
	background-color: aqua;
}
</style>