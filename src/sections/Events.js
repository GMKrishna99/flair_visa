import React, { useRef } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { eventsData } from "../constants/index";
import { SlCalender } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";

const Events = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1.5; // Adjust scroll amount based on visible width
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-8 px-6 md:px-2">
      <div className="flex justify-between items-center">
        <Heading number={"04"} text={"Study abroad events"} />
        <div className="hidden md:block">
          <Button>See More Events</Button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto py-6 scrollbar-hidden snap-x snap-mandatory cursor-pointer"
        >
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 flex-shrink-0 w-56 md:w-64 text-center snap-start "
            >
              <h3 className="text-xl font-semibold truncate">{event.name}</h3>
              <p className="text-sm bg-gray-200 p-3 rounded-full mt-2 font-semibold flex items-center justify-center gap-5">
                <CiCalendar className="w-5 h-5" />

                {event.date}
              </p>
              <img
                src={event.pic}
                alt={event.name}
                className="w-full mx-auto mt-4 rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => scroll("left")}
            className="p-4  border-2 border-primary_color rounded-full text-primary_color hover:border-primary_color/90 hover:text-primary_color"
          >
            <FaChevronRight />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4  border-2 bg-primary_color rounded-full text-white hover:bg-primary_color/90 "
          >
            <FaChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
