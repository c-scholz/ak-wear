<template>
<div>
    <div class="shoppingCartButtons" @click="toggleModal">
        <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
    </div>
    <div
        ref="modal"
        class="modal fade"
        :class="{show, 'd-block': active}"
        tabindex="-1"
        role="dialog"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <!-- <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="toggleModal"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> -->
                <div class="modal-body">
                    <p>Möchtest du das Produkt wirklich löschen?</p>
                    <div class="jaNeinButtonContainer">
                        <button
                            type="button"
                            name="yes"
                            class="jaNeinButton jaButton">
                                <span>Ja</span>
                        </button>
                        <button
                            type="button"
                            name="no"
                            class="jaNeinButton"
                            data-dismiss="modal"
                            aria-label="no"
                            @click="toggleModal">
                                <span>Nein</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            show: false
        };
    },
    methods: {
        toggleModal() {
                const body = document.querySelector("body");
                this.active = !this.active;
                this.active
                ? body.classList.add("modal-open")
                : body.classList.remove("modal-open");
                setTimeout(() => (this.show = !this.show), 10);
        }
    }
};
</script>

<style scoped>
    .modal-content { border: 2px solid #1a1a1a; border-radius: 15px; padding: 15px; }
    .modal-body { padding: 0; }
    p { font-family: 'Muli ExtraBold', sans-serif; font-size: 16px; text-align: center; margin-bottom: 15px; }
    .jaNeinButtonContainer { display: flex; justify-content: center; }
    .jaNeinButton {
        font-family: "Muli ExtraBold", sans-serif;
        text-transform: uppercase;
        font-size: 11px;
        color: #fff;
        width: 120px;
        background-color: #1A1A1A;
        border: 1px solid #1A1A1A;
        border-radius: 25px;
        padding: 8px 15px;
    }
    .jaButton { margin-right: 15px; }
    .jaNeinButton:focus span, .jaNeinButton:hover span {
        background-image: linear-gradient(to bottom right, #ffae27, #d93548);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .shoppingCartButtons { display: inline-block; cursor: pointer; }
    .shoppingCartButton {
        display: inline-block;
        color: #1a1a1a;
        height: 40px;
        width: 40px;
        border: 2px solid #1a1a1a;
        border-radius: 12px;
        padding: 10px;
        transition: all 0.25s;
    }
    .shoppingCartButton:active,
    .shoppingCartButton:focus,
    .shoppingCartButton:hover {
        background: #1a1a1a;
        color: #fff;
        border: 2px solid transparent;
        transition: all 0.25s;
    }
</style>

