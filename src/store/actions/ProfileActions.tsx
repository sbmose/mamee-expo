
import { LOG_IN, UPDATE_SETTINGS } from './actionTypes';

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

export const updateSettings = () => {
    return async (dispatch: any) => {
    }
}