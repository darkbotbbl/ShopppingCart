<template>
	<div id="app">
		<div class="container">
			<h1 class="text-center">Shopping Cart</h1>

			<div class="row">
				<div class="col-3">
					<CartList />
				</div>

				<div class="col-9">
					<ProductList />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CartList from "./components/cart/CartList"
import ProductList from "./components/product/ProductList"

export default {
	name: 'App',
	components: {
		CartList,
		ProductList,
	}
}
</script>

<style>

</style>
