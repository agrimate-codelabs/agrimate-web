import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ label, placeholder, value, onChange }: InputProps) => {
  return (
    <>
      {label && (
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          {label}
        </label>
      )}
      <textarea
        className="w-full mt-2 h-20 rounded-lg text-base px-4 py-2 border-[1.2px] bg-gray-100/80  focus:outline-none focus:border-green/100"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
