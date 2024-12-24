import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Banner = ({ imageSrc, title, subtitle, linkText, linkHref }) => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="flex items-center justify-center">
        <img
          src={imageSrc}
          alt="home_banner"
          className="w-full h-auto object-cover" // Ensures the image is responsive
        />
      </div>

      {/* Overlay with title, subtitle, and link */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 sm:px-6 md:px-8 w-full md:w-3/4 lg:w-full ">
        {/* Title with responsive text size */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold my-3 leading-tight lg:w-1/2 mx-auto">
          {title}
        </h1>

        {/* Subtitle with responsive text size */}
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-banner_subtext_color text-center w-1/2 mx-auto">
          {subtitle}
        </p>

        {/* Conditionally render the anchor link if linkText and linkHref are provided */}
        {linkText && linkHref && (
          <div className=" md:mt-3 mt-0 text-center">
            <a
              href={linkHref}
              className="bg-primary_color hover:bg-primary_color/90 transition-all duration-500 ease-in-out text-white py-2 px-6 md:py-3 rounded-full mx-auto flex justify-center items-center font-medium w-max" // Responsive padding and margin"
            >
              {linkText}
              <div className="bg-white h-6 w-6 flex items-center justify-center rounded-full ml-2">
                <FaChevronRight className="text-primary_color" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
