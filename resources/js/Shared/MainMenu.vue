<template>
    <div>
        <router-link :to="{ name: 'index'}">Start</router-link>
        <router-link :to="{ name: 'index', hash: '#about' }">Über uns</router-link>
        <router-link :to="{ name: 'index', hash: '#portfolio' }">Produkte</router-link>
        <router-link :to="{ name: 'index', hash: '#team' }">Produkte</router-link>
        <router-link :to="{ name: 'index', hash: '#services' }">Produkte</router-link>
        <router-link :to="{ name: 'order'}">Bestellen</router-link>
        <router-link :to="{ name: 'cart'}">Warenkorb</router-link>
        <a class="whatappChat" href="/whatsapp" target="_blank"><font-awesome-icon :icon="['fab', 'whatsapp']" />&nbsp;&nbsp;WhatsApp Chat</a>
  </div>
</template>

<script>
export default {  
}
</script>
