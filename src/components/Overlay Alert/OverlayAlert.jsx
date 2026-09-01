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

  function deleteItem() {
    setItemData((prevData) =>
      prevData.toSpliced(prevData.indexOf(overlayMenuData.menuItem), 1),
    );
  }

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
  } else if (alertType === "storage-limit-reached") {
    return (
      <>
        <div className="overlay-alert">
          Local storage limit exceeded. Item not saved.
          <button
            onClick={() => (
              setOverlayAlertData((prevData) => ({
                ...prevData,
                alertVisibility: false,
                alertType: "",
              })),
              setOverlayMenuData((prevData) => ({
                ...prevData,
                menuVisibility: false,
                menuType: "",
              })),
              deleteItem()
            )}
          >
            Okay
          </button>
        </div>
      </>
    );
  }
};
export default OverlayAlert;
