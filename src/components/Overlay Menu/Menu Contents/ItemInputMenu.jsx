import { useState, useEffect } from "react";
import { Item } from "../../../data/item-data";

const ItemInputMenu = ({
  overlayMenuData,
  setOverlayMenuData,
  itemData,
  setItemData,
}) => {
  const menuType = overlayMenuData.menuType;
  const currentItem = overlayMenuData.menuItem;
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    progress: "",
    tag: "",
    action: "",
    description: "",
    error: false,
  });

  // Runs once on render to determine if the form should be preloaded with the selected item's details, and again if the type changes
  useEffect(() => {
    if (menuType === "edit-item") {
      setFormData((prevData) => ({
        ...prevData,
        name: currentItem.name,
        project: currentItem.project,
        progress: currentItem.progress,
        tag: currentItem.tag,
        action: currentItem.action,
        description: currentItem.description,
      }));
    } else if (menuType === "new-item") {
      resetFormData();
    }
    console.log("useEffect");
  }, [overlayMenuData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setFormData((prevData) => ({
      ...prevData,
      name: "",
      project: "",
      progress: "",
      tag: "",
      action: "",
      description: "",
    }));
  };

  const resetOverlayMenuData = () => {
    setOverlayMenuData((prevData) => ({
      ...prevData,
      menuVisibility: false,
      menuType: "",
      menuItem: "",
    }));
  };

  const saveItem = () => {
    // Validates that a name has been entered
    if (formData.name === "") {
      return setFormData((prevData) => ({ ...prevData, error: true }));
    } else {
      setFormData((prevData) => ({ ...prevData, error: false }));
    }

    const progress = formData.progress === "" ? "To-Do" : formData.progress;

    const itemDetails = [
      formData.name,
      formData.name, //repeated for image filepath
      formData.project,
      progress,
      formData.tag,
      formData.action,
      formData.description,
    ];

    const itemToSave = new Item(...itemDetails);

    console.log(...itemDetails);

    if (menuType === "new-item") {
      setItemData((prevItems) => [...prevItems, itemToSave]);
    } else if (menuType === "edit-item") {
      setItemData((prevItems) =>
        prevItems.toSpliced(prevItems.indexOf(currentItem), 1, itemToSave),
      );
    }

    setOverlayMenuData((prevData) => ({
      ...prevData,
      menuType: "item-details", // also sets menuType = "item-details"
      menuItem: itemToSave, // also sets currentItem = itemToSave
    }));

    console.log(currentItem);
  };

  return (
    <div className="overlay-menu">
      {formData.error && <span>Item must have a name!</span>}
      <input
        id="item-name-input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item name..."
      ></input>
      <input
        id="item-project-input"
        name="project"
        value={formData.project}
        onChange={handleChange}
        placeholder="Project..."
      ></input>
      <input
        id="item-progress-input"
        name="progress"
        value={formData.progress}
        onChange={handleChange}
        placeholder="Progress..."
      ></input>
      <button
        onClick={() =>
          menuType === "edit-item"
            ? setOverlayMenuData((prevData) => ({
                ...prevData,
                menuType: "item-details",
              }))
            : (resetFormData(), resetOverlayMenuData())
        }
      >
        Cancel
      </button>
      <button onClick={() => saveItem()}>
        {menuType === "edit-item" ? "Update Item" : "Save Item"}
      </button>
      {/* <button onClick={() => handleOverlayMenuData(true, "item-details", "")}>
        Test Button
      </button> */}
      <input
        id="item-tag-input"
        name="tag"
        value={formData.tag}
        onChange={handleChange}
        placeholder="Tags..."
      ></input>
      <input
        id="item-action-input"
        name="action"
        value={formData.action}
        onChange={handleChange}
        placeholder="Actions..."
      ></input>
      <textarea
        id="item-description-input"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Item Description..."
        rows="5"
        cols="30"
      ></textarea>
    </div>
  );
};

export default ItemInputMenu;
