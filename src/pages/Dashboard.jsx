import { useState } from "react";
import ItemCard from "../components/ItemCard";
import "./Dashboard.css";
import items from "../data/item-data.js";
import NewItemButton from "../components/NewItemButton.jsx";
import OverlayMenu from "../components/OverlayMenu.jsx";

const Dashboard = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <header>dwindle</header>
      </div>
      {isOverlayVisible && <OverlayMenu visibility={setIsOverlayVisible}/>}
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
