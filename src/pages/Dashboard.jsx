import ItemCard from "../components/ItemCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <header>dwindle</header>
      </div>
      <main id="view-pane" className="pane">
        <ItemCard />
        <ItemCard />
      </main>
    </div>
  );
};

export default Dashboard;
