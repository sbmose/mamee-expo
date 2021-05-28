import {
    UPDATE_SETTINGS
} from "../actions/actionTypes";

const initialState = {

};

function ProfileReducer(state = initialState, action: any) {
    switch (action.type) {
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