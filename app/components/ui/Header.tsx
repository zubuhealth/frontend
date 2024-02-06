import React, { FC } from "react";
import InfoCircleIcon from "@/public/assets/u_info-circle.svg";

interface IProps {
  title: string;
  description?: string;
}

const Header: FC<IProps> = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1">
        <h5 className="font-jakarta text-lg font-semibold text-main-dark">
          {title}
        </h5>
        <InfoCircleIcon />
      </div>
      {Boolean(description?.length) && (
        <p className="font-jakarta text-xs font-normal text-light-gray">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;
