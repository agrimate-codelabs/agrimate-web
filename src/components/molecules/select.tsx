import React, { useState } from "react";

import Select from "react-select";

interface SelectsProps {
  label?: string;
  option: any;
  onChange: any;
  value: any;
  placeholder?: string;
}

const Selects = ({
  label,
  option,
  onChange,
  value,
  placeholder,
}: SelectsProps) => {
  return (
    <>
      {label && (
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          {label}
        </label>
      )}
      <Select
        className="basic-single rounded-lg focus:outline-none focus:border-green/100"
        classNames={{
          control: (state) =>
            state.isFocused ? "border-green/100" : "border-grey-300",
          input: () => "w-full mt-2 h-10 p-0 text-base bg-black/0",
          indicatorsContainer: () => "bg-gray-100/80",
          valueContainer: () => "bg-gray-100/80",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary25: "#D1FAE5",
            primary: "#093731",
          },
        })}
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={option}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Selects;
