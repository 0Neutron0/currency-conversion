import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import currenciesReducer from "./currenciesReducer";
import converterReducer from "./converterReducer";

const rootReducer = combineReducers({
    errorReducer,
    currenciesReducer,
    converterReducer,
});

export { rootReducer };