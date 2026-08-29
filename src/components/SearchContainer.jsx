import { useState } from "react";

const SearchContainer = () => {
  const mockData = ["TV", "Barstools", "Desk Fan"];

  const [query, setQuery] = useState("");

  const searchResults =
    query.trim().length !== 0
      ? mockData.filter((item) =>
          item.trim().toLowerCase().includes(query.trim().toLowerCase()),
        )
      : [];

  const isQueryEmpty = query.length === 0 ? true : false;
  const isResultsEmpty = searchResults.length === 0 ? true : false;

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
        {isQueryEmpty
          ? null
          : isResultsEmpty
            ? "No items match your search"
            : searchResults.map((item) => <li key={item}>{item}</li>)}
      </div>
    </div>
  );
};

export default SearchContainer;
