import React, { useState } from "react";
import { SearchIcon } from "../../assets/icons";

const Search = ({ handleSearch, useFetch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    handleSearch(searchQuery);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-query-input"
        type="text"
        name="search-query-input"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <button
        className="search-query-submit"
        type="submit"
        name="search-query-submit"
      >
        {SearchIcon}
      </button>
    </form>
  );
};

export default Search;
