import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { TicTacToe } from "./pages/TicTacToe";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
