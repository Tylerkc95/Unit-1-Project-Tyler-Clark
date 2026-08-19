import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div id="dashboard-page">
      <div id="sidebar" className="pane">
        <header>dwindle</header>
      </div>
      <main id="view-pane" className="pane">
        Viewing Pane
      </main>
    </div>
  );
};

export default Dashboard;
