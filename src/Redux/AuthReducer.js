import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state, ...action.payload
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state, ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;