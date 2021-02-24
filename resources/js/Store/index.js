import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import cartModule from './modules/cart'
import shopModule from './modules/shop'



Vue.use(Vuex)

// persist store
const vuexLocalStorage = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

// global state
const state = {
}

const getters = {
}

const mutations = {
}

export const actions = {
}

// global store
const store = {
    state,
    getters,
    mutations,
    actions
}

export default new Vuex.Store({
    store: store,
    modules: {
        cart: cartModule,
        shop: shopModule
    },
    plugins: [vuexLocalStorage.plugin]
});
