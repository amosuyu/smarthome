import { clientApi } from "apis/api";

import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./type";

const actLoginRequest = () => ({
    type: LOGIN_USER_REQUEST
})
const actLoginSuccess = (data) => ({
    payload: data,
    type: LOGIN_USER_SUCCESS
})
const actLoginFail = (error) => ({
    payload: error,
    type: LOGIN_USER_FAIL
})

export const actLogin = () => {
    return (dispatch) => {
        dispatch(actLoginRequest())
        clientApi.login().then(res => {
            dispatch(actLoginSuccess(res.data)
              
            )
        }).catch(err => {
            dispatch(actLoginFail(err))
            console.log(err)
        })
    }
}