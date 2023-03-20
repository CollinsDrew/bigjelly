import React from "react";

const Location = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-gray-700">
      <h2 className="text-xl font-bold mb-2">Big Jelly Studios</h2>
      <p className="text-gray-600 mb-2">
        67A Chapel Rd, St Lawrence, Ramsgate, Kent CT11 0BS, United Kingdom
      </p>
      <iframe
        className="w-full h-64 rounded-lg"
        title="Big Jelly Studios location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.208288277655!2d1.4240641159813486!3d51.33292347960526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47deb44bb0cc3a3f%3A0xd5b5fa7c9f196d5f!2sBig%20Jelly%20Studios!5e0!3m2!1sen!2suk!4v1647765570821!5m2!1sen!2suk"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
