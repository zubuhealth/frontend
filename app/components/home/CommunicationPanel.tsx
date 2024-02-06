"use client";

import React, { FC } from "react";
import Header from "../ui/Header";
import SearchInput from "../ui/SearchInput";
import Image from "next/image";
import GmailIcon from "@/public/assets/Gmail_icon.svg";
import { communications } from "@/app/data/communicationPanel";
import ExportIcon from "@/public/assets/export.svg";
import { MessageType } from "@/app/types";

interface IProps {
  message: MessageType;
}

const CommunicationMessage: FC<IProps> = ({ message }) => {
  const { id, name, text, unread, avatar, date } = message;

  return (
    <div className="space-y-1 py-2">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="e-avatar e-avatar-circle">
            <Image src={avatar} alt="Avatar" />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="font-jakarta text-sm font-semibold text-secondary">
                {name}
              </p>
              {Boolean(unread) && (
                <span className="e-badge e-badge-circle !bg-[#F84233] !text-white">
                  {unread}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 font-jakarta text-xs font-normal text-secondary">
              via
              <div className="flex items-center gap-1 rounded-md border border-border p-0.5">
                <GmailIcon /> Gmail
              </div>
            </div>
          </div>
        </div>
        <p className="font-jakarta text-xs font-normal text-light-gray">
          {date}
        </p>
      </div>
      {Boolean(text.length) && (
        <p className="font-jakarta text-sm font-normal text-light-gray">
          {text}
        </p>
      )}
    </div>
  );
};

const CommunicationPanel = () => {
  return (
    <div className="e-card w-full hover:!bg-white">
      <div className="e-card-header">
        <div className="e-card-header-caption">
          <Header
            title="Communication Panel"
            description="Last updated a few min ago"
          />
        </div>
      </div>
      <div className="e-card-content space-y-2 !pb-[22px]">
        <SearchInput />
        <div className="border-border [&>div:not(:last-child)]:border-b">
          {communications.map((message) => (
            <CommunicationMessage key={message.id} message={message} />
          ))}
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-border bg-white p-3 font-jakarta text-sm font-semibold text-[#0D1317]">
          View All <ExportIcon />
        </div>
      </div>
    </div>
  );
};

export default CommunicationPanel;
