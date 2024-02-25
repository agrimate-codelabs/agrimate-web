import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar as Ava,
  User,
} from "@nextui-org/react";

const Avatar = ({ name }: { name: string }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-white shadow-sm py-[12px] px-[24px] rounded-full">
        <Dropdown
          placement="bottom-end"
          className="w-max rounded-full text-danger"
        >
          <DropdownTrigger>
            <div className="flex flex-row">
              <Image
                className="rounded-full bg-green/500 mr-[15px]"
                src="/logo.svg"
                alt={""}
                width={20}
                height={20}
              />
              <p className="font-medium">{name}</p>
              <Icon icon="gridicons:dropdown" className="ml-[5px]" />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default Avatar;
