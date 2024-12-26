import React, { useState, useEffect } from "react";
import aboutBanner from "../assets/banners/about_banner.png";
import SubHeader from "../constants/sub";
import WhoWeAreImg from "../assets/undraw_work-time_zbsw 1.png";
import Description from "../constants/description";
import Banner from "../components/Banner";
import WhyChooseUs from "../assets/36242182_8357603 1.png";
import Heading from "../components/Heading";
import OurPromise from "../assets/Group 9296.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import groupimg from "../assets/boxIcones/Group 9298 (1).png";
import { steps } from "../constants/OurPromise";
import { data } from "../constants/OurValueAddedServices";
import { slides } from "../constants/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop through slides
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200,    // Trigger when the element is 120px from the viewport
      once: false,    // Allow animations every time you scroll back to the element
    });
  }, []);
  const [currentStep, setCurrentStep] = useState(0);

  // Auto progress through the steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1;
        }
        clearInterval(interval); // Stop when we reach the last step
        return prevStep;
      });
    }, 3000); // Change step every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentStep, steps.length]);

  return (
    <div className="lg:px-9 xl:px-24 w-full">
      <div className="px-4 md:px-8">
        <Banner
          imageSrc={aboutBanner}
          title="About Us"
          subtitle="we are dedicated to helping students turn their dreams of studying abroad into reality. With expert guidance and comprehensive support, we simplify every step of the journey to renowned global institutions."
        />
      </div>
      <section className="py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <Heading number={"01"} />
            {/* Who We Are.? */}
            <Heading text="Who We Are.?" data-aos="fade-up" className="mt-4" />
            <Description
              text="Choose Flairvisa  Abroad Education Consultants for your path to
            success! Our dedicated team provides personalized guidance to
            simplify the complex process of pursuing advanced studies overseas.
            From university selection to visa processing and seamless
            transitions, we offer expert advice tailored to your academic
            goals. Beyond conventional consultancy services, we ensure
            comprehensive support and unwavering commitment to your success.
            Trust our proven track record in shaping successful global academic
            journeys. Your aspirations, our expertise – the perfect combination
            for achieving your dreams."
              className="text-base md:text-lg leading-relaxed"
            />
          </div>
          {/* Illustration Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={WhoWeAreImg}
              alt="Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <div>
        {/* <img
        src={svg} className="opacity-20" /> */}
        <section className="py-10 px-5 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Container */}
            <div
              className="flex-1 order-2 md:order-1"
              data-aos="fade-right"
            >
              <img
                src={WhyChooseUs}
                alt="Illustration"
                className="max-w-[90%] sm:max-w-full h-auto mx-auto"
              />
            </div>

            {/* Text Container */}
            <div
              className="flex-1 text-center md:text-left order-1 md:order-2"
              data-aos="fade-left"
            >
              <Heading number={"02"} />
              <Heading
                text="Why Choose Us.?"
                className="mt-4"
                data-aos="fade-up"
              />
              <Description
                text="We stand apart because of our unwavering commitment to your success."
                data-aos="fade-up"
              />
              <div
                className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6"
                data-aos="zoom-in"
              >
                {/* Left Dots */}
                <div
                  className="flex flex-row md:flex-col items-center space-x-3 md:space-y-3 md:space-x-0 order-last md:order-none"
                  data-aos="fade-in"
                >
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3.5 h-3.5 rounded-full ${index === currentSlide ? "bg-red-500" : "bg-gray-300"
                        }`}
                    ></div>
                  ))}
                </div>

                {/* Content Card */}
                <div
                  className="rounded-lg p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-xs md:max-w-[36rem] md:flex-nowrap"
                  style={{ backgroundColor: "#F0EEF2" }}
                  data-aos="fade-up"
                >
                  {/* Slide Number */}
                  <h1
                    className="text-3xl md:text-4xl font-extrabold text-gray-400"
                    data-aos="zoom-in"
                  >
                    {String(slides[currentSlide].id).padStart(2, "0")}
                  </h1>

                  {/* Slide Content */}
                  <div
                    className="flex flex-col justify-center"
                    data-aos="fade-up"
                  >
                    <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 md:px-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1" data-aos="fade-right">
              <Heading number={"03"} />
              <Heading text="Our Promise" className="mt-4" data-aos="fade-up" />
              <Description
                text="Your dreams are our priority,  we’re more than consultants—we’re
 partners in making your aspirations a reality."
                data-aos="fade-up"
              />
              <div
                className="relative mt-4 flex flex-col items-start"
                data-aos="fade-up"
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start relative pb-12 ${index <= currentStep ? "opacity-100" : "opacity-50"
                      } transition-opacity duration-500`}
                    data-aos="fade-up"
                  >
                    {/* Vertical Connecting Line */}
                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute left-[20px] top-[20px] h-full ${index < currentStep ? "border-green-500" : "border-gray-300"
                          } border-l-2`}
                        data-aos="fade-up"
                      ></div>
                    )}

                    {/* Step Circle */}
                    <div
                      className="relative flex items-center justify-center"
                      data-aos="zoom-in"
                    >
                      <div
                        className={`w-10 h-10 rounded-full border-2 ${index <= currentStep
                          ? "border-green-500 border-dashed"
                          : "border-gray-300"
                          } flex items-center justify-center`}
                      >
                        <div
                          className={`w-5 h-5 ${index <= currentStep ? "bg-green-500" : "bg-gray-300"
                            } rounded-full flex items-center justify-center`}
                        >
                          {index <= currentStep && (
                            <span className="text-white text-sm font-bold">✓</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="ml-8" data-aos="fade-left">
                      <h3
                        className={`text-lg font-semibold ${index <= currentStep ? "text-black" : "text-gray-500"
                          }`}
                      >
                        {step.label}
                      </h3>
                      <Description text={step.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex-1 flex justify-center items-center"
              data-aos="fade-left"
            >
              <img
                src={OurPromise}
                alt="Illustration"
                className="max-w-full h-auto"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </section>

        <section className="py-14 px-6 md:px-12">
          <div className="items-center gap-8" data-aos="fade-up" data-aos-duration="1200">
            {/* Section Header */}
            <Heading number={"04"} />
            <Heading
              text="Our Value-Added Services"
              className="mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <Description
              text="We provide more than visa services—offering comprehensive support to make your international journey seamless and successful."
              className="mt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>

          {/* Services Carousel */}
          <div className="mt-12" data-aos="fade-up" data-aos-duration="1500">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="pb-6"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 150}`} // Staggered animations
                >
                  <div
                    className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center space-y-6 text-center w-full h-[300px]"
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                  >
                    {/* Dynamic Icon with animation */}
                    <div
                      className={`flex items-center justify-center w-20 h-20 rounded-full ${item.bgColor} ${item.shadowColor} shadow-lg`}
                      data-aos="flip-left"
                      data-aos-delay="300"
                    >
                      {item.icon}
                    </div>
                    {/* Title */}
                    <h2
                      className="text-lg font-semibold text-gray-800 truncate"
                      data-aos="fade-down"
                    >
                      {item.title}
                    </h2>
                    {/* Description */}
                    <p
                      className="text-gray-500 text-sm"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-10 px-4 md:px-8" data-aos="fade-up">
          <div className="mb-6" data-aos="fade-right" data-aos-delay="200">
            <Heading number={"05"} />
            <Heading text="Application Guide" className="mt-4" data-aos="fade-up" data-aos-delay="300" />
            <Description
              text="From start to finish, we ensure every detail of your application is handled with precision, providing you with a seamless and stress-free experience."
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </div>
          <div className="mt-6 md:ml-6" data-aos="fade-left" data-aos-delay="500">
            <img
              src={groupimg}
              alt="Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
