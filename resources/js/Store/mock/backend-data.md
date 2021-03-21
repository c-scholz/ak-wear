Farben:
- Farbwerte: `Array`[
    - Farbwert: `String`
]
- Label: `String`

Optionen:
- Label: `String`
- Preis: `Number`
- Icon: `String`

Motive:
- Name: `String`
- Bild-Vorderseite: `String`
- Bild-Rückseite: `String`
- Standardfarbe: (id Farbe) `Number`
- Farbvarianten: `Array`[ (id Farbe) `Number`) ]

Basis-Produkte:
- Name: `String`
- Standardfarbe: (id Farbe) `Number`
- Farbvarianten: `Array`[ (id Farbe) `Number`) ]
- Größen: `Array`[`Object` {Label: `String`}]
- Optionen: `Array`[(id Option) `Number`]
- Vorschaubild: `String`

Produkte: 
- Name: `String`
- Preis: `Number`
- Standardbild: `String`
- Produkte: `Array`[ (id Basis-Produkt) `Number` ]

- Rabatte:
    - Rabattcode: `String`
    - Preis: `Number`
    - Gültigkeit-von: `Date`
    - Gültigkeit-bis: `Date`

Bestellung:
- Produkte: `Array`[ `Object`{ (id Basis-Produkt) `Number`
    - Farbe: `Object`{(id Farbe) `Number`
        - Name: `String`
        - Farbwerte: `Array`[`String`]
    }
    - Größen: `Array`[ `Object`{
        - Anzahl: `Number`
        - Option: `Object`{ (id Option) `Number`
            - Label: `String`
            - Preis: `Number`
            - Namensliste: `Array`[
                -Name: `String`
            ]
        }
    }]
    - Motiv: `Object`{ (id Motiv) `Number`
        - Name: (name Motiv) `String`
        - Farbe: `Object`{(id Farbe) `Number`
            - Name: (name Farbe) `String`
            - Farbwerte `Array`[ 
                - Farbwert: `String` 
            ]
        }
    }
    - Optionen: `Array`[ `Object`{(id Option) `Number`
        - Label: `String`
        - Preis: `Number`
        - Anzahl: `Number`
    }]
    - Namensliste1: `Array`[ `Object`{
        - Name: `String`,
        - Option: `Object` {(id Option) `Number`
            - Label: (name Option) `String`
            - Wert: `String`
        }
    }]
    - Namensliste2: `Array`[`Object`{
        - Name: `String`,
        - Option: `Object` {(id Option) `Number`
            - Label: (name Option) `String`
            - Value: `String`
        }
    }]
    - Namensliste3: `Array`[`Object`{
        - Name: `String`,
        - Option: `Object` {
            - Label: (name Option) `String`
            - Value: `String`
        }
    }] 
    - Namensliste4: `Array`[`Object`{
        - Name: `String`,
        - Option: `Object` {
            - Label: (name Option) `String`
            - Value: `String`
        }
    }]
    - Vorschau-Bild: `String`
}]
- Lieferadresse-Vorname: `String`
- Lieferadresse-Nachname: `String`
- Lieferadresse-Straße-HNr: `String`
- Lieferadresse-Plz: `String`
- Lieferadresse-Stadt: `String`
- Lieferadresse-Land: `String`
- Rechnungsadresse-Vorname: `String`
- Rechnungsadresse-Nachname: `String`
- Rechnungsadresse-Straße-HNr: `String`
- Rechnungsadresse-Plz: `String`
- Rechnungsadresse-Stadt: `String`
- Rechnungsadresse-Land: `String`
- Bezahl-Option: `String`
- Rabattcode: `String`
- Rabatt: `Number`
- Gesamtpreis: `Number`
- Sendungsnummer: `String`
- Vertragsnummer: `String`
- Bestellstatus: `String`