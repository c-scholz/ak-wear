<template> 
    <div class="input-group">
        <label class="farbeText" :for="id">{{ label }}</label>
        <div class="input-group-prepend">
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span 
                        class="farbe" 
                        :style="{ background: activeColor > -1 ? transformToCssBackground(colors.find(color => color.id === activeColor).values) : 'gray' }" 
                    />
                    <font-awesome-icon :icon="['fas', 'share']" />
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <ul>
                        <li v-for="color in colors" 
                            :key="color.id" 
                            :class="{
                                active: color.id === activeColor
                            }" 
                            :style="{background: transformToCssBackground(color.values)}" 
                            v-on:click="selectColor(color)"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        id: {
            type: String,
            require: true
        },
        colors: {
            type: Array,
            require: true
        },
        selectedColor: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            activeColor: -1
        }
    },
    created: function() {
        this.activeColor = this.selectedColor
    },
    methods: {
        selectColor(color) {
            this.activeColor = color.id

            this.$emit('color-select', color)
        },
        transformToCssBackground(colorValues) {
            switch(colorValues.length) {
                case 0:
                    console.warn('Could not transform values to CSS background string: Empty array!')
                    return ''
                // single color
                case 1:
                    return `${colorValues[0]}`
                // two colors as linear gradient
                case 2:
                    return `linear-gradient(135deg, ${colorValues[0]} 50%, ${colorValues[1]} 50%)`
                // three or more colors as conic gradient
                default:
                    return `conic-gradient(${colorValues.map((colorValue, idx) => {
                        return `${colorValue} calc((360deg/${colorValues.length})*${idx}) calc((360deg/${colorValues.length})*${idx + 1})${idx < colorValues.length - 1 ? ', ' : ''}`
                    }).join('')})`
            }
        },
    }
}
</script>

<style scoped>
.input-group {
    margin-bottom: 15px;
}

.input-group:last-child {
    margin-bottom: 0;
}

.input-group-prepend {
    margin-right: 0;
}

.input-group input::placeholder {
    color: #a6a6a6;
}

input.form-control:focus {
    color: #1a1a1a;
    border-color: #1a1a1a !important;
}

.input-group-text {
    font-family: "Muli Light", sans-serif;
    justify-content: center;
    width: 60px;
    padding: 0;
    color: #1a1a1a;
    background-color: transparent;
    border: 2px solid #e6e6e6;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus,
.btn-secondary:focus,
.btn-secondary.focus {
    box-shadow: none;
}

.farbe {
    height: 25px;
    width: 25px;
    border: 2px solid black;
    border-radius: 6px;
    margin: 4px 10px -1px 0;
    cursor: pointer;
}

.dropdown .btn.btn-secondary:focus {
    border-color: #1a1a1a;
}

.dropdown .btn.btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Muli Light", sans-serif;
    color: #1a1a1a;
    line-height: 1.4;
    background: transparent;
    width: 200px;
    max-width: 82px;
    border: 2px solid #e6e6e6;
    border-radius: 0;
    border-top-right-radius: 12px;
}

.dropdown .btn.btn-secondary svg {
    font-size: 11px;
    transform: rotate(45deg);
    margin-left: -2px;
}

.dropdown-toggle::after {
    display: none;
}

.dropdown-menu {
    border: 2px solid #1a1a1a;
    border-radius: 12px;
    border-top-right-radius: 0;
    min-width: 100%;
    padding: 7px 3.5px 1px;
    width: 139px;
    z-index: 99;
    top: 11px !important;
    left: -57px !important;
}

.dropdown-menu.show {
    transform: translate3d(0px, 43px, 0px) !important;
}

.dropdown-item {
    font-family: "Muli Light", sans-serif;
    padding: 4px 17px;
    cursor: pointer;
}

.dropdown-item:active,
.dropdown-item:focus,
.dropdown-item:hover {
    color: #1a1a1a;
    background: #f4f4f4;
}

.farbeText {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Muli ExtraBold", sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    border: 2px solid #e6e6e6;
    border-right: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    flex: auto;
}

@media (max-width: 1199px) {
    .farbeText {
        display: flex;
    }

    .textilMotivFarbeMobilAbstand {
        margin-bottom: 15px;
    }
}

ul { 
    list-style: none; 
    padding: 0; 
    margin: 0 auto; 
}

li { 
    display: inline-block;
    height: 25px;
    width: 25px;
    border-radius: 6px;
    margin: 0 3.5px;
    cursor: pointer;
}

li.active {
    border: 2px solid black;
}
</style>