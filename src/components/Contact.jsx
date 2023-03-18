import React from "react";
import banner from "../Assets/bj2_banner.jpeg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Rates</h2>
      <p className="text-center text-gray-700 py-2">
        Rates starting at £300 per 8hr Day / £40 ph (min 4hrs) 25%
        non-refundable deposit required to secure booking.
      </p>

      <h2 className="text-center text-gray-700">Get In Touch</h2>
      <p className="text-center text-gray-700 py-2">
        For enquiries please contact us with the form below and we’ll get back
        to you ASAP.
      </p>
      <div className="grid md:grid-cols-2">
        <img
          src={banner}
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input className="border m-2 p-2" type="tel" placeholder="Phone" />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
