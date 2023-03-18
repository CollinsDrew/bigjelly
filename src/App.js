import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Cards />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
