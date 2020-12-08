<template>
    <div>
        <div>
            <span class="float-left item-title">The Fullstack Hoodie</span>
            <span class="float-right arrow-icons">
                <i class="fa fa-arrow-circle-up mr- arrow-up" aria-hidden="true"></i>
                <i class="fa fa-arrow-circle-down arrow-down" aria-hidden="true"></i>
            </span>
        </div><br />
        <div>
            <span class="float-left text-info item-price">19.99$ each</span>
            <span class="float-right item-quantity">Quantity: 2</span> 
        </div><br />
    </div>
</template>


<script>
export default {
    name: "CartListItem",
    data() {
        return {

        }
    }
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