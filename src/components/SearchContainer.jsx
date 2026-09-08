import { useState } from "react";
import searchIcon from "../images/magnifying-glass-solid-full.svg";
import xIcon from "../images/x-solid-full.svg";

const SearchContainer = ({ setOverlayMenuData, itemData }) => {
  const [query, setQuery] = useState("");

  const searchResults =
    query.trim().length !== 0
      ? itemData.filter((item) =>
          item.name.trim().toLowerCase().includes(query.trim().toLowerCase()),
        )
      : [];

  const isQueryEmpty = query.length === 0 ? true : false;
  const isResultsEmpty = searchResults.length === 0 ? true : false;

  return (
    <div>
      <div id="search-bar">
        <input
          id="search-bar-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search..."
        ></input>
        <img
          id="search-bar-icon"
          src={isQueryEmpty ? searchIcon : xIcon}
          onClick={() => (isQueryEmpty ? null : setQuery(""))}
          alt="Search bar icon"
        />
      </div>
      <div id="search-dropdown">
        {isQueryEmpty
          ? null
          : isResultsEmpty
            ? "No items match your search"
            : searchResults.map((item, index) => (
                <li
                  key={item.name + index}
                  className="search-result"
                  onClick={() => (
                    setOverlayMenuData((prevData) => ({
                      ...prevData,
                      menuVisibility: true,
                      menuType: "item-details",
                      menuItem: item,
                    })),
                    setQuery("")
                  )}
                >
                  {item.name}
                </li>
              ))}
      </div>
    </div>
  );
};

export default SearchContainer;
