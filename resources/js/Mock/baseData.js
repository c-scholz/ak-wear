export const baseCartItem = {
    currentEdit: false,
    item: {}
}

export const normalizeCartItem = inputItem => {
    let outputItem = baseCartItem
    console.log(inputItem, outputItem)
    outputItem.item = inputItem
    return outputItem
}

export const baseData = {
    id: null,
    name: "",
    products: [],
    default_image: ""
}

export const normalizeItem = inputItem => {
    console.log("NORMALIZE ITEM")
    console.log(inputItem)
    let outputItem = baseData
    console.log(outputItem)
    inputItem = normalizeProduct(inputItem)
    console.log(outputItem)

}

export const baseProduct =
{
    id: null,
    name: "",
    color: {},
    sizes: [],
    price: 22,
    options: [],
    namelist1: [],
    namelist2: [],
    namelist3: [],
    namelist4: []
}

export const normalizeProduct = inputItem => {
    console.log("NORMALIZE PRODUCT")
    console.log(inputItem)
    let outputItem = baseProduct
    console.log(outputItem)
    outputItem = {...inputItem}
    console.log(outputItem)
    outputItem.color = {}
    outputItem.sizes.map(size => normalizeSize(size))
    console.log(outputItem)
    //return outputItem
}

export const baseSize = {
    label: "",
    amount: null,
    options: []
}

export const normalizeSize = inputItem => {
    console.log("NORMALIZE SIZE")
    console.log(inputItem)
    let outputItem = baseSize
    console.log(outputItem)
    outputItem = {...inputItem}
    console.log(outputItem)
    //return outputItem
}

export const baseOption = {
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

export default baseCartItem
