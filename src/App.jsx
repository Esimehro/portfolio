import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
