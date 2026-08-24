const ItemDetailsMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  let item = overlayMenuData.item;
  return (
    <div className="overlay-menu">
      <span>Name: {item.name}</span>
      <span>Project: {item.project}</span>
      <span>Progress: {item.progress}</span>
      <button
        onClick={() =>
          setOverlayMenuData((prevData) => ({
            ...prevData,
            visibility: false,
            item: "",
          }))
        }
      >
        Back
      </button>
      <button
        onClick={() =>
          setOverlayMenuData((prevData) => ({
            ...prevData,
            visibility: true,
            type: "edit-item",
          }))
        }
      >
        Edit Item
      </button>
      <button>Delete Item</button>
      <span>Tags: {item.tag}</span>
      <span>Actions: {item.action}</span>
      <span>Description: {item.description}</span>
    </div>
  );
};

export default ItemDetailsMenu;
