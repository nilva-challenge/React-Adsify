import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardDetail from "./pages/CardDetail";

function App() {
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
