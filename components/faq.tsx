"use client"

import { useState,useEffect } from "react"
import type { Faq } from "@/utils/types";
import RightArrowIcon from "./icons/right-arrow"
import { getFaqs } from "@/utils/routes/faq";

export default function Faq() {
  useEffect(() => {
    const fallbackFaqs: Faq[] = [
      {
        id: "1",
        question: "What is the purpose of this website?",
        answer:
          "This website provides detailed insights and analytics about traffic and infrastructure projects.",
      },
      {
        id: "2",
        question: "How often is the data updated?",
        answer:
          "We update our data regularly after every new survey or project milestone.",
      },
      {
        id: "3",
        question: "Who conducts the traffic surveys?",
        answer:
          "All traffic surveys are conducted by CubeTech using advanced methodologies and tools.",
      },
      {
        id: "4",
        question: "Can I download traffic reports?",
        answer:
          "Yes, traffic reports are available under the Reports section. Some may require authentication.",
      },
      {
        id: "5",
        question: "Is the data open for public use?",
        answer:
          "Yes, most of the data is publicly accessible unless restricted due to client privacy.",
      },
    ];

    const fetchData = async () => {
      try {
        const faqData = await getFaqs();
        if (faqData && faqData.length > 0) {
          setFaqs(faqData);
        } else {
          setFaqs(fallbackFaqs);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setFaqs(fallbackFaqs);
      }
    };

    fetchData();
  }, []);
  
  
  


  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);




  

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="md:py-16 md:pt-24 bg-white min-h-[948px] ">
      <div className="container mx-auto px-6 md:px-24">
        <div className=" mb-6 md:mb-12 leading-[67px] tracking-[3.75px] uppercase">
          <div className="text-[23px] md:text-[46px] font-light mb-2">
            YOUR QUESTIONS,{" "}
            <span className="font-semibold text-accent italic">ANSWERED</span>
          </div>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className={`flex justify-between items-center w-full text-left p-4 bg-white 
                  border-b-1 md:border-none md:rounded-lg md:shadow-sm transition-colors duration-200 cursor-pointer 
                  ${
                    openIndex === index
                      ? "border-accent"
                      : "border-[#E3E3E3]"
                  }`}
              >
                <span className="font-normal text-base md:text-lg leading-[37px] tracking-wider text-black">
                  {faq.question}
                </span>
                <RightArrowIcon
                  color={openIndex === index ? "#5FBA51" : "#E3E3E3"}
                />
              </button>

              {openIndex === index && (
                <div className="p-4 bg-white border-t border-gray-100 rounded-b-lg">
                  <p className="text-base md:text-lg leading-[24px] tracking-[0.25px] text-black/60">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
