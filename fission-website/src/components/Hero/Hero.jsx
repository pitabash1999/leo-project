import React from "react";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  const companies = [
    "TCS",
    "SONY",
    "GOOGLE",
    "MICROSOFT",
    "AMAZON",
    "FACEBOOK",
    "APPLE",
    "IBM",
    "ORACLE",
    "DELOITTE",
  ];

  return (
    <div
      className="w-full flex flex-col justify-center items-center  px-4 md:px-16 lg:px-32 space-y-2
    dark:text-white dark:bg-gray-900 transition duration-500"
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center ">
        {/* Left Section */}
        <HeroLeft />

        {/* Right Section */}
        <HeroRight />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center ">
        <div className="w-full md:w-1/4 text-center font-semibold p-2 md:border-r-2 md:border-black">
          Your trusted UI UX design agency.
        </div>
        <div className="w-full md:w-3/4">
          <div className="overflow-hidden whitespace-nowrap  py-4">
            <div className="animate-scroll inline-block">
              {companies.map((company, index) => (
                <span key={index} className="mx-8 text-2xl font-bold">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
