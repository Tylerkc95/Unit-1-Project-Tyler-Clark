import { useState, useEffect } from "react";
import { Item, items } from "../../../data/item-data";

const ItemInputMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  const type = overlayMenuData.menuType;
  const currentItem = overlayMenuData.menuItem;
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    progress: "",
    tag: "",
    action: "",
    description: "",
  });

  // Runs once on render to determine if the form should be preloaded with the selected item's details, and again if the type changes
  useEffect(() => {
    if (type === "edit-item") {
      setFormData((prevData) => ({
        ...prevData,
        name: currentItem.name,
        project: currentItem.project,
        progress: currentItem.progress,
        tag: currentItem.tag,
        action: currentItem.action,
        description: currentItem.description,
      }));
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
    const itemDetails = [
      formData.name,
      formData.name, //repeated for image filepath
      formData.project,
      formData.progress,
      formData.tag,
      formData.action,
      formData.description,
    ];

    const itemToSave = new Item(...itemDetails);

    if (type === "new-item") {
      items.push(itemToSave);
    } else if (type === "edit-item") {
      items.splice(items.indexOf(currentItem), 1, itemToSave);
    }

    setOverlayMenuData((prevData) => ({
      ...prevData,
      menuType: "item-details",
      menuItem: itemToSave, // also sets currentItem = itemToSave
    }));

    console.log(currentItem);
  };

  return (
    <div className="overlay-menu">
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
      <button onClick={() => (resetFormData(), resetOverlayMenuData())}>
        Cancel
      </button>
      <button onClick={() => saveItem()}>Save Item</button>
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
