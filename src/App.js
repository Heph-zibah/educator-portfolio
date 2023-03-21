import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Nav/>
      <main >
        <Home/>
        <About/>
        <Services/>
        <Testimonies/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
 