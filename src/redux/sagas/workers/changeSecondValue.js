import { put, call, select } from "redux-saga/effects";
import { getData } from "./functions/getData";
import { setFirstValue, setErrorServer, setErrorApi } from "../../actions/actions";
import { API_KEY } from "../../tokens";

export function* changeSecondValue(){
    try{
        const state = yield select(state => state.converterReducer);
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY.TOKEN}/pair/${state.secondCurrencyCode}/${state.firstCurrencyCode}/${state.secondCurrencyValue}`;
        const data = yield call(getData, url);
        yield put(setErrorApi(data.result));
        yield put(setFirstValue(data.conversion_result));
    }catch(e){
        yield put(setErrorServer('Ой, API`шечка навернулась... \nПри получении данных от сервера произошла ошибка!'));
    }
};