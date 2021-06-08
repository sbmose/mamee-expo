
import {
    LOG_IN,
    REGISTER_BY_EMAIL,
    VERIFY_EMAIL,
    UPDATE_BIO
} from './actionTypes';

export const loginByEmail = (email: string, password: string) => {
    return async (dispatch: any) => {
        await dispatch({
            type: LOG_IN,
            payload: {
                email: email,
                password: password,
                loggedIn: true,
                type: "email"
            }
        });

        return true;
    }
}

export const registerByEmail = (email: string, password: string) => {
    return async (dispatch: any) => {
        await dispatch({
            type: REGISTER_BY_EMAIL,
            payload: {
                email: email,
                password: password,
                emailVerified: false,
                loggedIn: false,
                type: "email"
            }
        });

        return true;
    }
}

export const verifyEmail = (code: string) => {
    return async (dispatch: any) => {
        await dispatch({
            type: VERIFY_EMAIL
        });

        return true;
    }
}

export const updateBio = (data: any) => {
    return async (dispatch: any) => {
        console.log("Update bio", data);
        await dispatch({
            type: UPDATE_BIO,
            payload: data
        });

        return true;
    }
}