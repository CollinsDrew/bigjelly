import React from "react";
import liveRoom from "../Assets/bjs_live_room.jpeg";
// import liveRoom2 from "../Assets/bjs_live_room_2.jpeg";
import liveRoom3 from "../Assets/bjs_live_room3.jpeg";
import mixRoom from "../Assets/bjs_mix_room.jpeg";
import mixRoom2 from "../Assets/bjs_mix_room_2.jpeg";
import bedRoom from "../Assets/bjs_bedroom.jpeg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={liveRoom} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={mixRoom} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={mixRoom2} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={liveRoom3} alt="/" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={bedRoom} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
