import React from "react";
import card1 from "../Assets/bjs_card_1.jpeg";
import card2 from "../Assets/bjs_card_2.jpeg";
import card3 from "../Assets/bjs_card_3.jpeg";

const Cards = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div
        className="relative p-4 sm:w-full md:w-1/3"
        style={{ height: "400px" }}
      >
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={card1}
          alt="/"
        />
      </div>
      <div
        className="relative p-4 sm:w-full md:w-1/3"
        style={{ height: "400px" }}
      >
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={card3}
          alt="/"
        />
      </div>
      <div
        className="relative p-4 sm:w-full md:w-1/3"
        style={{ height: "400px" }}
      >
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={card2}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Cards;
