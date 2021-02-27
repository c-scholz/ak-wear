<template>
    <!-- svg definition for fontawesome svgs to have linear gradient-->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-settings">
        <defs>
            <linearGradient id="linear" gradientTransform="rotate(45)">
                <stop class="linear-stop1" offset="0%"></stop>
                <stop class="linear-stop2" offset="100%"></stop>
            </linearGradient>
        </defs>
    </svg>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* hide svg which is used to create linear color gradient in fontawesome icons */
    .svg-settings {
        position: absolute !important;
        height: 0px;
        width: 0px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
    }
</style>