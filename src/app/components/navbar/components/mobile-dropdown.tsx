import Hamburger from "hamburger-react";
import React from "react";
import Logo from "../../../assets/logo.svg";
import { navItems } from "@/app/constants";
import Link from "next/link";
type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const MobileDropdown = ({ isOpen, toggle }: Props) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "translate-y-[-100%]"
      } bg-black w-full h-full fixed transition-all duration-500 z-50 flex flex-col`}
    >
      <div className="flex justify-center">
        <div className="flex justify-between container py-5 px-3 h-[40px]">
          <Link href="/" onClick={toggle}>
            <Logo />
          </Link>
          <div className="text-white">
            <Hamburger toggled={isOpen} toggle={toggle} />
          </div>
        </div>
      </div>
      <nav className="flex justify-center items-center h-full">
        <ul className="flex flex-col gap-12 text-3xl">
          {navItems.map((navItem) => (
            <li key={navItem.key}>
              <Link
                onClick={toggle}
                href={navItem.href}
                className="text-white outline outline-offset-4 outline-white/15 px-5 py-2 rounded-md"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileDropdown;
