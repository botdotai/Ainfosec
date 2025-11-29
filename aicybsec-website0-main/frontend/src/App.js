import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CybersecurityLanding from "./components/CybersecurityLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CybersecurityLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;