import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import HowItWorksSteps from "../constants";

const HowItWorksComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Automatically change steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % HowItWorksSteps.length);
    }, 3000); // Change step every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-between mt-6">
      <div className="w-1/2 relative">
        {/* Heading and subtitle */}
        <div className="flex items-center justify-between">
          <Heading number="03" text="How We Work" />
          <span className="text-md font-normal text-subtext_color">
            Make Your first step the only step
          </span>
        </div>

        {/* Vertical Stepper */}
        <div className="flex flex-col items-center space-y-8 mt-6 relative">
          {HowItWorksSteps.map((step, index) => (
            <div key={index} className="flex items-center relative">
              {/* Line between steps */}
              {index !== 0 && (
                <div
                  className={`absolute top-0 left-1/2 w-px bg-gray-300 z-[-1] ${
                    currentStep >= index ? "h-full" : "h-0"
                  }`}
                  style={{
                    transition: "height 0.3s ease-in-out",
                  }}
                />
              )}
              {/* Step circle */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  currentStep === index
                    ? "bg-primary text-white"
                    : "bg-white text-primary border-primary"
                }`}
              >
                <span>{index + 1}</span>
              </div>

              {/* Title and Subtext */}
              {currentStep === index && (
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-md text-gray-600">{step.subtext}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Text and SVG Image for the current step */}
      <div className="w-1/2 ml-8">
        {/* SVG Image for the current step */}
        <img
          src={HowItWorksSteps[currentStep].svg}
          alt={`Step ${currentStep + 1}`}
          className="transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default HowItWorksComponent;
