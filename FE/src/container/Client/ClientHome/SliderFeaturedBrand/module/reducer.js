import { LIST_CATEGORY_REQUEST, LIST_CATEGORY_SUCCESS, LIST_CATEGORY_FAIL } from "./type";

const initialState = {
    dataProduct: [],
    loadding: false,
    error: null
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LIST_CATEGORY_REQUEST:
            return { ...state, loadding: true }
        case LIST_CATEGORY_SUCCESS:
            return { ...state, loadding: false, dataProduct: payload }
        case LIST_CATEGORY_FAIL:
            return { ...state, loadding: false, dataProduct: null, error: payload }

        default:
            return state
    }
}
