import React from "react";
import Image from "next/image";

const Stepper = ({ step }: { step: number }) => {
  const steps = () => {
    if (step === 1) {
      return (
        <div className="flex flex-row">
          <Image src="/stepper/step 2.svg" width={25} height={56} alt={""} />
          <div className="w-20 h-[1.5px] bg-gray-300 self-center"></div>
          <Image src="/stepper/step 3.svg" width={25} height={56} alt={""} />
          <div className="w-20 h-[1.5px] bg-gray-300 self-center"></div>
          <Image src="/stepper/step 3.svg" width={25} height={56} alt={""} />
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="flex flex-row">
          <Image src="/stepper/step 1.svg" width={25} height={56} alt={""} />
          <div className="w-20 h-[1.5px] bg-green/100 self-center"></div>
          <Image src="/stepper/step 2.svg" width={25} height={56} alt={""} />
          <div className="w-20 h-[1.5px] bg-gray-300 self-center"></div>
          <Image src="/stepper/step 3.svg" width={25} height={56} alt={""} />
        </div>
      );
    }

    return (
      <div className="flex flex-row">
        <Image src="/stepper/step 1.svg" width={25} height={56} alt={""} />
        <div className="w-20 h-[1.5px] bg-green/100 self-center"></div>
        <Image src="/stepper/step 1.svg" width={25} height={56} alt={""} />
        <div className="w-20 h-[1.5px] bg-green/100 self-center"></div>
        <Image src="/stepper/step 2.svg" width={25} height={56} alt={""} />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-10 -ml-5">
        <span className="text-sm font-semibold">Info Umum</span>
        <span className="text-sm font-semibold">Info PT</span>
        <span className="text-sm font-semibold ml-4">Verifikasi</span>
      </div>
      {steps()}
    </div>
  );
};

export default Stepper;
