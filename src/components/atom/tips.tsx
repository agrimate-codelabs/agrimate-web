import React from "react";
import Image from "next/image";

const Tips = () => {
  return (
    <div className="flex flex-col w-[210px] h-[166px] rounded-lg bg-white bg-opacity-5 mt-[100px]">
      <Image
        className="self-center mt-[-20px]"
        src="/tips.svg"
        alt=""
        width={55}
        height={55}
      />
      <div className="text-center text-white text-sm font-medium p-[14px] mt-2">
        Tingkatkan produktivitas dan profitabilitas aktivitas agrikultur Anda
        bersama mitra petani.
      </div>
    </div>
  );
};

export default Tips;
