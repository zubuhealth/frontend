"use client";

import { navLinks } from "@/app/data/navLinks";
import React from "react";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import PlusIcon from "@/public/assets/plus.svg";
import CoinsDollarIcon from "@/public/assets/coins-dollar.svg";
import MoneySecurityIcon from "@/public/assets/money-security.svg";
import PercentCircleIcon from "@/public/assets/percent-circle.svg";
import DollarSquareIcon from "@/public/assets/dollar-square.svg";
import IncrementWaveIcon from "@/public/assets/increment-wave.svg";
import DecrementWaveIcon from "@/public/assets/decrement-wave.svg";

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap  items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="font-manrope text-4xl font-semibold text-main-dark">
            Good Afternoon, Amber P.
          </h1>
          <p className="font-jakarta text-sm font-semibold text-dark">
            Wednesday, 14 January 2024.
            <span className="ml- ml-1 font-normal text-light-gray">
              You have 2 active task assign to you
            </span>
          </p>
        </div>

        <div className="flex gap-2">
          <DropDownButtonComponent
            items={navLinks}
            className="!flex items-center !bg-white !p-2.5 !px-4 [&>span:nth-child(2)]:text-light-gray"
          >
            <span className="font-jakarta text-sm font-semibold text-secondary">
              Sales Resource
            </span>
          </DropDownButtonComponent>
          <DropDownButtonComponent
            items={navLinks}
            className="!flex items-center !bg-white !p-2.5 !px-4 [&>span:nth-child(2)]:hidden"
          >
            <span className="font-jakarta text-sm font-semibold text-secondary">
              Renew Policies
            </span>
          </DropDownButtonComponent>
          <DropDownButtonComponent
            items={navLinks}
            className="!flex items-center !border-none !bg-primary !p-2.5 !px-4 [&>span:nth-child(2)]:text-white"
          >
            <div className="flex items-center gap-1">
              <PlusIcon />
              <span className="font-jakarta text-sm font-semibold text-white">
                Issue New Policy
              </span>
            </div>
          </DropDownButtonComponent>
        </div>
      </div>
      <div>
        <div className="grid-cols-fluid grid justify-evenly gap-6">
          <div className="e-card w-full">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-title flex items-center gap-1 font-manrope text-sm font-semibold text-accent-blue">
                  <CoinsDollarIcon />
                  Policies Sold
                </div>
              </div>
            </div>
            <div className="e-card-content space-y-2 !px-9">
              <p className="font-jakarta text-3xl font-bold">2,094</p>
              <p className="flex items-center gap-1 font-jakarta text-sm font-semibold text-[#1DBF73]">
                <IncrementWaveIcon />
                938
                <span className="font-normal text-light-gray">This Month</span>
              </p>
            </div>
          </div>
          <div className="e-card w-full">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-title flex items-center gap-1 font-manrope text-sm font-semibold text-accent-purple">
                  <MoneySecurityIcon />
                  Insurance Value
                </div>
              </div>
            </div>
            <div className="e-card-content space-y-2 !px-9">
              <p className="font-jakarta text-3xl font-bold">€18.3K</p>
              <p className="flex items-center gap-1 font-jakarta text-sm font-semibold text-[#1DBF73]">
                <IncrementWaveIcon />
                61K
                <span className="font-normal text-light-gray">This Month</span>
              </p>
            </div>
          </div>
          <div className="e-card w-full">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-title flex items-center gap-1 font-manrope text-sm font-semibold text-accent-green">
                  <DollarSquareIcon />
                  Customer Engagement
                </div>
              </div>
            </div>
            <div className="e-card-content space-y-2 !px-9">
              <p className="font-jakarta text-3xl font-bold">95.8%</p>
              <p className="flex items-center gap-1 font-jakarta text-sm font-semibold text-[#1DBF73]">
                <DecrementWaveIcon />
                <span className="text-[#FF3B30]">0.32%</span>
                <span className="font-normal text-light-gray">This Month</span>
              </p>
            </div>
          </div>
          <div className="e-card w-full">
            <div className="e-card-header">
              <div className="e-card-header-caption">
                <div className="e-card-title flex items-center gap-1 font-manrope text-sm font-semibold text-accent-orange">
                  <PercentCircleIcon />
                  Conversion rate
                </div>
              </div>
            </div>
            <div className="e-card-content space-y-2 !px-9">
              <p className="font-jakarta text-3xl font-bold">2,094</p>
              <p className="flex items-center gap-1 font-jakarta text-sm font-semibold text-[#1DBF73]">
                <IncrementWaveIcon />
                1.32%
                <span className="font-normal text-light-gray">This Month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
