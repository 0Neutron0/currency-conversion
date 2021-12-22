import { put, call, select } from "redux-saga/effects";
import { getData } from "./functions/getData";
import { setAllCurrencis, setErrorServer, setErrorApi } from "../../actions/actions";
import { API_KEY } from "../../tokens";

export function* getAllCurrencies(){
    try{
        const state = yield select(state => state.currenciesReducer);
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY.TOKEN}/history/${state.base}/${state.year}/${state.month}/${state.day}`;
        const data = yield call(getData, url);
        yield put(setErrorApi(data.result));
        yield put(setAllCurrencis(data));
    }catch(e){
        yield put(setErrorServer('Ой, API`шечка навернулась... \nПри получении данных от сервера произошла ошибка!'));
    }
};