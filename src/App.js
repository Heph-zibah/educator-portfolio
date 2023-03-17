import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav/>
      <main >
        <Home/>
        <About/>
      </main>
    </div>
  );
}

export default App;
