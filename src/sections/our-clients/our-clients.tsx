import Image from "next/image";
const OurClients = () => {
  return (
    <section>
      <div className="py-[50px] xl:container xl:mx-auto">
        <div className="text-white text-center flex flex-col items-center overflow-hidden lg:mx-[90px]">
          <div className="max-w-[300px] w-full">
            <h2 className="section-title pb-[10px]">Our clients</h2>
            <p className="text-[18px] md:text-[20px]">
              Hear firsthand how our solutions have boosted online success for
              users like you.
            </p>
          </div>
          <div className="w-full h-[300px] flex justify-center relative">
            <div className="relative h-[320px] lg:h-[348px] w-full flex justify-center items-center">
              <div className="relative flex items-center w-[170px] lg:w-[200px] h-full">
                <div className="relative z-10">
                  <Image
                    src="/images/review-profile.png"
                    width="200"
                    height="171"
                    alt="profile photo of customer"
                  />
                </div>
                <div className="absolute top-0 right-0 h-full w-[1px]">
                  <div className="h-full bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>
                </div>
                <div className="absolute top-0 left-0 h-full w-[1px]">
                  <div className="h-full bg-gradient-to-t from-transparent via-white/60 to-transparent"></div>
                </div>
              </div>
              <div className="w-[360px] hidden md:block pl-[30px]">
                <p className="text-start pb-4 font-medium text-[20px]">
                  &quot;This product has completely transformed how I manage my
                  projects and deadlines&quot;
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-start">Talia Taylor</p>
                  <p className="text-start text-[14px] text-white/70">
                    Digital Marketing Director @ Quantum
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[75px] w-full">
                <div className="relative w-full h-[1px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                </div>
              </div>
              <div className="absolute top-[75px] w-full">
                <div className="relative w-full h-[1px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[340px] w-full block md:hidden">
            <p className="text-center pb-4 font-medium text-[20px]">
              &quot;This product has completely transformed how I manage my
              projects and deadlines&quot;
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-center">Talia Taylor</p>
              <p className="text-center text-[14px] text-white/70">
                Digital Marketing Director @ Quantum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurClients;
