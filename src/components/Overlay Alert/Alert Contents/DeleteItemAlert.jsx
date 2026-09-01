const DeleteItemAlert = ({
  overlayMenuData,
  setOverlayMenuData,
  setOverlayAlertData,
  setItemData,
}) => {
  const currentItem = overlayMenuData.menuItem;

  function deleteItem() {
    setItemData((prevData) =>
      prevData.toSpliced(prevData.indexOf(currentItem), 1),
    );
  }

  return (
    <>
      <div className="overlay-backdrop"></div>
      <div className="overlay-alert">
        Are you sure you want to delete {currentItem.name}?
        <div className="overlay-alert-buttons">
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
      </div>
    </>
  );
};

export default DeleteItemAlert;
