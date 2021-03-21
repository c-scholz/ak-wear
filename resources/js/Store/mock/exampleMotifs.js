export default {
    data: [
        {
            id: 1,
            name: "Wegflix",
            front_image: "/images/motifs/M024_wegflix_druck_Kopie.svg",
            back_image: "/images/motifs/M024-R_wegflix_druck_Kopie.svg",
            defaultColor: 2,
            colors: [
                { id: 1, values: ['#000000'], key: 'black', label: 'Schwarz' },
                { id: 2, values: ['#f2f2f2'], key: 'white', label: 'Weiß' },
                { id: 3, values: ['#c7cccf'], key: 'lightgray', label: 'Hellgrau' },
                { id: 19, values: ['#FF0000', '#000000'], key: 'red-white', label: 'Zweifarbig Rot-Weiß' },
                { id: 20, values: ['#FF0000', '#000000', '#f4c30f'], key: 'red-white-yellow', label: '3-farbig Rot Weiß Gelb' },
                { id: 21, values: ['#FF0000', '#000000', '#3d5eab', '#f2f2f2'], key: 'red-white-royalblue-yellow', label: '4-farbig Rot Weiß Königsblau Gelb' }
            ]
        }
    ]
}
