"use client";
import { useState } from "react";

import Link from "next/link";
import { FaFish } from "react-icons/fa";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "about" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "task" },
];

const Navbar = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-sky-800 border-b border-blue-800">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="flex space-x-4 h-20 items-center ">
          <Link
            href="/"
            className="rounded-md bg-red-400 px-3 text-sm font-medium text-white"
            aria-current="page"
          >
            Next.js
          </Link>

          <ul className="flex font-semibold justify-between">
            {links.map((link) => {
              return (
                <li
                  key={link.href}
                  className={`${
                    pathname === link.href ? "bg-sky-600" : ""
                  } "rounded-md md:px-4 md:py-2 text-white hover:bg-gray-700 hover:text-white "`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          {/* 
        <div className="md:ml-10">
          <div className="flex items-center">
            <button className="btn btn-primary border-0 flex items-center text-white bg-zinc-500 hover:bg-gray-900 hover:text-white rounded-md">
              <i className="fa-brands fa-google text-white "></i>
              <span>Login or Register</span>
            </button>
          </div>
        </div> */}
        </div>
        <div className="order-2 md:order-3">
          <button
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
            onClick={() => setIsLoginMenuOpen((prev) => !prev)}
          >
            {/* <!-- Heroicons - Login Solid --> */}
            <FaFish className="text-white mr-1" />
            <span>Login</span>
          </button>
        </div>
      </div>
      {/* <!-- Right Side Menu (Logged Out) --> */}
      {isLoginMenuOpen && (
        <div
          id="user-menu"
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <Link
            href="/about"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            About
          </Link>
          <Link
            href="/drinks"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            Drink List
          </Link>
          <button
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
