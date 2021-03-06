import { useSelector } from "react-redux";
import { Routes, Route} from 'react-router';
import { Layout } from './components/Layout/Layout';
import { HomePage } from "./pages/HomePage";
import { ConverterPage } from "./pages/ConverterPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Error } from './pages/Error';
import './App.css';

function App() {
  const newError = useSelector(state => state.errorReducer);
  if(!newError.flag){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}> 
              <Route index element={<HomePage />} />
              <Route path="/converter" element={<ConverterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }else{
    return (
      <div className="App">
      <Routes>
        <Route path="/currency-conversion/" element={<Error info={newError.text} />} />
      </Routes>
      </div>
    );
  }
}

export default App;
