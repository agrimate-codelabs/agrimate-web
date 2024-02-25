import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type StyleType = "primary" | "secondary";

interface CardProps {
  title: string;
  value: string;
  icon: string;
  style: StyleType;
}

const Card = ({ title, value, icon, style }: CardProps) => {
  return (
    <div
      className={`flex flex-col py-4 px-5  w-[262px] h-auto rounded-lg  shadow-lg ${
        style === "primary"
          ? "bg-green/100 text-white shadow-green/100/60"
          : "bg-white text-grey"
      }`}
    >
      <div className="flex flex-row items-center">
        <div
          className={`p-1.5 rounded-md mr-3 ${style === "primary" ? "bg-white/25" : "text-redlinear bg-redlinear/10"}`}
        >
          <Icon icon={icon} fontSize={18} />
        </div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <h1
        className={
          style !== "primary" ? "text-black/text font-semibold" : "font-bold"
        }
      >
        {value}
      </h1>
    </div>
  );
};

export default Card;
