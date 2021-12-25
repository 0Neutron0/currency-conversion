import "./css/AboutPage.css";

const AboutPage = () => {
    return(
        <div className="about-info">
            <img className="about-info__logo" src={window.location.origin + "/logo120.png"} alt="logo" />
            <div className="adout-info__text">
                <p className="about-info__indent">
                    Привет, меня зовут Владимир. И это мой pet-проект.
                </p>
                <p className="about-info__indent">
                    Приложение показывает, актуальные цены валют на текущий момент, и можно посмотреть цены валют за выбранную дату. 
                    Также конвертирует валюты. Для получения актуальных курсов используется двухнедельный демонстрационный ключ Pro версии для доступа к API сервиса <a className="about-info__link" href="https://www.exchangerate-api.com/" target="_blank" rel="noopener noreferrer">exchangerate-api.com</a>
                </p>
                <p className="about-info__indent">
                    Если ключ истек, то можно заменить его на новый в файле: currency-conversion\src\redux\tokens.js
                    Получить новый демо ключ можно зарегистрировавшись бесплатно <a className="about-info__link" href="https://app.exchangerate-api.com/sign-up/29" target="_blank" rel="noopener noreferrer">тут</a>. 
                </p>
            </div>
        </div>
    )
};

export { AboutPage };