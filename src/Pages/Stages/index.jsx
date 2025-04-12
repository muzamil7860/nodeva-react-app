import React from "react";
import { motion } from "framer-motion";

export default function Stages() {
  const stages = [
    {
      title: "Stage 1",
      items: [
        { type: "button", text: "UX Audit", gradient: true },
        { type: "div", text: "Briefing & Onboarding" },
        { type: "div", text: "Product/Business Goals" },
        {
          type: "group",
          items: [{ text: "Market Research" }, { text: "Define MVP Goals" }],
        },
      ],
    },
    {
      title: "Stage 2",
      items: [
        { type: "button", text: "UX Audit", gradient: true },
        {
          type: "group",
          items: [{ text: "Market Research" }, { text: "Define MVP Goals" }],
        },
        { type: "div", text: "Product/Business Goals" },
      ],
    },
    {
      title: "Stage 3",
      items: [
        { type: "button", text: "UX Audit", gradient: true },
        {
          type: "group",
          items: [{ text: "Market Research" }, { text: "Define MVP Goals" }],
        },
        { type: "div", text: "Product/Business Goals" },
        { type: "div", text: "Product/Business Goals" },
        {
          type: "group",
          items: [{ text: "Market Research" }, { text: "Define MVP Goals" }],
        },
      ],
    },
    {
      title: "Stage 4",
      items: [
        { type: "button", text: "UX Audit", gradient: true },
        { type: "div", text: "Product/Business Goals" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[80rem] mt-8 md:mt-[50px] overflow-hidden"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center mb-8 md:mb-12">
        Design Process That Covers Your Unique Business
      </h1>

      <div className="flex relative flex-nowrap wrapcontainer">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="stage-container md:flex flex-col items-center mx-2 md:mx-0 first:ml-0 last:mr-0 mb-6"
          >
            <h3 className="text-md md:text-2xl mb-4 text-center">
              {stage.title}
            </h3>
            <div className="flex p-4 flex-col gap-3 w-full relative">
              {/* Add right border line for all stages except Stage 4 */}
              {index < stages.length - 1 && (
                <div
                  className="absolute hidden xl:block right-0 top-1/2 -translate-y-1/2 w-[2px] h-[130px] bg-[#16161F]"
                  style={{ transform: "translateY(-50%)" }}
                ></div>
              )}
              {stage.items.map((item, itemIndex) => {
                if (item.type === "button") {
                  return (
                    <button
                      key={itemIndex}
                      className={`flex items-center text-[18px] justify-center h-14 md:h-[50px] px-4 py-2 font-bold text-white rounded-[40px] transition-all duration-300 ${
                        item.gradient
                          ? "bg-gradient-to-r from-[#BB47ED] to-[#C349ED]"
                          : "border border-[#B946DF]"
                      }`}
                    >
                      {item.text}
                    </button>
                  );
                } else if (item.type === "div") {
                  return (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-center h-14 md:h-[50px] px-4 py-2 text-white rounded-[40px] border border-[#B946DF] text-nowrap text-sm md:text-[18px]"
                    >
                      {item.text}
                    </div>
                  );
                } else if (item.type === "group") {
                  return (
                    <div key={itemIndex} className="flex gap-2 w-full">
                      {item.items.map((groupItem, groupIndex) => (
                        <div
                          key={groupIndex}
                          className="flex items-center justify-center h-14 md:h-[50px] px-3 py-2 text-white rounded-[40px] border border-[#B946DF] text-nowrap text-[13.5px]"
                        >
                          {groupItem.text}
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
