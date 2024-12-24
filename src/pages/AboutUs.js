import React, { useState, useEffect } from "react";
import aboutBanner from "../assets/banners/about_banner.png"
import MainHeader from "../../src/constants/header"
import SubHeader from "../constants/sub";
import WhoWeAreImg from "../assets/undraw_work-time_zbsw 1.png"
import Description from "../constants/description";
import svg from "../assets/XMLID_7529_.svg"
import Banner from "../components/Banner";
import WhyChooseUs from "../assets/36242182_8357603 1.png"
import Heading from "../components/Heading";
import OurPromise from "../assets/Group 9296.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaUserGraduate } from 'react-icons/fa'; // Import your React Icon
import boxIcon1 from "../assets/boxIcones/Icon.png"
import boxIcon2 from "../assets/boxIcones/voice-activate-svgrepo-com 1.png"
import boxIcon3 from "../assets/boxIcones/Award.png"
import boxIcon4 from "../assets/boxIcones/Bank Note 05 (4).png"
import boxIcon5 from "../assets/boxIcones/Document Text (3).png"
import boxIcon6 from "../assets/boxIcones/Book Saved (2).png"
import boxIcon7 from "../assets/boxIcones/Workspace Desk (6).png"
import groupimg from "../assets/boxIcones/Group 9298 (1).png"
const AboutUs = () => {
  const steps = [
    { label: "Transparency at Every Step", description: "From the first consultation to the final visa approval, we ensure that every step of the process is clear and straightforward. You’ll always know where you stand and what’s next." },
    { label: "Personalized Solutions", description: "Integrity is the cornerstone of our services. We uphold the highest ethical standards, providing honest advice and practical solutions tailored to your unique needs." },
    { label: "Professional Expertise", description: "With a team of experienced consultants and in-depth knowledge of global immigration policies, we deliver reliable and accurate guidance to help you achieve your goals efficiently." },
    { label: "Dedicated Support", description: "We’re with you every step of the way, offering pre-departure and post-landing assistance for a seamless transition." },
  ];
  const data = [
    {
      title: "Free processing for all countries",
      description:
        "Enjoy seamless visa application services without additional processing fees for any country. Our expertise ensures efficiency at every step.",
      icon: (
        <img
          src={boxIcon1} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-primary_color", // Add the bgColor field
      shadowColor: "shadow-gray-400", // Shadow color
    },
    // Add more items as needed
    {
      title: "Free processing for all countries",
      description:
        "Prepare for success with expert-led training in IELTS, TOEFL, and other language proficiency tests to meet global standards.",
      icon: (
        <img
          src={boxIcon2} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-bg_customblue", // Add the bgColor field
      // shadowColor: "shadow-blue-200", // Shadow color
      shadowColor: "shadow-gray-400",
    },
    // Add more items as needed
    {
      title: "Scholarship Assistance",
      description:
        "Unlock financial opportunities with personalized guidance on scholarships available in your chosen destination.",
      icon: (
        <img
          src={boxIcon3} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-bg_customgreen", // Add the bgColor field
      // shadowColor: "shadow-green-200", // Shadow color
      shadowColor: "shadow-gray-400",
    },
    // Add more items as needed
    {
      title: "Financial Aid",
      description:
        "Need additional funding? We assist in identifying financial aid options, ensuring your aspirations aren’t hindered by financial constraints.",
      icon: (
        <img
          src={boxIcon4} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-bg_thickgreen", // Add the bgColor field
      // shadowColor: "shadow-red-200", // Shadow color
      shadowColor: "shadow-gray-400",
    },
    {
      title: "Application Fee Waiver",
      description:
        "Save more with exclusive application fee waivers for select universities and programs, thanks to our strong partnerships.",
      icon: (
        <img
          src={boxIcon5} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-bg_customgliteblue", // Add the bgColor field
      // shadowColor: "shadow-red-200", // Shadow color
      shadowColor: "shadow-gray-400",
    },
    {
      title: "Visa Interview Guidance",
      description:
        "Ace your visa interview with confidence. Our experts provide mock sessions and tips to help you succeed.",
      icon: (
        <img
          src={boxIcon6} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-bg_customOrange", // Add the bgColor field
      // shadowColor: "shadow-bg_customOrange", // Shadow color
      shadowColor: "shadow-gray-400",
    },
    {
      title: "Visa Interview Guidance",
      description:
        "Ace your visa interview with confidence. Our experts provide mock sessions and tips to help you succeed.",
      icon: (
        <img
          src={boxIcon7} // Image path
          alt="Icon"
          className="h-12 w-12 object-cover" // Image styling
        />
      ),
      bgColor: "bg-bg_variengreen", // Add the bgColor field
      // shadowColor: "shadow-bg_variengreen", // Shadow color
      shadowColor: "shadow-gray-400",
    },
    // Add more items as needed
  ];
  const slides = [
    {
      id: 1,
      title: "Proven Track Record",
      description: "Thousands of satisfied clients and successful applications.",
    },
    {
      id: 2,
      title: "Why Choose Us?",
      description: "We stand apart because of our unwavering commitment to your success.",
    },
    {
      id: 3,
      title: "Client Focus",
      description: "Our strategies are designed to meet your unique needs.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop through slides
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
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
        <Banner imageSrc={aboutBanner}
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
              <SubHeader title="Who We Are.?" className="mt-4"/>
            <Description text="Choose Flairvisa  Abroad Education Consultants for your path to
            success! Our dedicated team provides personalized guidance to
            simplify the complex process of pursuing advanced studies overseas.
            From university selection to visa processing and seamless
            transitions, we offer expert advice tailored to your academic
            goals. Beyond conventional consultancy services, we ensure
            comprehensive support and unwavering commitment to your success.
            Trust our proven track record in shaping successful global academic
            journeys. Your aspirations, our expertise – the perfect combination
            for achieving your dreams." className="text-base md:text-lg leading-relaxed" />
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
            <div className="flex-1">
              <img
                src={WhyChooseUs}
                alt="Illustration"
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex-1">
  <Heading number={"02"} />
  <SubHeader title="Why Choose Us.?" className="mt-4" />
  <Description text="We stand apart because of our unwavering commitment to your success." />
  <div className="flex flex-col md:flex-row items-center justify-center space-x-6 mt-6">
      {/* Left Dots */}
      <div className="flex flex-col items-center space-y-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3.5 h-3.5 rounded-full ${index === currentSlide ? "bg-red-500" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Content Card */}
      <div
        className="rounded-lg p-8 flex items-center space-x-8 h-40 w-full md:w-[36rem] md:!w-[36rem] md:flex-row"
        style={{ backgroundColor: "#F0EEF2" }}
      >
        {/* Slide Number */}
        <h1 className="text-4xl font-extrabold text-gray-400">
          {String(slides[currentSlide].id).padStart(2, "0")}
        </h1>

        {/* Slide Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900">
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
        <section className="py-10 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Heading number={"03"} />
              <SubHeader title="Our Promise" className="mt-4" />
              <Description text="Your dreams are our priority,  we’re more than consultants—we’re
 partners in making your aspirations a reality." />
              <div className="relative mt-4 flex flex-col items-start">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start relative pb-12 ${index <= currentStep ? "opacity-100" : "opacity-50"
                      } transition-opacity duration-500`}
                  >
                    {/* Vertical Connecting Line */}
                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute left-[20px] top-[20px] h-full ${index < currentStep ? "border-green-500" : "border-gray-300"
                          } border-l-2`}
                      ></div>
                    )}

                    {/* Step Circle */}
                    <div className="relative flex items-center justify-center">
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
                    <div className="ml-8">
                      <h3
                        className={`text-lg font-semibold ${index <= currentStep ? "text-black" : "text-gray-500"
                          }`}
                      >
                        {step.label}
                      </h3>
                      {/* <p className="text-sm text-gray-500">{step.description}</p> */}
                      <Description text={step.description} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img
                src={OurPromise}
                alt="Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>
        <section className="py-14 px-6 md:px-12">
          <div className="items-center gap-8">
            <Heading number={"04"} />
            <SubHeader title="Our Value-Added Services" className="mt-6" />
            <Description text="We provide more than visa services—offering comprehensive support to make your international journey seamless and successful." />
            <div className="mt-6">
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
                 className=""
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="pb-6">
                    <div className="bg-white shadow-md rounded-xl p-8 flex flex-col items-center space-y-6 text-center w-full sm:w-[350px] md:w-[400px] h-[300px] mx-auto">
                      {/* Icon with dynamic background color and shadow */}
                      <div className={`flex items-center justify-center w-20 h-20 rounded-full ${item.bgColor} ${item.shadowColor} shadow-lg`}>
                        {item.icon} {/* This renders the image */}
                      </div>
                      {/* Title */}
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      {/* Description */}
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="py-10 px-4 md:px-8">
  <div className="mb-6">
    <Heading number={"05"} />
    <SubHeader title="Application Guide" className="mt-4" />
    <Description text="From start to finish, we ensure every detail of your application is handled with precision, providing you with a seamless and stress-free experience." />
  </div>
  <div className="mt-6 md:ml-6">
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


