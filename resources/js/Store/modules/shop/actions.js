import axios from 'axios'
import exampleMotifs from '../../mock/exampleMotifs'
import exampleProducts from '../../mock/exampleProducts'

const actions = {
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

}

export default actions