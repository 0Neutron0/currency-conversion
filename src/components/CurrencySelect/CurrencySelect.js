import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CURRENCIES_NAME } from "../currencyName";

const CurrencySelect = ({choiceCurrency}) => {

    const currenciesReducer = useSelector(state => state.currenciesReducer);
    const [stateCurrentKeys, setCurrentKeys] = useState([]);
    const currentKeys = useRef(null);
    useEffect(() => {
        currentKeys.current = Object.keys(currenciesReducer.currencies);
        setCurrentKeys(currentKeys.current);
    }, [currenciesReducer.currencies]);

    const filtrCurrentKeys = (event) => {
        const value = event.currentTarget.value.toUpperCase().trim();
        if(value){
            setCurrentKeys([...currentKeys.current.filter(key => key.includes(value))]);
        }else{
            setCurrentKeys([...currentKeys.current]);
        }
    };

    const gerAllList = () => {
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
    };

    return(
        <div className="converter-select">
        <input 
            className="converter-select__filtr"
            onChange={event => filtrCurrentKeys(event)}
            placeholder="Введите код валюты"
        />
        <div className="converter-select__items">
            {gerAllList()}
        </div>
    </div>
    )
};

export { CurrencySelect };