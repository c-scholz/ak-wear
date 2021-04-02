<template>
    <div>
        <pill-nav :active-tab="activeTab" :unlocked-tab="unlockedTab" />
        <form id="coform" class="checkout-form">
            <svg-gradient />
            <fieldset :class="{active: activeTab === 1}" :style="{display: activeTab === 1 ? 'block' : 'none'}">
                <!-- ###################### CONTENT ###################### -->
                <fieldset-head 
                    title="Warenkorb" 
                    button-next="Daten" 
                    v-on:next-tab="nextTab()" 
                />

                <div class="warenkorbLeer">
                    Dein Warenkorb ist noch leer.
                </div>
                
                <button class="warenkorbLeerButton1">
                    <span class="warenkorbLeerText">
                        <font-awesome-icon :icon="['fa', 'reply']" />&nbsp;&nbsp;Zurück zur Startseite
                    </span>
                </button>
                <button class="warenkorbLeerButton2">
                    <span class="warenkorbLeerText">
                        Produkt hinzufügen&nbsp;&nbsp;<font-awesome-icon :icon="['fa', 'share']" />
                    </span>
                </button>

                <section class="shoppingCartDesktop">
                    <div class="container">
                        <div class="row w-100">
                            <div class="col-lg-12 col-md-12 col-12 noPadding4Ever">
                                <table id="shoppingCart" class="table table-condensed">
                                    <thead>
                                        <tr>
                                            <th style="width:15%">Produkt</th>
                                            <th style="width:35%">Beschreibung</th>
                                            <th style="width:10%"></th>
                                            <th style="width:15%">Einzelpreis</th>
                                            <th style="width:10%">Menge</th>
                                            <th style="width:15%">Preis</th>
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
                                                    <h3>Hoodies</h3>
                                                    <div class="produktBeschreibung">
                                                        <span>Textilfarbe</span> Schwarz<br />
                                                        <span>Motivfarbe</span> Orange<br />
                                                        <span>Motiv</span> Abschlussmeister <span class="bundleExtraMotiv">M004</span><br />
                                                        <span>Rückseitenformat</span> 2-spaltig<br />
                                                        <br />
                                                        <span>Sonderdruck</span>
                                                        <hr>
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
                                                    </div>
                                                    <br />
                                                    <h3>Shirts</h3>
                                                    <div class="produktBeschreibung">
                                                        <span>Textilfarbe</span> Weiß<br />
                                                        <span>Motivfarbe</span> Schwarz<br />
                                                        <span>Motiv</span> Kniet nieder <span class="bundleExtraMotiv">M023</span><br />
                                                        <hr>
                                                        <div class="row noPadding4Ever">
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                                                →
                                                            </div>
                                                            <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                                                <span>Anderes Motiv</span>
                                                            </div>
                                                            <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                                            <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                                                je 3,50 EUR
                                                            </div>
                                                            <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                                                12x
                                                            </div>
                                                            <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                                                42,00 EUR
                                                            </div>
                                                        </div>
                                                        <br />
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
                                                <dialog-modal style="display: inline-block;" />
                                            </td>
                                            <td data-th="Einzelpreis">
                                                33,99 EUR
                                            </td>
                                            <td data-th="Menge">
                                                12 Stk.
                                            </td>
                                            <td data-th="Menge" class="preisAbstand">
                                                407,88 EUR<br />
                                                +17,50 EUR<br />
                                                +42,00 EUR
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
                                                        <span>Motiv</span> Abschlussmeister <span class="bundleExtraMotiv">M004</span><br />
                                                        <span>Rückseitenformat</span> 2-spaltig<br />
                                                        <br />
                                                        <span>Sonderdruck</span>
                                                        <hr>
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
                                                <dialog-modal style="display: inline-block;" />
                                            </td>
                                            <td data-th="Einzelpreis">
                                                23,99 EUR
                                            </td>
                                            <td data-th="Menge">
                                                25 Stk.
                                            </td>
                                            <td data-th="Menge" class="preisAbstand">
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
                                                        <span>Motiv</span> Kniet nieder <span class="bundleExtraMotiv">M023</span><br />
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
                                                <dialog-modal style="display: inline-block;" />
                                            </td>
                                            <td data-th="Einzelpreis">
                                                17,99 EUR<br />
                                            </td>
                                            <td data-th="Menge">
                                                2 Stk.
                                            </td>
                                            <td data-th="Menge" class="preisAbstand">
                                                35,98 EUR
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table id="shoppingCart" class="table table-condensed" style="margin-bottom: 0;">
                                    <thead>
                                        <tr>
                                            <th style="width:45%"></th>
                                            <th style="width:25%"></th>
                                            <th style="width:10%"></th>
                                            <th style="width:15%;"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">Rabattcode</div>
                                                    </div>
                                                    <input class="form-control" type="text" placeholder="Beispiel: XMAS2021">
                                                </div>
                                            </td>
                                            <td></td>
                                            <td class="text-right">
                                                <span>Summe</span><br />
                                                <span>Rabatt</span><br />
                                                <span>Versand</span><br />
                                                <span class="gesamtsummeText">Gesamt</span>
                                            </td>
                                            <td class="preisAbstand">    
                                                <span>1.148,61 EUR</span><br />
                                                <span>0,00 EUR</span><br />
                                                <span>10,99 EUR</span><br />
                                                <span class="gesamtsummeZahlen">1.158,61 EUR</span>
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
                                <h3>Hoodies</h3>
                                <span>Textilfarbe</span> Schwarz<br />
                                <span>Motivfarbe</span> Orange<br />
                                <span>Motiv</span> Abschlussmeister <span class="bundleExtraMotiv">M004</span><br />
                                <span>Rückseitenformat</span> 2-spaltig<br />
                                <br />
                                <span>Sonderdruck</span>
                                <hr>
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
                                <h3>Shirts</h3>                       
                                <span>Textilfarbe</span> Weiß<br />
                                <span>Motivfarbe</span> Schwarz<br />
                                <span>Motiv</span> Kniet nieder <span class="bundleExtraMotiv">M023</span><br />
                                <hr>
                                <div class="row noPadding4Ever">
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever">
                                        →
                                    </div>
                                    <div class="col-11 sonderdruckTabelle noPadding4Ever">
                                        <span>Anderes Motiv</span>
                                    </div>
                                    <div class="col-1 sonderdruckTabelle noPadding4Ever"></div>
                                    <div class="col-4 sonderdruckTabelle noPadding4Ever">
                                        je 3,50 EUR
                                    </div>
                                    <div class="col-2 sonderdruckTabelle text-center noPadding4Ever">
                                        12x
                                    </div>
                                    <div class="col-5 sonderdruckTabelle text-center noPadding4Ever">
                                        42,00 EUR
                                    </div>
                                </div>
                                <br />
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
                            <dialog-modal style="display: inline-block;" />
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
                            <p>407,88 EUR<br />
                            +17,50 EUR<br />
                            +42,00 EUR
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
                                <span>Motiv</span> Abschlussmeister <span class="bundleExtraMotiv">M004</span><br />
                                <span>Rückseitenformat</span> 2-spaltig<br />
                                <br />
                                <span>Sonderdruck</span>
                                <hr>
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
                            <dialog-modal style="display: inline-block;" />
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
                                <span>Motiv</span> Kniet nieder <span class="bundleExtraMotiv">M023</span><br />
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
                            <dialog-modal style="display: inline-block;" />
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
                    <hr class="mobileHr">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">Rabattcode</div>
                        </div>
                        <input class="form-control" type="text" placeholder="Beispiel: XMAS2021">
                    </div>
                    <div class="row gesammtsumme">
                        <div class="col-4 dreierReihe text-center noPaddingRight4Ever">
                            <div class="tableHeading">
                                Summe
                            </div>
                            <span>1.148,61 EUR</span>
                        </div>
                        <div class="col-4 dreierReihe text-center noPadding4Ever">
                            <div class="tableHeading">
                                Rabatt
                            </div>
                            <span>0,00 EUR</span>
                        </div>
                        <div class="col-4 dreierReihe text-center noPadding4Ever">
                            <div class="tableHeading">
                                Versand
                            </div>
                            <span>10,99 EUR</span>
                        </div>
                        <div class="col-12 dreierReihe text-center noPaddingLeft4Ever" style="font-size: 16px; margin-top: 30px;">
                            <span style="font-family: 'Muli ExtraBold', sans-serif;">Gesamt</span> <span>1.158,61 EUR</span>
                        </div>
                    </div>
                </section>
               
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
                    button-final="Fertig"
                />
                <p class="form-text">Bestellen</p>



                <!-- ###################### CONTENT ###################### -->
                <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
                <fieldset-footer 
                    button-prev
                    v-on:prev-tab="previousTab()"
                    alert="Bitte mach eine Eingabe oder wähl deine bisherigen Schritte ab und überspringe diesen Schritt!"
                    button-final="Fertig"
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
import DialogModal from './DialogModal'
import numeral from 'numeral'
import locales from 'numeral/locales'
import { mapActions, mapGetters, mapState } from 'vuex'
import PillNav from './PillNav'

