import { ERROR } from "../actionsTypes";

const initState = {
    flag: false,
    text: 'error',
    apiStatus: 'success',
    apiText: 'error'
};

const errorReducer = (state = initState, actions) => {
    switch(actions.type){
        case ERROR.SERVER:
            return {...state, flag: true, text: actions.payload};
        case ERROR.API:
            return {...state, apiStatus: actions.payload};
        case ERROR.API_CLOSE:
            return {...state, apiStatus: 'success'};
        default:
            return state;
    }
};

export default errorReducer;