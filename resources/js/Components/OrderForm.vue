<template>
    <form id="msform" class="order-form">
        <svg-gradient />
        <fieldset :class="{active: activeTab === 1}" :style="{display: activeTab === 1 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head title="Textilien" button-next="Vorderseite" v-on:next-tab="nextTab()" />
            <p class="form-text form-text-textilien">Wähle dein gewünschtes Paket aus.<br>
                Falls du einzelne Hoodies oder Shirts zusammen mit dem Bundle bestellen möchtest, kannst du diese im nächsten Schritt hinzufügen.</p>
            <div class="row form-component product-cards">
                <div v-for="product in products" :key="product.id" class="col-sm-12 col-lg-4 padding75">
                    <a class="cardProduktLink" href="#" v-on:click="addToCart(product); nextTab();">
                        <div class="cardProdukt">
                            <img class="img-fluid card-img-top" :src="product.default_image"
                                alt="Abschlusspulli Abschlusspullis Abschlussklamotten">
                            <div class="produktPreis"><span>Je {{ formatPrice(product.price) }} EUR</span></div>
                            <div class="card-body">
                                <p class="card-text"><span>{{product.name}}</span></p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer :alerts="alerts" button-next v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 2}" :style="{display: activeTab === 2 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->            
            <order-fieldset-head title="Vorderseite" button-prev="Textilien" v-on:prev-tab="previousTab()"
                button-next="Rückseite" v-on:next-tab="nextTab()" />
            <p class="form-text">Konfiguriere dein Motiv.<br>
                Wähle zwischen einer Vielzahl von Motiven oder lade selbst welche hoch!</p>
            <div class="row">
                <div class="col-md-12 col-lg-5 noPaddingRight">
                    <div class="motivVorschau">
                        <div class="hoodieShirtWrapper" v-if="$store.currentItem && $store.currentItem.bundled">
                            <div class="hoodieShirtSwitch left">
                                <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
                                <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
                            </div>
                        </div>
                        <div class="motivVorschauBild">
                            <canvas>
                            </canvas>
                            <img class="img-fluid" src="../../assets/img/vorschau.png">
                        </div>

                        <div class="row textilMotivFarbe noPadding4Ever">
                            <div class="col-xl-6 noPadding1199Left padding75Right-2 textilMotivFarbeMobilAbstand">
                                <color-select 
                                    label="Textilfarbe" 
                                    id="textilfarbe" 
                                    :selected-color="products[0].products[0].defaultColor"
                                    :colors="products[0].products[0].colors"
                                    v-on:color-select="setTextileColor"
                                />
                            </div>
                            <div class="col-xl-6 noPadding1199Right padding75Left-2">
                                <color-select
                                    label="Motivfarbe"
                                    id="motivfarbe"
                                    :selected-color="motifs[0].defaultColor"
                                    :colors="motifs[0].colors"
                                    v-on:color-select="setMotifColor"
                                />
                            </div>
                        </div>
                        <annotation-input id="motif-annotation" name="motif-annotation" label="Bemerkung zum Motiv" placeholder="Beispiele: AK21 statt AK20, Bitte anderen Spruch über/unter dem Motiv, Über/Unter dem Motiv den Text weglassen, etc." />
                    </div>
                </div>
                <div class="col-md-12 col-lg-7">
                    <div class="bibliothekUploadWrapper">
                        <div class="bibliothekUploadSwitch"
                            :class="{left: motifSelection === false, right: motifSelection === true}">
                            <div class="bibliothekUploadTab" :class="{active: motifSelection === false}"
                                bibliothekuploadtab-direction="left" v-on:click="chooseMotif()">Motivbibliothek</div>
                            <div class="bibliothekUploadTab" :class="{active: motifSelection === true}"
                                bibliothekuploadtab-direction="right" v-on:click="uploadMotif()">Motiv hochladen</div>
                        </div>
                    </div>
                    <div :style="{display: motifSelection === false ? 'block' : 'none'}" class="bibliothekTab">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 noPadding">
                                <form action="#" class="suchfunktion">
                                    <div class="form-group d-md-flex">
                                        <input type="text" class="form-control" placeholder="Suchbegriff eingeben..">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 padding75-2">
                                <action-button :icon="['fa', 'copy']" label="Motiv übernehmen (0,00 EUR)" />
                                <button class="uebernehmen">
                                   <span class="uebernehmenText"><font-awesome-icon :icon="['fa', 'copy']" />&nbsp;&nbsp;Motiv übernehmen (0,00 EUR)</span>
                                </button>
                            </div>
                            <div class="col-lg-12 padding75-2">
                                <button class="uebernehmen">
                                    <span class="uebernehmenText"><font-awesome-icon :icon="['fa', 'share']" />&nbsp;&nbsp;Anderes Motiv auswählen (+3,50 EUR)</span>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <motif-card v-for="index in 8" :key="index" :id="index" />
                        </div>
                    </div>
                    <div :style="{display: motifSelection === true ? 'block' : 'none'}" class="motivHochladenTab">
                        <div class="alertContainer buttons">
                            <div class="alert-info" role="alert">
                                Unsere Grafikabteilung baut das von euch hochgeladene Motiv 1:1 nach. Falls
                                Änderungswünsche beachtet werden müssen, trage diese bitte links unter
                                <span>"Bemerkung zum Motiv"</span> ein!
                            </div>
                            <input type="file" name="filepond" multiple data-max-file-size="3MB" data-max-files="3" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer 
                button-prev 
                v-on:prev-tab="previousTab()" 
                :alerts="['Bitte wähle ein Motiv aus oder lade eins hoch!']"
                button-next 
                v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 3}" :style="{display: activeTab === 3 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head 
                title="Rückseite" 
                button-prev="Vorderseite" 
                v-on:prev-tab="previousTab()"
                button-next="Menge" 
                v-on:next-tab="nextTab()" 
            />
            <p class="form-text">Wähle das Format deiner Rückseite.<br>
                Die oberen zwei, sowie die unteren drei Felder für die Rückseite sind optional und werden nicht beachtet, wenn nichts
                eingetragen wird.
            </p>
            <div class="row">
                <div class="col-md-12 noPadding">
                    <div class="row rueckseite">
                        <div class="col-md-12 col-lg-6 col-xl-5">
                            <div class="rueckseiteVorschau">
                                <div class="rueckseiteVorschauBild">
                                    <div class="hoodieShirtWrapper">
                                        <div class="hoodieShirtSwitch left">
                                            <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
                                            <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src="../../assets/img/rueckseite-vorschau.png">
                                    <canvas>
                                    </canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 col-xl-7">
                            <div class="row namenslisteFormate">
                                <div class="col-md-6 padding75Right991-2 paddingLeft0paddingRight75v">
                                    <label for="selected-item-1" class="selected-label">
                                        <div class="inputText">1-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" name="selected-item" id="selected-item-1" value="1">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/einspaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6 padding75Left991-2 paddingRight0paddingLeft75">
                                    <label for="selected-item-2" class="selected-label">
                                        <div class="inputText">2-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" checked name="selected-item" id="selected-item-2" value="2">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/zweispaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6 padding75Right991-2 paddingLeft0paddingRight75">
                                    <label for="selected-item-3" class="selected-label">
                                        <div class="inputText">3-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" name="selected-item" id="selected-item-3" value="3">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/dreispaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-6 padding75Left991-2 paddingRight0paddingLeft75">
                                    <label for="selected-item-4" class="selected-label">
                                        <div class="inputText">4-Spaltig</div>
                                        <input type="radio" v-model.number="nameListColumns" name="selected-item" id="selected-item-4" value="4">
                                        <span class="icon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="selected-content">
                                            <img class="img-fluid" src="../../assets/img/vierspaltig.png" alt="">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ###################### EINSPALTIG ###################### -->
                    <div class="row namenslisteTab einSpaltig" :style="{display: nameListColumns === 1 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-sm-12 col-lg-6 offset-lg-3 noPadding">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist1"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist1"
                                />
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-3 offset-lg-3 padding75Right noPadding991Left">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <div class="col-sm-12 col-lg-3 padding75Left noPadding991Right">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <!-- MITTLERER TEIL -->
                        <!-- UNTERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### EINSPALTIG ###################### -->

                    <!-- ###################### ZWEISPALTIG ###################### -->
                    <div class="row namenslisteTab zweiSpaltig" :style="{display: nameListColumns === 2 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-sm-12 col-lg-5 offset-lg-1 padding75Right noPadding991Left">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist1"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist1"
                                />
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-5 padding75Left noPadding991Right">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist1"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist2"
                                />
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-5 offset-lg-1 padding75Right noPadding991Left">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <div class="col-sm-12 col-lg-5 padding75Left noPadding991Right">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <!-- MITTLERER TEIL -->
                        <!-- UNTERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### ZWEISPALTIG ###################### -->
                    <!-- ###################### DREISPALTIG ###################### -->
                    <div class="row namenslisteTab dreiSpaltig" :style="{display: nameListColumns === 3 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-md-12 col-lg-4 padding75Right noPadding991Left">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist1"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist1"
                                />
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4 padding75">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist2"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist2"
                                />
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4 padding75Left noPadding991Right">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist3"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist3"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 padding75Right noPadding991Left">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <div class="col-lg-6 padding75Left noPadding991Right">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <!-- MITTLERER TEIL -->
                        <!-- UNTERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### DREISPALTIG ###################### -->
                    <!-- ###################### VIERSPALTIG ###################### -->
                    <div class="row namenslisteTab vierSpaltig" :style="{display: nameListColumns === 4 ? 'flex' : 'none'}">
                        <!-- OBERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: 10b"
                                style="max-width: 250px;">
                        </div>
                        <!-- OBERER TEIL -->
                        <!-- MITTLERER TEIL -->
                        <div class="col-lg-5 offset-lg-1 padding75Right noPadding991Left">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist1"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist1"
                                />
                            </div>
                        </div>
                        <div class="col-lg-5 padding75Left noPadding991Right">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist2"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist2"
                                />
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1 padding75Right noPadding991Left">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist3"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist3"
                                />
                            </div>
                        </div>
                        <div class="col-lg-5 padding75Left noPadding991Right">
                            <div class="namelistContainer" contenteditable="false">
                                <item-input 
                                    name="namelist4"
                                    type="itemlistDraggable"
                                    :placeholder="'Hier Namen eingeben'"
                                    :preset="['Max Mustermann', 'Marie Musterfrau']"
                                    v-model="namelist4"
                                />
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1 padding75Right noPadding991Left">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <div class="col-lg-5 padding75Left noPadding991Right">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Lehrername">
                        </div>
                        <!-- MITTLERER TEIL -->
                        <!-- UNTERER TEIL -->
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: AK2021"
                                style="max-width: 250px;">
                        </div>
                        <div class="col-12 d-flex justify-content-center align-items-center">
                            <input type="text" class="form-control inputAbstand" placeholder="Beispiel: Schulname"
                                style="max-width: 250px;">
                        </div>
                        <!-- UNTERER TEIL -->
                    </div>
                    <!-- ###################### VIERSPALTIG ###################### -->
                    <div class="textareaContainer">
                        <annotation-input id="backside-annotation" name="backside-annotation" label="Bemerkung zur Rückseite" placeholder="Beispiele: Bitte eine Old English Schriftart (oder eine andere?) verwenden, Namen bitte nach dem Nachnamen alphabetisch sortieren, etc." />
                    </div>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer 
                button-prev
                v-on:prev-tab="previousTab()"
                :alerts="['Bitte trage die Namen für die Rückseite ein!']"
                button-next
                v-on:next-tab="nextTab()" 
            />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 4}" :style="{display: activeTab === 4 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head 
                title="Menge" 
                button-prev="Rückseite" 
                v-on:prev-tab="previousTab()"
                button-next="Sonderdruck" 
                v-on:next-tab="nextTab()" 
            />
            <p class="form-text">Trage die gewünschten Größen für dein Paket ein.<br>
                Achte bitte darauf, dass du mindestens 10 Stück bzw. im Bundle gleich viele Hoodies und Shirts
                einträgst.</p>
            <div class="row groessenAuswahl">
                <div class="col-12 col-lg-6 padding75Right991 groessenAbstand">
                    <div class="groessenContainer">
                        <p class="groessenText">Wähle die Größen der Hoodies im Bundle</p>
                        <div class="row">
                            <size-input v-for="size in ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl']" :key="size" :name="'hoodie_bundle_amount_' + size" :label-size="size.toUpperCase()" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 padding75Left991 groessenAbstand">
                    <div class="groessenContainer">
                        <p class="groessenText">Wähle die Größen der Shirts im Bundle</p>
                        <div class="row">
                            <size-input v-for="size in ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl']" :key="size" :name="'shirt_bundle_amount_' + size" :label-size="size.toUpperCase()" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 padding75Right991 groessenAbstand">
                    <div class="groessenContainer">
                        <p class="groessenText">Wähle die Größen der Hoodies</p>
                        <div class="row">
                            <size-input v-for="size in ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl']" :key="size" :name="'hoodie_amount_' + size" :label-size="size.toUpperCase()" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 padding75Left991">
                    <div class="groessenContainer">
                        <p class="groessenText">Wähle die Größen der Shirts</p>
                        <div class="row">
                            <size-input v-for="size in ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl']" :key="size" :name="'shirt_amount_' + size" :label-size="size.toUpperCase()" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer 
                button-prev
                v-on:prev-tab="previousTab()"
                :alerts="['Bitte wähle aus wie viele Textilien du in welchen Größen benötigtst!']"
                button-next
                v-on:next-tab="nextTab()"
            />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
        <fieldset :class="{active: activeTab === 5}" :style="{display: activeTab === 5 ? 'block' : 'none'}">
            <!-- ###################### CONTENT ###################### -->
            <order-fieldset-head 
                title="Sonderdruck" 
                button-prev="Menge" 
                v-on:prev-tab="previousTab()"
                button-final
            />
            <p class="form-text">
                Wähle eine Individualisierung oder überspringe diesen Schritt.<br>
                Der Preis für eine Individualisierung gilt pro Textil.
            </p>
            <div class="row">
                <div class="col-md-12 noPadding">
                    <div class="row sonderdruck">
                        <div class="col-md-12">
                            <!-- ###################### HOODIE AUSWAHL ###################### -->
                            <div class="hoodieShirtWrapper">
                                <div class="hoodieShirtSwitch left">
                                    <div class="hoodieShirtTab active" hoodieshirttab-direction="left">Hoodies</div>
                                    <div class="hoodieShirtTab" hoodieshirttab-direction="right">Shirts</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-lg-4 paddingLeft0paddingRight75">
                                    <label for="sonderdruckSelected-item-1" class="sonderdruckSelected-label">
                                        <div class="inputText">Linker Unterarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-1">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_linker_unterarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 padding75-3">
                                    <label for="sonderdruckSelected-item-2" class="sonderdruckSelected-label">
                                        <div class="inputText">Linker Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-2">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_linker_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingRight0paddingLeft75-2">
                                    <label for="sonderdruckSelected-item-3" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechter Unterarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-3">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_rechter_unterarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingLeft0paddingRight75">
                                    <label for="sonderdruckSelected-item-4" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechter Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-4">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_rechter_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 padding75-3">
                                    <label for="sonderdruckSelected-item-5" class="sonderdruckSelected-label">
                                        <div class="inputText">Linke Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-5">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_linke_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingRight0paddingLeft75-2">
                                    <label for="sonderdruckSelected-item-6" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechte Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-6">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_rechte_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingLeft0paddingRight75">
                                    <label for="sonderdruckSelected-item-7" class="sonderdruckSelected-label">
                                        <div class="inputText">Name Rückseite</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-7">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_name_rueckseite.png" alt="">
                                            <div class="motivLink">+4,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 padding75-3">
                                    <label for="sonderdruckSelected-item-8" class="sonderdruckSelected-label">
                                        <div class="inputText">Flaggen</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-8">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid" src="../../assets/img/hoodie_flaggen.png" alt="">
                                            <div class="motivLink">+5,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <!-- ###################### HOODIE AUSWAHL ###################### -->
                            <!-- ###################### SHIRT AUSWAHL ###################### -->
                            <div class="row">
                                <div class="col-md-12 col-lg-4 paddingLeft0paddingRight75">
                                    <label for="sonderdruckSelected-item-12" class="sonderdruckSelected-label">
                                        <div class="inputText">Linker Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-12">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_linker_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 padding75-3">
                                    <label for="sonderdruckSelected-item-12" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechter Oberarm</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-12">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_rechter_oberarm.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingRight0paddingLeft75-2">
                                    <label for="sonderdruckSelected-item-13" class="sonderdruckSelected-label">
                                        <div class="inputText">Linke Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-13">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_linke_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingLeft0paddingRight75">
                                    <label for="sonderdruckSelected-item-14" class="sonderdruckSelected-label">
                                        <div class="inputText">Rechte Brust</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-14">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_rechte_brust.png" alt="">
                                            <div class="motivLink">+3,50 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 padding75-3">
                                    <label for="sonderdruckSelected-item-15" class="sonderdruckSelected-label">
                                        <div class="inputText">Name Rückseite</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-15">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_name_rueckseite.png" alt="">
                                            <div class="motivLink">+4,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                                <div class="col-md-12 col-lg-4 paddingRight0paddingLeft75-2">
                                    <label for="sonderdruckSelected-item-16" class="sonderdruckSelected-label">
                                        <div class="inputText">Flaggen</div>
                                        <input type="checkbox" name="sonderdruckSelected-item" id="sonderdruckSelected-item-16">
                                        <span class="sonderdruckIcon">
                                            <font-awesome-icon :icon="['fas', 'check']" /></span>
                                        <div class="sonderdruckSelected-content">
                                            <img class="img-fluid shirtGroessen" src="../../assets/img/shirt_flaggen.png" alt="">
                                            <div class="motivLink">+5,00 EUR</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <!-- ###################### SHIRT AUSWAHL ###################### -->
                            <!-- ###################### HOODIE EINGABE ###################### -->
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodieLeftLowerArm">
                                    <p class="sonderdruckEingabe">Hoodies - Linker Unterarm</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesLinkerOberarm">
                                    <p class="sonderdruckEingabe">Hoodies - Linker Oberarm</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesRechterUnterarm">
                                    <p class="sonderdruckEingabe">Hoodies - Rechter Unterarm</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesRechterOberarm">
                                    <p class="sonderdruckEingabe">Hoodies - Rechter Oberarm</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesLinkeBrust">
                                    <p class="sonderdruckEingabe">Hoodies - Linke Brust</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesRechteBrust">
                                    <p class="sonderdruckEingabe">Hoodies - Rechte Brust</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesNameRueckseite">
                                    <p class="sonderdruckEingabe">Hoodies - Name Rückseite</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XS"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesFlaggen">
                                    <p class="sonderdruckEingabe">Hoodies - Flaggen</p>
                                    <p class="sonderdruckInfo">Wähle bitte die gewünschte Flagge für die jeweiligen Namen.</p>
                                        <p class="sonderdruckNamenslisteFlaggen">1. Spalte</p>
                                            <flag-select />
                                        <p class="sonderdruckNamenslisteFlaggen">2. Spalte</p>
                                            <flag-select />
                                        <p class="sonderdruckNamenslisteFlaggen">3. Spalte</p>
                                            <flag-select />
                                        <p class="sonderdruckNamenslisteFlaggen">4. Spalte</p>
                                            <flag-select />
                                </div>
                                <!-- ###################### HOODIE EINGABE ###################### -->
                                <!-- ###################### SHIRT EINGABE ###################### -->
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="hoodiesLinkerOberarm">
                                    <p class="sonderdruckEingabe">Shirts - Linker Oberarm</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="4XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="shirtsRechterOberarm">
                                    <p class="sonderdruckEingabe">Shirts - Rechter Oberarm</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="4XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="shirtsLinkeBrust">
                                    <p class="sonderdruckEingabe">Shirts - Linke Brust</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="4XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="shirtsRechteBrust">
                                    <p class="sonderdruckEingabe">Shirts - Rechte Brust</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="4XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="shirtsNameRueckseite">
                                    <p class="sonderdruckEingabe">Shirts - Name Rückseite</p>
                                    <p class="sonderdruckInfo">Trage bitte die Namen in die entsprechenden Größen ein und drücke "Enter".</p>
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="S"
                                        :placeholder="'Name, ..'"
                                        :preset="['Max Mustermann', 'Marie Musterfrau']"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="M"
                                        :placeholder="'Name, Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="L"
                                        :placeholder="'Name, Name, ..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="2XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="3XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                    <item-input 
                                        name="sleeves" 
                                        type="taglist"
                                        label="4XL"
                                        :placeholder="'..'"
                                        v-model="printOptions.sleevePrint.namelist" 
                                    />
                                </div>
                                <div class="col-md-12 hoodieAermeldruckBrustdruckEingabe" id="shirtsFlaggen">
                                    <p class="sonderdruckEingabe">Shirts - Flaggen</p>
                                    <p class="sonderdruckInfo">Wähle bitte die gewünschte Flagge für die jeweiligen Namen.</p>
                                        <p class="sonderdruckNamenslisteFlaggen">1. Spalte</p>
                                            <flag-select />
                                        <p class="sonderdruckNamenslisteFlaggen">2. Spalte</p>
                                            <flag-select />
                                        <p class="sonderdruckNamenslisteFlaggen">3. Spalte</p>
                                            <flag-select />
                                        <p class="sonderdruckNamenslisteFlaggen">4. Spalte</p>
                                            <flag-select />
                                </div>
                                <!-- ###################### SHIRT EINGABE ###################### -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="textareaContainer">
                <annotation-input id="special-print-annotation" name="special-print-annotation" label="Bemerkung zur Rückseite" placeholder="Beispiele: Bitte die Ärmel- und/oder Brustnamen in grün, alle Namen bitte nur in Großbuchstaben, etc." />
            </div>
            <!-- ###################### CONTENT ###################### -->
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
            <order-fieldset-footer 
                button-prev
                v-on:prev-tab="previousTab()"
                :alerts="['Bitte mach eine Eingabe oder wähl deine bisherigen Schritte ab und überspringe diesen Schritt!']"
                button-final
                v-on:next-tab="nextTab()" />
            <!-- ###################### MOBILE BUTTONS & FEHLER ###################### -->
        </fieldset>
            <div v-show="activeTab !== 1" id="shoppingCartFooter">
                <div class="container noPadding4Ever">
                    <div class="row shoppingCart">
                        <div class="col-3 padding375">
                            <div class="shoppingCartContainer">
                                <div>
                                    <img class="img-fluid" src="../../assets/img/add_product.svg">
                                    <span class="ersteZeile">Hinzufügen</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 padding375">
                            <div class="shoppingCartContainer inactive">
                                <div>
                                    <img class="img-fluid" src="../../assets/img/add_hoodies.svg">
                                    <span class="ersteZeile">Hoodies</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 padding375">
                            <div class="shoppingCartContainer active">
                                <div>
                                    <img class="img-fluid" src="../../assets/img/add_shirts.svg">
                                    <span class="ersteZeile">Shirts</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 padding375">
                            <div class="shoppingCartContainer inactive">
                                <div>
                                    <img class="img-fluid" src="../../assets/img/add_bundles.svg">
                                    <span class="ersteZeile">Bundles</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </form>
</template>

<script>
import numeral from 'numeral'
import locales from 'numeral/locales'
import * as FilePond from 'filepond'
import de_DE from 'filepond/locale/de-de'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import SvgGradient from './SvgGradient'
import OrderFieldsetHead from './OrderFieldsetHead'
import OrderFieldsetFooter from './OrderFieldsetFooter'
import SizeInput from './SizeInput'
import ItemInput from './ItemInput'
import AnnotationInput from './AnnotationInput'
import MotifCard from './MotifCard'
import ColorSelect from './ColorSelect'
import FlagSelect from './FlagSelect'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    components: {
        SvgGradient,
        OrderFieldsetHead,
        OrderFieldsetFooter,
        AnnotationInput,
        SizeInput,
        ItemInput,
        MotifCard,
        ColorSelect,
        FlagSelect
    },
    data() {
        // TODO sort out which properties should be stored globally in vuex and which can stay in the form
        return {
            activeTab: 1,
            motifSelection: false,
            nameListColumns: 2,
            namelist1: [],
            namelist2: [],
            namelist3: [],
            namelist4: [],
            streetInfo: {},
            phoneInfo: {},
            printOptions: {
                sleevePrint: {
                    namelist: [],
                },
            },
            alerts: [],
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
        this.$store.dispatch('shop/fetchProducts')
        this.$store.dispatch('shop/fetchMotifs')
    },
    mounted() {
        FilePond.registerPlugin(
            // encodes the file as base64 data
            FilePondPluginFileEncode,
            // validates the size of the file
            FilePondPluginFileValidateSize,
            // corrects mobile image orientation
            FilePondPluginImageExifOrientation,
            // previews dropped images
            FilePondPluginImagePreview
        );
        this.pond = FilePond.create(
            document.querySelector('input[name=filepond]')
        );
        this.pond.setOptions(de_DE);
        this.pond.setOptions(
            {
                allowFileEncode: true,
                credits: false,
                labelIdle: 'Zieh deine Dateien in das Kästchen oder <span class="filepond--label-action">lade welche per Klick hoch</span>'
            }
        );

        numeral.locale('de');
    },
    methods: {
        ...mapActions('cart', [
            'addToCart',
            'setCurrentItem',
            'removeFromCart',
            'setTextileColor',
            'setMotif',
            'setMotifColor',
        ]),
        ...mapActions('shop', [
            'fetchMotifs',
            'fetchProducts',
        ]),
        nextTab(alert) {
            this.activeTab++
            alert && this.alerts.push(alert)
        },
        previousTab(event) {
            this.activeTab--
        },
        chooseMotif() {
            if (this.motifSelection) {
                this.motifSelection = !this.motifSelection
            }
        },
        uploadMotif() {
            if (!this.motifSelection) {
                this.motifSelection = !this.motifSelection
            }
        },
        formatPrice(number) {
            return numeral(number).format("0,0.00")
        },
    }
}
</script>

<style scoped>
.textareaContainer {
    border: 2px solid #f2f2f2;
    border-radius: 12px;
    padding: 14px 15px 15px;
    margin: 15px 15px 0;
}

.textilMotivFarbe {
    padding-bottom: 14px;
}
</style>