export default {
    components: {
        SvgGradient,
        FieldsetHead,
        FieldsetFooter,
        DialogModal,
        PillNav,
    },
    data() {
        return {
            activeTab: 1,
            unlockedTab: 1,
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
            if(this.activeTab > this.unlockedTab) {
                this.unlockedTab++
            }
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
.warenkorbLeer {
    font-family: 'Muli ExtraBold', sans-serif;
    font-size: 30px;
    margin: 120px 0;
}

.warenkorbLeerButton1 { margin-right: 5px; }
.warenkorbLeerButton2 { margin-left: 5px; }

.warenkorbLeerButton1,
.warenkorbLeerButton2 {
    font-family: "Muli ExtraBold", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    color: #fff;
    background-color: #1A1A1A;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 15px;
    width: 205px;
}

.warenkorbLeerButton1:hover .warenkorbLeerText,
.warenkorbLeerButton1:focus .warenkorbLeerText,
.warenkorbLeerButton2:hover .warenkorbLeerText,
.warenkorbLeerButton2:focus .warenkorbLeerText {
    background-image: linear-gradient(to bottom right, #ffae27, #d93548);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.warenkorbLeerButton1:focus .fa-reply path, .warenkorbLeerButton1:hover .fa-reply path,
.warenkorbLeerButton2:focus .fa-reply path, .warenkorbLeerButton2:hover .fa-reply path,
.warenkorbLeerButton1:focus .fa-share path, .warenkorbLeerButton1:hover .fa-share path,
.warenkorbLeerButton2:focus .fa-share path, .warenkorbLeerButton2:hover .fa-share path {
    fill: url(#linear);
}

@media (max-width: 462px) {
    .warenkorbLeerButton1 { margin-right: 0; }
    .warenkorbLeerButton2 { margin: 15px 0 0 0; }
}

img.produkt {
    height: 80px;
    margin: 0 auto;
}

.beschreibung {
    text-align: left;
}

.beschreibung h4,
.beschreibung h3 {
    font-family: 'Muli ExtraBold', sans-serif;
}

.beschreibung h4 {
    font-size: 25px;
}

.beschreibung h3 {
    font-size: 18px;
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

.bundleExtraMotiv {
    position: relative;
    top: -1px;
    font-size: 11px;
    line-height: 15px;
    color: #fff;
    background-color: #1a1a1a;
    border: 2px solid transparent;
    border-radius: 12px;
    padding: 0 5px;
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

.gesamtsummeText {
    font-family: 'Muli ExtraBold', sans-serif;
    display: block;
    margin-top: 10px;
}

.gesamtsummeZahlen {
    display: block;
    margin-top: 10px;
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

.input-group {
    width: 412px;
    margin: 0 auto;
}

.input-group-prepend {
    margin-right: 0;
}

.input-group input::placeholder {
    color: #a6a6a6;
}

input.form-control {
    border-left: 0;
    border-color: #e6e6e6;
    height: auto;
}

input.form-control:focus {
    color: #1a1a1a;
    border-color: #1a1a1a !important;
}

.input-group-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Muli ExtraBold", sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid #e6e6e6;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 11px 17px 10px;
    flex: auto;
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

.preisAbstand {
    text-align: right;
    padding-right: 30px;
}

@media (max-width: 1199px) {
    .input-group {
        width: 354px;
    }
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

    .shoppingCartMobile h4,
    .shoppingCartMobile h3,
    .col-9 span { 
        font-family: 'Muli ExtraBold', sans-serif; 
    }

    .shoppingCartMobile h4 {
        font-size: 25px;
    }

    .shoppingCartMobile h3 {
        font-size: 18px;
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

    .input-group {
        width: 100%;
        margin-bottom: 30px;
        padding: 0 15px;
    }

    .gesammtsumme {
        margin-bottom: 15px;
    }
}
</style>
