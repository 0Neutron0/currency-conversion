import { ERROR, CURRENCIES } from "../actionsTypes";

// Action Creators
export const setAllCurrencis = currencies => ({ type: CURRENCIES.SET_CURRENCIES, payload: {currencies: {...currencies.conversion_rates}, base: currencies.base_code}});
export const setDateCurrencis = date => ({ type: CURRENCIES.SET_DATE, payload: date});
export const changeBaseCurrency = currencyCode => ({type: CURRENCIES.SET_BASE_CODE, payload: currencyCode});
export const changeFirstCode = currencyCode => ({type: CURRENCIES.SET_FIRST_CODE, payload: currencyCode});
export const changeSecondCode = currencyCode => ({type: CURRENCIES.SET_SECOND_CODE, payload: currencyCode});
export const changeFirstValue = currencyValue => ({type: CURRENCIES.SET_FIRST_VALUE, payload: currencyValue});
export const changeSecondValue = currencyValue => ({type: CURRENCIES.SET_SECOND_VALUE, payload: currencyValue});
export const setFirstValue = amount => ({type: CURRENCIES.CHANGE_FIRST_VALUE, payload: amount});
export const setSecondValue = amount => ({type: CURRENCIES.CHANGE_SECOND_VALUE, payload: amount});
export const setErrorServer = text => ({type: ERROR.SERVER, payload: text});
export const setErrorApi = status => ({type: ERROR.API, payload: status});