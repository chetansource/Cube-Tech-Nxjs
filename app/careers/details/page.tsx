import { JobDescription } from '@/components/career-details/job-description';
import Header from '@/components/header';
import PolygonIcon from '@/components/icons/polygon';
import ResumeUpload from '@/components/resume-upload';
import Image from 'next/image';

import React from 'react'

const CareerDetailPage = () => {
  const jobDescription = [
    "As a Traffic & Road Safety, ensuring traffic and road safety is a top priority through continuous monitoring and proactive interventions. Regular follow-ups on safety issues are conducted using the Road Aid App, allowing real-time tracking and resolution. On-site accidents are thoroughly investigated, with root cause analysis reports generated to implement corrective measures. Compliance with road safety regulations in work zones is closely monitored, ensuring both routine and major maintenance adhere to safety standards.",
    "Additionally, as a Traffic Manager, you play a crucial role in providing regular training and guidance to supervisors and workers, reinforcing work zone safety protocols. Periodic safety mock drills are conducted, along with specialized training sessions for RPOs, CROs, paramedics, and maintenance supervisors. To enhance emergency response, the functionality of the 24/7 helpline and emergency call system is routinely assessed, ensuring immediate support and swift incident management.",
  ];
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
      <JobDescription
        title="Job Title"
        location="Bangalore"
        description={jobDescription}
      />
      <ResumeUpload/>
    </div>
  );
}

export default CareerDetailPage