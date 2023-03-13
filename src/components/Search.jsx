import React, { useState } from 'react'

const Search = ({ search, setSearch }) => {

  return (
    <div>
      <h2>Search</h2>
      <input type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search