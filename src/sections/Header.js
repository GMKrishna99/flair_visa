import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SocialIcons } from "../constants/Social";

const Header = () => {
  const googleMapUrl = `https://maps.app.goo.gl/xSUR2c19Akd3ZV6t6`;
  return (
    <div className=" w-full bg-header_color py-4 px-4 sm:px-6 lg:px-9 xl:px-32 hidden md:flex md:items-center lg:justify-between md:justify-center">
      <div className="lg:flex xl:gap-40 gap-10 hidden ">
        <a href="mailto:someone@example.com" className="flex items-center">
          <IoMailOpenOutline className="text-primary_color h-5 w-5" />
          <span className="text-header_text_color ml-2 text-sm">
            info@flairvisa.com
          </span>
        </a>
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaLocationDot className="text-primary_color h-5 w-5" />
          <span className="text-header_text_color ml-2 text-sm">
            918, 8th floor, VASAVI MPM Grand, Besides Ameerpet Metro Station,
            Hyderabad, 500073
          </span>
        </a>
      </div>
      <div className="flex gap-4">
        {Object.entries(SocialIcons).map(([key, { icon, href }]) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={icon} alt={key} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
