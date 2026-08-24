import { items } from "../../../data/item-data";

const ItemDetailsMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  let item = overlayMenuData.menuItem;
  return (
    <div className="overlay-menu">
      <span>Name: {item.name}</span>
      <span>Project: {item.project}</span>
      <span>Progress: {item.progress}</span>
      <button
        onClick={() =>
          setOverlayMenuData((prevData) => ({
            ...prevData,
            menuVisibility: false,
            menuItem: "",
          }))
        }
      >
        Back
      </button>
      <button
        onClick={() =>
          setOverlayMenuData((prevData) => ({
            ...prevData,
            menuVisibility: true,
            menuType: "edit-item",
          }))
        }
      >
        Edit Item
      </button>
      <button
        onClick={() => (
          items.splice(items.indexOf(item), 1),
          setOverlayMenuData((prevData) => ({
            ...prevData,
            menuVisibility: false,
            menuType: "",
            menuItem: "",
          }))
        )}
      >
        Delete Item
      </button>
      <span>Tags: {item.tag}</span>
      <span>Actions: {item.action}</span>
      <span>Description: {item.description}</span>
    </div>
  );
};

export default ItemDetailsMenu;
