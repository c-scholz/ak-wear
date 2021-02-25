<template>
  <div class="row">
    <div class="col-6 mobile575">
      <button v-if="buttonPrev" type="button" name="previous" class="previous stepButton" v-on:click="$emit('prev-tab')">
        <span>
          <span><font-awesome-icon :icon="['fas', 'reply']" />&nbsp;&nbsp;Zurück</span>
        </span>
      </button>
    </div>
    <div class="col-6 mobile575">
      <button v-if="buttonNext" type="button" name="next" class="next stepButton" v-on:click="$emit('next-tab')">
        <span>
          <span>Weiter&nbsp;&nbsp;<font-awesome-icon style="transform: scaleX(-1)" :icon="['fas', 'reply']" /></span>
        </span>
      </button>
      <button v-if="buttonFinal" type="button" name="next" class="next stepButton" v-on:click="$emit('add-to-cart')">
        <span>
          <span>Warenkorb&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></span>
        </span>
      </button>
    </div>
    <div class="col-12 noPadding575">
      <div class="alertContainer">
        <div class="alert-primary" role="alert">
          &nbsp;<font-awesome-icon style="transform: scaleX(-1)" :icon="['fas', 'exclamation']" />&nbsp;&nbsp;{{ alert }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'buttonPrev': Boolean,
    'alert': String,
    'buttonNext': Boolean,
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
  .stepButton:hover .fa-reply path, .stepButton:hover .fa-check path {
    fill: url(#linear);
  }
</style>