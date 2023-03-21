import React from "react";
import paleWhite from "../Assets/ThePaleWhite.jpeg";
import jakeBugg from "../Assets/Jake_Bugg.jpeg";
import mountKimbe from "../Assets/MountKimbe.webp";
import getInuit from "../Assets/getinuit.webp";
import stealingSheep from "../Assets/Stealing_Sheep.jpeg";

const ClientList = () => {
  return (
    // <div id="#clients" className=" py-10 px-6 sm:px-10 lg:px-24 bg-gray-100">
    //   <div className="max-w-6xl mx-auto">
    //     <h2 className="text-3xl font-bold text-gray-800 mb-8">
    //       Artists we have worked with
    //     </h2>
    //     <p className="text-lg leading-7 text-gray-600 mb-8">
    //       Working with some of the talented artists on our client list has been
    //       a true pleasure. From Slow Thai's electrifying performances to Jake
    //       Bugg's soulful melodies, we have had the privilege of collaborating
    //       with some of the most talented musicians in the industry.
    //     </p>
    //     <p className="text-lg leading-7 text-gray-600 mb-8">
    //       Our work with The Pale White and Mount Kimbie has allowed us to
    //       explore new sounds and push creative boundaries. Meanwhile, our
    //       collaborations with The Magic Gang, Vistas, and Get Inuit have been a
    //       celebration of indie rock at its finest.
    //     </p>
    //     <p className="text-lg leading-7 text-gray-600 mb-8">
    //       We have also had the opportunity to work with some of the most
    //       influential names in the industry, including Jimmy Somerville, Mike
    //       Smith from Gorillaz, and Pete Doherty & The Puta Madres. Their unique
    //       perspectives and innovative approaches to music have inspired us to
    //       strive for excellence in everything we do.
    //     </p>
    //     <p className="text-lg leading-7 text-gray-600 mb-8">
    //       Other notable artists we have had the pleasure of working with
    //       include:
    //     </p>
    //     <hr></hr>
    //     <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Metronomy
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         All We Are
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Tigercats
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Swim Deep
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Black Gold Buffalo
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Seamus Fogarty
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         And Yet It Moves
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Inscape
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Jessica Lauren
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Stealing Sheep
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Papernut Cambridge
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         The Burning Hell
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Nightworks
    //       </li>
    //       <li className="text-base leading-6 font-medium text-gray-900">
    //         Evergreen
    //       </li>
    //     </ul>
    //     <hr className="text-gray-700"></hr>
    //     {/* <br></br> */}
    //     <p className="text-lg leading-7 text-gray-600 mb-8 p-4">
    //       We are constantly inspired by the incredible talent and passion of the
    //       artists we work with, and we look forward to collaborating with more
    //       amazing musicians in the future.
    //     </p>
    //   </div>
    // </div>

    <div
      name="services"
      className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 text-gray-700 "
    >
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 sm:object-contain"
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
