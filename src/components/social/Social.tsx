import React from "react";
import { socials } from "../../../constants";
import { SocialIcon } from "react-social-icons";

const Social = () => {
  return (
    <div className="flex items-center justify-center md:gap-x-5 py-10 md:w-[100px] animate-fade-bottom  duration-1000 ">
      {socials.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.id}
          aria-label={social.name}
          className="group flex items-center justify-center animate-fade-in-3 cursor-pointer px-4 md:p-2 transition duration-200 ease-out transform hover:scale-105 rounded-[5px] hover:shadow-md hover:bg-opacity-10 hover:bg-white"
        >
          <SocialIcon
            url={social.url}
            fgColor="#FFF"
            bgColor="transparent"
            className="!h-8 !w-8"
          />
          <p className="text-[#ADB0B1] ml-2 group-hover:text-white transition font-medium text-xs sm:text-sm">
            {social.name}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Social;
