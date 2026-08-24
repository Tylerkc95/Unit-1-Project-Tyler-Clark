import { useState } from "react";
import ItemCard from "../components/ItemCard";
import "./Dashboard.css";
import items from "../data/item-data.js";
import NewItemButton from "../components/NewItemButton.jsx";
import OverlayMenu from "../components/Overlay Menu/OverlayMenu.jsx";
import OverlayAlert from "../components/OverlayAlert.jsx";

const Dashboard = () => {
  const [overlayMenuData, setOverlayMenuData] = useState({
    visibility: false,
    type: "",
    item: "",
  });

  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <header>dwindle</header>
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
      </div>

      {overlayMenuData.visibility && (
        <OverlayMenu
          overlayMenuData={overlayMenuData}
          setOverlayMenuData={setOverlayMenuData}
        />
      )}

      {/* <OverlayAlert/> */}

      <main id="view-pane" className="pane">
        {items.map((item, index) => (
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
