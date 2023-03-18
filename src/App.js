import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav/>
      <main >
        <Home/>
        <About/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
