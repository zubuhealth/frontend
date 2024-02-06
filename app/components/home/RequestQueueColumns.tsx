import classNames from "classnames";
import MessageIcon from "@/public/assets/message.svg";
import DollarCircleIcon from "@/public/assets/dollar-circle.svg";
import ExportIcon from "@/public/assets/export.svg";
import HorizontalDotsIcon from "@/public/assets/horizontal-dots.svg";
import Link from "next/link";
import Avatar from "react-avatar";
import SortUpAndDownIcon from "@/public/assets/sort-up-down.svg";

export const customersGrid = [
  { type: "checkbox", width: "20" },
  {
    headerTemplate: () => (
      <div className="flex items-center gap-1 font-manrope text-xs font-semibold text-[#737373]">
        Customer Name <SortUpAndDownIcon />
      </div>
    ),
    field: "name",
    width: "80",
    template: (props: any) => (
      <div className="flex items-center gap-2">
        <Avatar name={props.name} round size="30px" />
        <p className="font-jakarta text-sm font-semibold text-main-dark">
          {props.name}
        </p>
      </div>
    ),
    textAlign: "start",
  },
  {
    field: "date",
    headerTemplate: () => (
      <div className="flex items-center gap-1 font-manrope text-xs font-semibold text-[#737373]">
        Date <SortUpAndDownIcon />
      </div>
    ),
    width: "40",
    textAlign: "start",
    template: (props: any) => (
      <div className="space-y-1">
        <p className="font-jakarta text-sm font-semibold text-main-dark">
          {props.date}
        </p>
        <p className="font-jakarta text-xs font-medium text-light-gray">
          {props.time}
        </p>
      </div>
    ),
  },
  {
    field: "type",
    headerTemplate: () => (
      <div className="flex items-center gap-1 font-manrope text-xs font-semibold text-[#737373]">
        Type <SortUpAndDownIcon />
      </div>
    ),
    width: "46",
    textAlign: "start",
    template: (props: any) => (
      <div
        className={classNames(
          "inline-flex items-center gap-1 rounded-md p-2 font-jakarta !text-xs font-semibold ",
          props.type === "Policy Inquiry"
            ? "bg-[#D9f0E2] text-[#019939]"
            : "bg-[#EBDFF4] text-[#9D4EDD]",
        )}
      >
        {props.type === "Policy Inquiry" ? (
          <MessageIcon className="shrink-0" />
        ) : (
          <DollarCircleIcon className="shrink-0" />
        )}
        {props.type}
      </div>
    ),
  },
  {
    field: "action",
    headerTemplate: () => (
      <div className="flex items-center gap-1 font-manrope text-xs font-semibold text-[#737373]">
        Action
      </div>
    ),
    width: "50",
    textAlign: "start",
    template: (props: any) => (
      <div className="flex gap-2">
        <Link
          className="flex h-8 items-center gap-1 rounded-full border border-border px-3 font-jakarta text-xs font-semibold text-main-dark"
          href="/"
        >
          Open <ExportIcon />
        </Link>
        <p className="flex cursor-pointer items-center gap-1 rounded-full border border-border px-3 font-jakarta text-xs font-semibold text-main-dark">
          <HorizontalDotsIcon />
        </p>
      </div>
    ),
  },
];
