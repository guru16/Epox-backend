import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
