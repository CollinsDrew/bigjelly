import React from "react";
import bigJelly from "../Assets/bigjelly.jpeg";

const Hero = () => {
  return (
    <div id="home" className="w-full h-[90vh] ">
      <img
        src={bigJelly}
        alt="bigJelly"
        className="w-full h-full object-cover"
      />

      <div className="m-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:[50%] max-w-600px h-full flex flex-col text-white p-4">
          <h1
            className="font-bold text-4xl md:text-6xl text-shadow-lg"
            style={{ textShadow: "0px 3px 3px rgba(0,0,0,0.3)" }}
          >
            Welcome to
          </h1>
          <h2
            className="text-4xl md:text-6xl py-4 italic text-shadow-lg"
            style={{ textShadow: "0px 3px 3px rgba(0,0,0,0.3)" }}
          >
            Big Jelly Studios
          </h2>
          <p
            className="text-shadow-lg md:text-xl"
            style={{ textShadow: "0px 3px 3px rgba(0,0,0,0.3)" }}
          >
            Based in a beautiful hidden chapel in the heart of seaside town
            Ramsgate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
