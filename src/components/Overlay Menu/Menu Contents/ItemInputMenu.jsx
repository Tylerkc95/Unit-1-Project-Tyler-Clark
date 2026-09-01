import { useState, useEffect } from "react";
import { Item } from "../../../data/item-data";

const ItemInputMenu = ({
  overlayMenuData,
  setOverlayMenuData,
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
    image: null,
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
        image: currentItem.image,
      }));
    } else if (menuType === "new-item") {
      resetFormData();
    }
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
      image: null,
      error: false,
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
      formData.project,
      progress,
      formData.tag,
      formData.action,
      formData.description,
      formData.image,
    ];

    const itemToSave = new Item(...itemDetails);

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
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fr = new FileReader();

    fr.onload = () => {
      setFormData((prevData) => ({ ...prevData, image: fr.result }));
    };
    fr.readAsDataURL(file);
  };

  return (
    <>
      <div className="overlay-backdrop"></div>
      <div className="overlay-menu">
        <div className="overlay-left">
          <input
            type="file"
            name="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <img
            className="overlay-item-pic"
            src={formData.image}
            alt="Image upload preview"
          />
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
          <div className="overlay-buttons">
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
          </div>
        </div>
        <div className="overlay-right">
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
      </div>
    </>
  );
};

export default ItemInputMenu;
