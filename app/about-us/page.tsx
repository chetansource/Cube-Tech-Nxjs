import Header from "@/components/header";
import { Testimonial } from "@/components/testimonial";
import React from "react";
import Image from "next/image";
import PolygonIcon from "@/components/icons/polygon";
import Stats from "@/components/stats";
import RightArrowIcon from "@/components/icons/right-arrow";
import LeftArrowIcon from "@/components/icons/left-arrow";
import Timeline from "@/components/about-us/Timeline";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-white mb-[97px] overflow-hidden h-[527px]">
        <div className="absolute top-0 bottom-0 left-0 right-[57px] z-0">
          <Image
            src="/long-shot-professional-cyclist-women-road.webp"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-[57px] bg-black/10 z-10" />
        <div className="relative z-20 container left-[57px] px-4 pt-60 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-white text-2xl md:text-[75px] font-light mb-12 leading-[40px]">
              ABOUT <span className="italic">US</span>
            </h1>
          </div>
        </div>
        <div className="absolute -bottom-px right-0 z-20 w-31 pointer-events-none">
          <PolygonIcon />
        </div>
      </section>

      <Timeline />

      {/* Leadership Section */}
      <div className="p-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Leadership Text */}
          <div className="col-span-1">
            <h2 className="text-[46px] font-light mb-12 leading-[40px]">
              LEADERSHIP
            </h2>
            <p className="md:w-[70%] text-sm mb-8 leading-[20px] text-[#404040]">
              We provide strong and dependable leadership to drive success and
              innovation within your organization. Whether it's strategic
              planning, team management, or decision-making, our experienced
              leaders offer guidance and solutions that foster growth, enhance
              efficiency, and ensure long-term stability.
            </p>
          </div>

          {/* Leader Cards */}
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="col-span-1 rounded-md overflow-hidden shadow-md relative h-[392px]"
            >
              <Image
                src="/leadership-banner-1.webp"
                alt="Leadership Image"
                fill
                className="object-cover"
              />
              <div className="text-white p-4 absolute bottom-0 left-0 right-0 bg-black/40">
                <p className="text-sm mb-4">NAME</p>
                <a href="#" className="text-white text-lg font-semibold block">
                  Designation
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-6">
          <button className="mx-2 p-2 rounded-full hover:bg-secondary">
            <LeftArrowIcon />
          </button>
          <button className="mx-2 p-2 rounded-full hover:bg-secondary">
            <RightArrowIcon color="#5FBA51" />
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <section
        className="relative w-full h-[788px] bg-cover bg-center mb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/about-us-banner.webp')",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/20 p-8 text-white max-w-xl backdrop-blur-sm">
          <h1 className="text-[46px] font-light tracking-widest">CORPORATE</h1>
          <h2 className="text-[46px] font-semibold text-accent italic mb-4">
            RESPONSIBILITY
          </h2>
          <p className="mb-4 text-lg">
            At Cubehighways Technology, we are committed to sustainable growth
            by integrating Corporate Social Responsibility (CSR) into our core
            values.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="border-b-2 border-accent">
              Sustainable Development
            </span>
            <span className="border-b-2 border-accent">
              Road Safety Awareness
            </span>
            <span className="border-b-2 border-accent">Empowerment</span>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonial />
    </div>
  );
};

export default AboutUsPage;
