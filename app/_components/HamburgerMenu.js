"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = function () {
    setMenuOpen(!menuOpen);
    console.log("Open");
  };

  return (
    <>
      <div onClick={handleNav} className="sm:hidden cursor-pointer z-10">
        <GiHamburgerMenu size={30} />
        {/* <ion-icon name="menu-outline"></ion-icon> */}
        {/* <EyeSlashIcon className="h-5 w-5 text-primary-600" /> */}
      </div>

      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-full sm:hidden h-screen bg-gray-700 p-10 ease-in duration-1000 z-10"
            : "hidden fixed right-[-100] top-0 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-between">
          <div>
            <Logo />
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineClose size={30} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="mt-6">
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-2xl"
              >
                Home
              </li>
            </Link>
            <Link href="/cabins">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-2xl"
              >
                Cabins
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-2xl"
              >
                About-us
              </li>
            </Link>
            <Link href="/account">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-2xl"
              >
                Account
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
