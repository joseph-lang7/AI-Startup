import Image from "next/legacy/image";
import React from "react";

const Features = () => {
  return (
    <section className=" py-[80px] w-full">
      <div className="container mx-auto px-3">
        <div>
          <div className="text-center text-white text-[26px] font-medium w-full flex justify-center">
            <h2 className="max-w-[550px]">
              Harness the power of AI, making search engine optimization
              intuitive and effective for all skill levels.
            </h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 md:flex-row md:items-end w-full">
            <div className="flex flex-col text-white border-2 rounded-md px-3 py-10 border-white/15 mt-[30px]">
              <div
                className="w-full bg-contain bg-no-repeat bg-center h-[200px]"
                style={{
                  backgroundImage: "url('/images/ring.png')",
                }}
              ></div>
              <div className="pt-[35px] flex flex-col gap-2">
                <p>SEO Goal Setting</p>
                <p className="text-[#B3B3B3]">
                  Helps you set and achieve SEO goals with guided assistance.
                </p>
              </div>
            </div>
            <div className="w-full h-[400px] bg-gradient-to-b from-black via-[#361764] to-[#361764] rounded-md">
              <div
                className="bg-cover bg-start w-full h-full relative"
                style={{ backgroundImage: "url('/images/dashboard.png')" }}
              >
                <div className="text-white absolute bottom-3 left-3 text-sm flex flex-col gap-2">
                  <p className="font-bold">User-friendly dashboard</p>
                  <p className="text-[#B3B3B3] w-[245px]">
                    Perform complex SEO audits and optimizations with a single
                    click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-[20px]">
          <div className="flex flex-col gap-2 md:flex-row md:items-end w-full">
            <div className="w-full h-[400px] bg-gradient-to-b from-black via-[#361764] to-[#361764] rounded-md">
              <div
                className="bg-cover bg-start w-full h-full relative"
                style={{ backgroundImage: "url('/images/visual-reports.png')" }}
              >
                <div className="text-white absolute bottom-3 left-3 text-sm flex flex-col gap-2">
                  <p className="font-bold">Visual reports</p>
                  <p className="text-[#B3B3B3] w-[245px]">
                    Perform complex SEO audits and optimizations with a single
                    click.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-white border-2 rounded-md px-3 py-10 border-white/15 mt-[30px]">
              <div
                className="w-full bg-contain bg-no-repeat bg-center h-[200px]"
                style={{
                  backgroundImage: "url('/images/cone.png')",
                }}
              ></div>
              <div className="pt-[35px] flex flex-col gap-2">
                <p>Smart Keyword Generator</p>
                <p className="text-[#B3B3B3]">
                  Automatic suggestions and the best keywords to target.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
