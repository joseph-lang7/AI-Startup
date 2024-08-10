"use client";
import React from "react";
import Logo from "../../assets/logo.svg";
import CaretDown from "../../assets/caret-down.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { navItems } from "../../constants/index";
import Link from "next/link";
import DesktopNav from "./components/desktop-nav";
import MobileDropdown from "./components/mobile-dropdown";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <MobileDropdown isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
      <DesktopNav isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
    </>
  );
};

export default Navbar;
