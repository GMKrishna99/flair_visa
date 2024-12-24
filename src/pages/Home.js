import React from "react";
import HomeBanner from "../assets/banners/home_banner.png";
import Banner from "../components/Banner";
import About from "../sections/About";
import Services from "../sections/services";

const Home = () => {
  return (
    <main className="custom_container">
      {/* Banner */}
      <div>
        <div className="px-4 ">
          <Banner
            imageSrc={HomeBanner}
            title={"Turn your Study abroad Dreams into reality"}
            linkHref={"/courses"}
            linkText={"Start your Journey"}
            subtitle={
              "Transforming Aspirations into International Achievements"
            }
          />
        </div>
      </div>

      {/* About Us Section */}
      <About />
      {/* <div
        className="absolute top-[25%] left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-center z-[-1] opacity-40 w-screen h-1/2"
        style={{ backgroundImage: `url(${BuildingsSvg})` }}
      /> */}
      <Services />
      {/* <HowItWorks /> */}
      <TopRatedUniversities />
      <Testimonials />
      <Events />
      <Faq />
      <NewsUpdates />
      <div className="flex flex-col items-center justify-center py-8 px-6 md:px-8 lg:px-16">
        <h2 className="text-5xl font-bold text-center mt-6 mb-6 ">
          Get a <span className="text-primary_color">Free Counselling</span>
        </h2>
        <p className="text-subtext_color text-sm font-medium mb-6 text-center">
          Find your ideal study abroad destination, apply, and connect with our
          expert guidance counselors
        </p>
        <Button>Apply Now</Button>
      </div>
    </main>
  );
};

export default Home;
