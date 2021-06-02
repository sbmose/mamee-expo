import { combineReducers } from 'redux';

// Reducers
import ProfileReducer from './ProfileReducer';

let rootReducer: any = {
    profile: ProfileReducer
};


const RootReducer = combineReducers(rootReducer);

export default RootReducer;