import React from "react";
import Avatar from "../molecules/avatar";
import { usePathname } from "next/navigation";

import { itemRoute } from "./helper";
import { useAuth } from "@/contexts/auth";

const Navbar = () => {
  let pathName = usePathname();

  const { user } = useAuth();

  return (
    <div className="flex flex-row justify-between">
      <h1>
        {itemRoute.map((item, index) => {
          if (pathName === item.link) {
            return (
              <span key={index} className="text-2xl font-bold">
                {item.name}
              </span>
            );
          }
        })}
      </h1>
      <Avatar name={user.data.userDetail.name} />
    </div>
  );
};

export default Navbar;
