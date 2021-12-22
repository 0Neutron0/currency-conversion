import { put, call, select } from "redux-saga/effects";
import { getData } from "./functions/getData";
import { setSecondValue, setErrorServer, setErrorApi } from "../../actions/actions";
import { API_KEY } from "../../tokens";

export function* changeCurrency(){
    try{
        const state = yield select(state => state.converterReducer);
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY.TOKEN}/pair/${state.firstCurrencyCode}/${state.secondCurrencyCode}/${state.firstCurrencyValue}`;
        const data = yield call(getData, url);
        yield put(setErrorApi(data.result));
        yield put(setSecondValue(data.conversion_result));
    }catch(e){
        yield put(setErrorServer('Ой, API`шечка навернулась... \nПри получении данных от сервера произошла ошибка!'));
    }
};