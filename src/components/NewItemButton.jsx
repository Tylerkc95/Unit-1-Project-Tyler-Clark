const NewItemButton = ({ setOverlayMenuData }) => {
  return (
    <button
      id="new-item-button"
      onClick={() =>
        setOverlayMenuData((prevData) => ({
          ...prevData,
          visibility: true,
          type: "new-item",
        }))
      }
    >
      +
    </button>
  );
};

export default NewItemButton;
