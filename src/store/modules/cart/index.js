import axios from "axios"

const state = {
    cartItems: [],
}

const getters = {
    cartItems: state => state.cartItems,
    // TODO - Write the getters to find the total price and the total quantity
}

const mutations = {
    UPDATE_CART_ITEMS(state, items) {
        state.cartItems = items
    }
}

const actions = {
    async getCartItems({ commit }) {
        try {
            let items = await axios.get('/api/cart')
            commit("UPDATE_CART_ITEMS", items.data)
        } catch (error) {
            console.log("An error occured trying to get cart items")
        }
    },
    async addCartItem({ commit }, cartItem) {
        try {
            let items = await axios.post("/api/cart", cartItem)
            commit("UPDATE_CART_ITEMS", items.data)
        } catch (error) {
            console.log("An error occured while adding a cart item")
        }
    },
    async removeCartItem({ commit }, cartItem) {
        try {
            let items = await axios.post("/api/cart/delete", cartItem)
            commit("UPDATE_CART_ITEMS", items.data)
        } catch (error) {
            console.log("An error occured removing a cart item")
        }
    },
    async removeAllCartItems({ commit }) {
        try {
            let items = await axios.post("/api/cart/delete/all")
            commit("UPDATE_CART_ITEMS", items.data)
        } catch (error) {
            console.log("An error coccured while deleting all cart items")
        }
    }
}

const cartModule = {
    state,
    getters,
    mutations,
    actions
}

export default cartModule;