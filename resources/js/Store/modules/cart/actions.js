import {baseColor, baseItem, baseProduct, baseSize, baseMotif} from "../../mock/baseData"

const actions = {
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
    setCurrentItem({commit}, item){
        commit('SET_CURRENT_ITEM', item)
    },
    removeFromCart({commit}, item) {
        commit('REMOVE_FROM_CART', item)
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
    },
    setMotifColor({commit}, item) {
        let commitItem = cart.find(cartItem => cartItem.currentEdit === true)
        let productIdx = commitItem.products.findIndex(product => product.currentEdit === true)
        
        commitItem.products[productIdx].motifColor = item
    
        commit('UPDATE_CART_ITEM', commitItem)
    }

}

export default actions