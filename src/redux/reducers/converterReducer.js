import { CURRENCIES } from "../actionsTypes";

const initState = {
    firstCurrencyCode: "USD",
    firstCurrencyValue: "1",
    secondCurrencyCode: "RUB",
    secondCurrencyValue: "0",
}

const converterReducer = (state = initState, actions) => {
    switch(actions.type){
        case CURRENCIES.SET_FIRST_CODE:
            return {...state, firstCurrencyCode: actions.payload};
        case CURRENCIES.SET_SECOND_CODE:
            return {...state, secondCurrencyCode: actions.payload};
        case CURRENCIES.SET_FIRST_VALUE:
            return {...state, firstCurrencyValue: actions.payload};
        case CURRENCIES.SET_SECOND_VALUE:
            return {...state, secondCurrencyValue: actions.payload};
        case CURRENCIES.CHANGE_FIRST_VALUE:
            return {...state, firstCurrencyValue: actions.payload};
        case CURRENCIES.CHANGE_SECOND_VALUE:
            return {...state, secondCurrencyValue: actions.payload};
        default:
            return state;
    }
};

export default converterReducer;