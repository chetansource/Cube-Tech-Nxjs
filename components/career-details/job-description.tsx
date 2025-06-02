import React from "react";

interface JobDescriptionProps {
  title: string;
  location: string;
  description: string[];
}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  location,
  description,
}) => {
  return (
    <section className="max-w-4xl mx-auto  px-4 pb-19">
      <div className="flex justify-between items-center mb-4">
        <h2 className="md:text-[28px] font-medium md:leading-[78px] tracking-[-0.84px] text-foreground">
          {title}
        </h2>
        <span className="md:text-lg md:font-light text-muted-foreground">
          {location}
        </span>
      </div>

      <hr className="border-[2.27px] mb-12 border-[#DFDFDF]" />

      <div className="md:text-lg text-[#646464] space-y-6 text-muted-foreground">
        {description.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
