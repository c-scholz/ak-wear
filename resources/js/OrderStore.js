import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import {baseColor, baseItem, baseOption, baseProduct, baseSize, baseMotif} from "./Mock/baseData"
import exampleProducts from "./Mock/exampleProducts"
import exampleMotifs from "./Mock/exampleProducts"

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
    ADD_TO_CART(state, payload) {
        state.cart.push(payload)
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
    SET_MOTIFS(state, motifs) {
        state.motifs = motifs
    },
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}

export const actions = {
    addToCart({commit, state}, item) {
        let commitItem = baseItem
        
        // set up cart related entries
        commitItem.cartItemId = state.cart.length
        commitItem.currentEdit = true

        // set up data from chosen product
        commitItem.itemId = item.id
        commitItem.name = item.name
        commitItem.products = item.products.map(product, index => {
            let commitProduct = baseProduct
            if(index = 0) commitProduct.currentEdit = true
            commitProduct.id = product.id
            commitProduct.name = product.name
            commitProduct.color = product.colors.find(color => color.id === product.defaultColor)
            commitProduct.motifColor = baseColor
            commitProduct.sizes = product.sizes.map(size => {
                let commitSize = baseSize
                commitSize.label = size.label
                return commitSize
            })
            commit.motifColor = baseColor
            return commitProduct
        })
        commitItem.default_image = item.default_image
        commitItem.price = item.price

        commit('ADD_TO_CART', commitItem)
    },
    removeFromCart({commit}, item) {
        commit('REMOVE_FROM_CART', item)
    },
    fetchMotifs({commit}) {
        axios
            .get('/api/motifs')
            .then(res => {
                //commit('SET_MOTIFS', res.data)
                commit('SET_MOTIFS', exampleMotifs.data)
            })
            .catch(err => console.log(err))
    },
    fetchProducts({commit}) {
        axios
            .get('/api/products')
            .then(res => {
                //commit('SET_PRODUCTS', res.data.data)
                commit('SET_PRODUCTS', exampleProducts.data)
            })
            .catch(err => console.log(err))
    },
    setTextileColor({commit}, item) {
        let commitItem = cart.find(cartItem => cartItem.currentEdit === true)
        let productIdx = commitItem.products.findIndex(product => product.currentEdit === true)

        commitItem.products[productIdx].color = item

        commit('UPDATE_CART_ITEM', commitItem)
    },
    setMotif({commit}, item) {
        let commitItem = cart.find(cartItem => cartItem.currentEdit === true)

        // set default motif color
        // TODO: check whether motifColor was already set and if the color id is in color list
        commitItem.products = commitItems.products.map(product => {
            product.motifColor = item.colors[item.defaultColor]
            return product
        })

        commitItem.motif = baseMotif
        commitItem.motif.id = item.id,
        commitItem.motif.name = item.name,
        commitItem.motif.front_image = item.front_image,
        commitItem.motif.back_image = item.back_image,
             
        commit('UPDATE_CART_ITEM', commitItem)
    }
}

const store = {
    state,
    getters,
    mutations,
    actions
}

export default new Vuex.Store(store);
