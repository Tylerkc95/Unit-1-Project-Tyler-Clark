import { useState } from "react";
import { items } from "../../../data/item-data";

const DeleteItemAlert = ({
  overlayMenuData,
  setOverlayMenuData,
  overlayAlertData,
  setOverlayAlertData,
  itemData,
  setItemData,
}) => {
  const currentItem = overlayMenuData.menuItem;

  function deleteItem() {
    setItemData((prevData) =>
      prevData.toSpliced(prevData.indexOf(currentItem), 1),
    );
  }

  return (
    <div className="overlay-alert">
      Are you sure you want to delete {currentItem.name}?
      <button
        onClick={() =>
          setOverlayAlertData((prevData) => ({
            ...prevData,
            alertVisibility: false,
          }))
        }
      >
        Cancel
      </button>
      <button
        onClick={() => (
          deleteItem(),
          setOverlayAlertData((prevData) => ({
            ...prevData,
            alertVisibility: false,
            alertType: "",
            alertItem: "",
          })),
          setOverlayMenuData((prevData) => ({
            ...prevData,
            menuVisibility: false,
            menuType: "",
            menuItem: "",
          }))
        )}
      >
        Yes, delete {currentItem.name}
      </button>
    </div>
  );
};

export default DeleteItemAlert;
