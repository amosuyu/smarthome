import { clientApi } from "apis/api";

import { LIST_CATEGORY_REQUEST, LIST_CATEGORY_SUCCESS, LIST_CATEGORY_FAIL } from "./type";

const actListCategoryRequest = () => ({
    type: LIST_CATEGORY_REQUEST
})
const actListCategorySuccess = (data) => ({
    payload: data,
    type: LIST_CATEGORY_SUCCESS
})
const actListCategoryFail = (error) => ({
    payload: error,
    type: LIST_CATEGORY_FAIL
})

export const actListCategory = () => {
    return (dispatch) => {
        dispatch(actListCategoryRequest())
        clientApi.product().then(res => {
            dispatch(actListCategorySuccess(res.data))
        }).catch(err => {
            dispatch(actListCategoryFail(err))
            console.log(err)
        })
    }
}