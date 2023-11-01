import React from "react";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Administration from './pages/administation/administration';
import Login from "./pages/login/login";
import './App.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
          <Route path="/administration" element={<Administration />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
