import { useState } from "react";
import DeleteItemAlert from "./Alert Contents/DeleteItemAlert";

const OverlayAlert = ({
  overlayMenuData,
  setOverlayMenuData,
  overlayAlertData,
  setOverlayAlertData,
  itemData,
  setItemData,
}) => {
  const alertType = overlayAlertData.alertType;

  // Overlay alert contents if user tries to delete an item
  if (alertType === "delete-item") {
    return (
      <DeleteItemAlert
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
        overlayAlertData={overlayAlertData}
        setOverlayAlertData={setOverlayAlertData}
        itemData={itemData}
        setItemData={setItemData}
      />
    );
  }
};

export default OverlayAlert;
