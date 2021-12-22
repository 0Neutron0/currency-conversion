import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {

    const activeLink = ({isActive}) => isActive ? "header__link header__link--active" : "header__link";
    
    return(
        <header className="header">
            <nav className="header__menu">
                <NavLink className={activeLink} to="/">Курсы валют</NavLink>
                <NavLink className={activeLink} to="/converter">Конвертер валют</NavLink>
                <NavLink className={activeLink} to="/about">О нас</NavLink>
            </nav>
        </header>
    )
};

export { Header } ;