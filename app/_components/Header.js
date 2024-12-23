// "use client";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import HamburgerMenu from "./HamburgerMenu";
// import { useState } from "react";

function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="border-b border-primary-900 px-8 py-5
      w-full"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
