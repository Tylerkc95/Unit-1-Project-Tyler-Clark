import { useState } from "react";

const SearchContainer = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        id="search-bar"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search..."
      ></input>
      <div id="search-dropdown">
        <li>{query}</li>
      </div>
    </div>
  );
};

export default SearchContainer;
