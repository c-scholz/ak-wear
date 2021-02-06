<template>
  <div>
    <input class="form-control inputAbstand" type="text" name="nameInput" placeholder="Hier Namen eintragen" v-on:keydown.enter="addName">
    <div class="nameContainer">
      <div class="row" v-for="(name, index) in names" :key="index">
          <div class="namelistButtons col-3 col-sm-2">
              <font-awesome-icon class="namelistButton" :icon="['fas', 'arrows-alt']" />
          </div>
          <div class="namelistName col-6 col-sm-8 noPadding" type="text">{{ name }}</div>
          <div class="namelistButtons col-3 col-sm-2 justify-content-end">
              <font-awesome-icon class="namelistButton" :icon="['fas', 'times']" v-on:click="removeName(index)" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {
      names: ['Max Mustermann', 'Marie Musterfrau']
    }
  },
  methods: {
    addName(event) {
      event.preventDefault();
      var val = event.target.value;
      if(val.length > 0) {
        this.names.push(val);
        event.target.value = '';
      }
    }, 
    removeName(index) {
      this.names.splice(index, 1);
    }
  }
}
</script>