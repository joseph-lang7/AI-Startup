"use client";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Image from "next/image";
import { cardItems } from "@/data";
const Pricing = () => {
  const [billedYearly, setBilledYearly] = useState(true);
  return (
    <section>
      <div className="container mx-auto pl-[50px] pr-[18px] md:px-[50px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center max-w-[300px]">
            <div className="section-title pb-[10px]">Pricing</div>
            <p className="text-[18px] md:text-[20px] text-white text-center">
              Choose the right plan to meet your SEO needs and start optimizing
              today.
            </p>
          </div>
          <div className="flex gap-3 mt-7">
            {/* Toggle Switch */}
            <div
              className={twMerge(
                "w-[40px] bg-neutral-400 h-[20px] rounded-full relative mb-16 ",
                billedYearly && "bg-purple-500"
              )}
              onClick={() => setBilledYearly(!billedYearly)}
            >
              <div
                className={twMerge(
                  "bg-white absolute rounded-full w-[20px] h-full transition-all duration-300",
                  billedYearly && "translate-x-[100%]"
                )}
              ></div>
            </div>
            <div className="text-white/70">Billed Yearly</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 justify-center">
          {/* Starter Card */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-5 border-[1px] border-white/20 rounded-md h-[600px] py-5 px-3 text-white w-[300px]">
              <div className="pricing-card-title">Starter</div>
              <div className="text-white/70">
                {billedYearly ? "$29/mo" : "$39/mo"}
              </div>
              <div className="w-full bg-white/20 h-[1px] my-3"></div>
              {cardItems.slice(0, 4).map((feature) => (
                <div className="flex gap-2 items-center">
                  <span>
                    <Image
                      src="/icons/check-icon.svg"
                      width={15}
                      height={15}
                      alt="Check Icon"
                    />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
              <div className="flex-grow"></div>
              <button className="px-4 rounded-lg bg-transparent text-white h-[40px] relative ">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(255,255,255,.7)_inset] rounded-lg"></div>
                </div>
                <span className="text-sm">Join waitlist</span>
              </button>
            </div>
          </div>
          {/* Pro Card */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-5  border-[1px] border-white/20 rounded-md h-[600px] text-white w-[300px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-purple-700/80 rounded-lg blur-2xl -z-20 h-full"></div>
              <div className="h-full w-full bg-purple-500/10 absolute -z-10"></div>
              <div
                className="absolute w-full h-full bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/images/card-pattern.png')" }}
              ></div>
              <div className="flex flex-col gap-5 h-full bg-gradient-to-b from-black via-black/50 to-transparent z-10 py-5 px-3">
                <div className="pricing-card-title">Pro</div>
                <div className="text-white/70">
                  {billedYearly ? "$79/mo" : "$89/mo"}
                </div>
                <div className="w-full bg-white/20 h-[1px] my-3"></div>
                {cardItems.slice(0, 6).map((feature) => (
                  <div className="flex gap-2 items-center">
                    <span>
                      <Image
                        src="/icons/check-icon.svg"
                        width={15}
                        height={15}
                        alt="Check Icon"
                      />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
                <div className="flex-grow"></div>
                <button className="px-4 rounded-lg bg-[#391d68] text-white h-[40px] relative ">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 shadow-[0_0_10px_rgb(255,255,255,.7)_inset] rounded-lg"></div>
                  </div>
                  <span className="text-sm">Join waitlist</span>
                </button>
              </div>
            </div>
          </div>
          {/* Business Card */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-5 border-[1px] border-white/20 rounded-md h-[600px] py-5 px-3 text-white w-[300px]">
              <div className="pricing-card-title">Business</div>
              <div className="text-white/70">
                {billedYearly ? "$149/mo" : "$199/mo"}
              </div>
              <div className="w-full bg-white/20 h-[1px] my-3"></div>
              {cardItems.map((feature) => (
                <div className="flex gap-2 items-center">
                  <span>
                    <Image
                      src="/icons/check-icon.svg"
                      width={15}
                      height={15}
                      alt="Check Icon"
                    />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
              <div className="flex-grow"></div>
              <button className="px-4 rounded-lg bg-transparent text-white h-[40px] relative ">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(255,255,255,.7)_inset] rounded-lg"></div>
                </div>
                <span className="text-sm">Join waitlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
