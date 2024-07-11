"use client";

import React from "react";

import Image from "next/image";
import logo from "../public/logoo.svg";
import user from "../public/user.svg";
import menu from "../public/menu.svg";
import search from "../public/search.svg";
import cart from "../public/shopping-cart.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="px-8 md:px-16">
      <div className="relative flex h-24 items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <div className="">
            <div className="flex space-x-4 items-center gap-16">
              <Image alt="Your Company" src={menu} className="h-8 w-auto" />
              <Image
                alt="Your Company"
                src={user}
                className="h-8 w-auto hidden sm:block"
              />
            </div>
          </div>
          <Link href={"/"}>
            <div className="flex flex-shrink-0 items-center">
              <Image src={logo} alt="company Logo" />
            </div>
          </Link>
          <div className="">
            <div className="flex items-center gap-16">
              <Image alt="Your Company" src={search} className="h-8 w-auto" />
              <Link href="/cart">
                <Image
                  alt="Your Company"
                  src={cart}
                  className="hidden sm:block h-8 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
