// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
