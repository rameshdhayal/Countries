import React from 'react'

export default function SearchBar({ setQuery }) {
 const handleSearch =  (e) => setQuery(e.target.value.toLowerCase())
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
