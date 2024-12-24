import FacebookIcon from "../assets/social/Facebook.svg";
import InstagramIcon from "../assets/social/Instagram.svg";
import LinkedinIcon from "../assets/social/linkdein.svg";
import YoutubeIcon from "../assets/social/youtube.svg";
import {
  FaUniversity,
  FaGlobe,
  FaRegCheckCircle,
  FaBriefcase,
} from "react-icons/fa";
import { FaUserGraduate, FaPassport } from "react-icons/fa";
export const SocialIcons = {
  facebook: {
    icon: FacebookIcon,
    href: "https://www.facebook.com/mastersvisa2",
  },
  instagram: {
    icon: InstagramIcon,
    href: "https://www.instagram.com/mastersvisa/",
  },
  linkedin: {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/mastersvisa/",
  },
  youtube: {
    icon: YoutubeIcon,
    href: "https://youtube.com/@MastersVisa",
  },
};

export const NavLinks = {
  home: {
    title: "Home",
    href: "/",
  },
  AboutUs: {
    title: "About Us",
    href: "/about-us",
  },
  studyAbroad: {
    title: "Study Abroad",
    href: "#",
    subLinks: [
      { title: "USA", href: "/study-abroad/usa" },
      { title: "uk", href: "/study-abroad/uk" },
      { title: "canada", href: "/study-abroad/canada" },
      { title: "Australia", href: "/study-abroad/australia" },
      { title: "Europe", href: "/study-abroad/europe" },
      { title: "New Zealand", href: "/study-abroad/new-zealand" },
    ],
  },
  ourServices: {
    title: "Our Services",
    href: "#",
    subLinks: [
      { title: "Career Counselling", href: "/services/career-counselling" },
      { title: "Test Preparation", href: "/services/test-preparation" },
      { title: "Application Process", href: "/services/application-process" },
      { title: "Loan Assistance", href: "/services/loan-assistance" },
      { title: "Mock Interviews", href: "/services/mock-interviews" },
      { title: "Visa Guidance", href: "/services/visa-guidance" },
      {
        title: "Pre-Departure Orientation",
        href: "/services/pre-departure-orientation",
      },
      {
        title: "Free Trainings",
        href: "#",
        subLinks: [
          { title: "IELTS", href: "/services/free-trainings/ielts" },
          { title: "PTE", href: "/services/free-trainings/pte" },
          { title: "TOEFL", href: "/services/free-trainings/toefl" },
        ],
      },
    ],
  },
  faq: {
    title: "FAQ",
    href: "/faq",
  },
  news: {
    title: "News",
    href: "/news",
  },
  contact: {
    title: "Contact",
    href: "/contact",
  },
};

export const FooterLinks = [
  {
    title: "Study Abroad",
    footLinks: [
      { title: "USA", href: "/study-abroad/usa" },
      { title: "UK", href: "/study-abroad/uk" },
      { title: "Canada", href: "/study-abroad/canada" },
      { title: "Australia", href: "/study-abroad/australia" },
      { title: "Europe", href: "/study-abroad/europe" },
      { title: "New Zealand", href: "/study-abroad/new-zealand" },
    ],
  },
  {
    title: "Our Services",
    footLinks: [
      { title: "Career Counselling", href: "/services/career-counselling" },
      { title: "Test Preparation", href: "/services/test-preparation" },
      { title: "Application Process", href: "/services/application-process" },
      { title: "Loan Assistance", href: "/services/loan-assistance" },
      { title: "Mock Interviews", href: "/services/mock-interviews" },
      { title: "Visa Guidance", href: "/services/visa-guidance" },
    ],
  },
  {
    title: "Practice Area",
    footLinks: [
      { title: "Home", href: "/" },
      { title: "Study Abroad", href: "/study-abroad" },
      { title: "Test Preps", href: "/test-preps" },
      { title: "About Us", href: "/about-us" },
      { title: "Faq's", href: "/faq" },
    ],
  },
  {
    title: "Test Preps",
    footLinks: [
      { title: "IELTS", href: "/ielts" },
      { title: "PTE", href: "/pte" },
      { title: "TOEFL", href: "/tofel" },
    ],
  },
];
export const ReactCountUp = [
  {
    title: "Years of Experience",
    count: 5,
    icon: <FaBriefcase size={20} />,
    color: "text-blue-500", // Add color for this item
  },
  {
    title: "Universities",
    count: 400,
    icon: <FaUniversity size={20} />,
    color: "text-green-500", // Add color for this item
  },
  {
    title: "Countries",
    count: 40,
    icon: <FaGlobe size={20} />,
    color: "text-red-500", // Add color for this item
  },
  {
    title: "Visa Approved",
    count: 1000,
    icon: <FaRegCheckCircle size={20} />,
    color: "text-yellow-500", // Add color for this item
  },
];
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
// constants/index.js
export const HowItWorksSteps = [
  {
    title: "Connect with Experts",
    subtext:
      "Connect with our experts to assess your educational goals and visa requirements.",
    svg: "https://www.flaticon.com/svg/static/icons/svg/4806/4806265.svg", // Example SVG
  },
  {
    title: "Choose Your Program",
    subtext:
      "Select the program that best matches your career and academic aspirations.",
    svg: "https://www.flaticon.com/svg/static/icons/svg/4806/4806265.svg", // Example SVG
  },
  {
    title: "Submit Your Application",
    subtext: "Complete and submit your application for review and approval.",
    svg: "https://www.flaticon.com/svg/static/icons/svg/4806/4806265.svg", // Example SVG
  },
  {
    title: "Get Your Visa",
    subtext:
      "After approval, get assistance with your visa process to study abroad.",
    svg: "https://www.flaticon.com/svg/static/icons/svg/4806/4806265.svg", // Example SVG
  },
];
// constants/universities.js

