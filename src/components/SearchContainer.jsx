import { useState } from "react";

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
      <input
        id="search-bar"
        value={query}
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
            : searchResults.map((item) => (
                <li
                  key={item.name}
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
