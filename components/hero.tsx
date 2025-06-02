"use client";
import Link from "next/link";
import Image from "next/image";
import PolygonIcon from "./icons/polygon";
import { usePathname } from "next/navigation";
import RightArrowIcon from "./icons/right-arrow";

type HeroProps = {
  backgroundImage: string;
  overlayOpacity?: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: string;
};

export default function Hero({
  backgroundImage,
  overlayOpacity = "bg-black/10",
  title,
  subtitle,
  ctaText,
  ctaLink,
  height = "h-screen",
}: HeroProps) {
  const pathname = usePathname();
  const showTopSection = pathname === "/resources" || pathname === "/services";
  return (
    <section
      className={`relative w-full bg-white md:mb-[97px] overflow-hidden ${height}`}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 md:right-[57px] z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 md:right-[57px] ${overlayOpacity} z-10`}
      />
      <div className="flex relative z-20 container md:left-[57px]  px-4 pt-60 h-full flex-col  md:justify-center">
        <div className="max-w-4xl">
          {pathname !== "/resources" && (
            <h1 className="text-white text-[52px] md:text-[75px]   font-light mb-12 leading-[40px] flex flex-col  md:gap-16 ">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="font-normal text-white text-lg mb-12 max-w-xl text-[14px]">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className="bg-accent hover:bg-green-600 text-white px-8 py-3  font-medium transition-colors duration-300"
            >
              {ctaText}
            </Link>
          )}
        </div>
        {showTopSection && (
          <div className="absolute left-0 bottom-0 p-4 md:p-8 grid md:grid-cols-3 gap-4 ">
            {/* First Blurred Container */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 md:w-[347px] md:h-[247px]">
              <img
                src="/long-highway-2.webp"
                alt="Placeholder"
                className="w-[200px] h-[100px] md:w-[347px] md:h-[181px] object-cover flex-shrink-0 "
              />
              <div className="flex flex-row items-start justify-between w-full mt-2">
                <div className="text-[18px] font-normal text-white leading-[22px] md:leading-[28px] tracking-[1px] md:tracking-[0.75px] w-[170px] md:w-[323px] max-w-full ">
                  CubeHighways Sets a New Record in Highway Construction
                </div>
                <RightArrowIcon color={"#5FBA51"} />
              </div>
            </div>

            {/* Second Blurred Container */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 md:w-[347px] md:h-[247px]">
              <img
                src="/long-highway-2.webp"
                alt="Placeholder"
                className="w-[200px] h-[100px] md:w-[347px] md:h-[181px] object-cover flex-shrink-0 sm:w-full sm:h-auto"
              />
              <div className="flex flex-row items-start justify-between w-full mt-2">
                <div className="text-[18px] font-normal text-white leading-[22px] md:leading-[28px] tracking-[1px] md:tracking-[0.75px] w-[170px] md:w-[323px] max-w-full ">
                  CubeHighways Sets a New Record in Highway Construction
                </div>
                <RightArrowIcon color={"#5FBA51"} />
              </div>
            </div>
            {/* Title Block (only for /resources) */}
            {pathname === "/resources" && (
              <div className="text-white ml-8  col-start-4 self-end ">
                <h1 className="text-3xl md:text-[75px] font-light md:leading-[40px] flex flex-col gap-8 ">
                  {title}
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 md:-bottom-px right-0 z-20 md:w-31 pointer-events-none">
        <PolygonIcon />
      </div>
    </section>
  );
}
