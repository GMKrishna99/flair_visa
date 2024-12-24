import React, { useState } from "react";
import { faqData } from "../constants/index";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-6 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white shadow-xl rounded-lg mx-auto w-full md:full lg:w-full p-6">
        {/* Heading Section */}
        <div className="text-center mb-8 flex-1">
          <h2 className="text-3xl font-bold text-gray-800">
            You ask - we answer.
          </h2>
          <p className="text-gray-500 mt-2">
            All you want to know about the product.
          </p>
        </div>

        {/* FAQ Dropdown Section */}
        <div className="space-y-2 w-full flex-1">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 transition-all duration-1000 ease-in-out"
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex flex-row justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  {item.question}
                </h3>
                <span className="text-gray-500 text-2xl mt-2 md:mt-0">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`mt-3 text-gray-600 text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
