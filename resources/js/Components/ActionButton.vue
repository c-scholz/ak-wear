<template>
    <button class="uebernehmen">
        <span class="uebernehmenText"><font-awesome-icon :icon="icon" />&nbsp;&nbsp;{{ label }}</span>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped>

.uebernehmen {
    font-family: "Muli ExtraBold", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    color: #fff;
    background-color: #1A1A1A;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 15px;
    margin-top: 15px;
    width: 100%;
}

.linear-stop1 {
    stop-color:#ffae27;
}

.linear-stop2 {
    stop-color: #d93548;
}
.uebernehmen:focus .uebernehmenText,
.uebernehmen:hover .uebernehmenText {
    background-image: linear-gradient(to bottom right, #ffae27, #d93548);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

 .uebernehmen.inactive:focus .uebernehmenText,
 .uebernehmen.inactive:hover .uebernehmenText {
    background-image: linear-gradient(to bottom right, #a6a6a6, #a6a6a6);
    color: #a6a6a6;
}

.uebernehmen:focus .fa-copy path,
.uebernehmen:hover .fa-copy path,
.uebernehmen:focus .fa-share path,
.uebernehmen:hover .fa-share path {
    fill: url(#linear);
}
</style>