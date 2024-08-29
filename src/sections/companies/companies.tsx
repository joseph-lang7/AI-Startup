import React from "react";
import Icon from "./components/icon";
import Acme from "../../../public/company-logos/acme.svg";
import Outside from "../../../public/company-logos/outside.svg";
import Echo from "../../../public/company-logos/echo.svg";
import Apex from "../../../public/company-logos/apex.svg";
import Quantum from "../../../public/company-logos/quantum.svg";
import Celestial from "../../../public/company-logos/celestial.svg";
import Pulse from "../../../public/company-logos/pulse.svg";
import Twice from "../../../public/company-logos/twice.svg";
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
