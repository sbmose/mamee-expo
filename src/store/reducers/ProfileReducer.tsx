import {
    LOG_IN,
    UPDATE_BIO,
    REGISTER_BY_EMAIL,
    VERIFY_EMAIL,
    UPDATE_AUTH,
    FINISH_REGISTRATION,
    ADD_CHILD
} from "../actions/actionTypes";

const initialState: any = {
    auth: {
        loggedIn: false,
    },
    bio: {
        children: []
    }
};

function ProfileReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                auth: action.payload
            }
        case REGISTER_BY_EMAIL:
            return {
                ...state,
                auth: action.payload
            }
        case VERIFY_EMAIL:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    emailVerified: true
                }
            }
        case UPDATE_AUTH:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    ...action.payload
                }
            }
        case UPDATE_BIO:
            return {
                ...state,
                bio: {
                    ...state.bio,
                    ...action.payload
                }
            }
        case FINISH_REGISTRATION:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loggedIn: true
                }
            }
        case ADD_CHILD:
            state.bio.children.push(action.payload);

            return {
                ...state
            }
        default:
            return state;
    }
};

export default ProfileReducer;