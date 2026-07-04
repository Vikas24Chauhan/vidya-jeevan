import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
