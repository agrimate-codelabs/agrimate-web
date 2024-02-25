import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";
import Tips from "./tips";
import { itemRoute } from "./helper";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col w-[258px] bg-green/500 py-[36px] px-[24px] shadow max-h-max">
      <Image
        className="self-center"
        src="/logoSidebar.svg"
        width={160}
        height={36}
        alt={""}
      />
      <div className="space-y-3 mt-[28px]">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-green/100 text-base font-medium">
            {itemRoute.map((item, index) => (
              <a href={item.link} key={index}>
                <li
                  className={`rounded-lg mt-[15px] px-[10px] py-[12px] cursor-pointer ${
                    pathName === item.link ? "hovside" : "hover:hovside"
                  }`}
                  key={index}
                >
                  <div className="flex items-center ">
                    {pathName === item.link && (
                      <div className="w-[4px] h-[35px] rounded-lg bg-yellow absolute left-0"></div>
                    )}
                    <div className="flex items-center rounded-md ">
                      <Icon icon={item.icon} className="w-6 h-6 mr-2.5" />
                      <span>{item.name}</span>
                    </div>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <Tips />
    </div>
  );
};

export default Sidebar;
