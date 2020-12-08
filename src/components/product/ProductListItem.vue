<template>
    <div>
        <div>
            <span class="float-left p-item-title">The fullstack hoodie</span>
            <span class="float-right"><button class="btn btn-success">Add to Cart</button></span><br />
            <p class="item-description mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, numquam unde, dolorum neque corrupti enim aliquid soluta nobis<br>
                <span class="item-price">$19.99</span>
            </p>
        </div><br>
    </div>
</template>


<script>
export default {
    name: "ProductListItem",
    data() {
        return {

        }
    }
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