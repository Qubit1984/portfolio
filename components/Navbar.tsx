"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";

import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  /*useEffect(() => {
    setTheme("dark");
  }, []);*/
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow  dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link to="home" className="hover:cursor-pointer">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">Boliang</h2>
              </div>
            </Link>

            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:cursor-pointer dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <button
                onClick={toggleTheme}
                className="bg-slate-100 p-2 rounded-xl"
              >
                {theme == "light" ? (
                  <RiMoonFill size={25} color="black" />
                ) : (
                  <RiSunLine size={25} color="black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
