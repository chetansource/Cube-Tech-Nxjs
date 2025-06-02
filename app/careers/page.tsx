import  CareerExploreMore  from '@/components/career-explore-more';
import CareerOpportunities from '@/components/carrer-opportunity';
import Header from '@/components/header'
import PolygonIcon from '@/components/icons/polygon';
import ResumeUpload from '@/components/resume-upload'
import Image from 'next/image';
import React from 'react'

const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* hero section start */}
      <section className="relative w-full bg-white mb-[97px] overflow-hidden h-[527px]">
        <div className="absolute top-0 bottom-0 left-0 right-[57px] z-0">
          <Image
            src="/careerPage-banner.webp"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-[57px] bg-black/10 z-10" />
        <div className="relative z-20 container left-[57px]  px-4 pt-60 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="text-white text-2xl md:text-[75px]  font-light  leading-[90px] uppercase ">
              JOIN OUR TEAM
            </div>
            <div className="text-white text-2xl md:text-[75px]  font-semibold mb-12 leading-[90px] uppercase italic ">
              TODAY
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px right-0 z-20 w-31 pointer-events-none">
          <PolygonIcon />
        </div>
      </section>
      {/* hero section stop */}
      <CareerOpportunities/>
      <ResumeUpload />
      <CareerExploreMore/>
    </div>
  );
}

export default CareerPage