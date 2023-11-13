import React from "react";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Administration from './pages/administation/administration';
import Home from "./pages/home/home";
import Screeny from './pages/screeny/screeny'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from "./pages/view/view";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/view/" element={<View />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/screeny/:id" element={<Screeny />} />
          <Route path="/administration" element={<Administration />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
