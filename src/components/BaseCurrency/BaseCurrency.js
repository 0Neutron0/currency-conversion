import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import { setDateCurrencis } from "../../redux/actions/actions"
import { CURRENCIES_NAME } from "../currencyName";
import "react-calendar/dist/Calendar.css";
import "./BaseCurrency.css";

const BaseCurrency = () => {

    const dispatch = useDispatch();
    
    const [openState, changeOpenState] = useState('modal-calendar');
    const [dateState, setDateState] = useState(new Date());

    const changeDate = (newDate) => {
        setDateState(newDate);
        const date = {
            year: newDate.getFullYear(), 
            month: newDate.getMonth(), 
            day: newDate.getDate()
        };
        dispatch(setDateCurrencis(date));
        changeOpenState('modal-calendar');
    };

    const openCalendar = () => {
        changeOpenState('modal-calendar modal-calendar--open');
    };

    const currenciesReducer = useSelector(state => state.currenciesReducer);

    return(
        <>
            <div className="cocoon">
                <div className="base-currency">
                    <div className="base-currency__column">
                        <img
                            className="base-currency__flag"
                            src={window.location.origin + "/images/flags/" + currenciesReducer.base.toLowerCase() + ".png"}
                            alt={currenciesReducer.base}  
                        />
                    </div>
                    <div className="base-currency__column">
                        <div className="base-currency__title">Базовая валюта: 
                            <p className="base-currency__name">{CURRENCIES_NAME[currenciesReducer.base]}</p>
                            <p className="base-currency__sub-title">{currenciesReducer.base}</p>
                        </div>
                        <div className="base-currency__description">
                            Для смены базовой валюты кликните по нужной 
                        </div>
                    </div>
                </div>
            </div>
            <div className="cocoon">
                <div 
                    className="calendar-btn"
                    onClick={openCalendar}
                >
                    <div className="calendar-btn__date">{dateState.getDate() + '.' + (dateState.getMonth() + 1) + '.' + dateState.getFullYear()}</div>
                    <div className="calendar-btn__icon"></div>
                </div>
            </div>
            <div className={openState}>
                <Calendar
                    minDate={new Date(2018, 0, 1)}
                    maxDate={new Date()}
                    onChange={changeDate}
                    value={dateState}
                />
            </div>
        </>
    )
};

export default BaseCurrency;