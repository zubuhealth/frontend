"use client";

import React from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { navLinks } from "@/app/data/navLinks";
import { usePathname } from "next/navigation";
import SearchInput from "../ui/SearchInput";
import SettingIcon from "@/public/assets/setting.svg";
import NotificationIcon from "@/public/assets/notification.svg";
import AvatarImage from "@/public/assets/avatar.png";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const link = navLinks.find((el) => el.url === pathname);

  return (
    <div className="flex h-[80px] w-full items-center justify-between border-b border-border bg-white px-8">
      <DropDownButtonComponent
        items={navLinks}
        className="![&>span:nth-child(2)]:text-sm !flex items-center !gap-1 !border-none !bg-white [&>span:nth-child(2)]:text-light-gray"
      >
        <span className="font-jakarta text-2xl font-semibold text-[#020202]">
          {link?.text}
        </span>
      </DropDownButtonComponent>

      <SearchInput className="w-full max-w-sm" />

      <div className="flex space-x-5">
        <div className="flex items-center gap-2">
          <div className="relative">
            <SettingIcon className="cursor-pointer" />
            <span className="e-badge e-badge-danger e-badge-overlap e-badge-notification e-badge-circle !bg-[#FC3400] !text-white">
              99
            </span>
          </div>
          <NotificationIcon className="cursor-pointer" />
        </div>

        <div className="flex gap-2">
          <div className="e-avatar e-avatar-circle">
            <Image src={AvatarImage} alt="Avatar" />
          </div>
          <div>
            <DropDownButtonComponent
              items={navLinks}
              className="!flex items-center !border-none !bg-white !px-0 [&>span:nth-child(2)]:text-light-gray"
            >
              <span className="font-manrope text-sm font-semibold text-main-black">
                Amber Peterson
              </span>
            </DropDownButtonComponent>
            <p className="font-jakarta text-xs font-medium text-light-gray">
              Sales Executive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
