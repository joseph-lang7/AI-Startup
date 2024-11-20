"use client";
import Logo from "../../../public/icons/logo.svg";
import YoutubeIcon from "../../../public/icons/youtube-icon.svg";
import XIcon from "../../../public/icons/x-icon.svg";
import InstagramIcon from "../../../public/icons/instagram-icon.svg";
import { productFooterItems } from "@/data";
import { companyFooterItems } from "@/data";
import { resourcesFooterItems } from "@/data";
import { legalFooterItems } from "@/data";

const footer = () => {
  return (
    <footer className="border-t-[1px] border-white/20 py-20 mt-20 px-3">
      <div className="container mx-auto md:flex md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 justify-between min-h-full">
          <div className="flex justify-between md:flex-col md:h-full">
            <div className="flex gap-2 items-center">
              <Logo />
              <span className="text-white">AI Startup Kit</span>
            </div>
            <div className="flex gap-3">
              <YoutubeIcon className="cursor-pointer" />
              <XIcon className="cursor-pointer" />
              <InstagramIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[600px]">
          <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-5">
            <ul className="flex flex-col gap-4 mb-12">
              <li className="text-white font-bold">Product</li>
              {productFooterItems.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white/40 cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white font-bold">Company</li>
              {companyFooterItems.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white/40 cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white font-bold">Resources</li>
              {resourcesFooterItems.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white/40 cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white font-bold">Legal</li>
              {legalFooterItems.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white/40 cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
