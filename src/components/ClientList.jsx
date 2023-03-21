import React from "react";
import paleWhite from "../Assets/The-Pale-White.jpeg";
import jakeBugg from "../Assets/jakeBugg_image.jpeg";
import mountKimbe from "../Assets/MountKimbe.webp";
import getInuit from "../Assets/getinuit.webp";
import stealingSheep from "../Assets/Stealing_Sheep.jpeg";

const ClientList = () => {
  return (
    <div
      id="clientList"
      className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 text-gray-700 "
    >
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={paleWhite}
          alt="The Pale Whites"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={mountKimbe}
          alt="Mount Kimbe"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={getInuit}
          alt="Get Inuit"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={jakeBugg}
          alt="Jake Bugg"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={stealingSheep}
          alt="Stealing Sheep"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h2 className="text-5xl md:text-4xl font-bold pb-6">
          {" "}
          Artists we have worked with
        </h2>

        <p className="pb-6">
          Working with some of the talented artists on our client list has been
          a true pleasure. From Slow Thai's electrifying performances to Jake
          Bugg's soulful melodies, we have had the privilege of collaborating
          with some of the most talented musicians in the industry.
        </p>

        <p className="pb-6">
          Our work with The Pale White and Mount Kimbie has allowed us to
          explore new sounds and push creative boundaries. Meanwhile, our
          collaborations with The Magic Gang, Vistas, and Get Inuit have been a
          celebration of indie rock at its finest.
          <p className="pb-6">
            We have also had the opportunity to work with some of the most
            influential names in the industry, including Jimmy Somerville, Mike
            Smith from Gorillaz, and Pete Doherty & The Puta Madres. Their
            unique perspectives and innovative approaches to music have inspired
            us to strive for excellence in everything we do.
          </p>
        </p>
        {/* <p className="pb-6">
          Other notable artists we have had the pleasure of working with
          include:
        </p> */}
      </div>

      <hr></hr>
    </div>
  );
};

export default ClientList;
