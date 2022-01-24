import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CURRENCIES_NAME } from "../currencyName";
import "./CurrencySelect.css"

const CurrencySelect = ({choiceCurrency}) => {

    const currenciesReducer = useSelector(state => state.currenciesReducer);
    const [stateCurrentKeys, setCurrentKeys] = useState([]);
    const [stateInput, setStateInput] = useState('');
    const currentKeys = useRef(null);

    useEffect(() => {
        currentKeys.current = Object.keys(currenciesReducer.currencies);
        setCurrentKeys(currentKeys.current);
    }, [currenciesReducer.currencies]);

    const filtrCurrentKeys = (event) => {
        const value = event.currentTarget.value.toUpperCase().trim();
        setStateInput(value);
        if(value){
            setCurrentKeys([...currentKeys.current.filter(key => key.includes(value))]);
        }else{
            setCurrentKeys([...currentKeys.current]);
        }
    };

    const cleaner = () => {
        setStateInput('');
        setCurrentKeys([...currentKeys.current]);
    };

    const gerAllList = () => {
        if(stateCurrentKeys.length){
            return(
                stateCurrentKeys.map(item => <div 
                            className="converter-select__item"
                            onClick={() => choiceCurrency(item)}
                            key={item + "_COL"}
                        >
                        <div className="converter-select__flag" >
                            <img className="converter-select__img"
                                    src={window.location.origin + "/images/flags/" + item.toLowerCase() + ".png"}
                                    alt={item}
                            />
                        </div>
                        <div className="converter-select__info">
                            <div className="converter-select__code">{item}</div>
                            <div className="converter-select__name">{CURRENCIES_NAME[item]}</div>
                        </div>
                    </div>
                )
            )
        }else{
            return(
                <div className="converter-select__no-code">Код валюты не найден</div>
            )
        }

    };

    return(
        <div className="converter-select">
            <div className="converter-select__input">
                <input 
                    className="converter-select__filtr"
                    onChange={event => filtrCurrentKeys(event)}
                    placeholder="Введите код валюты"
                    value={stateInput}
                />
                <div className="converter-select__input-cleaner"
                    onClick={cleaner}
                ></div>
            </div>
            <div className="converter-select__lnist">
                <div className="converter-select__items">
                    {gerAllList()}
                </div>
            </div>
        </div>
    )
};

export { CurrencySelect };