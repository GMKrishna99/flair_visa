import React from "react";

const Heading = ({ number, text, subtext }) => {
  return (
    <div className="flex flex-col">
      {/* Number on the left */}
      <div className="text-subtext_color/50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold -mb-1 ">
        {number}
      </div>
      {/* Heading text */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold -mr-2">
        {text}
      </h2>
      {/* subtext */}
      <p className="text-sm md:text-base lg:text-lg text-subtext_color/50 font-normal mt-2">
        {subtext}
      </p>
    </div>
  );
};

export default Heading;
