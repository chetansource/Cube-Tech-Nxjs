import React, { useState } from "react";
import UpArrowIcon from "../icons/up-arrow";

interface ParkingStudyProps {
  title: string;
  location: string;
  projectName: string;
  studyType: string;
  date: string;
  description: string;
  mainImage: string;
  thumbnails?: string[];
}

export const SectionOne: React.FC<ParkingStudyProps> = ({
  title,
  location,
  projectName,
  studyType,
  date,
  description,
  mainImage,
  thumbnails,
}) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-8xl mx-auto p-4 mb-43 ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-16">
        {/* Left side - Title */}
        <div className="pt-8 md:w-[50%]">
          <h1 className="text-4xl md:text-[46px]  text-black/60 uppercase md:leading-[64px] md:tracking-[3.75px] ">
            {title}{" "}
            <span className="block md:inline">
              <span className="">G.K-I</span>{" "}
              <span className="text-accent italic font-semibold">
                {location}
              </span>
            </span>
          </h1>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          {/* Project details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="md:leading-[55px] md:tracking-[0.75px] text-lg">
                Project Name
              </div>
              <div className="md:leading-[54px] md:tracking-[0.25px] text-base">
                {projectName}
              </div>
            </div>
            <div>
              <div className="md:leading-[54px] md:tracking-[0.25px] text-lg">
                {studyType}
              </div>
              <div className="md:leading-[54px] md:tracking-[0.25px] text-base">
                {date}
              </div>
            </div>
          </div>

          {/* Main image with thumbnails */}
          <div className="relative">
            <img
              src={mainImage}
              alt="Aerial view of highway"
              className="w-full h-80 object-cover rounded-sm"
            />
            {/* <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-sm flex gap-2">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-16 object-cover"
                />
              ))}
            </div> */}
          </div>

          {/* Description */}
          <div>
            <p className="font-semibold italic md:leading-[20px]">
              Car Parking at G.K-I New Delhi-
            </p>
            {expanded && (
              <p className="md:leading-[20px] text-sm leading-relaxed mt-1">
                {description}
              </p>
            )}
            <button
              onClick={toggleExpanded}
              className="text-accent font-bold md:leading-[20px] md:tracking-[0.25px] mt-2 flex items-center cursor-pointer"
            >
              {expanded ? "View less" : "View more"}
              <UpArrowIcon
                color="#5FBA51"
                className={`ml-2 transition-transform duration-400 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
