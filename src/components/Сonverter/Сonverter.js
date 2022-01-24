import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFirstCode, changeSecondCode, changeFirstValue, changeSecondValue } from "../../redux/actions/actions";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";
import { CURRENCIES_NAME } from "../currencyName";
import "./Converter.css";

const Converter = () => {
    const dispatch = useDispatch();

    const currency = useSelector(state => state.converterReducer);
    const [typeCurrency, setTypeCurrency] = useState('first');

    const [openState, changeOpenState] = useState("converter__list");

    const changeCurency = type => {
        setTypeCurrency(type);
        changeOpenState("converter__list converter__list--open");
    };

    const choiceCurrency = codeCurrency => {
        if(typeCurrency === 'first'){
            dispatch(changeFirstCode(codeCurrency));
        }else{
            dispatch(changeSecondCode(codeCurrency));
        }
        changeOpenState("converter__list");
    };

    const changeFirst = event => {
        const value = event.currentTarget.value.trim();
        if(+value > 0){
            dispatch(changeFirstValue(value));
        }else{
            dispatch(changeFirstValue(''));
        }
        
    };

    const changeSecond = event => {
        const value = event.currentTarget.value.trim();
        if(+value > 0){
            dispatch(changeSecondValue(value));
        }else{
            dispatch(changeSecondValue(''));
        }
    };

    return(
        <div className="converter">
            <div className="converter__currency">
                <div className="converter__part">
                    <input 
                        className="converter__input"
                        onChange={changeFirst}
                        type="number"
                        value={currency.firstCurrencyValue}
                        min="1"
                        required
                    />
                </div>
                <div className="converter__part">
                    <div 
                        onClick={() => changeCurency("first")}
                        className="converter__cocoon"
                    >
                        <div className="converter__flag">
                            <img 
                                className="converter__img"
                                src={window.location.origin + "/images/flags/" + currency.firstCurrencyCode.toLowerCase() + ".png"}
                                alt="fl"
                            />
                        </div>
                        <div className="converter__currency-info">
                            <div className="converter__currency-code">{currency.firstCurrencyCode}</div>
                            <div className="converter__currency-name">{CURRENCIES_NAME[currency.firstCurrencyCode]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={openState}>
                <CurrencySelect choiceCurrency={choiceCurrency} />
            </div>
            <div className="converter__currency">
                <div className="converter__part">
                    <input 
                        className="converter__input"
                        onChange={changeSecond}
                        type="number"
                        min="1"
                        value={currency.secondCurrencyValue}
                    />
                </div>
                <div className="converter__part">
                    <div 
                        onClick={() => changeCurency("second")}
                        className="converter__cocoon"
                    >
                        <div className="converter__flag">
                            <img 
                                className="converter__img"
                                src={window.location.origin + "/images/flags/" + currency.secondCurrencyCode.toLowerCase() + ".png"}
                                alt={currency.secondCurrencyCode.toLowerCase()}
                            />
                        </div>
                        <div>
                            <div className="converter__currency-code">{currency.secondCurrencyCode}</div>
                            <div className="converter__currency-name">{CURRENCIES_NAME[currency.secondCurrencyCode]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Converter };