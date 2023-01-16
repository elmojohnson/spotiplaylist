import React from "react";

const Search = ({ value, handleChange, handleSearch, isLoading }) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        value={value}
        onChange={handleChange}
        disabled={isLoading}
        placeholder="Search Tracks"
        className="border px-3 py-2 rounded-lg outline-none w-full"
      />
      <button onClick={handleSearch} disabled={isLoading} className="btn bg-primary text-white">
        Search
      </button>
    </div>
  );
};

export default Search;
