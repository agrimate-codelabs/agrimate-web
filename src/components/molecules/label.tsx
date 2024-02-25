import React from "react";

const Label = ({ text }: { text: string }) => {
  const color =
    text === "Perlu Ditinjau" ||
    text === "Perlu Ditransfer" ||
    text === "Belum Panen" ||
    text === "Belum Direview"
      ? "bg-orange text-orange-text"
      : text === "Disetujui" ||
          text === "Sudah Ditransfer" ||
          text === "Panen" ||
          text === "Diverifikasi"
        ? "bg-green/20 text-green-text"
        : text === "Tidak Eligible"
          ? "bg-red/20 text-red"
          : "bg-black text-white";

  return (
    <span className={`${color} p-1.5 rounded-full text-xs font-medium`}>
      {text}
    </span>
  );
};

export default Label;
