<template>
    <div>
        <ul>
            <li v-for="color in colors"  
                :key="color.name" 
                :id="color.name" 
                :class="{ 
                    active: color.name === activeColor
                }" 
                :style="{background: color.color_value}">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            colors: Array,
            type: String,
            text: String
        }, 
        data: function() {
            return {
                activeColor: 'hellgrau'
            }
        },
        methods: {
            toggleActive(color) {
                this.activeColor = color
            },
        }
    }
</script>

<style scoped>
    ul { list-style: none; padding: 0; margin: 0 auto; }
    li { 
        display: inline-block;
        height: 25px;
        width: 25px;
        border-radius: 6px;
        margin: 0 3.5px;
        cursor: pointer;
    }
</style>