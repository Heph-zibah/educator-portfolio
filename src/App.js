import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <div className="container">
      <Nav/>
      <main >
        <Home/>
        <About/>
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
