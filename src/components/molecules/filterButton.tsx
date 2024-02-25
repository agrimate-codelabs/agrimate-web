import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FilterButtonProps {
  search: string;
  setSearch: (value: string) => void;
  className?: string;
}

const FilterButton = ({ search, setSearch, className }: FilterButtonProps) => {
  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon icon="bx:bx-search" fontSize={24} className="text-gray-400" />
        </span>
        <input
          type="search"
          className="py-2 h-11 w-64 bg-gray-100 text-sm text-white rounded-xl pl-10 border border-black/light/70 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder="Cari Berdasarkan Nama"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* <div className="bg-gray-100 rounded-xl p-2 border border-black/light/70 align-middle">
        <Icon
          icon="material-symbols:filter-list"
          fontSize={24}
          className="text-gray-400"
        />
      </div> */}
    </div>
  );
};

export default FilterButton;
