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
      className="p-4 md:p-6 mt-8 md:mt-[50px] overflow-hidden"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center mb-8 md:mb-12">
        Design Process That Covers Your Unique Business
      </h1>

      <div className="flex gap-4 relative p-6 justify-between flex-nowrap wrapcontainer">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="stage-container inline-block md:flex flex-col min-w-[300px] md:min-w-[300px] items-center mx-2 md:mx-0 first:ml-0 last:mr-0 mb-6"
          >
            <h3 className="text-md md:text-2xl  mb-4 text-center">
              {stage.title}
            </h3>
            <div className="flex flex-col gap-3 w-full">
              {stage.items.map((item, itemIndex) => {
                if (item.type === "button") {
                  return (
                    <button
                      key={itemIndex}
                      className={`flex items-center justify-center h-14 md:h-[40px] px-4 py-2 font-bold text-white rounded-[40px] transition-all duration-300 ${
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
                      className="flex items-center justify-center h-14 md:h-[40px] px-4 py-2 text-white rounded-[40px] border border-[#B946DF] text-sm md:text-base"
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
                          className="flex items-center justify-center h-14 md:h-[40px] px-3 py-2 text-white rounded-[40px] border border-[#B946DF] text-noWrap text-[14px]"
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
