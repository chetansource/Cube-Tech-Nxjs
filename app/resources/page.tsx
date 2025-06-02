import React from "react";
import Faq from "@/components/faq";
import Awards from "@/components/awards";
import ResourcesSection from "@/components/resource-section";
import Header from "@/components/header";
import Hero from "@/components/hero";
import CaseStudiesGrid from "@/components/resources/case-study-grid";
import InsightsImpact from "@/components/resources/insights-impact";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage="/top-view-bridge.webp"
        title={
          <>
            Explore{" "}
            <span className="text-white font-semibold italic">Latest</span>
          </>
        }
      />
      <InsightsImpact/>
      <ResourcesSection />
      {/* Resource Gallery start */}
      <div
        className="relative h-screen w-full bg-no-repeat md:pb-[53px] "
        style={{
          backgroundImage: `url('/Resource Gallery.webp')`,
          backgroundSize: "60%",
          backgroundPosition: "53px center",
        }}
      >
        <div className="absolute bottom-0 right-0 p-4 text-[#C3C3C3] text-xl leading-[10px] mr-8">
          <ul className="flex space-x-12">
            <li>
              <a href="#" className=" ">
                News
              </a>
            </li>
            <li>
              <a href="#" className="">
                Casestudies
              </a>
            </li>
            <li>
              <a href="#" className="">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="">
                Podcasts
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-[-50] w-full border border-accent"></div>
      </div>
      {/* Resource Gallery stop */}
      <CaseStudiesGrid/>
      <Awards />
      <Faq />
    </div>
  );
};

export default ResourcesPage;
