import React, { useRef, useEffect } from "react";
import Heading from "../components/Heading";
import { universities } from "../constants/index";
import Button from "../components/Button";

const TopRatedUniversities = () => {
  const scrollRef = useRef(null);

  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        const currentScrollPosition = scrollRef.current.scrollLeft;

        // If scroll reaches or exceeds the total width, reset to the start
        if (currentScrollPosition + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollLeft = 0; // Reset scroll to start
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-6 md:px-2">
      <div className="flex justify-between items-center">
        <Heading
          number={"03"}
          text={"Discover top-rated Universities"}
          subtext={
            "Start your success story at a renowned university with our guidance"
          }
        />
        <div className="hidden md:block">
          <Button>View all</Button>
        </div>
      </div>
      <div className="py-8">
        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scrollbar-hidden py-4"
        >
          <div className="inline-flex gap-2 sm:gap-4 md:gap-2 lg:gap-3">
            {universities.map((university, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-64 sm:w-48 md:w-56 lg:w-64"
              >
                <img
                  src={university.logo}
                  alt={`${university.name} Logo`}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  {university.name}
                </h3>
                <p className="text-md text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                  {university.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedUniversities;
