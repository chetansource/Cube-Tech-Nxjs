import Image from "next/image";
import { ArrowRight } from "lucide-react";

type TimelineItem = {
  year: string;
  side: "left" | "right";
  title?: string;
  content: string;
  icon?: string;
  image?: string;
  isSpecial?: boolean;
  isPodcast?: boolean;
  readMoreLink?: string;
};

export default function Timeline() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2007",
      side: "left",
      title: "MILESTONE",
      content:
        "Established with a vision for Traffic and Travel Demand Estimation.",
      isSpecial: false,
    },
    {
      year: "2012",
      side: "right",
      isPodcast: true,
      content:
        "Discover innovations in transportation and infrastructure with expert insights. Learn about advanced forecasting tools, sustainable road designs, and future mobility trends. Stay ahead with cutting-edge solutions shaping the industry.",
      image: "/timeline-image.webp",
      readMoreLink: "#",
      isSpecial: false,
    },
    {
      year: "",
      side: "right",
      icon: "H",
      content: "",
      isSpecial: true,
    },
    {
      year: "",
      side: "left",
      title: "MILESTONE",
      content:
        "Lenders independent Engineer, Traffic Audit, Incorporated Of BHARI",
      isSpecial: false,
    },
    {
      year: "2015",
      side: "right",
      content: "",
      isSpecial: false,
    },
    {
      year: "",
      side: "right",
      icon: "A",
      content: "",
      isSpecial: true,
    },
    {
      year: "",
      side: "right",
      title: "MILESTONE",
      content: "Project Management Consultancy (PMC), Launch of ATCC (OHR II)",
      isSpecial: false,
    },
    {
      year: "",
      side: "left",
      content: "Road Safety Audit, R&D For Toll Management System (TMS)",
      isSpecial: false,
    },
    {
      year: "",
      side: "right",
      icon: "⚙️",
      content: "",
      isSpecial: true,
    },
    {
      year: "2021",
      side: "right",
      title: "MILESTONE",
      content: "AI Vision Tools, Advanced Traffic Management (ATMS)",
      isSpecial: false,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-32 max-w-8xl mx-auto">
      <h1 className="text-2xl md:text-[46px] font-light tracking-widest text-center pb-[53px]">
        Our <span className="font-semibold text-accent italic"> Story</span>
      </h1>
      <div className="relative">
        {/* Center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-100"></div>

        {/* Timeline items */}
        <div className="relative z-10">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 ${
                index === timelineItems.length - 1 ? "mb-0" : ""
              }`}
            >
              {/* Left side content */}
              <div
                className={`w-1/2 pr-12 ${
                  item.side === "left" ? "text-left" : "invisible"
                }`}
              >
                {item.title && (
                  <h3 className="text-[#AFB1B6]  font-base text-sm md:text-base mb-2">
                    {item.title}
                  </h3>
                )}
                <p className="text-gray-700 text-sm md:text-lg">{item.content}</p>
              </div>

              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                {item.year ? (
                  <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">
                    {item.year}
                  </div>
                ) : item.isSpecial ? (
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                    {item.icon}
                  </div>
                ) : null}
              </div>

              {/* Right side content */}
              <div
                className={`w-1/2 pl-12 ${
                  item.side === "right" ? "" : "invisible"
                }`}
              >
                {item.isPodcast ? (
                  <div className="space-y-4">
                    {item.image && (
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt="Podcast image"
                          width={400}
                          height={200}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="text-gray-500 flex items-center">
                      /PODCAST <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{item.content}</p>
                    {item.readMoreLink && (
                      <a
                        href={item.readMoreLink}
                        className="inline-flex items-center text-green-500 font-medium"
                      >
                        READ MORE <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                ) : (
                  <>
                    {item.title && (
                      <h3 className="text-gray-400 font-light text-sm mb-2">
                        {item.title}
                      </h3>
                    )}
                    <p className="text-gray-700">{item.content}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
