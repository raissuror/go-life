import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoRideGoCar from "./pages/GoRideGoCar";
import GoFood from "./pages/GoFood";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goride-gocar" element={<GoRideGoCar />} />
        <Route path="/gofood" element={<GoFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
