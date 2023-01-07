import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import CardDetail from "./pages/CardDetail";
import {darkMode , LightMode} from './components/Mode';

function App() {
  const { themStatus } = useSelector((store) => store.mode);

  useEffect(() => {
    themStatus ? LightMode() : darkMode()
  }, [themStatus]);

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
