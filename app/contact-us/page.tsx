"use client";
import Header from "@/components/header";
import type React from "react";
import { useState } from "react";
import PhoneIcon from "@/components/icons/Phone";
import ContactMailicon from "@/components/icons/ContactMail";
import ContactLocation from "@/components/icons/ContactLocation";
import ContactFollowIcon from "@/components/icons/ContactFollowIcon";

const ContactUsPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="min-h-screen">
      <div
        className="relative flex justify-start items-center w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-us-banner.webp')" }}
      >
        <Header />

        {/* Contact Form Container */}
        <div className="container mx-auto flex-1 flex items-center mt-40 lg:mt-80 px-4 lg:px-0">
          <div className="bg-white w-full mx-auto p-6 lg:p-12 flex flex-col-reverse lg:flex-row">
            {/* Left side - Contact Info (Hidden on mobile, shown first on desktop) */}
            <div className="w-full lg:pr-[100px] ">
              <div className="hidden md:block">
                <h1 className="text-4xl sm:text-5xl lg:text-[75px] font-light leading-tight lg:leading-[112px]">
                  LET&apos;S GET IN
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-bold italic leading-tight lg:leading-[99px] mb-8 lg:mb-[71px]">
                  TOUCH
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[36px] pt-6 lg:pt-12">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="mr-3 lg:mr-2 text-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      PHONE
                    </h3>
                    <p className="text-[13px] font-normal leading-[20px] tracking-[0.26px]">
                      03 5432 1234
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="mr-3 lg:mr-2">
                    <ContactMailicon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      EMAIL
                    </h3>
                    <p className="text-[13px] font-normal leading-[20px] tracking-[0.26px]">
                      info@cubehighways.com
                    </p>
                  </div>
                </div>

                {/* Location 1 */}
                <div className="flex items-start">
                  <div className="mr-3 lg:mr-2">
                    <ContactLocation />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      LOCATION 1
                    </h3>
                    <p className="text-xs font-normal leading-[18px] tracking-[0.5px] text-black/60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                  </div>
                </div>

                {/* Location 2 - Hidden on mobile */}
                <div className="hidden md:flex items-start">
                  <div className="mr-3 lg:mr-2">
                    <ContactLocation />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      LOCATION 2
                    </h3>
                    <p className="text-xs font-normal leading-[18px] tracking-[0.5px] text-black/60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="flex items-start">
                  <div className="mr-3 lg:mr-2">
                    <ContactFollowIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      FOLLOW US:
                    </h3>
                    <div className="flex space-x-2 mt-2">
                      <a
                        href="#"
                        className="bg-blue-600 text-white p-1 w-6 h-6 lg:w-6 lg:h-6 flex items-center justify-center rounded-full text-xs"
                      >
                        in
                      </a>
                      <a
                        href="#"
                        className="bg-blue-400 text-white p-1 w-6 h-6 lg:w-6 lg:h-6 flex items-center justify-center rounded-full text-xs"
                      >
                        t
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form (Shown first on mobile, second on desktop) */}

            <div className="w-full mt-8 lg:mt-[80px] lg:mr-[49px] order-1 lg:order-2">
              <div className="block md:hidden">
                <h1 className="text-4xl sm:text-5xl lg:text-[75px] font-light leading-tight lg:leading-[112px]">
                  LET&apos;S GET IN
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-bold italic leading-tight lg:leading-[99px] mb-8 lg:mb-[71px]">
                  TOUCH
                </h1>
              </div>
              <form className="space-y-6">
                <div className="text-sm font-normal uppercase pb-4">
                  <label htmlFor="name" className="block mb-1 font-bold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b border-black pb-2 focus:outline-none bg-transparent"
                  />
                </div>

                <div className="text-sm font-normal uppercase pb-4">
                  <label htmlFor="email" className="block mb-1 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-black pb-2 focus:outline-none bg-transparent"
                  />
                </div>

                <div className="text-sm font-normal uppercase pb-4">
                  <label htmlFor="phone" className="block mb-1 font-bold">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-b border-black pb-2 focus:outline-none bg-transparent"
                  />
                </div>

                <div className="text-sm font-normal uppercase pb-4">
                  <label htmlFor="field" className="block mb-1 font-bold">
                    Interested Field <span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full mt-4">
                    <select
                      id="field"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      className="w-full border-b border-black pb-2 pr-8 bg-transparent focus:outline-none cursor-pointer appearance-none"
                    >
                      <option value="" disabled hidden>
                        Interested Field
                      </option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <div className="absolute right-0 top-0 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-sm">
                  <label htmlFor="message" className="block mb-1 font-bold">
                    Leave us Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-black pb-2 focus:outline-none resize-none bg-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-4 font-medium hover:bg-green-600 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
