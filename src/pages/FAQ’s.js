import React, { useState } from 'react';
import Banner from "../components/Banner";
import FAQs from "../assets/banners/faq_banner.png"
import FaqTabs from "../sections/faqSteps"
import Q from "../sections/q"

const FAQPage = () => {


  return (
    <main className="custom_container">
         <div>
        <div className="px-4 ">
          <Banner
            imageSrc={FAQs}
            title={"Your Questions, Answered"}
            subtitle={
              "Explore our detailed answers to common questions and find the support you need."
            }
          />
        </div>
        <FaqTabs/>
        <Q/>
      </div>
        </main>
  );
};

export default FAQPage;



