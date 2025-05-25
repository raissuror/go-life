import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoRideGoCar from "./pages/GoRideGoCar";
import GoFood from "./pages/GoFood";
import SetMonthlyBudget from "./pages/SetMonthlyBudget";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goride-gocar" element={<GoRideGoCar />} />
        <Route path="/gofood" element={<GoFood />} />
        <Route path="/set-budget" element={<SetMonthlyBudget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
