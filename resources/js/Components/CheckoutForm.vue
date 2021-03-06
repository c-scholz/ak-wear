<template>
    <div>
        <ul class="nav nav-tabs process-model more-icon-preocess" id="tablist" role="tablist">
            <li role="presentation" class="active lastUnlocked">
                <a href="#textilienTab" aria-controls="textilienTab" role="tab" data-toggle="tab" name="step1">
                    <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                </a>
            </li>
            <li role="presentation">
                <a href="#motivTab" aria-controls="motivTab" role="tab" data-toggle="tab" name="step2">
                    <font-awesome-icon :icon="['fas', 'address-card']" />
                </a>
            </li>
            <li role="presentation">
                <a href="#datenTab" aria-controls="datenTab" role="tab" data-toggle="tab" name="step3">
                    <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                </a>
            </li>
            <li role="presentation">
                <a href="#pruefenTab" aria-controls="pruefenTab" role="tab" data-toggle="tab" name="step4">
                    <font-awesome-icon :icon="['fas', 'check']" />
                </a>
            </li>
        </ul>

        <form id="coform" class="checkout-form">
            <svg-gradient />
            <fieldset :class="{active: activeTab === 1}" :style="{display: activeTab === 1 ? 'block' : 'none'}">
                <!-- ###################### CONTENT ###################### -->
                <fieldset-head 
                    title="Warenkorb" 
                    button-next="Daten" 
                    v-on:next-tab="nextTab()" 
                />
                <!-- <p class="form-text">Warenkorb</p> -->

                <section class="shoppingCartDesktop">
                    <div class="container">
                        <div class="row w-100">
                            <div class="col-lg-12 col-md-12 col-12 noPadding4Ever">
                                <table id="shoppingCart" class="table table-condensed">
                                <thead>
                                    <tr>
                                        <th style="width:15%">Produkt</th>
                                        <th style="width:35%">Beschreibung</th>
                                        <th style="width:10%;"></th>
                                        <th style="width:15%;">Einzelpreis</th>
                                        <th style="width:10%;">Menge</th>
                                        <th style="width:15%;">Preis</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td data-th="Produkt">
                                                <img src="../../assets/img/add_bundles.svg" alt="" class="produkt img-fluid d-none d-md-block">
                                            </td>
                                            <td data-th="Beschreibung">
                                                <div class="beschreibung">
                                                    <h4>Bundles</h4>
                                                    <div class="bundlesLegende">Hoodies / Shirts</div>
                                                    <div class="produktBeschreibung">
                                                        <span>Textilfarbe</span> Schwarz / Weiß<br />
                                                        <span>Motivfarbe</span> Orange / Schwarz<br />
                                                        <span>Motiv</span> Abschlussmeister / Kniet nieder<br />
                                                        <span>Rückseitenformat</span> 2-spaltig / 3-spaltig<br />
                                                        <br />
                                                        <span>Hoodies Sonderdruck</span>
                                                        <div class="row noPadding4Ever">
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                                                →
                                                            </div>
                                                            <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                                                <span>Linker Oberarm</span>
                                                            </div>
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                                            <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                                                je 3,50 EUR
                                                            </div>
                                                            <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                                                5x
                                                            </div>
                                                            <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                                                17,50 EUR
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <span>Shirts Sonderdruck</span> Keine Angabe
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="actions" data-th="">
                                                <div class="shoppingCartButtons">
                                                    <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'pen']" />
                                                </div>
                                                <div class="shoppingCartButtons">
                                                    <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
                                                </div>
                                            </td>
                                            <td data-th="Einzelpreis">
                                                33,99 EUR
                                            </td>
                                            <td data-th="Menge">
                                                12 Stk.
                                            </td>
                                            <td data-th="Menge">
                                                407,88 EUR<br />
                                                +17,50 EUR<br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-th="Produkt">
                                                <img src="../../assets/img/add_hoodies.svg" alt="" class="produkt img-fluid d-none d-md-block">
                                            </td>
                                            <td data-th="Beschreibung">
                                                <div class="beschreibung">
                                                    <h4>Hoodies</h4>
                                                    <div class="produktBeschreibung">
                                                        <span>Textilfarbe</span> Schwarz<br />
                                                        <span>Motivfarbe</span> Orange<br />
                                                        <span>Motiv</span> Abschlussmeister<br />
                                                        <span>Rückseitenformat</span> 2-spaltig<br />
                                                        <br />
                                                        <span>Sonderdruck</span>
                                                        <div class="row noPadding4Ever">
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                                                →
                                                            </div>
                                                            <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                                                <span>Linker Unterarm</span>
                                                            </div>
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                                            <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                                                je 3,50 EUR
                                                            </div>
                                                            <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                                                15x
                                                            </div>
                                                            <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                                                52,50 EUR
                                                            </div>
                                                        </div>
                                                        <hr>
                                                        <div class="row noPadding4Ever">
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                                                →
                                                            </div>
                                                            <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                                                <span>Flaggen</span>
                                                            </div>
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                                            <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                                                je 5,00 EUR
                                                            </div>
                                                            <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                                                10x
                                                            </div>
                                                            <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                                                35,00 EUR
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="actions" data-th="">
                                                <div class="shoppingCartButtons">
                                                    <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'pen']" />
                                                </div>
                                                <div class="shoppingCartButtons">
                                                    <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
                                                </div>
                                            </td>
                                            <td data-th="Einzelpreis">
                                                23,99 EUR
                                            </td>
                                            <td data-th="Menge">
                                                25 Stk.
                                            </td>
                                            <td data-th="Menge">
                                                599,75 EUR<br />
                                                +52,50 EUR<br />
                                                +35,00 EUR
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-th="Produkt">
                                                <img src="../../assets/img/add_shirts.svg" alt="" class="produkt img-fluid d-none d-md-block">
                                            </td>
                                            <td data-th="Beschreibung">
                                                <div class="beschreibung">
                                                    <h4>Shirts</h4>
                                                    <div class="produktBeschreibung">
                                                        <span>Textilfarbe</span> Weiß<br />
                                                        <span>Motivfarbe</span> Schwarz<br />
                                                        <span>Motiv</span> Kniet nieder<br />
                                                        <span>Rückseitenformat</span> 3-spaltig<br />
                                                        <br />
                                                        <span>Sonderdruck</span> Keine Angabe
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="actions" data-th="">
                                                <div class="shoppingCartButtons">
                                                    <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'pen']" />
                                                </div>
                                                <div class="shoppingCartButtons">
                                                    <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
                                                </div>
                                            </td>
                                            <td data-th="Einzelpreis">
                                                17,99 EUR<br />
                                            </td>
                                            <td data-th="Menge">
                                                2 Stk.
                                            </td>
                                            <td data-th="Menge">
                                                35,98 EUR
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="shoppingCartMobile">
                    <div class="warenkorbAbstand"></div>
                    <div class="row">
                        <div class="col-9 noPaddingRight4Ever">
                            <div class="tableHeading">
                                Beschreibung
                            </div>
                                <h4>Bundles</h4>
                                <div class="bundlesLegende">Hoodies / Shirts</div>
                                <span>Textilfarbe</span> Schwarz / Weiß<br />
                                <span>Motivfarbe</span> Orange / Schwarz<br />
                                <span>Motiv</span> Abschlussmeister / Kniet nieder<br />
                                <span>Rückseitenformat</span> 2-spaltig / 3-spaltig<br />
                                <br />
                                <span>Sonderdruck</span>
                                <div class="row noPadding4Ever">
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                        →
                                    </div>
                                    <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                        <span>Linker Oberarm</span>
                                    </div>
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                    <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                        je 3,50 EUR
                                    </div>
                                    <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                        5x
                                    </div>
                                    <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                        17,50 EUR
                                    </div>
                                </div>
                                <br />
                                <span>Shirts Sonderdruck</span> Keine Angabe
                        </div>
                        <div class="col-3 d-flex align-items-end flex-column noPaddingLeft4Ever">
                            <div class="tableHeading d-flex align-items-end flex-column">
                                &nbsp;
                            </div>
                            <div class="shoppingCartButtons">
                                <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'pen']" />
                            </div>
                            <div class="shoppingCartButtons">
                                <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
                            </div>
                        </div>
                        <div class="col-4 dreierReihe noPaddingRight4Ever">
                            <div class="tableHeading tableHeading2">
                                Einzelpreis
                            </div>
                            <p>23,99 EUR</p>
                        </div>
                        <div class="col-4 dreierReihe noPadding4Ever">
                            <div class="tableHeading tableHeading2">
                                Menge
                            </div>
                            <p>12 Stk.</p>
                        </div>
                        <div class="col-4 dreierReihe noPaddingLeft4Ever">
                            <div class="tableHeading tableHeading2">
                                Preis
                            </div>
                            <p>407,88 EUR <br />
                            +17,50 EUR
                            </p>
                        </div>
                    </div>
                    <hr class="mobileHr">
                    <div class="row">
                        <div class="col-9 noPaddingRight4Ever">
                            <div class="tableHeading">
                                Beschreibung
                            </div>
                                <h4>Hoodies</h4>
                                <span>Textilfarbe</span> Schwarz<br />
                                <span>Motivfarbe</span> Orange<br />
                                <span>Motiv</span> Abschlussmeister<br />
                                <span>Rückseitenformat</span> 2-spaltig<br />
                                <br />
                                <span>Sonderdruck</span>
                                <div class="row noPadding4Ever">
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                        →
                                    </div>
                                    <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                        <span>Linker Unterarm</span>
                                    </div>
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                    <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                        je 3,50 EUR
                                    </div>
                                    <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                        15x
                                    </div>
                                    <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                        52,50 EUR
                                    </div>
                                </div>
                                <hr>
                                <div class="row noPadding4Ever">
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                        →
                                    </div>
                                    <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                        <span>Flaggen</span>
                                    </div>
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                    <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                        je 5,00 EUR
                                    </div>
                                    <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                        10x
                                    </div>
                                    <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                        35,00 EUR
                                    </div>
                                </div>
                        </div>
                        <div class="col-3 d-flex align-items-end flex-column noPaddingLeft4Ever">
                            <div class="tableHeading d-flex align-items-end flex-column">
                                &nbsp;
                            </div>
                            <div class="shoppingCartButtons">
                                <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'pen']" />
                            </div>
                            <div class="shoppingCartButtons">
                                <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
                            </div>
                        </div>
                        <div class="col-4 dreierReihe noPaddingRight4Ever">
                            <div class="tableHeading tableHeading2">
                                Einzelpreis
                            </div>
                            <p>23,99 EUR</p>
                        </div>
                        <div class="col-4 dreierReihe noPadding4Ever">
                            <div class="tableHeading tableHeading2">
                                Menge
                            </div>
                            <p>25 Stk.</p>
                        </div>
                        <div class="col-4 dreierReihe noPaddingLeft4Ever">
                            <div class="tableHeading tableHeading2">
                                Preis
                            </div>
                            <p>599,75 EUR <br />
                            +52,50 EUR <br />
                            +35,00 EUR
                            </p>
                        </div>
                    </div>
                    <hr class="mobileHr">
                    <div class="row">
                        <div class="col-9 noPaddingRight4Ever">
                            <div class="tableHeading">
                                Beschreibung
                            </div>
                                <h4>Shirts</h4>
                                <span>Textilfarbe</span> Weiß<br />
                                <span>Motivfarbe</span> Schwarz<br />
                                <span>Motiv</span> Kniet nieder<br />
                                <span>Rückseitenformat</span> 3-spaltig<br />
                                <br />
                                <span>Sonderdruck</span> Keine Angabe
                        </div>
                        <div class="col-3 d-flex align-items-end flex-column noPaddingLeft4Ever">
                            <div class="tableHeading d-flex align-items-end flex-column">
                                &nbsp;
                            </div>
                            <div class="shoppingCartButtons">
                                <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'pen']" />
                            </div>
                            <div class="shoppingCartButtons">
                                <font-awesome-icon class="shoppingCartButton" :icon="['fas', 'trash']" />
                            </div>
                        </div>
                        <div class="col-4 dreierReihe noPaddingRight4Ever">
                            <div class="tableHeading tableHeading2">
                                Einzelpreis
                            </div>
                            <p>17,99 EUR</p>
                        </div>
                        <div class="col-4 dreierReihe noPadding4Ever">
                            <div class="tableHeading tableHeading2">
                                Menge
                            </div>
                            <p>2 Stk.</p>
                        </div>
                        <div class="col-4 dreierReihe noPaddingLeft4Ever">
                            <div class="tableHeading tableHeading2">
                                Preis
                            </div>
                            <p>35,98 EUR</p>
                        </div>
                    </div>
                </section>

                <div class="row d-flex align-items-end flex-column">
                    <div class="gesamtsumme">
                        <span>Gesamtsumme</span><br />
                        <span>1.148,61 EUR</span>
                    </div>
                </div>
                
                <!-- ###################### CONTENT ###################### -->
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
                <fieldset-footer 
                    button-prev 
                    v-on:prev-tab="previousTab()" 
                    alert="Bitte wähle ein Motiv aus oder lade eins hoch!"
                    button-next 
                    v-on:next-tab="nextTab()" />
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            </fieldset>
            <fieldset :class="{active: activeTab === 2}" :style="{display: activeTab === 2 ? 'block' : 'none'}">
                <!-- ###################### CONTENT ###################### -->            
                <fieldset-head 
                    title="Daten" 
                    button-prev="Warenkorb" 
                    v-on:prev-tab="previousTab()"
                    button-next="Zahlung" 
                    v-on:next-tab="nextTab()" 
                />
                <p class="form-text">Daten</p>



                <!-- ###################### CONTENT ###################### -->
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
                <fieldset-footer 
                    button-prev 
                    v-on:prev-tab="previousTab()" 
                    alert="Bitte wähle ein Motiv aus oder lade eins hoch!"
                    button-next 
                    v-on:next-tab="nextTab()" />
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            </fieldset>
            <fieldset :class="{active: activeTab === 3}" :style="{display: activeTab === 3 ? 'block' : 'none'}">
                <!-- ###################### CONTENT ###################### -->            
                <fieldset-head 
                    title="Zahlung" 
                    button-prev="Daten" 
                    v-on:prev-tab="previousTab()"
                    button-next="Bestellen" 
                    v-on:next-tab="nextTab()" 
                />
                <p class="form-text">Zahlung</p>



                <!-- ###################### CONTENT ###################### -->
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
                <fieldset-footer 
                    button-prev 
                    v-on:prev-tab="previousTab()" 
                    alert="Bitte wähle ein Motiv aus oder lade eins hoch!"
                    button-next 
                    v-on:next-tab="nextTab()" />
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            </fieldset>
            <fieldset :class="{active: activeTab === 4}" :style="{display: activeTab === 4 ? 'block' : 'none'}">
                <!-- ###################### CONTENT ###################### -->            
                <fieldset-head 
                    title="Bestellen" 
                    button-prev="Zahlung" 
                    v-on:prev-tab="previousTab()"
                    button-final
                />
                <p class="form-text">Bestellen</p>



                <!-- ###################### CONTENT ###################### -->
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
                <fieldset-footer 
                    button-prev
                    v-on:prev-tab="previousTab()"
                    alert="Bitte mach eine Eingabe oder wähl deine bisherigen Schritte ab und überspringe diesen Schritt!"
                    button-final
                    v-on:next-tab="nextTab()" />
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            </fieldset>
        </form>
    </div>
