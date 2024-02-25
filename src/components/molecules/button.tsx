import React from "react";

interface ButtonProps {
  style?: "primary" | "secondary";
  children?: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  style = "primary",
  className,
  children,
  size,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const styleButton = () => {
    if (disabled)
      return "bg-gray-300 text-white hover:bg-gray-300 cursor-not-allowed";

    switch (style) {
      case "primary":
        return "bg-green/100 text-white hover:bg-green/500";
      case "secondary":
        return "bg-white text-[#757575] hover:bg-black/30 border border-[#757575]";
    }
  };

  const sizeButton = () => {
    switch (size) {
      case "sm":
        return "py-2 px-5 text-sm rounded";
      case "md":
        return "py-3 px-6 text-base";
      case "lg":
        return "py-4 px-8 text-lg";
      default:
        return "p-4 w-full shadow-lg";
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styleButton()} ${sizeButton()} ${className} flex justify-center  rounded-xl tracking-wide font-semibold cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
