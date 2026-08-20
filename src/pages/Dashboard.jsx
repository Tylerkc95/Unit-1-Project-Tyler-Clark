import ItemCard from "../components/ItemCard";
import "./Dashboard.css";
import items from "../data/item-data.js";

const Dashboard = () => {
  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <header>dwindle</header>
      </div>
      <main id="view-pane" className="pane">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
