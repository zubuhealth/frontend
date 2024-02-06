"use client";

import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import React from "react";
import SupportIcon from "@/public/assets/online-support.svg";
import DocumentIcon from "@/public/assets/Document.svg";
import QuestionMarkIcon from "@/public/assets/Question Mark cr-fr.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between border-t border-border bg-white px-7 py-5">
      <p className="font-manrope text-base font-semibold text-light-gray">
        © Copyright Zubu Health 2024
      </p>
      <div className="flex gap-2">
        <DropDownButtonComponent
          items={[{ text: "any" }]}
          className="!flex items-center gap-2 !rounded-md !border-border !bg-white !p-2.5 !px-4"
        >
          <SupportIcon />
          <span className="relative font-jakarta text-sm font-medium text-primary">
            Supports Link
          </span>
        </DropDownButtonComponent>
        <DropDownButtonComponent
          items={[{ text: "any" }]}
          className="!flex items-center gap-2 !rounded-md !border-border !bg-white !p-2.5 !px-4"
        >
          <DocumentIcon />
          <span className="relative font-jakarta text-sm font-medium text-primary">
            Sales documentation
          </span>
        </DropDownButtonComponent>
        <DropDownButtonComponent
          items={[{ text: "any" }]}
          className="!flex items-center gap-2 !rounded-md !border-border !bg-white !p-2.5 !px-4"
        >
          <QuestionMarkIcon />
          <span className="relative font-jakarta text-sm font-medium text-primary">
            FAQ’s
          </span>
        </DropDownButtonComponent>
      </div>
    </div>
  );
};

export default Footer;
