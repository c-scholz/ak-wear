<template>
  <div class="container">
    <div class="row justify-content-center mt-0">
      <div class="col-12 text-center p-0">
        <order-form :products="products" />
      </div> <!-- Col-12 -->
    </div> <!-- Row -->
  </div> <!-- Container -->
</template>

<script>
import OrderForm from '../Components/OrderForm'

export default {
  components: {
    OrderForm
  },
  props: {
    products: Array
  }
}
</script>