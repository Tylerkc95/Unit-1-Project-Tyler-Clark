import { items } from "../../../data/item-data";

const ItemDetailsMenu = ({
  overlayMenuData,
  setOverlayMenuData,
  overlayAlertData,
  setOverlayAlertData,
}) => {
  let item = overlayMenuData.menuItem;
  return (
    <>
      <div className="overlay-backdrop"></div>
      <div className="overlay-menu">
        <div className="overlay-left">
          <img className="overlay-item-pic" src={item.image} />
          <span>Name: {item.name}</span>
          <span>Project: {item.project}</span>
          <span>Progress: {item.progress}</span>
          <div className="overlay-buttons">
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
              onClick={() =>
                setOverlayAlertData((prevData) => ({
                  ...prevData,
                  alertVisibility: true,
                  alertType: "delete-item",
                }))
              }
            >
              Delete Item
            </button>
          </div>
        </div>
        <div className="overlay-right">
          <span>Tags: {item.tag}</span>
          <span>Actions: {item.action}</span>
          <span>Description: {item.description}</span>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsMenu;
