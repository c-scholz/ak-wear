<template>
    <div class="col-12 col-sm-6 col-lg-6 card-container padding75-2" :class="{flipped: isFlipped}">
        <label :for="'motivPaketItem-item-' + id" class="motivPaketSelected-label">
            <input type="radio" name="motivPaketSelected-item" :id="'motivPaketItem-item-' + id">
            <span class="motivPaketIcon">
                <font-awesome-icon :icon="['fas', 'check']" />
            </span> 
            <div class="motivPaketSelected-content">
                <div class="flip-card">
                    <div class="front">
                        <div class="motivPaket">
                            <a class="motivLink vorderseite" v-on:click="flip()">Rückseite&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'share']" /></a>
                            <img class="motivPaketBild img-fluid" src="../../assets/img/textil_bg.png">
                            <div class="zentriertesMotiv">
                                <img class="motiv" src="../../assets/img/motiv_abschlussmeister.png">
                            </div>
                        </div>
                    </div>
                    <div class="back">
                        <div class="motivPaket">
                            <a class="motivLink rueckseite" v-on:click="flip()"><font-awesome-icon :icon="['fas', 'reply']" />&nbsp;&nbsp;Vorderseite</a>
                            <img class="motivPaketBild img-fluid" src="../../assets/img/textil_bg.png">
                            <div class="zentriertesMotiv zentriertesMotivRueckseite">
                                <img class="motiv" src="../../assets/img/motiv_abschlussmeister_rueckseite.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
        },
        data() {
            return {
                isFlipped: false
            }
        },
        methods: {
            flip() {
                this.isFlipped = !this.isFlipped;
                this.log();
            },
            log() {
                console.log("clicked");
            }
        }
    }

</script>