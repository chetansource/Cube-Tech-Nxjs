import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, LifeBuoy } from "lucide-react";
import RightArrowIcon from "../icons/right-arrow";

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  color?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  icon,
  title,
  description,
  // color = "bg-white",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex flex-col min-w-[250px] h-[312px] p-6 border border-border rounded-sm relative transition-all duration-300 cursor-pointer ${
        isHovered ? "bg-[#5FBA51] text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl md:leading-[33px] md:tracking-[0.75px] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      <div className="absolute bottom-4 left-4">
        <RightArrowIcon color={isHovered ? "#FFFFFF" : "#5FBA51"} />
      </div>
    </div>
  );
};

export function ProjectImpact() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 5; // Total number of cards in the carousel
  const visibleCards = 3; // Number of cards visible at once

  const cards: ImpactCardProps[] = [
    {
      icon: <div className="h-6 w-6 text-primary"></div>,
      title: "IFC Safeguard Policies",
      color: "bg-white",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Social Impact Assessment (SIA)",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Nunc ut condimentum ultricies.",
      color: " bg-white",
    },
    {
      icon: <LifeBuoy className="h-6 w-6 text-primary" />,
      title: "Livelihood Enhancement Plan (LEP)",
      color: "bg-white",
    },
    {
      icon: <div className="h-6 w-6 text-primary"></div>,
      title: "Environmental Assessment",
      color: "bg-white",
    },
    {
      icon: <div className="h-6 w-6 text-primary"></div>,
      title: "Community Development",
      color: "bg-white",
    },
  ];
  console.log(currentIndex);

  // Auto-scroll the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (totalCards - visibleCards + 1);

        if (carouselRef.current) {
          carouselRef.current.scrollTo({
            left: nextIndex * 260, // Card width + gap
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full gap-8 py-12 ">
      {/* Left section - Title */}
      <div className="md:w-2/3 flex ">
        <h2 className="md:text-[46px] md:leading-[64px] md:tracking-[3.75px]  mb-2 uppercase text-black/60">
          PROJECT <span className="text-accent font-semibold itlaic">IMPACT</span>
        </h2>
      </div>

      {/* Right section - Carousel */}
      <div className="md:w-3/4 overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <ImpactCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>

        {/* Carousel indicators */}
        {/* <div className="flex justify-center mt-6 gap-1">
          {Array.from({ length: totalCards - visibleCards + 1 }).map(
            (_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full ${
                  currentIndex === index ? "bg-accent" : "bg-gray-200"
                }`}
              />
            )
          )}
        </div> */}
      </div>
    </div>
  );
}
