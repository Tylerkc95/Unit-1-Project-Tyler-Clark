import ItemInputMenu from "./Menu Contents/ItemInputMenu";
import ItemDetailsMenu from "./Menu Contents/ItemDetailsMenu";

const OverlayMenu = ({
  overlayMenuData,
  setOverlayMenuData,
  overlayAlertData,
  setOverlayAlertData,
  itemData,
  setItemData,
}) => {
  const menuType = overlayMenuData.menuType;

  // Overlay menu contents if an item card is clicked
  if (menuType === "item-details") {
    return (
      <ItemDetailsMenu
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
        overlayAlertData={overlayAlertData}
        setOverlayAlertData={setOverlayAlertData}
      />
    );

    // Overlay menu contents if the new item button is clicked or if the edit item button is clicked while in an item card
  } else if (menuType === "new-item" || menuType === "edit-item") {
    return (
      <ItemInputMenu
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
        itemData={itemData}
        setItemData={setItemData}
      />
    );
  }
};

export default OverlayMenu;
