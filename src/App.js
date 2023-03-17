import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav/>
      <main >
        <Home/>
      </main>
    </div>
  );
}

export default App;
