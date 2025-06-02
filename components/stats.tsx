"use client";
import React, { useState, useRef, useEffect } from "react";
import UpArrowIcon from "./icons/up-arrow";
import PlusIcon from "./icons/Plus";

interface Metric {
  value: number;
  label: string;
  hasIcon?: boolean;
  isSquare?: boolean;
}

const metrics: Metric[] = [
  { value: 14, label: "Years of experience", hasIcon: true },
  { value: 60, label: "TMS Audit for Toll Plaza", hasIcon: true },
  {
    value: 100,
    label: "Lane-km of bituminous concrete laid in a record 100 hours on NH34.",
    hasIcon: true,
  },
  {
    value: 25,
    label: "New Technologies & Material Implemented",
    hasIcon: true,
  },
];

function useIntersection(
  element: React.RefObject<HTMLElement | null>,
  rootMargin: string
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, [element, rootMargin]);

  return isIntersecting;
}

function AnimatedNumber({ number }: { number: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const animationDuration = 2000;
    const frameDuration = 20;
    const totalFrames = animationDuration / frameDuration;

    const increment = number / totalFrames;

    let animationFrameId: number;

    const animate = () => {
      countRef.current += increment;
      if (countRef.current >= number) {
        setCount(number);
      } else {
        setCount(parseFloat(countRef.current.toFixed(2)));
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [number]);

  return <span>{count}</span>;
}

export default function Stats({ bannerImage }: { bannerImage?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(sectionRef, "0px");

  return (
    <div
      className={`${
        bannerImage ? " relative pb-[400px]" : "reative pb-[66px]"
      } `}
    >
      {bannerImage && (
        <div className="pl-4 md:pl-[37px] md:pr-[171px] md:text-[181px]">
          <img
            className="object-cover w-[90%] md:w-[80%]"
            src={bannerImage}
            alt="Card Image"
          />
        </div>
      )}

      <div
        ref={sectionRef}
        className={`${
          bannerImage ? "absolute md:top-60 bottom-0" : "relative"
        } py-12 bg-transparent text-foreground`}
      >
        <div className=" mx-auto px-4">
          <div className=" grid grid-cols-4 md:gap-[90px]">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`group flex p-4 flex-col items-start md:gap-[80px] flex-[1_0_0] self-stretch  duration-200 hover:bg-[#5FBA51] hover:text-white hover:cursor-pointer`}
              >
                <div className="text-4xl md:text-[122px] font-light flex items-start ">
                  <AnimatedNumber number={metric.value} />
                  {metric.hasIcon && (
                    <PlusIcon className="w-5 md:w-8 h-8 md:h-16 ml-4 md:ml-8  text-[#5FBA51] group-hover:text-[#ffffff] transition-colors duration-300" />
                  )}
                  {/* {metric.hasIcon && (
                    <span>
                      <UpArrowIcon />
                    </span>
                  )} */}
                </div>
                <p className=" md:text-[24px] font-normal mt-2 flex-grow">
                  {metric.label}
                </p>
                <div className="w-full h-[0.5px] bg-accent mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
