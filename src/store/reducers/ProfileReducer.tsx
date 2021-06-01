import {
    LOG_IN,
    UPDATE_SETTINGS
} from "../actions/actionTypes";

const initialState = {
    auth: {
        loggedIn: false
    }
};

function ProfileReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                auth: action.payload
            }
        case UPDATE_SETTINGS:
            return {
                ...state,
                settings: action.payload.settings
            }
        default:
            return state;
    }
};

export default ProfileReducer;