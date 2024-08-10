import Hamburger from "hamburger-react";
import React from "react";
import Logo from "../../../assets/logo.svg";
import { navItems } from "@/app/constants";
import Link from "next/link";
type Props = {
  isOpen: boolean;
  setOpen: () => void;
};

const MobileDropdown = ({ isOpen, setOpen }: Props) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "translate-y-[-100%]"
      } bg-neutral-700 w-full h-full fixed transition-all duration-500 z-50 flex flex-col`}
    >
      <div className="flex justify-center">
        <div className="flex justify-between container py-5 px-3 h-[40px]">
          <Link href="/" onClick={setOpen}>
            <Logo />
          </Link>
          <div className="text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
      <nav className="flex justify-center items-center h-full">
        <ul className="flex flex-col gap-8 text-3xl">
          {navItems.map((navItem) => (
            <li key={navItem.key}>
              <Link href={navItem.href} className="text-white">
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
