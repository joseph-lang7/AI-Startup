import React from "react";
import Link from "next/link";
import { navItems } from "@/data";
import CaretDown from "../../../../public/icons/caret-down.svg";
import Logo from "../../../../public/icons/logo.svg";
import Hamburger from "hamburger-react";

type Props = {
  setOpen: () => void;
  isOpen: boolean;
};

const DesktopNav = ({ setOpen, isOpen }: Props) => {
  return (
    <header className="flex justify-center border-b border-white/15">
      <div className="flex w-full justify-between items-center container py-5 px-3 h-[40px] my-5">
        <Link href="/" className="border rounded-lg border-white/15">
          <Logo />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-8 outline outline-white/15 outline-offset-4 px-10 py-2 rounded-xl h-[40px] items-center">
            {navItems.map((navItem) => (
              <li key={navItem.key} className="flex items-center gap-1">
                <Link
                  className="text-[#9a999a] hover:text-white transition-colors duration-300"
                  href={navItem.href}
                >
                  {navItem.label}
                </Link>
                {navItem.label === "Features" || navItem.label === "Company" ? (
                  <CaretDown />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          <button className="px-4 rounded-lg bg-[#391d68] text-white outline outline-white/15 outline-2 outline-offset-[5px] h-[40px] relative ">
            <div className="absolute inset-0">
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(255,255,255,.7)_inset] rounded-lg"></div>
            </div>
            <span className="text-sm">Join waitlist</span>
          </button>
          <div className="text-white lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNav;
