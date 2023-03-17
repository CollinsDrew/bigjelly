import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Cards />
      <Gallery />
    </div>
  );
}

export default App;
