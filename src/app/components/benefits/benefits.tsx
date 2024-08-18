import Benefit from "./components/benefit";

const Benefits = () => {
  return (
    <section className="w-full h-auto bg-gradient-to-r from-[#190D2E] to-[#020103] border-[1px] border-white/15 py-[76px] text-white">
      <div className="container mx-auto pl-[50px] pr-[18px] md:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:grid-cols-3">
          <div className="md:col-span-2 xl:col-span-3">
            <h2 className="text-[26px] font-semibold mb-[40px] md:text-[56px] max-w-[354px]">
              Elevate your SEO efforts.
            </h2>
          </div>
          <Benefit
            icon="gauge"
            title="User-friendly dashboard"
            description="Perform complex SEO audits and optimizations with a single click."
            alt="gauge icon"
          />
          <Benefit
            icon="list-checks"
            title="Content evaluation"
            description="Simple corrections for immediate improvements."
            alt="list checks icon"
          />
          <Benefit
            icon="magic-wand"
            title="Link Optimization Wizard"
            description="Guides you through the process of creating and managing links."
            alt="magic wand icon"
          />
          <Benefit
            icon="chart-line"
            title="Visual reports"
            description="Visual insights into your site’s performance."
            alt="chart line icon"
          />
          <Benefit
            icon="target"
            title="SEO goal setting"
            description="Helps you set and achieve SEO goals with guided assistance."
            alt="target icon"
          />
          <Benefit
            icon="cursor-click"
            title="One-click optimization"
            description="Perform complex SEO audits and optimizations with a single click."
            alt="cursor click icon"
          />
          <Benefit
            icon="sparkle"
            title="Smart Keyword Generator"
            description="Automatic suggestions and the best keywords to target."
            alt="sparkle icon"
          />
          <Benefit
            icon="bell-ringing"
            title="Automated alerts"
            description="Automatic notifications about your SEO health, including quick fixes."
            alt="bell ringing icon"
          />
          <Benefit
            icon="files"
            title="Competitor reports"
            description="Provides insights into competitors’ keyword strategies and ranking."
            alt="files icon"
          />
        </div>
      </div>
    </section>
  );
};
export default Benefits;
