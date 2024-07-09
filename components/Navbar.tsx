import React from "react";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../public/logoo.svg";
import user from "../public/user.svg";
import menu from "../public/menu.svg";
import search from "../public/search.svg";
import cart from "../public/shopping-cart.svg";

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

          <div className="flex flex-shrink-0 items-center">
            <Image src={logo} alt="company Logo" />
          </div>

          <div className="">
            <div className="flex items-center gap-16">
              <Image alt="Your Company" src={search} className="h-8 w-auto" />
              <Image
                alt="Your Company"
                src={cart}
                className="hidden sm:block h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
