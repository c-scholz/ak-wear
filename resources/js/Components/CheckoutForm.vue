<template>
    <form id="" class="checkout-form">
    </form>
</template>

<script>
import numeral from 'numeral'
import locales from 'numeral/locales'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    components: {
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            products: state => state.shop.products,
            motifs: state => state.shop.motifs,
            cart: state => state.cart.cart,
        })
    },
    created() {
    },
    mounted() {

        numeral.locale('de');
    },
    methods: {
        ...mapActions('shop', [
            'fetchMotifs',
            'fetchProducts',
        ]),
        formatPrice(number) {
            return numeral(number).format("0,0.00")
        },
    }
}
</script>

<style scoped>

</style>
