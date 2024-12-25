import React, { useState } from "react";
import { newsData } from "../constants/NewsUpdates.constance"; // Import your newsData
import { BeatLoader } from "react-spinners";

const News = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [loading, setLoading] = useState(false); // Loader state

  const handleCountryChange = (country) => {
    setLoading(true); // Start loading when country is selected
    setSelectedCountry(country);
    setTimeout(() => {
      setLoading(false); // Stop loading after a brief delay (for the sake of the animation)
    }, 800); // Adjust the delay based on the data processing time
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
      <div className="flex justify-center mb-6 space-x-4 overflow-x-auto md:space-x-8 whitespace-nowrap scrollbar-hidden">
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
            className={`py-2 px-6 border rounded-full ${
              selectedCountry === country
                ? "bg-slate-950 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#E20835" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNews.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border shadow-md transition-all flex flex-col lg:flex-row items-start"
            >
              {/* Left Section (Image) */}
              <div className="w-full lg:w-1/3 h-full flex justify-center items-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-40 lg:h-full object-cover"
                />
              </div>

              {/* Right Section (Title, Country, Date, Subtext) */}
              <div className="flex flex-col w-full lg:w-2/3 pr-6 p-4">
                <div className="flex items-center gap-3">
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
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default News;
