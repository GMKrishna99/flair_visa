import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { studentServices } from "../constants/StudenServices";
import { FaChevronRight } from "react-icons/fa";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS when the component mounts
  }, []);

  return (
    <section className="service-cards-container py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
      {/* Title */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 mb-6">
        <Heading
          number={"02"}
          text={"Services of Students"}
          data-aos="fade-up"
        />
      </div>

      {/* Cards */}
      {studentServices.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
          data-aos="fade-up" // Apply fade-up animation for the service cards
          data-aos-delay={index * 100} // Delay to animate each card sequentially
        >
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-10 h-full">
            <h2 className="text-xl xl:text-2xl font-semibold mb-4">
              {service.title}
            </h2>
            <div className="flex items-center mb-4 flex-col gap-6">
              <div
                className="rounded-full p-3 flex"
                style={{ backgroundColor: service.icon.backgroundColor }}
              >
                <div className="bg-white rounded-full p-8">
                  <div
                    className="w-12 h-12 rounded-full p-3 flex justify-center items-center text-white"
                    style={{ backgroundColor: service.icon.backgroundColor }}
                  >
                    {service.icon.src} {/* Render the React Icon here */}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-600">{service.subText}</p>
                <div className="flex justify-end bg-slate-300 p-4 rounded-full group-hover:bg-primary_color group-hover:text-white transition-all duration-300">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