</template>

<script>
import SvgGradient from './SvgGradient'
import FieldsetHead from './FieldsetHead'
import FieldsetFooter from './FieldsetFooter'
import numeral from 'numeral'
import locales from 'numeral/locales'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    components: {
        SvgGradient,
        FieldsetHead,
        FieldsetFooter
    },
    data() {
        return {
            activeTab: 1
	    }
    },
    computed: {
        ...mapState({
            products: state => state.shop.products,
            motifs: state => state.shop.motifs,
            cart: state => state.cart.cart,
        })
    },
    created() {
    },
    mounted() {

        numeral.locale('de')
    },
    methods: {
        nextTab(event) {
            this.activeTab++
        },
        previousTab(event) {
            this.activeTab--
        },
        ...mapActions('shop', [
            'fetchMotifs',
            'fetchProducts',
        ]),
        formatPrice(number) {
            return numeral(number).format("0,0.00")
        }
    }
}
</script>

<style scoped>
.nav-tabs { border: 0; }
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active { border: 0; }
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover { border: 0; }

.nav-tabs.process-model > li.active > a,
.nav-tabs.process-model > li.active > a:hover,
.nav-tabs.process-model > li.active > a:focus,
.process-model li a:hover,
.process-model li a:focus {
	border: none;
	background: transparent;
}

