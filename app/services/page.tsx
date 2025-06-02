import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import ServiceSection from "@/components/servicesComponent";
import ProjectMap from "@/components/project-map";
import PopularSearch from "@/components/popular-searche";
import ServicesSolutions from "@/components/servcies-solutions";
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage="/cross-road-beautiful-mount-services-banner.webp"
        title={
          <>
            Our{" "}
            <span className="text-white font-semibold italic pt-5 md:pt-0">Services</span>
          </>
        }
      />
      {/* services offered section */}
      <section className="w-full relative overflow-hidden">
        <img
          src="/Explore-Our-Services.svg"
          alt="Explore Our Services"
          className="md:w-7xl h-[45vh] md:h-[50vh] ml-4 md:ml-[60px] md:mr-[170px]"
        />
        <div className="relative -top-[90px]">
          <ServiceSection />
        </div>
      </section>
      {/* Popular Searches */}
      <PopularSearch />
      {/* Project Map */}
      <ProjectMap />
      {/* know more about our services */}
      <ServicesSolutions />
      {/* contact banner with button */}
      <section
        className="relative flex justify-start items-center w-full h-[450px]  bg-cover "
        style={{ backgroundImage: "url('/service-banner-2.webp')" }}
      >
        <div className="absolute pt-34 md:pt-0 md:ml-auto pl-8 md:pl-[73px] text-white ">
          <h2 className="text-[52px] w-[70%] md:w-full md:text-[75px] leading-[54px] md:leading-[79px] font-light mb-4">
            Let’s get in touch
          </h2>
          <Link href="/contact-us">
            <Button className="bg-accent w-[90%] md:w-[30%] text-[12px] leading-[16px] tracking-[2.6px] px-[24px] py-[8px] font-bold uppercase cursor-pointer hover:bg-accent rounded-none">
              Contact us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
