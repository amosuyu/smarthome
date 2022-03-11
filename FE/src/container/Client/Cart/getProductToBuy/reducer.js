const PRODUCT_ADD_CART = "PRODUCT_ADD_CART";
const PRODUCT_REMOVE_TO_CART = "PRODUCT_REMOVE_TO_CART"
const PRODUCT_UPDATE_TO_CART = "PRODUCT_UPDATE_TO_CART"


export const actAddProducutToCart = (i, quantity) => {
    return {
        type: PRODUCT_ADD_CART,
        payload: i, quantity
    }
}
export const actRemoveProductToCart = (id) => {
    return {
        type: PRODUCT_REMOVE_TO_CART,
        payload: id
    }
}

export const actUpdateProduct = (data) => {
    return {
        type: PRODUCT_UPDATE_TO_CART,
        payload: data
    }
}