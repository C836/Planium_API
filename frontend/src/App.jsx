import Registro from "./pages/Registro";
import Results from "./pages/Results";
import logo from "./assets/planium.svg";
import { Figure, Img } from "./components/Figure/Figure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Conteiner } from "./components/Conteiner/Conteiner";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Conteiner>
          <Figure>
            <Img src={logo} />
          </Figure>
          <Routes>
            <Route exact path="/" element={<Registro />} />
            <Route exact path="/results" element={<Results />} />
          </Routes>
        </Conteiner>
      </div>
    </Router>
  );
}
