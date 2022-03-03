import { NAV_BAR_FAIL, NAV_BAR_REQUEST, NAV_BAR_SUCCESS } from "./type"

const initialState = {
    categoryList: [],
    loading: false,
    error: null
}

export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case NAV_BAR_REQUEST:
            return { ...state, loading: true }
        case NAV_BAR_SUCCESS:
            return { ...state, loading: false, categoryList: payload }
        case NAV_BAR_FAIL:
            return { ...state, loading: false, categoryList: [], error: payload }

        default:
            return state
    }
}
