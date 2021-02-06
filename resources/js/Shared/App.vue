<template>
    <div id="app">
        <main-menu></main-menu>
        <router-view />
    </div>
</template>

<script>
import MainMenu from '../Shared/MainMenu'

export default {
    components: {
        MainMenu
    }
}
</script>