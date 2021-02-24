<template>
  <div class="row">
    <div class="col-3 mobileNone575">
      <button v-if="buttonPrev" type="button" name="previous" class="previous stepButton" v-on:click="$emit('prev-tab')">
        <span>
          <span class="mobileNone"><font-awesome-icon :icon="['fas', 'reply']" />&nbsp;&nbsp;Zurück zu {{ buttonPrev }}</span>
          <span class="mobile"><font-awesome-icon :icon="['fas', 'reply']" />&nbsp;&nbsp;Zurück</span>
        </span>
      </button>
    </div>
    <div class="col-12 col-sm-6">
      <div class="form-title">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="col-3 mobileNone575">
      <button v-if="buttonNext" type="button" name="next" class="next stepButton"  v-on:click="$emit('next-tab')">
        <span>
          <span class="mobileNone">Weiter zu {{ buttonNext }}&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'share']" /></span>
          <span class="mobile">Weiter&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'share']" /></span>
        </span>
      </button>
      <button v-if="buttonFinal" type="button" name="next" class="next stepButton" v-on:click="$emit('add-to-cart')">
        <span>
          <span class="mobileNone">Zum Warenkorb&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></span>
          <span class="mobile">Warenkorb&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'buttonPrev': String,
    'title': String,
    'buttonNext': String,
    'buttonFinal': Boolean
    }
}
</script>

<style>
  .linear-stop1 {
    stop-color:#ffae27;
  }
  .linear-stop2 {
    stop-color: #d93548;
  }
  .stepButton:focus .fa-reply path, .stepButton:focus .fa-check path, .stepButton:focus .fa-share path,
  .stepButton:hover .fa-reply path, .stepButton:hover .fa-check path, .stepButton:hover .fa-share path {
    fill: url(#linear);
  }
</style>