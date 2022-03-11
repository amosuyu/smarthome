import { clientApi } from "apis/api";

const { AUTH_REGISTOR_REQUEST, AUTH_REGISTOR_SUCCESS, AUTH_REGISTOR_FAIL } = require("./type");

const actAutRegistorRequest = () => ({
    type: AUTH_REGISTOR_REQUEST
})
const actAutRegistorSuccess = (data) => ({
    type: AUTH_REGISTOR_SUCCESS,
    payload: data
})
const actAutRegistorFail = (e) => ({
    type: AUTH_REGISTOR_FAIL,
    payload: e
})

export const actRegistor = (data) => {
    return async (dispatch) => {
        // dispatch(actAutRegistorRequest())
        try {
            const result = clientApi.authRegister(data)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}