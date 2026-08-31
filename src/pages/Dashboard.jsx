import { useState, useEffect } from "react";
import "./Dashboard.css";
import { items } from "../data/item-data.js";
import NewItemButton from "../components/NewItemButton.jsx";
import OverlayMenu from "../components/Overlay Menu/OverlayMenu.jsx";
import OverlayAlert from "../components/Overlay Alert/OverlayAlert.jsx";
import { Routes, Route, Link } from "react-router";
import SearchContainer from "../components/SearchContainer.jsx";
import ItemDisplay from "../components/ItemDisplay.jsx";

const Dashboard = () => {
  const [overlayMenuData, setOverlayMenuData] = useState({
    menuVisibility: false,
    menuType: "",
    menuItem: "",
  });

  const [overlayAlertData, setOverlayAlertData] = useState({
    alertVisibility: false,
    alertType: "",
    alertItem: "",
  });

  const [viewBy, setViewBy] = useState("all-items");

  // Loads itemData from local storage once on render and returns an empty array if no data is saved. Wrapping in an arrow function allows it to perform more complex logic
  const [itemData, setItemData] = useState(() => {
    const loadedData = JSON.parse(localStorage.getItem("itemData"));
    if (loadedData === null) {
      return [];
    } else {
      return loadedData;
    }
  });

  // Saves itemData to local storage any time itemData changes
  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(itemData));
  }, [itemData]);

  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <h1>
          <Link to="/">dwindle </Link>
        </h1>
        <SearchContainer
          setOverlayMenuData={setOverlayMenuData}
          itemData={itemData}
        />
        <hr />
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
          viewType="list"
        />
        <hr />
        
        <Link to="/about">
          <img src={"../src/images/gear-solid-full.svg"} />
        </Link>
        <button
          onClick={() =>
            localStorage.setItem("itemData", JSON.stringify(items))
          }
        >
          Reset itemData
        </button>
      </div>

      {overlayMenuData.menuVisibility && (
        <OverlayMenu
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
          overlayAlertData={overlayAlertData}
          setOverlayAlertData={setOverlayAlertData}
          itemData={itemData}
          setItemData={setItemData}
        />
      )}

      {overlayAlertData.alertVisibility && (
        <OverlayAlert
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
          overlayAlertData={overlayAlertData}
          setOverlayAlertData={setOverlayAlertData}
          itemData={itemData}
          setItemData={setItemData}
        />
      )}

      <main id="view-pane" className="pane">
        {itemData.length == 0 ? (
          "You have no items saved."
        ) : (
          <ItemDisplay
            setOverlayMenuData={setOverlayMenuData}
            itemData={itemData}
            viewBy={viewBy}
            viewType="card"
          />
        )}
        <NewItemButton
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
        />
      </main>
    </div>
  );
};

export default Dashboard;
