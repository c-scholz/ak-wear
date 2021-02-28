<template>
    <div>
        <label :for="id">{{ label }}</label>
        <textarea class="form-control" :id="id" :name="name" :placeholder="placeholder" rows="5" />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
            default: "Hier Eingeben"
        },
    }
    
}
</script>

<style scoped>

.form-control {
    font-family: 'Muli Light', sans-serif;
    font-size: inherit;
}

label {
    display: block;
    font-family: 'Muli ExtraBold', sans-serif;
    text-align: left;
    margin: 0 0 9px 3.5px;
}
</style>