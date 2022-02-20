import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/ Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-full h-screen scroll-smooth overflow-scroll">
      <Home />
      <div className="w-full h-max px-5 py-10">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
