import { TYPE } from './ActionCreators';

const initialState = {
    login: [],
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "SAMPLE_START": 
            return state;
              
        case "SAMPLE_FAILED":
            return {
                ...state,
            };
        case "SAMPLE_SUCESS": 
            return {
                ...state,
            };    

        default:
            return state;
    }
}

export default loginReducer;