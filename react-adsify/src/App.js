import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardDetail from "./pages/CardDetail";
import { useEffect } from "react";

function App() {
  const { status } = useSelector((store) => store.mode);
  useEffect(() => {
    if (!status) {
      document.body.classList.add("bg-black");
      document.body.classList.add("text-white");
    } else {
      document.body.classList.remove("bg-black");
      document.body.classList.remove("text-white");
    }
  }, [status]);

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
