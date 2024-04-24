import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="flex">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Enter city name"
        className="border border-gray-400 w-full bg-gray-100 rounded text-center p-2"
      />
      <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-md ml-2">
        Search
      </button></div>
    </form>
  );
};
