import React, { useState } from "react";
import { newsData } from "../constants/NewsUpdates.constance"; // Import your newsData

const News = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const filteredNews =
    selectedCountry === "All"
      ? newsData
      : newsData.filter((item) => item.country === selectedCountry);

  return (
    <section className="py-8 px-6 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Latest News & Updates
        </h2>
        <p className="text-gray-500 mt-2">
          Stay updated with the latest news from different countries.
        </p>
      </div>

      {/* Buttons for selecting country */}
      <div className="flex justify-center mb-6 space-x-4">
        {[
          "All",
          "USA",
          "UK",
          "Canada",
          "Australia",
          "Germany",
          "New Zealand",
          "European Union",
        ].map((country) => (
          <button
            key={country}
            onClick={() => handleCountryChange(country)}
            className={`py-2 px-6 border rounded-full  ${
              selectedCountry === country
                ? "bg-slate-950 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* News Articles Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredNews.map((item, index) => (
          <div
            key={index}
            className="rounded-lg p-4 border shadow-md transition-all flex items-start"
          >
            {/* Left Section (Title, Country, Date, Subtext) */}
            <div className="flex flex-col w-full pr-6 ">
              <div className=" flex items-center justify-evenly">
                {/* Article Country */}
                <span className="text-sm mb-2 bg-slate-200 text-black px-4 py-2 rounded-full">
                  {item.country}
                </span>

                {/* Article Date */}
                <span className="text-sm mb-2 bg-slate-200 text-black px-4 py-2 rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Article Title */}
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h3>

              {/* Article Subtext */}
              <p className="text-gray-600 text-sm">{item.subtext}</p>
            </div>

            {/* Right Section (Image) */}
            <div className="w-1/3 hidden lg:flex justify-center items-center mt-6">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-md w-full h-40 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
