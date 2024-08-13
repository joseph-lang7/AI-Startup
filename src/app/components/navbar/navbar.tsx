"use client";
import { useState } from "react";
import DesktopNav from "./components/desktop-nav";
import MobileDropdown from "./components/mobile-dropdown";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <MobileDropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <DesktopNav isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
    </>
  );
};

export default Navbar;
