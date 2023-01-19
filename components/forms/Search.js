import React from "react";
import { MdSearch } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";

const Search = ({ value, handleChange, handleSearch, isLoading }) => {
  return (
    <div className={`flex items-center space-x-2 px-3 py-2 focus-within:ring-1 focus-within:ring-primary border rounded-lg ${isLoading ? "animate-pulse bg-base" : "bg-white"}`}>
      <input
        value={value}
        onChange={handleChange}
        disabled={isLoading}
        placeholder="Search Tracks"
        className="outline-none w-full bg-transparent"
      />
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className="text-neutral-400 hover:text-primary text-2xl hover:brightness-75"
      >
        <MdSearch />
      </button>
    </div>
  );
};

export default Search;
