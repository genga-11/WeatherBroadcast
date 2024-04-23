import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter city name"
        className="border border-gray-300  rounded text-center p-2"
      />
      <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md ml-2">
        Search
      </button>
    </form>
  );
};
