import "./WindowError.css";

const WindowError = () =>{
    return(
        <div className="modal-bg">
            <div className="window-error">
                <div className="window-error__content">
                    Ой, API сервера вернул ошибку.
                    <p className="window-error__text">
                        Скорее всего, закончился двухнедельный демонстрационный ключ, но это не точно :)
                    </p>
                    <p className="window-error__text">
                        Получить новый, можно зарегестривовшись на сайте по ссылки 
                    <a 
                        className="window-error__link"
                        href="https://app.exchangerate-api.com/sign-up/29"
                    >
                        exchangerate-api.com
                    </a> 
                        и заменить его в файле /redux/tokens.js
                    </p>
                </div>        
                <button 
                    className="window-error__btn" 
                    onClick={() => window.location.reload()}
                >
                    Обновить страницу
                </button>
            </div>
        </div>
    )
};

export { WindowError };