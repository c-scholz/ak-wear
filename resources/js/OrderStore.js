import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cart: [],
    motifs: [],
    products: []
}

const getters = {
    cart: state => {
        return state.cart
    },
    motifs: state => {
        return state.motifs
    },
    products: state => {
        return state.products
    }
}

const mutations = {
    ADD_TO_CART(state, item) {
        let idx = state.cart.push(item)
        state.cart[idx].currentEdit = true
    },
    UPDATE_CART_ITEM(state, item) {
        let idx = state.cart.findIndex(cartItem => cartItem.currentEdit == true)
        state.cart[idx] = item
    },
    REMOVE_FROM_CART(state, item) {
        let idx = state.cart.items.findIndex(cartItem => cartItem.id === item.id)
        state.cart.splice(idx, 1)
    },
    SET_MOTIFS(state, motifs) {
        state.motifs = motifs
    },
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}

export const actions = {
    addToCart({commit}, item) {
        commit('ADD_TO_CART', item)
    },
    removeFromCart({commit}, item) {
        commit('REMOVE_FROM_CART', item)
    },
    fetchMotifs({commit}) {
        axios
            .get('/api/motifs')
            .then(res => {
                commit('SET_MOTIFS', res.data)
            })
            .catch(err => console.log(err))
    },
    fetchProducts({commit}) {
        axios
            .get('/api/products')
            .then(res => {
                commit('SET_PRODUCTS', res.data.data)
            })
            .catch(err => console.log(err))
    },
}

const store = {
    state,
    getters,
    mutations,
    actions
}

export default new Vuex.Store(store);
