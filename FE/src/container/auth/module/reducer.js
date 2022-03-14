import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./type";

const initialState = {
       currentUser: [],
       isFetching : false,
       error : false
   }


export const LogintReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN_USER_REQUEST:
            return { ...state, isFetching: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, isFetching: false, currentUser: payload, error:false }
        case LOGIN_USER_FAIL:
            return { ...state, loadding: false,  error: true}

        default:
            return state
    }
}
