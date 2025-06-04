import RightArrowIcon from "../icons/right-arrow";

export default function InsightsImpact() {
  return (
    <main className="min-h-screen bg-white pb-19">
      {/* Hero Section */}
      <section className="px-4 md:px-15 py-16 max-w-8xl mx-auto">
        <h1 className=" text-4xl md:text-[75px]  mb-12 font-light md:leading-[40px]">
          WE&apos;RE IN <span className="font-semibold italic">BUSINESS</span>
        </h1>
        <h1 className="text-4xl md:text-[75px] font-light md:leading-[40px] mb-9">
          TO HELP OUR <span className="font-semibold italic">PLANET</span>
        </h1>
        <p className="md:w-[20%] text-sm mb-8 md:leading-[20px] md:trackig-[0.25px]">
          We provide consulting, planning and engineering design services.
        </p>
        <button className="bg-accent text-white px-6 py-3 text-sm uppercase font-medium">
          Explore Services
        </button>
      </section>

      {/* Insights Section */}
      <section className="md:px-15 py-16 max-w-8xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="px-4 md:px-0">
            <h2 className=" text-2xl md:text-[46px] font-light mb-2 md:leading-[67px] md:tracking-[3.75px]">
              INSIGHTS
            </h2>
            <h2 className="text-2xl md:text-[46px] font-semibold italic mb-6 md:leading-[67px] md:tracking-[3.75px]">
              & <span className="text-accent">IMPACT</span>
            </h2>
            <p className="text-base text-[#808080] md:leading-[20px] md:tracking-[0.25px] mb-8">
              Explore in-depth analyses, industry reports, and research-driven
              insights to stay informed and ahead.
            </p>
          </div>

          {/* Right Column - Case Studies */}
          <div>
            {/* Case Study 01 */}
            <div className="mb-12 relative pb-8">
              <div className="px-4 md:px-0">
                <h3 className="text-8xl font-thin text-gray-100 mb-4">01.</h3>
                <p className="md:w-[60%] text-lg md:leading-[27px] md:tracking-[0.25px] mb-4">
                  An average performance enhancement of 7% was achieved in the
                  quality of the GSB layer.
                </p>
                <p className="md:w-[60%] text-base font-['Glacier_Indifference'] mb-6">
                  Checklists has been developed to identify the various
                  parameters related to construction quality of each layer
                  through the entire project duration.
                </p>
                <div className="flex items-center justify-between ">
                  <span className="text-[#808080] text-base uppercase md:leading-[20px] md:tracking-[0.25px] ">
                    DOWNLOAD
                  </span>
                  <span className="text-[#808080] text-base uppercase md:leading-[20px] md:tracking-[0.25px] flex gap-6">
                    /CASESTUDY
                    <RightArrowIcon color="#5FBA51" />
                  </span>
                </div>
              </div>

              {/* FULL-WIDTH BORDER */}
              <div className="absolute bottom-0 right-0 w-screen border-b border-accent" />
            </div>

            {/* Case Study 02 */}
            <div className="mb-12 border-b border-accent pb-8 px-4 md:px-0">
              <h3 className="text-8xl font-thin text-gray-100 mb-4">02.</h3>
              <p className="md:w-[60%] text-lg md:leading-[27px] md:tracking-[0.25px] mb-4">
                An average performance enhancement of 15% was achieved in the
                quality of the GSB layer.
              </p>
            </div>

            {/* Case Study 03 */}
            <div className="mb-12 border-b border-accent pb-8 px-4 md:px-0">
              <h3 className="text-8xl font-thin text-gray-100 mb-4">03.</h3>
              <p className="md:w-[60%] text-lg md:leading-[27px] md:tracking-[0.25px] mb-4">
                CubeHighways continues to set benchmarks in sustainable,
                high-performance highway infrastructure by integrating
                technology, safety, and data-driven decision-making.
              </p>
            </div>

            {/* Case Study 04 */}
            <div className="mb-12 border-b border-accent px-4 md:px-0">
              <h3 className="text-8xl font-thin text-gray-100 mb-4">04.</h3>
              <p className="md:w-[60%] text-lg md:leading-[27px] md:tracking-[0.25px] mb-8">
                CubeHighways is at the forefront of modern infrastructure
                development, utilizing cutting-edge technology
              </p>
            </div>
            <div className="text-[#808080] text-base uppercase md:leading-[20px] md:tracking-[0.25px] flex gap-6 justify-center md:justify-start ">
              SEE ALL CASESTUDIES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.9117 17.3866L9.43543 17.7778M17.9117 17.3866L17.5205 8.91034M17.9117 17.3866L10.1527 10.3121M6.08846 6.60647L7.93584 8.29086"
                  stroke="#5FBA51"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
