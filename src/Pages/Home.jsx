import React from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow-down.png";
import Hero from "../components/Hero";
import img1 from "../assets/tickerr/Figma.png";
import img2 from "../assets/tickerr/Tailwind.png";
import img3 from "../assets/tickerr/TS.png";
import img4 from "../assets/tickerr/React.png";
import img5 from "../assets/tickerr/Shadcn.png";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import IndustryExperience from "./IndustoryExperiance/index";
import Solutions  from './Solution/index'
import Visions from "./Visions";
import Stages from "./Stages";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonials from './Testimonials/index'
const Home = () => {
  const navigate = useNavigate();

  const Ticker = ({ images }) => {
    return (
      <div className="max-w-full -mt-10 opacity-30 flex items-center justify-center flex-wrap overflow-hidden">
        <Marquee gradient={false} speed={80}>
          <div className="flex mt-[100px]">
            {images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`ticker-img-${index}`} 
                className="h-[clamp(50px,8vw,70px)] mr-[clamp(40px,8vw,150px)] object-contain md:h-[clamp(50px,7vw,70px)] md:mr-20 sm:h-[clamp(40px,6vw,60px)] sm:mr-[50px] xs:h-[clamp(30px,5vw,45px)] xs:mr-[30px]"
              />
            ))}
          </div>
        </Marquee>
      </div>
    );
  };

  return (
    <>
      <div className=" top-2.5 left-[5%] right-[5%] flex items-center justify-between w-[90%] max-w-[1800px] mx-auto py-2.5 lg:w-[95%] lg:left-[2.5%] lg:right-[2.5%]">
        <div className="max-w-[clamp(120px,15vw,325px)] mt-5">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        <button 
          onClick={() => navigate("/contact")}
          className="flex items-center justify-center mt-[-30px] gap-2 w-[clamp(120px,14vw,192px)] h-[clamp(40px,7vh,53px)] px-[clamp(16px,3vw,30px)] py-[clamp(8px,2vw,18px)] text-[clamp(14px,2vw,24px)] font-['Poppins'] font-bold text-white rounded-[40px] border border-transparent bg-gradient-to-r from-[#0A0A14] to-[#0A0A14] hover:bg-gradient-to-r hover:from-[#3D05DD] hover:to-[#EFA4F2] transition-all duration-400 ease-in-out whitespace-nowrap lg:px-5 lg:py-3 md:px-[10px] md:py-2.5 sm:px-4 sm:py-2"
        >
          Let's Talk 
          <img 
            src={arrow} 
            alt="arrow" 
            className="w-[clamp(10px,1.5vw,13px)] h-[clamp(10px,1.5vw,13px)] transition-transform duration-300 hover:rotate-[-90deg] hover:-translate-y-0.5"
          />
        </button>
      </div>

      <Hero />

      <Ticker images={[img1, img2, img3, img4, img5]} />
      <Visions/>
      <Solutions/>
     <IndustryExperience/>
     <Stages/>
     <AboutUs/>
     <Testimonials/>
     <Services/>
      <Footer/>
    </>
  );
};

export default Home;