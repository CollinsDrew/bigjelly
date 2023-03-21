import React from "react";
import magicGang from "../Assets/TheMagicGang.jpeg";
import jimmy from "../Assets/JimmySomerville.jpeg";
import metronomy from "../Assets/metronomy.jpeg";
import alloDarlin from "../Assets/AlloDarlin.jpeg";
import pipBlom from "../Assets/PipBlom.jpeg";
import jessicaLauren from "../Assets/jessicLauren.jpeg";
import tusks from "../Assets/Tusks_Change.png";
import mtWolf from "../Assets/mtWolf.jpeg";
import jolyon from "../Assets/JolyonThomas.jpeg";
import gwen from "../Assets/gwen.jpeg";

const data = [
  {
    name: "The Magic Gang",
    desc: "British four-piece band from Brighton.",
    img: magicGang,
  },
  {
    name: "Jimmy Somerville",
    desc: "Scottish pop singer and songwriter.",
    img: jimmy,
  },
  {
    name: "Metronomy",
    desc: "British electronic music group",
    img: metronomy,
  },
  {
    name: "Allo Darlin'",
    desc: "Four-piece indie pop band based in London",
    img: alloDarlin,
  },
  {
    name: "Pip Blom",
    desc: "Dutch indie band from Amsterdam",
    img: pipBlom,
  },
  {
    name: "Jessiva Lauren",
    desc: "London-born pianist, keyboard player and composer",
    img: jessicaLauren,
  },
  {
    name: "Tusks",
    desc: "English singer and electronic musician from London",
    img: tusks,
  },
  {
    name: "Mt Wolf",
    desc: "An English dream pop outfit's atmospheric blend of chamber pop, folk, electronic, and R&B",
    img: mtWolf,
  },
  {
    name: "Jolyon Thomas",
    desc: "English record producer, multi-instrumentalist, songwriter and mixer.",
    img: jolyon,
  },
  {
    name: "Gwen",
    desc: "American singer-songwriter and actress",
    img: gwen,
  },
];

const MoreClients = () => {
  return (
    <div className="text-gray-700 pb-10">
      <h2 className="text-5xl md:text-4xl font-bold pb-10 text-center">
        Other notable artists we have had the pleasure of working with include:
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((client, index) => (
          <li
            className="bg-white rounded-md shadow-md p-6 flex items-center"
            key={index}
          >
            <img
              src={client.img}
              alt={client.name}
              className="w-24 h-24 object-cover rounded-full mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold">{client.name}</h2>
              <p>{client.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreClients;
