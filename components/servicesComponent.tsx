"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import RightArrowIcon from "./icons/right-arrow";

// Sample service data - replace with your actual data
const services = [
  {
    title: "Travel Demand Estimation & Modelling",
    description:
      "Travel demand estimation and forecasting is essential for assessing viability of any transportation facility and the design and operation of the same. It also supports in process of development of transportation policies.",
    link: "#",
  },
  {
    title: "Traffic Engineering & Management",
    description:
      "Our traffic engineering services help optimize traffic flow, improve safety, and enhance mobility through comprehensive analysis and innovative solutions.",
    link: "#",
  },
  {
    title: "Smart Mobility Solutions",
    description:
      "We develop and implement cutting-edge smart mobility solutions that leverage technology to create more efficient, sustainable, and user-friendly transportation systems.",
    link: "#",
  },
];

export default function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-rotate carousel vertically
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Update carousel position when index changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateY(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <section className="flex flex-col md:flex-row w-full pb-8 md:pb-[97px]">
      {/* Left side - Banner image */}
      <div className="relative w-full md:w-1/2 h-[460px] md:h-[641px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        <Image
          src="/services-section-banner.webp?height=500&width=600"
          alt="Aerial view of highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 px-8 py-18 md:pt-[97px] md:pl-[61px] z-20">
          <h2 className="text-white text-3xl md:text-[46px] font-light tracking-[3.75px] leading-[83px]">
            SERVICES <span className="text-accent italic font-semibold">OFFERED</span>
          </h2>
          <p className="text-white font-normal text-sm mt-4 max-w-sm leading-[20px] tracking-[0.25px]">
            Smart AI-driven traffic monitoring with video-based analytics.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#FAFAFA] p-8 md:pl-[71px] md:pt-[122px] flex overflow-hidden">
        <div className="w-full h-[300px] relative">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* <div className="border-l-4 border-green-500 pl-4"> */}
                <h3 className="text-xl md:text-[32px] font-light leading-[40px] tracking-[3.75px]">
                  {service.title.split("&").map((part, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {i > 0 && (
                        <span className="text-green-500">& {part}</span>
                      )}
                      {i === 0 && part}
                    </span>
                  ))}
                </h3>
              {/* </div> */}

              <p className="mt-6 text-[#404040] text-[14px] leading-[20px] pr-8">
                {service.description}
              </p>

              <a
                href={service.link}
                className="inline-flex items-center mt-6 text-green-500 hover:text-green-600 transition-colors gap-[40px]"
              >
                READ MORE <RightArrowIcon color={"#5FBA51"} />
              </a>
            </div>
          ))}

          {/* Vertical carousel indicators */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2 ">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "h-[146px] w-1.5 bg-accent"
                    : "h-[76px] w-1.5 bg-gray-300"
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
