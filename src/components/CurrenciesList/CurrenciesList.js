import { useDispatch, useSelector } from "react-redux";
import { changeBaseCurrency } from "../../redux/actions/actions";
import { CURRENCIES_NAME } from "../currencyName";
import "./CurrenciesList.css";

const CurrenciesList = () => {

    const dispatch = useDispatch();

    const changeCurrency = currencyCode => {
        dispatch(changeBaseCurrency(currencyCode));
    };

    const currenciesReducer = useSelector(state => state.currenciesReducer);
    const currenciesKeys = Object.keys(currenciesReducer.currencies);

    const getCurrencis = (currencies, currenciesKeys) => {
        return(
            currenciesKeys.map(item => <div 
                    className="currencies-list__item" 
                    key={item}
                    onClick={() => changeCurrency(item)}
                >
                <div 
                    className="currencies-list__flag"
                >
                    <img  
                        className = "currencies-list__flag-img"
                        src = {window.location.origin + "/images/flags/" + item.toLowerCase() + ".png"} 
                        alt = {item} 
                    />
                </div>
                <div className="currencies-list__info">
                    <div className="currencies-list__text">
                        Код: 
                        <span className="currencies-list__code">{item}</span>
                    </div> 
                    <div className="currencies-list__text">
                        Курс: 
                        <span className="currencies-list__code">{currencies[item]}</span>
                    </div>
                    <div className="currencies-list__name">{CURRENCIES_NAME[item]}</div>
                </div>
            </div>)
        )
    };

    return(
        <div className="currencies-list">
            { getCurrencis(currenciesReducer.currencies, currenciesKeys) }
        </div>
    )
};

export default CurrenciesList;