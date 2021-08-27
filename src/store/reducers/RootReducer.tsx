import { combineReducers } from 'redux';

// Reducers
import ProfileReducer from './ProfileReducer';
import UIReducer from './UIReducer';

let rootReducer: any = {
    profile: ProfileReducer,
    ui: UIReducer
};


const RootReducer = combineReducers(rootReducer);

export default RootReducer;