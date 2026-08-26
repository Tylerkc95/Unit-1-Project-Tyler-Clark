const NewItemButton = ({ setOverlayMenuData }) => {
  return (
    <button
      id="new-item-button"
      onClick={() =>
        setOverlayMenuData((prevData) => ({
          ...prevData,
          menuVisibility: true,
          menuType: "new-item",
          menuItem: "",
        }))
      }
    >
      +
    </button>
  );
};

export default NewItemButton;
