import Vue from 'vue'
import Vuex from 'vuex'

import cartModule from './modules/cart'
import shopModule from './modules/shop'

Vue.use(Vuex)

const state = {
}

const getters = {
}

const mutations = {
}

export const actions = {
}

const store = {
    state,
    getters,
    mutations,
    actions
}

export default new Vuex.Store({
    modules: {
        cart: cartModule,
        shop: shopModule
    }
});
