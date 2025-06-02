'use client'
import Header from "@/components/header";
import React, { useState } from "react";
// import Link from "next/link";
import PhoneIcon from "@/components/icons/Phone";
import ContactMailicon from "@/components/icons/ContactMail";
import ContactLocation from "@/components/icons/ContactLocation";
import ContactFollowIcon from "@/components/icons/ContactFollowIcon";
// import DownArrowIcon from "@/components/icons/down-arrow";

const ContactUsPage = () => {
 const [selectedOption, setSelectedOption] = useState("");

      const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value);
      }
  return (
    <section className="min-h-screen">
      <div
        className="relative flex justify-start items-center w-full h-screen  bg-cover "
        style={{ backgroundImage: "url('/contact-us-banner.webp')" }}
      >
        <Header />
        {/* Contact Form Container */}
        <div className="container mx-auto flex-1 flex items-center mt-66 ">
          <div className="bg-white w-full  mx-auto p-12 flex ">
            {/* Left side - Contact Info */}
            <div className="w-full pr-[204px]">
              <h1 className="text-[75px] font-light  leading-[112px]">
                LET&#39;S GET IN
              </h1>
              <h1 className="text-[66px] font-bold italic leading-[99px] mb-[71px]">
                TOUCH
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px] pt-12">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="mr-2 text-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      PHONE
                    </h3>
                    <p className="text-[13px] font-normalleading-[20px] tracking-[0.26px]">
                      03 5432 1234
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="mr-2">
                    <ContactMailicon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      EMAIL
                    </h3>
                    <p className="text-[13px] font-normalleading-[20px] tracking-[0.26px]">
                      info@cubehighways.com
                    </p>
                  </div>
                </div>

                {/* Location 1 */}
                <div className="flex items-start">
                  <div className="mr-2">
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

                {/* Location 2 */}
                <div className="flex items-start">
                  <div className="mr-2">
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
                  <div className="mr-2">
                    <ContactFollowIcon />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-[20px] tracking-[0.28px]">
                      FOLLOW US:
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="bg-blue-600 text-white p-1 w-6 h-6 flex items-center justify-center rounded-full"
                      >
                        in
                      </a>
                      <a
                        href="#"
                        className="bg-blue-400 text-white p-1 w-6 h-6 flex items-center justify-center rounded-full"
                      >
                        t
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full mt-[80px] mr-[49px] ">
              <form className="space-y-6">
                <div className="text-sm font-normal font-bold leading-[2.6px] uppercase pb-4">
                  <label htmlFor="name" className="block mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b border-black pb-2 focus:outline-none"
                  />
                </div>

                <div className="text-sm font-normal font-bold leading-[2.6px] uppercase pb-4">
                  <label htmlFor="email" className="block ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-black pb-2 focus:outline-none"
                  />
                </div>

                <div className="text-sm font-normal font-bold leading-[2.6px] uppercase pb-4">
                  <label htmlFor="phone" className="block ">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-b border-black pb-2 focus:outline-none"
                  />
                </div>

                <div className="text-sm font-normal leading-[2.6px] uppercase pb-4">
                  <label htmlFor="field" className="block font-bold">
                    Interested Field <span className="text-red-500">*</span>
                  </label>

                  <div className="relative w-full mt-4">
                    <select
                      id="field"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      className="w-full border-b border-black pb-2 pr-8 bg-transparent focus:outline-none cursor-pointer "
                    >
                      <option value="" disabled hidden>
                        Interested Field
                      </option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                  </div>
                </div>

                <div className="text-sm">
                  <label htmlFor="message" className="block mb-1">
                    Leave us Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-black pb-2 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-4 font-medium hover:cursor-pointer"
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
