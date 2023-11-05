import React from "react";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Administration from './pages/administation/administration';
import Home from "./pages/home/home";
import Subscribe from "./pages/subscribe/subscribe";
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route element={<ProtectedRoutes />}>
          <Route path="/administration" element={<Administration />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
