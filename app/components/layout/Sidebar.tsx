"use client";

import React, { useState } from "react";
import Logout from "@/public/assets/log-out-02.svg";
import { navLinks } from "@/app/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Chevron from "@/public/assets/u_angle-left.svg";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        "relative z-50 h-screen w-full max-w-[278px]",
        showMenu && "!w-0",
      )}
    >
      <div
        className={classNames(
          "fixed bottom-0 top-0 flex w-fit flex-col justify-between border-r border-border bg-white pb-10",
          showMenu && "-left-[263px]",
        )}
      >
        <div className="">
          <div className="relative flex h-[80px] items-center border-b border-border px-5">
            <p className="font-manrope text-4xl font-bold text-[#2E2D2D]">
              ZUBU <span className="font-thin text-primary">HEALTH</span>
            </p>
            <div
              className={classNames(
                "text absolute -right-3 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full shadow-md transition-all duration-500",
                showMenu && "-rotate-180",
              )}
              onClick={toggleMenu}
            >
              <Chevron />
            </div>
          </div>

          <nav className="space-y-3 p-5">
            <div>
              <p className="font-jakarta text-xs font-medium uppercase text-light-gray">
                Dashboard
              </p>
            </div>

            <ul className="space-y-1.5">
              {navLinks.map(({ text, url, icon: Icon }) => (
                <Link
                  key={text}
                  className={classNames(
                    "flex items-center gap-2 rounded-md p-3.5 text-light-gray transition-all duration-150 hover:bg-[#e2efdc]",
                    pathname === url && "bg-[#e2efdc] !text-primary",
                  )}
                  href={url}
                >
                  <Icon className="" />
                  <p className="font-manrope text-base font-semibold">{text}</p>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex cursor-pointer gap-3 px-8 text-light-gray">
          <Logout />
          <p className="font-manrope text-base font-semibold">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