export const universities = [
  {
    name: "Harvard University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png",
    country: "United States",
  },
  {
    name: "University of Oxford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Oxford_coat_of_arms.svg/1200px-University_of_Oxford_coat_of_arms.svg.png",
    country: "United Kingdom",
  },
  {
    name: "Stanford University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Stanford_University_logo.svg",
    country: "United States",
  },
  {
    name: "University of Cambridge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/University_of_Cambridge_crest.svg/1024px-University_of_Cambridge_crest.svg.png",
    country: "United Kingdom",
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MIT_logo.svg/1200px-MIT_logo.svg.png",
    country: "United States",
  },
  {
    name: "University of Tokyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/University_of_Tokyo_logo.svg/1200px-University_of_Tokyo_logo.svg.png",
    country: "Japan",
  },
  {
    name: "University of Melbourne",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/University_of_Melbourne_logo.svg/1200px-University_of_Melbourne_logo.svg.png",
    country: "Australia",
  },
  {
    name: "ETH Zurich",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/ETH_Zurich_logo.svg/1200px-ETH_Zurich_logo.svg.png",
    country: "Switzerland",
  },
  {
    name: "National University of Singapore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/National_University_of_Singapore_logo.svg/1200px-National_University_of_Singapore_logo.svg.png",
    country: "Singapore",
  },
  {
    name: "University of California, Berkeley",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/UC_Berkeley_logo.svg",
    country: "United States",
  },
];

export const ratingsData = [
  {
    name: "John Doe",
    university: "Harvard University",
    photo: "https://randomuser.me/api/portraits/men/1.jpg", // Dummy photo URL
    rating: 4.5,
    message:
      "Amazing experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "Jane Smith",
    university: "Stanford University",
    photo: "https://randomuser.me/api/portraits/women/2.jpg", // Dummy photo URL
    rating: 3.8,
    message:
      "Great university, but the workload can be overwhelming at times. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "Mark Johnson",
    university: "University of Oxford",
    photo: "https://randomuser.me/api/portraits/men/3.jpg", // Dummy photo URL
    rating: 4.0,
    message:
      "A great learning experience with a vibrant student community. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "Emily Davis",
    university: "MIT",
    photo: "https://randomuser.me/api/portraits/women/4.jpg", // Dummy photo URL
    rating: 5.0,
    message:
      "Hands down the best decision of my life! The resources and networking opportunities are endless. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "John Doe",
    university: "Harvard University",
    photo: "https://randomuser.me/api/portraits/men/1.jpg", // Dummy photo URL
    rating: 4.5,
    message:
      "Amazing experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "Jane Smith",
    university: "Stanford University",
    photo: "https://randomuser.me/api/portraits/women/2.jpg", // Dummy photo URL
    rating: 3.8,
    message:
      "Great university, but the workload can be overwhelming at times. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "Mark Johnson",
    university: "University of Oxford",
    photo: "https://randomuser.me/api/portraits/men/3.jpg", // Dummy photo URL
    rating: 4.0,
    message:
      "A great learning experience with a vibrant student community. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "Emily Davis",
    university: "MIT",
    photo: "https://randomuser.me/api/portraits/women/4.jpg", // Dummy photo URL
    rating: 5.0,
    message:
      "Hands down the best decision of my life! The resources and networking opportunities are endless. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
  {
    name: "mohan",
    university: "MIT",
    photo: "https://randomuser.me/api/portraits/women/4.jpg", // Dummy photo URL
    rating: 5.0,
    message:
      "Hands down the best decision of my life! The resources and networking opportunities are endless. experience! The professors are top-notch, and the campus is beautiful. experience! The professors are top-notch, and the campus is beautiful.",
  },
];

export const eventsData = [
  {
    name: "Annual Christmas Celebration",
    date: "2024-12-25",
    pic: "https://via.placeholder.com/150?text=Christmas+Celebration",
  },
  {
    name: "New Year Gala",
    date: "2024-12-31",
    pic: "https://via.placeholder.com/150?text=New+Year+Gala",
  },
  {
    name: "Community Outreach Program",
    date: "2024-11-15",
    pic: "https://via.placeholder.com/150?text=Community+Outreach",
  },
  {
    name: "Easter Service",
    date: "2024-03-31",
    pic: "https://via.placeholder.com/150?text=Easter+Service",
  },
  {
    name: "Youth Retreat",
    date: "2024-08-20",
    pic: "https://via.placeholder.com/150?text=Youth+Retreat",
  },
  {
    name: "Music Fest",
    date: "2024-07-05",
    pic: "https://via.placeholder.com/150?text=Music+Fest",
  },
  {
    name: "Thanksgiving Dinner",
    date: "2024-11-28",
    pic: "https://via.placeholder.com/150?text=Thanksgiving+Dinner",
  },
  {
    name: "Spring Cleanup Drive",
    date: "2024-04-10",
    pic: "https://via.placeholder.com/150?text=Cleanup+Drive",
  },
];

export const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];
