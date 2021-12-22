import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CURRENCIES_NAME } from "../currencyName";

const CurrencySelect = ({choiceCurrency}) => {

    const currenciesReducer = useSelector(state => state.currenciesReducer);
    console.log('currenciesReducer:', currenciesReducer.currencies);
    const curKeys = Object.keys(currenciesReducer.currencies);
    console.log('curKeys:', curKeys);
    const [stateCurrentKeys, setCurrentKeys] = useState([]);
    //setCurrentKeys([...curKeys]);
    console.log('stateCurrentKeys:', stateCurrentKeys);

    // useEffect((curKeys) => {
    //     setCurrentKeys([...curKeys]);
    // }, [currenciesReducer.currencies]);

    const filtrCurrentKeys = (event, [...keys]) => {
        const value = event.currentTarget.value.toUpperCase().trim();
        console.log(value);
        if(value){
            setCurrentKeys(keys.filter(key => key.includes(value)));
        }else{
            setCurrentKeys(keys);
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
                                src={"/images/flags/" + item.toLowerCase() + ".png"}
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
            onChange={event => filtrCurrentKeys(event, curKeys)}
            placeholder="Введите код валюты"
        />
        <div className="converter-select__items">
            {gerAllList()}
        </div>
    </div>
    )
};

export { CurrencySelect };