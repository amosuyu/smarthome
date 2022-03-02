import { LIST_CATEGORY_REQUEST, LIST_CATEGORY_SUCCESS, LIST_CATEGORY_FAIL } from "./type";

const initialState = {
    dataCategory: [],
    loadding: false,
    error: null
}

export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LIST_CATEGORY_REQUEST:
            return { ...state, loadding: true }
        case LIST_CATEGORY_SUCCESS:
            return { ...state, loadding: false, dataCategory: payload }
        case LIST_CATEGORY_FAIL:
            return { ...state, loadding: false, dataCategory: null, error: payload }

        default:
            return state
    }
}
