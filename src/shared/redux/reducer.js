import { combineReducers } from 'redux';
import loginReducer from '../../modules/login/reducer';


const appReducer = combineReducers({
    loginReducer: loginReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;
