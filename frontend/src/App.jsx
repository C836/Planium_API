import { useState, useEffect } from "react";
import Registro from "./pages/Registro";
import Results from "./pages/Results";
import logo from "./assets/planium.svg";
import { Loading, Ring } from "./components/Loading/Loading";
import { Figure, Img } from "./components/Figure/Figure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Conteiner } from "./components/Conteiner/Conteiner";

export default function App() {
  const [loading, setLoading] = useState(true);
  
  return (
    <Router>
      <div className="App">
        {loading && (
          <Loading>
            <Ring />
          </Loading>
        )}
        <Conteiner>
          <Figure>
            <a href="http://localhost:3000/results">
              <Img src={logo} />
            </a>
          </Figure>
          <Routes>
            <Route
              exact
              path="/"
              element={<Registro setLoading={setLoading} />}
            />
            <Route exact path="/results" element={<Results  setLoading={setLoading}  />} />
          </Routes>
        </Conteiner>
      </div>
    </Router>
  );
}
