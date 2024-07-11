"use client";

import React from "react";

import Image from "next/image";
import logo from "../public/logoo.svg";
import back from "../public/material-symbols-light_arrow-back.svg";

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
    <div className="px-4 md:px-16 h-24 flex justify-between items-center">
      <div className="">
        <Link className="flex space-x-4 items-center gap-16" href={"/cart"}>
          <Image alt="back icon" src={back} className="h-8 w-auto" />
        </Link>
      </div>

      <div className="flex items-center w-full md:justify-center justify-end ">
        <Image src={logo} alt="company Logo" />
      </div>

      
    </div>
  );
};

export default Navbar;
