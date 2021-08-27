import {
    SET_BAG_LIST_TABS_PARAMS
} from "../actions/actionTypes";

const initialState: any = {
    bagListTabParams: null
};

function UIReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_BAG_LIST_TABS_PARAMS:
            return {
                ...state,
                bagListTabParams: {
                    ...state.auth,
                    ...action.payload
                }
            }
        default:
            return state;
    }
};

export default UIReducer;