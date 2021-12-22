import "./css/NotFoundPage.css";

const NotFoundPage = () => {
    return(
        <div className="error-404">
            <div className="error-404__title">Ошибка 404</div>
            <div className="error-404__description">Страница не найдена</div>
        </div>
    )
};

export { NotFoundPage };