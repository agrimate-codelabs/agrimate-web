import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-green/500 min-w-screen w-full">
        <Image
          className="self-center"
          src="/logoSidebar.svg"
          width={160}
          height={36}
          alt={""}
        />
        <div className="flex space-x-2 animate-pulse mt-3">
          <div className="w-3 h-3 bg-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-yellow rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
