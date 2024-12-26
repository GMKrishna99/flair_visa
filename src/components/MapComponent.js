import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const MapComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (optional)
      easing: "ease-in-out", // Set easing (optional)
    });
  }, []);

  return (
    <div className="py-12 relative">
      {/* Google Map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.2538638781334!2d80.42949318589943!3d16.309967892752866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a756675e36663%3A0xc13ccd31333054f1!2sMasters%20Visa%20Overseas%20Education%20Consultancy%20Guntur!5e0!3m2!1sen!2sin!4v1735200031871!5m2!1sen!2sin&zoom=1&gestureHandling=true"
        width="600"
        height="450"
        allowFullScreen=""
        // referrerPolicy="no-referrer-when-downgrade"
        scrolling="no"
        className="w-full h-96 rounded-lg shadow-md pointer-events-none"
        data-aos="fade-in"
      />

      {/* Info Card with Down Arrow */}
      <div
        className="absolute top-[9%] left-[41%] transform -translate-x-1/2 -translate-y-1/2 bg-[#181621] rounded-lg shadow-lg p-6 w-80"
        data-aos="fade-up" // Add AOS animation
      >
        <h3 className="text-lg font-semibold text-white pb-3">
          Our Head Branch
        </h3>
        <a
          href="https://maps.app.goo.gl/tquHS2Ei8cj8Rp8K6"
          target="_blank"
          className="text-sm text-white mt-2 flex items-center pb-2"
        >
          <HiOutlineLocationMarker className="h-6 w-6" />
          <span className="ml-2">Guntur, Andhra Pradesh, India</span>
        </a>
        <a
          href="tel:+1234567890"
          className="text-sm text-white mt-2 flex items-center"
        >
          <HiOutlinePhone className="h-6 w-6" />
          <span className="ml-2">+1234567890</span>
        </a>
      </div>

      {/* Arrow pointing down */}
      <div
        className="absolute bg-white top-28 left-[46.5%] w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-[20px] border-t-[#181621] rotate-6"
        data-aos="fade-down" // Add AOS animation
      ></div>
    </div>
  );
};

export default MapComponent;
