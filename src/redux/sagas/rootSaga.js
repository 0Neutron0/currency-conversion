import { fork, takeLatest, debounce, all } from "redux-saga/effects";
import { getAllCurrencies } from "./workers/getAllCurrencies";
import { changeCurrency } from "./workers/changeCurrency";
import { changeSecondValue } from "./workers/changeSecondValue";
import { CURRENCIES } from "../actionsTypes";

export function* wotcherChangeDate(){
    yield takeLatest(CURRENCIES.SET_DATE, getAllCurrencies);
};

export function* wotcherChangeBaseCurrency(){
    yield takeLatest(CURRENCIES.SET_BASE_CODE, getAllCurrencies);
};

export function* wotcherChangeFirstCode(){
    yield takeLatest(CURRENCIES.SET_FIRST_CODE, changeCurrency);
};

export function* wotcherChangeSecondCode(){
    yield takeLatest(CURRENCIES.SET_SECOND_CODE, changeCurrency);
};

export function* wotcherChangeFirstValue(){
    yield debounce(500, CURRENCIES.SET_FIRST_VALUE, changeCurrency);
};

export function* wotcherChangeSecondValue(){
    yield debounce(500, CURRENCIES.SET_SECOND_VALUE, changeSecondValue);
};

export default function* roorSaga(){
    yield all ([
        fork(getAllCurrencies),
        fork(wotcherChangeDate),
        fork(wotcherChangeBaseCurrency),
        fork(changeCurrency),
        fork(wotcherChangeFirstCode),
        fork(wotcherChangeSecondCode),
        fork(wotcherChangeFirstValue),
        fork(wotcherChangeSecondValue),
    ])
};

