import { Routes, Route, Link } from "react-router";
import { useState } from "react";
import SearchContainer from "./SearchContainer";
import ItemDisplay from "./ItemDisplay";

const Sidebar = ({ setOverlayMenuData, itemData, viewBy, setViewBy }) => {
  const [sidebarType, setSidebarType] = useState("item-nav");

  return (
    <div id="sidebar" className="pane">
      <header>
        <h2>
          <Link to="/">dwindle </Link>
        </h2>
      </header>

      {sidebarType === "item-nav" ? (
        <main>
          <SearchContainer
            setOverlayMenuData={setOverlayMenuData}
            itemData={itemData}
          />
          <hr />
          <div id="list-view-container">
            <span>View by:</span>
            <select
              id="view-by-dropdown"
              onChange={(e) => {
                setViewBy(e.target.value);
              }}
            >
              <option value="all-items">All Items</option>
              <option value="project">Project</option>
              <option value="tag">Tag</option>
              <option value="action">Action</option>
              <option value="progress">Progress</option>
            </select>
            <ItemDisplay
              setOverlayMenuData={setOverlayMenuData}
              itemData={itemData}
              viewBy={viewBy}
              displayType="list"
            />
          </div>
          <hr />
        </main>
      ) : (
        sidebarType === "settings" && (
          <Link to="/about">
            <button>About</button>
          </Link>
        )
      )}

      {sidebarType === "item-nav" ? (
        <img
          id="settings-button"
          src={"../src/images/gear-solid-full.svg"}
          onClick={() => setSidebarType("settings")}
          alt="Settings icon"
        />
      ) : (
        sidebarType === "settings" && (
          <button onClick={() => setSidebarType("item-nav")}>Back</button>
        )
      )}
      <footer id="footer-dashboard">© Tyler Clark 2026</footer>
    </div>
  );
};

export default Sidebar;
