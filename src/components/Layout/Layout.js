import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { WindowError } from "../WindowError/WindowError";
import "./Layout.css";

const Layout = () => {
    const apiError = useSelector(state => state.errorReducer);
    return(
        <>
            <div className="bg"></div>
            <div className="container">
                <Header />
                <main className="content">
                    {
                        apiError.apiStatus === 'success' ? <Outlet /> : <WindowError />
                    }
                </main>
                <Footer />
            </div>
        </>
    )
};

export { Layout };