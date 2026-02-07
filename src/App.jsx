import { useState } from "react";
import LockScreen from "./components/LockScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LockScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
