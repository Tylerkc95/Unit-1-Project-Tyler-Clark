import ItemInputMenu from "./Menu Contents/ItemInputMenu";
import ItemDetailsMenu from "./Menu Contents/ItemDetailsMenu";

const OverlayMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  const type = overlayMenuData.menuType;

  // Overlay menu contents if an item card is clicked
  if (type === "item-details") {
    return (
      <ItemDetailsMenu
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
      />
    );

    // Overlay menu contents if the new item button is clicked or if the edit item button is clicked while in an item card
  } else if (type === "new-item" || type === "edit-item") {
    return (
      <ItemInputMenu
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
      />
    );
  }
};

export default OverlayMenu;
