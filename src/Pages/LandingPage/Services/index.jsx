import React from "react";
import { IoIosAdd } from "react-icons/io";
import Idea from "./component/Idea";

// FAQ Item Component
const FAQItem = ({ question }) => {
  const containerStyles =
    "bg-[#1F1134]  flex justify-between items-center p-8 border-2 rounded-[30px] border-[#75368a]";
  const questionStyles = "font-bold text-[30px] leading-[40px] tracking-[-0.05em] font-[Plus Jakarta Sans] [text-edge:cap]";
  const iconStyles = "text-[#B946DF]"; 

  return (
    <div className={containerStyles}>
      <h3 className={questionStyles}>{question}</h3>
      <IoIosAdd className={iconStyles} size={40} />{" "}
    </div>
  );
};

export default function Services() {
  const faqData = [
    "What services does your agency offer?",
    "Who do you work with?",
    "What is your design process?",
    "How long does a project take?",
    "How much do we price our services?",
    "How can we start working?",
  ];

  return (
    <section className="mt-[50px] mx-auto max-w-[80rem] w-full p-8">
      <h1 className=" text-xl xs:text-2xl md:text-5xl text-center mb-12 md:mb-16">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-4">
        {faqData.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
      <Idea />
    </section>
  );
}