.process-model {
	list-style: none;
	padding: 0;
	position: relative;
	margin: 20px auto 0;
	border: none;
	z-index: 0;
}
.process-model li {
	display: block;
	margin: 0 auto;
}
.process-model li::after {
	background: #e6e6e6 none repeat scroll 0 0;
	bottom: 0;
	content: "";
	display: block;
	height: 2px;
	margin: 0 auto;
	position: absolute;
	right: 140px;
	top: 33px;
	width: 25%;
	z-index: -1;
}
.process-model li.unlocked::after {
	background: #FFEBC9;
}
.process-model li:first-child::after { width: 75%; }
.process-model li:nth-child(2)::after { width: 50%; }
.process-model li.visited::after { background: #1a1a1a; }
.process-model li:last-child::after { width: 0; }
.process-model li {
	display: inline-block;
	width: 18%;
	text-align: center;
	float: none;
}
.nav-tabs.process-model > li.active > a,
.nav-tabs.process-model > li.active > a:hover,
.nav-tabs.process-model > li.active > a:focus,
.process-model li a:hover,
.process-model li a:focus {
	border: none;
	background: transparent;
}
.process-model li a {
	padding: 0;
	border: none;
	color: #e5e5e5;
}
.process-model li.active,
.process-model li.visited {
	color: #e5e5e5;
}
.process-model li.active a,
.process-model li.active a:hover,
.process-model li.active a:focus,
.process-model li.visited a,
.process-model li.visited a:hover,
.process-model li.visited a:focus {
	color: #1a1a1a;
}
.process-model li svg {
	display: block;
	height: 68px;
	width: 68px;
	text-align: center;
	margin: 0 auto;
	background: #f2f2f2;
	border: 2px solid #e6e6e6;
	line-height: 65px;
	font-size: 30px;
	border-radius: 50%;
    padding: 18px 0;
}
.process-model li.unlocked svg,
.process-model li.lastUnlocked svg {
	color: #FFEBC9;
	background: #fff;
	border: 2px solid #FFEBC9;
}
.process-model li.active svg,
.process-model li.visited svg  {
	color: #1a1a1a !important;
	background: #fff !important;
	border-color: #1a1a1a !important;
}
.process-model li p {
	font-family: 'Muli Light', sans-serif;
	font-size: 16px;
	text-transform: uppercase;
	color: #e5e5e5;
	margin-top: 11px;
}
.process-model li.unlocked p,
.process-model li.lastUnlocked p { font-family: 'Muli', sans-serif; color: #FFEBC9; }
.process-model.contact-us-tab li.visited a,
.process-model.contact-us-tab li.visited p {
	color: #606060!important;
	font-weight: normal
}
.process-model.contact-us-tab li::after  {
	display: none; 
}
.process-model.contact-us-tab li.visited svg {
	border-color: #e5e5e5; 
}

.process-model li.finished::after { background: #1a1a1a !important; }
.process-model li.finished svg { border-color: #1a1a1a !important; }
.process-model li.finished svg:before { color: #1a1a1a !important; }
.process-model li.finished p { color: #1a1a1a !important; }

@media screen and (max-width: 992px) {
	.process-model li::after {
		right: 120px;
	}
}
@media screen and (max-width: 767px) {
	.process-model li::after {
		right: 90px;
	}
}
@media screen and (max-width: 560px) {
  .more-icon-preocess.process-model li span {
		font-size: 23px;
		height: 50px;
		line-height: 46px;
		width: 50px;
	}
	.more-icon-preocess.process-model li::after {
		top: 24px;
	}
	.process-model li::after {
		right: 50px;
		margin-top: 10px;
	}
	.more-icon-preocess.process-model li p {
		font-size: 13px;
	}
}
@media screen and (max-width: 380px) { 
	.process-model.more-icon-preocess li {
		width: 25%;
	}
	.more-icon-preocess.process-model li span {
		font-size: 16px;
		height: 35px;
		line-height: 32px;
		width: 35px;
	}
	.more-icon-preocess.process-model li::after {
		top: 18px;
	}
	.process-model.more-icon-preocess {
		text-align: center;
	}
	.process-model li::after {
		margin-top: 15px;
	}

    .process-model li.unlocked svg,
    .process-model li.lastUnlocked svg {
        color: #FFEBC9;
        background: #fff;
        border: 2px solid #FFEBC9;
    }
}

img.produkt {
    height: 80px;
    margin: 0 auto;
}

.beschreibung {
    text-align: left;
}

.beschreibung h4 {
    font-family: 'Muli ExtraBold', sans-serif;
    font-size: 25px;
}

.bundlesLegende {
    font-size: 11px;
    margin: -9px 0 10px;
}

.produktBeschreibung,
.sonderdruckTabelle {
    font-size: 13px;
    margin: 0;
}

hr {
    margin: 5px 0;
    border-bottom: 2px solid #f2f2f2;
}

.produktBeschreibung span {
    font-family: 'Muli ExtraBold', sans-serif;
}

thead tr th {
    font-family: "Muli ExtraBold", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    border: 0;
    padding: 15px 0 7.5px;
}

tbody tr td {
    font-family: 'Muli Light', sans-serif;
    border-top: 2px solid #f2f2f2;
    padding: 15px 0;
}

thead tr th:nth-child(2) { text-align: left; }

.gesamtsumme {
    background: #1a1a1a;
    border-radius: 12px;
    color: #fff;
    padding: 15px 35px 17px;
    width: fit-content;
    margin-right: 15px;
}

.gesamtsumme span:first-child {
    font-family: "Muli ExtraBold", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
}

.gesamtsumme span:last-child {
    font-family: "Muli ExtraBold", sans-serif;
    text-transform: uppercase;
    font-size: 35px;
    line-height: 40px;
    background-image: linear-gradient(to bottom right, #ffae27, #d93548);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.shoppingCartMobile { display: none; }

.shoppingCartButtons {
    display: inline-block;
    cursor: pointer;
}

.shoppingCartButton:active,
.shoppingCartButton:focus,
.shoppingCartButton:hover {
    background: #1a1a1a;
    color: #fff;
    border: 2px solid transparent;
    transition: all 0.25s;
}

.shoppingCartButton {
    color: #1a1a1a;
    height: 40px;
    width: 40px;
    border: 2px solid #1a1a1a;
    border-radius: 12px;
    padding: 10px;
    transition: all 0.25s;
}

@media (max-width: 991px) {
    .shoppingCartDesktop { display: none; }

    .warenkorbAbstand {
        padding-top: 15px;
    }

    .shoppingCartMobile { 
        font-family: 'Muli Light', sans-serif;
        font-size: 13px;
        text-align: left; 
        display: block; 
    }

    .shoppingCartMobile h4 {
        font-size: 25px;
    }

    .shoppingCartMobile h4,
    .shoppingCartMobile span { 
        font-family: 'Muli ExtraBold', sans-serif; 
    }

    .tableHeading { 
        font-family: "Muli ExtraBold", sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        border-bottom: 2px solid #f2f2f2;
        padding-bottom: 7.5px;
        margin-bottom: 15px;
        width: 100%;
    }

    .tableHeading:last-child { text-align: right; }

    .tableHeading2 {
        padding-top: 30px;
    }

    .dreierReihe .tableHeading {
        text-align: center;
    }

    .dreierReihe p {
        font-size: 16px;
        text-align: center;
        margin: 0;
    }

    .mobileHr { 
        border-color: transparent;
        margin: 30px 15px;
    }

    .gesamtsumme { margin-top: 30px; }
}

@media (max-width: 575px) {
    .gesamtsumme {
        display: block;
        margin: 30px auto 0;
    }
}
</style>
