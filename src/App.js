import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import sliderData from './components/slider/sliderData';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen scroll-smooth overflow-scroll">
      <Home />
      <div className="w-full h-max px-5 py-10 sm:px-10 md:px-12 lg:px-28">
        <About />
        <Projects slides={sliderData}/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
