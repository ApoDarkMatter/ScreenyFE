import React from "react";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Administration from './pages/administation/administration';
import Home from "./pages/home/home";
import Screeny from './pages/screeny/screeny'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route element={<ProtectedRoutes />}>
          <Route path="/administration" element={<Administration />} />
          <Route path="/screeny/:id" element={<Screeny />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
