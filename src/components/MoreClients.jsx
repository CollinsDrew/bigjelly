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

const MoreClients = () => {
  return (
    <div className="text-gray-700 pb-10">
      <h2 className="text-5xl md:text-4xl font-bold pb-10 text-center">
        Other notable artists we have had the pleasure of working with include:
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={magicGang}
            alt="The Magic Gang"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">The Magic Gang</h2>
            <p>British four-piece band from Brighton.</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={jimmy}
            alt="Jimmy Somerville"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Jimmy Somerville</h2>
            <p>Scottish pop singer and songwriter.</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={metronomy}
            alt="Metronomy"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Metronomy</h2>
            <p>British electronic music group</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={alloDarlin}
            alt="Allo Darlin'"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Allo Darlin'</h2>
            <p>Four-piece indie pop band based in London</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={pipBlom}
            alt="Pip Blom"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Pip Blom</h2>
            <p>Dutch indie band from Amsterdam</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={jessicaLauren}
            alt="Jessica Lauren"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Jessiva Lauren</h2>
            <p>London-born pianist, keyboard player and composer</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={tusks}
            alt="Tusks"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Tusks</h2>
            <p>English singer and electronic musician from London</p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={mtWolf}
            alt="Mt Wolf"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Mt Wolf</h2>
            <p>
              An English dream pop outfit's atmospheric blend of chamber pop,
              folk, electronic, and R&B
            </p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={jolyon}
            alt="Jolyon Thomas"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Jolyon Thomas</h2>
            <p>
              {" "}
              English record producer, multi-instrumentalist, songwriter and
              mixer.
            </p>
          </div>
        </li>
        <li className="bg-white rounded-md shadow-md p-6 flex items-center">
          <img
            src={gwen}
            alt="Gwen and the Good thing"
            className="w-24 h-24 object-cover rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">Gwen and The Good Thing</h2>
            <p>
              Gwen and the Good Thing are a Bedroom Pop group from Milton
              Keynes.
            </p>
          </div>
        </li>
        {/* Add more li elements for each client */}
      </ul>
    </div>
  );
};

export default MoreClients;
