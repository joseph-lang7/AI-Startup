import React from "react";
import Image from "next/legacy/image";
const Hero = () => {
  return (
    <section className="pt-[90px]">
      <div className="w-full h-full translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] absolute">
        <div className="hidden md:hidden sm:inline-block h-[500px] w-[500px] rounded-full border absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 -z-10"></div>
        <div className="hidden md:hidden sm:inline-block h-[600px] w-[600px] rounded-full border border-dashed absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 -z-10"></div>
        <div className="hidden md:hidden sm:inline-block h-[700px] w-[700px] rounded-full border absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 -z-10">
          <div className="h-[20px] w-[20px] rounded-full bg-transparent border fixed top-0 left-0 -translate-x-[-120px] -translate-y-[-67px]">
            <div className="h-[10px] w-[10px] rounded-full bg-transparent border fixed top-0 left-0 -translate-x-[-4px] -translate-y-[-4px]"></div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-purple-500/50 to-purple-700/50 rounded-lg -z-10"></div>
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black via-purple-700/50 to-black rounded-lg -z-10"></div>
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-l from-black via-purple-700/50 to-black rounded-lg -z-10"></div>
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-black via-purple-700/50 to-black rounded-lg -z-10"></div>
      <div className="container mx-auto px-[50px]">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <div className="text-[#9855FF] outline outline-white/15 outline-offset-4 w-[291px] h-[42px] rounded-2xl text-[16px] flex items-center justify-center">
              <span className="bg-[#9855FF] text-black font-bold rounded-xl px-1 mr-2">
                NEW
              </span>
              Latest integration just arrived
            </div>
          </div>
          <div className="text-white text-center flex flex-col gap-5 items-center">
            <h1 className="font-medium text-[48px] md:text-[82px]">
              Boost your <br />{" "}
              <span className="bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent">
                rankings with AI.
              </span>
            </h1>

            <p className="max-w-[540px]">
              Elevate your site’s visibility effortlessly with AI, where smart
              technology meets user-friendly SEO tools.
            </p>
            <button className="bg-white text-black outline outline-white/15 outline-offset-8 rounded-lg h-[45px] w-[145px]">
              Start for free
            </button>
            <div className="w-full min-h-full flex">
              <div className="relative w-full h-auto">
                <div className="md:hidden absolute inset-0 bg-gradient-to-b from-purple-500 to-purple-700/80 rounded-lg blur-2xl -z-10"></div>
                <div className="md:block hidden absolute inset-0 bg-gradient-to-b from-purple-500 to-black rounded-lg blur-2xl -z-10"></div>
                <div className="relative">
                  <Image
                    src="/images/app.png"
                    alt="app mockup"
                    layout="responsive"
                    width={1120}
                    height={815}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
