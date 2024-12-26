import Banner from "../components/Banner";
import ContactUsBanner from "../assets/banners/contact_banner.png";
import "react-phone-input-2/lib/style.css";
import MapComponent from "../components/MapComponent";
import OurBranchesSlide from "../sections/OurBranchesSlide";
import ContactForm from "../sections/ContactForm";

const ContactUs = () => {
  return (
    <section>
      <Banner
        imageSrc={ContactUsBanner}
        title={"Get in Touch with Us"}
        subtitle={
          "We’re here to answer your questions and assist you every step of the way. Reach out to us anytime!"
        }
      />
      <div className="custom_container">
        <ContactForm />
        <MapComponent />
        <OurBranchesSlide />
      </div>
    </section>
  );
};

export default ContactUs;
