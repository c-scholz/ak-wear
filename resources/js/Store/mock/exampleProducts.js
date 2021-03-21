export default {
    data: [
        {
            id: 1,
            name: "Hoodies",
            products: [
                {
                    id: 1,
                    name: "Hoodies",
                    defaultColor: 1,
                    colors: [
                        { 
                            id: 1, 
                            values: ['#000000'], 
                            key: 'black', 
                            label: 'Schwarz' 
                        },
                        { 
                            id: 2, 
                            values: ['#f2f2f2'], 
                            key: 'white' ,
                            label: 'Weiß'
                        },
                        { 
                            id: 3, 
                            values: ['#c7cccf'], 
                            key: 'lightgray',
                            label: 'Hellgrau' 
                        },
                        { 
                            id: 4, 
                            values: ['#464644'], 
                            key: 'darkgray',
                            label: 'Dunkelgrau'
                        },
                        { 
                            id: 5, 
                            values: ['#002c5b'], 
                            key: 'navyblue',
                            label: 'Navyblau' 
                        },
                        {
                            id: 6, 
                            values: ['#3d5eab'], 
                            key: 'royalblue',
                            key: 'Königsblau' 
                        },
                        { 
                            id: 7, 
                            values: ['#009ada'], 
                            key: 'lightblue',
                            label: 'Hellblau' 
                        },
                        { 
                            id: 8, 
                            values: ['#acc6e9'], 
                            key: 'skyblue',
                            label: 'Himmelsblau' 
                        },
                        { 
                            id: 9, 
                            values: ['#38307d'], 
                            key: 'purple',
                            label: 'Lila' 
                        },
                        { 
                            id: 10, 
                            values: ['#cb1430'], 
                            key: 'red',
                            label: 'Rot' 
                        },
                        { 
                            id: 11, 
                            values: ['#610021'], 
                            key: 'orange',
                            label: 'Orange' 
                        },
                        { 
                            id: 12, 
                            values: ['#d46120'], 
                            key: 'pink',
                            label: 'Pink' 
                        },
                        { 
                            id: 13, 
                            values: ['#ecc2ce'], 
                            key: 'burgundy',
                            label: 'Weinrot'
                        },
                        { 
                            id: 14, 
                            values: ['#009c55'], 
                            key: 'green',
                            label: 'Grün' 
                        },
                        { 
                            id: 15, 
                            values: ['#304832'], 
                            key: 'darkgreen',
                            label: 'Dunkelgrün' 
                        },
                        { 
                            id: 16, 
                            values: ['#6b6e53'], 
                            key: 'olive',
                            label: 'Olivgrün' 
                        },
                        { 
                            id: 17, 
                            values: ['#f4c30f'], 
                            key: 'yellow',
                            label: 'Gelb' 
                        },
                        { 
                            id: 18, 
                            values: ['#483a2f'], 
                            key: 'brown',
                            label: 'Braun' 
                        }
                    ],
                    sizes: [
                        {
                            label: "s"
                        },
                        {
                            label: "m"
                        },
                        {
                            label: "l"
                        },
                        {
                            label: "xl"
                        },
                        {
                            label: "xxl"
                        },
                        {
                            label: "xxxl"
                        },
                        {
                            label: "xxxxl"
                        }
                    ],
                    options: [
                        {
                            id: 1,
                            key: "hoodieLeftLowerArm",
                            label: "Linker Unterarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_linker_unterarm.png"
                        },
                        {
                            id: 2,
                            key: "hoodieLeftUpperArm",
                            label: "Linker Oberarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_linker_oberarm.png"
                        },
                        {
                            id: 3,
                            key: "hoodieRightLowerArm",
                            label: "Rechter Unterarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_rechter_unterarm.png"
                        },
                        {
                            id: 4,
                            key: "hoodieRightUpperArm",
                            label: "Rechter Oberarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_rechter_oberarm.png"
                        },
                        {
                            id: 5,
                            key: "hoodieChestLeft",
                            label: "Linke Brust",
                            price: 3.5,
                            preview_image: "/images/hoodie_linke_brust.png"
                        },
                        {
                            id: 6,
                            key: "hoodieChestRight",
                            label: "Rechte Brust",
                            price: 3.5,
                            preview_image: "/images/hoodie_rechte_brust.png"
                        },
                        {
                            id: 7,
                            key: "hoodieBack",
                            label: "Name Rückseite",
                            price: 4,
                            preview_image: "/images/hoodie_name_rueckseite.png"
                        },
                        {
                            id: 8,
                            key: "hoodieFlags",
                            label: "Flaggen",
                            price: 5,
                            preview_image: "/images/hoodie_flaggen.png"
                        }
                    ],
                    preview_image: "/images/vorschau.png"
                }
            ],
            price: 22,
            default_image: "/images/product_images/hoodies_paketbild.jpg"
        },
        {
            id: 2,
            name: "Shirts",
            products: [
                {
                    id: 2,
                    name: "Shirts",
                    defaultColor: 1,
                    colors: [
                        {
                            id: 1,
                            key: "schwarz",
                            value: ""
                        },
                        {
                            id: 2,
                            key: "dunkelgrau",
                            value: ""
                        },
                        {
                            id: 3,
                            key: "rot",
                            value: ""
                        }
                    ],
                    sizes: [
                        {
                            label: "xs"
                        },
                        {
                            label: "s"
                        },
                        {
                            label: "m"
                        },
                        {
                            label: "l"
                        },
                        {
                            label: "xl"
                        },
                        {
                            label: "xxl"
                        },
                        {
                            label: "xxxl"
                        }
                    ],
                    options: [
                        {
                            id: 9,
                            key: "shirtLeftUpperArm",
                            label: "Linker Oberarm",
                            price: 3.5,
                            preview_image: "/images/shirt_linker_oberarm.png"
                        },
                        {
                            id: 10,
                            key: "shirtRightUpperArm",
                            label: "Rechter Oberarm",
                            price: 3.5,
                            preview_image: "/images/shirt_rechter_oberarm.png"
                        },
                        {
                            id: 11,
                            key: "shirtChestLeft",
                            label: "Linke Brust",
                            price: 3.5,
                            preview_image: "/images/shirt_linke_brust.png"
                        },
                        {
                            id: 12,
                            key: "shirtChestRight",
                            label: "Rechte Brust",
                            price: 3.5,
                            preview_image: "/images/shirt_rechte_brust.png"
                        },
                        {
                            id: 13,
                            key: "shirtBack",
                            label: "Name Rückseite",
                            price: 4,
                            preview_image: "/images/shirt_name_rückseite.png"
                        },
                        {
                            id: 14,
                            key: "shirtFlags",
                            label: "Flaggen",
                            price: 5,
                            preview_image: "/images/shirt_flaggen.png"
                        }
                    ]
                }
            ],
            price: 16,
            default_image: "/images/product_images/shirts_paketbild.jpg"
        },
        {
            id: 3,
            name: "Bundle",
            products: [
                {
                    id: 1,
                    name: "Hoodies",
                    defaultColor: 1,
                    colors: [
                        {
                            id: 1,
                            key: "schwarz",
                            value: ""
                        },
                        {
                            id: 2,
                            key: "dunkelgrau",
                            value: ""
                        },
                        {
                            id: 3,
                            key: "rot",
                            value: ""
                        }
                    ],
                    sizes: [
                        {
                            label: "s"
                        },
                        {
                            label: "m"
                        },
                        {
                            label: "l"
                        },
                        {
                            label: "xl"
                        },
                        {
                            label: "xxl"
                        },
                        {
                            label: "xxxl"
                        },
                        {
                            label: "xxxxl"
                        }
                    ],
                    options: [
                        {
                            id: 1,
                            key: "hoodieLeftLowerArm",
                            label: "Linker Unterarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_linker_unterarm.png"
                        },
                        {
                            id: 2,
                            key: "hoodieLeftUpperArm",
                            label: "Linker Oberarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_linker_oberarm.png"
                        },
                        {
                            id: 3,
                            key: "hoodieRightLowerArm",
                            label: "Rechter Unterarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_rechter_unterarm.png"
                        },
                        {
                            id: 4,
                            key: "hoodieRightUpperArm",
                            label: "Rechter Oberarm",
                            price: 3.5,
                            preview_image: "/images/hoodie_rechter_oberarm.png"
                        },
                        {
                            id: 5,
                            key: "hoodieChestLeft",
                            label: "Linke Brust",
                            price: 3.5,
                            preview_image: "/images/hoodie_linke_brust.png"
                        },
                        {
                            id: 6,
                            key: "hoodieChestRight",
                            label: "Rechte Brust",
                            price: 3.5,
                            preview_image: "/images/hoodie_rechte_brust.png"
                        },
                        {
                            id: 7,
                            key: "hoodieBack",
                            label: "Name Rückseite",
                            price: 4,
                            preview_image: "/images/hoodie_name_rueckseite.png"
                        },
                        {
                            id: 8,
                            key: "hoodieFlags",
                            label: "Flaggen",
                            price: 5,
                            preview_image: "/images/hoodie_flaggen.png"
                        }
                    ],
                    preview_image: "/images/vorschau.png"
                },
                {
                    id: 2,
                    name: "Shirts",
                    defaultColor: 1,
                    colors: [
                        {
                            id: 1,
                            key: "schwarz",
                            value: ""
                        },
                        {
                            id: 2,
                            key: "dunkelgrau",
                            value: ""
                        },
                        {
                            id: 3,
                            key: "rot",
                            value: ""
                        }
                    ],
                    sizes: [
                        {
                            label: "xs"
                        },
                        {
                            label: "s"
                        },
                        {
                            label: "m"
                        },
                        {
                            label: "l"
                        },
                        {
                            label: "xl"
                        },
                        {
                            label: "xxl"
                        },
                        {
                            label: "xxxl"
                        }
                    ],
                    options: [
                        {
                            id: 9,
                            key: "shirtLeftUpperArm",
                            label: "Linker Oberarm",
                            price: 3.5,
                            preview_image: "/images/shirt_linker_oberarm.png"
                        },
                        {
                            id: 10,
                            key: "shirtRightUpperArm",
                            label: "Rechter Oberarm",
                            price: 3.5,
                            preview_image: "/images/shirt_rechter_oberarm.png"
                        },
                        {
                            id: 11,
                            key: "shirtChestLeft",
                            label: "Linke Brust",
                            price: 3.5,
                            preview_image: "/images/shirt_linke_brust.png"
                        },
                        {
                            id: 12,
                            key: "shirtChestRight",
                            label: "Rechte Brust",
                            price: 3.5,
                            preview_image: "/images/shirt_rechte_brust.png"
                        },
                        {
                            id: 13,
                            key: "shirtBack",
                            label: "Name Rückseite",
                            price: 4,
                            preview_image: "/images/shirt_name_rückseite.png"
                        },
                        {
                            id: 14,
                            key: "shirtFlags",
                            label: "Flaggen",
                            price: 5,
                            preview_image: "/images/shirt_flaggen.png"
                        }
                    ],
                    preview_image: ""
                }
            ],
            price: 33,
            default_image: "/images/product_images/bundles_paketbild.jpg"
        }
    ]
}
