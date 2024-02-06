import React, { FC } from "react";
import SearchIcon from "@/public/assets/search-lg.svg";
import LightOutlineIcon from "@/public/assets/light-outline.svg";
import classNames from "classnames";

interface IProps {
  className?: string;
}

const SearchInput: FC<IProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-2 rounded-md border border-[#DADEE4] bg-[#FAFAFA] px-2 py-3",
        className,
      )}
    >
      <div className="flex w-full items-center gap-2">
        <SearchIcon className="shrink-0" />
        <input
          type="text"
          className="w-full border-none bg-transparent p-0 text-light-gray focus:outline-none"
          placeholder="Quick Search"
        />
      </div>
      <LightOutlineIcon className="shrink-0" />
    </div>
  );
};

export default SearchInput;
