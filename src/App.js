import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LightMode from './Components/LightMode'
import MobileView from "./Components/MobileView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" Component={LightMode} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
