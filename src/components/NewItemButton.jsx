const NewItemButton = ({ overlayMenuData, setOverlayMenuData }) => {
  return (
    <button
      id="new-item-button"
      onClick={() =>
        setOverlayMenuData({
          overlayMenuData,
          visibility: true,
          type: "new-item",
        })
      }
    >
      +
    </button>
  );
};

export default NewItemButton;
