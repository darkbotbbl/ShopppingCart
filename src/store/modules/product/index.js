import axios from 'axios'

const state = {
    productItems: [],
}

const getters = {
    productItems: state => state.productItems,
    productCount: state => state.productItems.length,
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, items) {
        state.productItems = items
    },
}

const actions = {
    async getProductItems({ commit }) {
        try {
            let items = await axios.get("/api/products")
            commit("UPDATE_PRODUCT_ITEMS", items.data)
        } catch (error) {
            console.log("An error occurred while fetching the data in the actions.")
        }
    }
}

const productModule = {
    state,
    getters,
    mutations,
    actions
}

export default productModule;