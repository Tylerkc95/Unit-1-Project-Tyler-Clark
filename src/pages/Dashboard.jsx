import { useState, useEffect } from "react";
import "./Dashboard.css";
import NewItemButton from "../components/NewItemButton.jsx";
import OverlayMenu from "../components/Overlay Menu/OverlayMenu.jsx";
import OverlayAlert from "../components/Overlay Alert/OverlayAlert.jsx";
import ItemDisplay from "../components/ItemDisplay.jsx";
import Sidebar from "../components/Sidebar.jsx";

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
    try {
      localStorage.setItem("itemData", JSON.stringify(itemData));
    } catch (error) {
      error.message.includes(
        "Failed to execute 'setItem' on 'Storage': Setting the value of 'itemData' exceeded the quota.",
      ) &&
        setOverlayAlertData((prevData) => ({
          ...prevData,
          alertVisibility: true,
          alertType: "storage-limit-reached",
        }));
    }
  }, [itemData]);

  return (
    <div id="dashboard-page">
      <Sidebar
        setOverlayMenuData={setOverlayMenuData}
        itemData={itemData}
        viewBy={viewBy}
        setViewBy={setViewBy}
      />

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
            displayType="card"
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
