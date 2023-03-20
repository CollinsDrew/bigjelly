import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Cards from "./components/Cards";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import Equipment from "./components/Equipment";
import Location from "./components/Location";
import ClientList from "./components/ClientList";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Cards />
      <Gallery />
      <Equipment />
      <ClientList />
      <Contact />
      <Location />
      <Footer />
      <BottomBar />
    </div>
  );
}

export default App;
