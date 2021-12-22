const Error = ({info}) =>{
    return(
        <div className="error">
            {info}
            <button 
                className="error__btn" 
                onClick={() => window.location.reload()}
            >Обновить страницу</button>
        </div>
    )
};

export { Error };