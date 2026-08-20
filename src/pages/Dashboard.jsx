import { useState } from "react";
import ItemCard from "../components/ItemCard";
import "./Dashboard.css";
import items from "../data/item-data.js";
import NewItemButton from "../components/NewItemButton.jsx";
import OverlayMenu from "../components/OverlayMenu.jsx";
import OverlayAlert from "../components/OverlayAlert.jsx";

const Dashboard = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
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
      {isOverlayVisible && <OverlayMenu visibility={setIsOverlayVisible} />}
      {/* <OverlayAlert/> */}
      <main id="view-pane" className="pane">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
        <NewItemButton onClick={() => setIsOverlayVisible(true)} />
      </main>
    </div>
  );
};

export default Dashboard;
