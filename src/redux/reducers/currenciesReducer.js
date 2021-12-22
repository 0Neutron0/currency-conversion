import { CURRENCIES } from "../actionsTypes";

const date = new Date();
const initState = {
    currencies: {},
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    base: 'USD'
}

const currenciesReducer = (state = initState, actions) => {
    switch(actions.type){
        case CURRENCIES.SET_CURRENCIES:
            return {...state, currencies: actions.payload.currencies, base: actions.payload.base};
        case CURRENCIES.SET_DATE:
            return {...state, year: actions.payload.year, month: actions.payload.month, day: actions.payload.day};
        case CURRENCIES.SET_BASE_CODE:
            return {...state, base: actions.payload};
        case CURRENCIES.GET_LIST:
            return state;
        default:
            return state;
    }
};

export default currenciesReducer;