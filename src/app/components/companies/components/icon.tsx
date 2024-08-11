import React, { ReactNode } from "react";

type Props = {
  logo: ReactNode;
};

const Icon = ({ logo }: Props) => {
  return (
    <div className="border-2 border-white/15 text-[#9a999a] w-[175px] h-[98px] flex items-center justify-center rounded-md">
      {logo}
    </div>
  );
};

export default Icon;
