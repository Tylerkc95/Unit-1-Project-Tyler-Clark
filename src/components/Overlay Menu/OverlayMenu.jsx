import NewItemMenu from "./Menu Contents/NewItemMenu";
import ItemDetailsMenu from "./Menu Contents/ItemDetailsMenu";
import EditItemMenu from "./Menu Contents/EditItemMenu";

const OverlayMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  let type = overlayMenuData.type;

  // Overlay menu contents if the new item button is clicked
  if (type === "new-item") {
    return <NewItemMenu setOverlayMenuData={setOverlayMenuData} />;

    // Overlay menu contents if an item card is clicked
  } else if (type === "item-details") {
    return (
      <ItemDetailsMenu
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
      />
    );

    // Overlay menu contents if the edit item button is clicked while in an item card
  } else if (type === "edit-item") {
    return (
      <EditItemMenu
        overlayMenuData={overlayMenuData}
        setOverlayMenuData={setOverlayMenuData}
      />
    );
  }
};

export default OverlayMenu;
