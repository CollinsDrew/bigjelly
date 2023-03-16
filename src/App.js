import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
