export const baseItem = {
    currentEdit: false,
    cartItemId: null,
    itemId: null,
    name: "",
    products: [],
    motif: {},
    default_image: "",
    price: null,
    namelist1: [],
    namelist2: [],
    namelist3: [],
    namelist4: []
}

export const baseProduct =
{
    currentEdit: false,
    id: null,
    name: "",
    motifColor: {},
    defaultColor: null,
    color: {},
    sizes: [],
    options: [],
}

export const baseSize = {
    label: "",
    amount: null,
    options: []
}

export const baseOption = {
    id: null,
    key: "",
    label: "",
    price: null,
    namelist: []
}

export const baseColor = {
    id: null,
    key: "",
    value: ""
}

export const baseMotif = {
    id: null,
    name: "",
    front_image: "",
    backImage: "",
    color: {},
}

export default baseItem
