const mutations = {
    ADD_TO_CART(state, payload) {
        state.cart.push(payload)
    },
    SET_CURRENT_ITEM(state, payload) {
        state.cart = state.cart.map(cartItem => {
            cartItem.currentEdit = false
            if(cartItem.cartItemId === payload) cartItem.currentEdit = true
            return cartItem
        })
    },
    SET_CURRENT_PRODUCT(state, payload) {
        state.cart = state.cart.map(cartItem => {
            if(cartItem.currentEdit) cartItem.products = cartItem.products.map(product => {
                product.currentEdit = false
                if(product.id === payload) product.currentEdit = true
                return product
            })
            return cartItem
        })
    },
    UPDATE_CART_ITEM(state, payload) {
        let idx = state.cart.findIndex(cartItem => cartItem.currentEdit == true)
        state.cart[idx] = payload
    },
    REMOVE_FROM_CART(state, payload) {
        let idx = state.cart.findIndex(cartItem => cartItem.cartItemId === payload.cartItemId)
        state.cart.splice(idx, 1)
    },
    RESET_CART(state) {
        state.cart = []
    },
}

export default mutations