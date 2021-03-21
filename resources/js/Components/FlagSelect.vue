<template>
    <div class="input-group">
        <div class="input-group-prepend">
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="flagge">Land</span><font-awesome-icon :icon="['fas', 'share']" />
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <div class="flaggenSuche">
                        <input type="text" class="form-control" placeholder="Suchen..">
                    </div>
                    <div v-for="language in languages" :key="language.key" class="dropdown-item" v-on:click="alert('clicked');">
                        <country-flag :country="language.flagKey" class="flagge" size='small' style="margin-right: -12px; transform: scale(.32);"/>{{ language.name }}
                    </div>
                </div>
            </div>
        </div>
        <span class="namenslisteFlaggen" id="namenslisteFlaggen">Marie Musterfrau</span>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
import languages from '../languages'

export default {
    components: {
        CountryFlag
    },
    data () {
        return {
            languages: languages
        }
    }    
}
</script>

<style scoped>
.input-group {
    margin-bottom: 15px;
}

.flaggenSuche { padding: 0 15px; }

.flaggenSuche input {
    font-family: "Muli ExtraBold", sans-serif;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 2px solid #f2f2f2;
    border-radius: 12px;
    height: 40px;
    padding: 0 0.75rem;
    margin-bottom: 5px;
}

.flagge {
    margin-right: 10px;
}

.namenslisteFlaggen {
    font-family: "Muli Light", sans-serif;
    text-align: left;
    line-height: 1.4;
    border: 2px solid #f2f2f2;
    border-left: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 0.375rem 0.75rem;
    flex: auto;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>