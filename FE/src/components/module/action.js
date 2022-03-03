import { clientApi } from "apis/api";
import { callApi } from "config/configApi";

const { NAV_BAR_REQUEST, NAV_BAR_SUCCESS, NAV_BAR_FAIL } = require("./type");

const actCategoryRequest = () => ({
    type: NAV_BAR_REQUEST
})

const actCategorySuccess = (data) => ({
    payload: data,
    type: NAV_BAR_SUCCESS
})

const actCategoryError = (error) => ({
    payload: error,
    type: NAV_BAR_FAIL
})

export const actListCategory = () => {
    return async (dispatch) => {
        try {
            dispatch(actCategoryRequest())
            const result = await clientApi.category()
            dispatch(actCategorySuccess(result.data))
        } catch (error) {
            dispatch(actCategoryError(error))
        }
    }
}
