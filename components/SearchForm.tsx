"use client";

import { useEffect, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
  onTypeChange: (type: string) => void;
};

export default function SearchForm({ onSearch, onTypeChange }: Props) {
  const [types, setTypes] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => setTypes(data.results.map((t: any) => t.name)));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row gap-4 items-center">
      <select
        onChange={(e) => onTypeChange(e.target.value)}
        className="p-2 border rounded w-full sm:w-48"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>

      <div className="flex items-center w-full sm:flex-1 gap-2">
        <input
          type="text"
          placeholder="Type pokemon name here..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <button
          onClick={() => onSearch(searchInput.toLowerCase())}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}
