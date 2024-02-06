"use client";

import React from "react";
import Header from "../ui/Header";
import { customersData } from "@/app/data/requestQueue";
import Avatar from "react-avatar";
import UserListIcon from "@/public/assets/user-list.svg";
import BubbleChatNotificationIcon from "@/public/assets/bubble-chat-notification.svg";

const Highlights = () => {
  const data = customersData.slice(0, 3);

  return (
    <div className="e-card w-full hover:!bg-white">
      <div className="e-card-header">
        <div className="e-card-header-caption">
          <Header title="Todays Highlight" />
        </div>
      </div>
      <div className="e-card-content space-y-2">
        {data.map((el) => (
          <div key={el.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar name={el.name} round size="30px" />
              <p className="font-jakarta text-sm font-semibold text-main-dark">
                {el.name}
              </p>
              <p className="font-jakarta text-xs font-normal text-light-gray">
                birthday is today
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-border">
                <UserListIcon />
              </div>
              <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-border">
                <BubbleChatNotificationIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
