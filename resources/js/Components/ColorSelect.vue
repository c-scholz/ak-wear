<template> 
    <div class="input-group">
        <label class="farbeText" :for="id">{{ label }}</label>
        <div class="input-group-prepend">
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" :id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span 
                        class="farbe" 
                        :style="{ background: colors.find(color => color.id === selectedColor) }" 
                    />
                    <font-awesome-icon :icon="['fas', 'share']" />
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <color-list />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorList from './ColorList'

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
        }
    },
    data() {
        return {
            selectedColor: 1
        }
    },
    components: {
        ColorList
    }
}
</script>

<style scoped>
.textilMotivFarbe .input-group {
    margin-bottom: 15px;
}

.textilMotivFarbe .input-group:last-child {
    margin-bottom: 0;
}

.textilMotivFarbe .input-group-prepend {
    margin-right: 0;
}

.textilMotivFarbe .input-group input::placeholder {
    color: #a6a6a6;
}

.textilMotivFarbe input.form-control:focus {
    color: #1a1a1a;
    border-color: #1a1a1a !important;
}

.textilMotivFarbe .input-group-text {
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

.textilMotivFarbe .btn-secondary:not(:disabled):not(.disabled):active:focus,
.textilMotivFarbe .btn-secondary:not(:disabled):not(.disabled).active:focus,
.textilMotivFarbe .show > .btn-secondary.dropdown-toggle:focus,
.textilMotivFarbe .btn-secondary:focus,
.textilMotivFarbe .btn-secondary.focus {
    box-shadow: none;
}

.textilMotivFarbe .farbe {
    margin: 4px 10px -1px 0;
}

.textilMotivFarbe .dropdown .btn.btn-secondary:focus {
    border-color: #1a1a1a;
}

.textilMotivFarbe .dropdown .btn.btn-secondary {
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

.textilMotivFarbe .dropdown .btn.btn-secondary svg {
    font-size: 11px;
    transform: rotate(45deg);
    margin-left: -2px;
}

.textilMotivFarbe .dropdown-toggle::after {
    display: none;
}

.textilMotivFarbe .dropdown-menu {
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

.textilMotivFarbe .dropdown-menu.show {
    transform: translate3d(0px, 43px, 0px) !important;
}

.textilMotivFarbe .dropdown-item {
    font-family: "Muli Light", sans-serif;
    padding: 4px 17px;
    cursor: pointer;
}

.textilMotivFarbe .dropdown-item:active,
.textilMotivFarbe .dropdown-item:focus,
.textilMotivFarbe .dropdown-item:hover {
    color: #1a1a1a;
    background: #f4f4f4;
}

.textilMotivFarbe .farbeText {
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
    .textilMotivFarbe .farbeText {
        display: flex;
    }

    .textilMotivFarbe .textilMotivFarbeMobilAbstand {
        margin-bottom: 15px;
    }
}
</style>