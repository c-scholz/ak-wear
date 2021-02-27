<template>
  <div class="container">
    <div class="row justify-content-center mt-0">
      <div class="col-12 text-center p-0">
        <checkout-form/>
      </div> <!-- Col-12 -->
    </div> <!-- Row -->
  </div> <!-- Container -->
</template>

<script>
import CheckoutForm from '../Components/CheckoutForm'

export default {
  components: {
    CheckoutForm
  }
}
</script>