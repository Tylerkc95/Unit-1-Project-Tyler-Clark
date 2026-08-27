import { useState } from "react";
import ItemCard from "../components/ItemCard";
import "./Dashboard.css";
import { items } from "../data/item-data.js";
import NewItemButton from "../components/NewItemButton.jsx";
import OverlayMenu from "../components/Overlay Menu/OverlayMenu.jsx";
import OverlayAlert from "../components/Overlay Alert/OverlayAlert.jsx";
import { Routes, Route, Link } from "react-router";

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

  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <header>
          <Link to="/">dwindle </Link>
        </header>
        <input id="search-bar" placeholder="Search..."></input>
        <hr />
        <span>View by:</span>
        <select id="view-by-dropdown">
          <option value="project">Project</option>
          <option value="tag">Tag</option>
          <option value="action">Action</option>
          <option value="progress">Progress</option>
          <option value="all-items">All Items</option>
        </select>
        <hr />
        <Link to="/about"><img src={"../src/images/gear-solid-full.svg"} /></Link>
      </div>

      {overlayMenuData.menuVisibility && (
        <OverlayMenu
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
          overlayAlertData={overlayAlertData}
          setOverlayAlertData={setOverlayAlertData}
        />
      )}

      {overlayAlertData.alertVisibility && (
        <OverlayAlert
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
          overlayAlertData={overlayAlertData}
          setOverlayAlertData={setOverlayAlertData}
        />
      )}

      <main id="view-pane" className="pane">
        {items.length == 0
          ? "You have no items saved."
          : items.map((item, index) => (
              <ItemCard
                key={index}
                item={item}
                setOverlayMenuData={setOverlayMenuData}
              />
            ))}
        <NewItemButton
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
        />
      </main>
    </div>
  );
};

export default Dashboard;
