import React from "react";
import "./App.css";
import Home from "./Components/Main/Home/Home";
import Categories from "./Components/Main/category/Categories";
import Contact from "./Components/Main/Contact/Contact";
import Single from "./Components/Main/singleNews/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
