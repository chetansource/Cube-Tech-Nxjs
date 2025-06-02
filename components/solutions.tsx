"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import RightArrowIcon from "./icons/right-arrow"

export default function Solutions() {
  // Static data for solutions
  const solutions = [
    {
      id: "01",
      title: "Advanced Video-Based Traffic Counting & AI Vision Solutions",
      description:
        "CubeTech revolutionizes traffic data collection with advanced AI-driven, video-based counting solutions. Since 2010, it has set industry standards by replacing manual counts with auditable video/ATCC technology. Its innovations ensure high accuracy and NHAI compliance.",
      image: "/long-highway-1.webp",
    },
    {
      id: "02",
      title: "Innovation in Pavement Evaluation, Material and Technology",
      description:
        "Our advanced pavement evaluation technologies use non-destructive testing methods to analyze road conditions with precision. We develop sustainable, durable materials that withstand heavy traffic and extreme weather conditions while reducing environmental impact.",
      image: "/long-highway-1.webp",
    },
    {
      id: "03",
      title: "Project Management Consultancy",
      description:
        "Our expert consultants provide end-to-end project management services for infrastructure development. From initial planning to execution and monitoring, we ensure timely delivery, cost efficiency, and adherence to quality standards across all project phases.",
      image: "/long-highway-1.webp",
    },
  ]

  // State to track the active solution
  const [activeSolution, setActiveSolution] = useState("01")

  return (
    <section className=" bg-white pb-20 md:pb-[156px] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-38">
          {/* Left side with heading - takes 5 columns on desktop */}
          <div className="md:col-span-5 md:absolute left-4 top-0 ">
            <h2 className="text-2xl md:text-[46px] font-light tracking-[3.75px] leading-[67px]">
              SOLUTIONS THAT 
              <br />
              MAKE<span className="text-accent italic font-semibold">CHANGES</span>
            </h2>

            <Link href="/solutions" className="inline-flex items-center text-green-500 mt-6 group gap-[40px]">
              <span className="mr-2">READ MORE</span>
              <RightArrowIcon color={"#5FBA51"} />
            </Link>
          </div>

          {/* Right side with solutions - takes 7 columns on desktop */}
          <div className="md:col-start-6 md:col-span-5 ">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="relative">
                
                {/* Solution item */}
                <div className={` ${index !== 0 ? "border-t border-gray-100" : ""}`}>
                  {/* Solution number and title row */}
                  <div className="flex flex-col items-start mb-4">
                    <div className="text-gray-100 text-[94px] font-medium align-">{solution.id}.</div>
                    <div className="flex flex-row w-full justify-between">
                    <div className="flex-1">
                      <button onClick={() => setActiveSolution(solution.id)} className="text-left w-full">
                        <h3 className="text-lg font-['Glacier_Indifference'] font-normal leading-[24px] tracking-[0.25px] hover:cursor-pointer">{solution.title}</h3>
                      </button>
                    </div>
                    {solution.id !== activeSolution && (
                      <Link href={`/solutions/${solution.id}`} className="text-accent ml-2">
                        <RightArrowIcon color={"#5FBA51"} />
                      </Link>                           
                    )}
                    </div>
                  </div>

                  {/* Solution content - only visible when active */}
                  {solution.id === activeSolution && (
                    <div className=" space-y-6 animate-fadeIn">
                      <p className="text-base text-black/50 leading-[24px] tracking-[0.25px]">{solution.description}</p>
                      <div className="relative h-64 w-full overflow-hidden rounded-md">
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
                  {/* Full-width green line after each solution */}
                <div className="relative w-screen   md:-mx-[69vw] h-[1px] bg-[#5FBA51] "></div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
