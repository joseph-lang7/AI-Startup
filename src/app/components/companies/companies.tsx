import React from "react";
import Icon from "./components/icon";
import Acme from "../../assets/company-logos/acme.svg";
import Outside from "../../assets/company-logos/outside.svg";
import Echo from "../../assets/company-logos/echo.svg";
import Apex from "../../assets/company-logos/apex.svg";
import Quantum from "../../assets/company-logos/quantum.svg";
import Celestial from "../../assets/company-logos/celestial.svg";
import Pulse from "../../assets/company-logos/pulse.svg";
import Twice from "../../assets/company-logos/twice.svg";
const Companies = () => {
  return (
    <section className="flex justify-center px-3 py-[60px]">
      <div>
        <p className="text-[#9a999a] text-center mb-[40px]">
          Trusted by the world&apos;s most innovative teams
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Icon logo={<Acme />} />
            <Icon logo={<Outside />} />
            <Icon logo={<Echo />} />
            <Icon logo={<Apex />} />
            <Icon logo={<Quantum />} />
            <Icon logo={<Celestial />} />
            <Icon logo={<Pulse />} />
            <Icon logo={<Twice />} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
