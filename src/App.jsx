
import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Home from "../pages/Home";
import Footer from "../components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </>
  );
}

export default App;
