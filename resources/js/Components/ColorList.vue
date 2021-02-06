<template>
    <div>
        <p>{{ text }}</p>
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
    p { font-family: 'Muli ExtraBold', sans-serif; margin-bottom: -4px; }
    ul { list-style: none; padding: 0; margin: 10px auto 0; }
    li { 
        display: inline-block;
        height: 24px;
        width: 24px;
        border-radius: 6px;
        transition: transform 0.25s;
        margin: 2.5px 5.5px;
        cursor: pointer;
    }
    li:not(.active):hover { transform: scale(1.1); }
    li.active { transform: scale(1.2); box-shadow: 0 0 0 2px #ffae27; }
</style>