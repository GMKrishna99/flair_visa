import { FaUserGraduate, FaPassport, FaUniversity } from "react-icons/fa";

export const studentServices = [
  {
    title: "Student Counselling",
    icon: {
      src: <FaUserGraduate />, // React Icon component
      alt: "Student Counselling Icon",
      backgroundColor: "#FF5733", // Background color for the icon
    },
    href: "/student-counselling",
    subText: "Guiding you through academic and personal challenges.",
  },
  {
    title: "Visa Counselling",
    icon: {
      src: <FaPassport />,
      alt: "Visa Counselling Icon",
      backgroundColor: "#33B5FF",
    },
    href: "/visa-counselling",
    subText: "Helping you understand visa processes and requirements.",
  },
  {
    title: "Choose a Suitable University",
    icon: {
      src: <FaUniversity />,
      alt: "University Icon",
      backgroundColor: "#28A745",
    },
    href: "/choose-university",
    subText: "Find the perfect university for your goals and career.",
  },
];
