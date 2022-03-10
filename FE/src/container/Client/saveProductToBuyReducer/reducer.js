const PRODUCT_BUY = "PRODUCT_BUY"
const PRODUCT_BUY_REMOVE = "PRODUCT_BUY_REMOVE"
const PRODUCT_BUY_UPDATE = "PRODUCT_BUY_UPDATE"

export const actSaveProduct = (i, amount) => {
    return {
        type: PRODUCT_BUY,
        payload: i, amount
    }
}

export const actRemoveProduct = (id) => {
    return {
        type: PRODUCT_BUY_REMOVE,
        payload: id
    }
}

export const actUpdateProduct = (data) => {
    return {
        type: PRODUCT_BUY_UPDATE,
        payload: data
    }
}

export const productToBuyReducer = (state = [], { type, payload }) => {
    switch (type) {
        case PRODUCT_BUY:
            return [...state, payload]
        case PRODUCT_BUY_REMOVE:
            return state.filter(item => item?.id !== payload)
        // case PRODUCT_BUY_UPDATE:
        //     const { id, amount } = payload;
        //     let itemUpdate;
        //     let newState;
        //     state.map(item => {
        //         if (item?.id == id) {
        //             return itemUpdate = { ...item, id, amount }
        //         } else {
        //             return newState = state.filter(item => item?.id !== id)
        //         }
        //     })
        //     return [...newState, itemUpdate]
        default:
            return state;
    }
}
