import { useState } from "react";

const EditItemMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  const item = overlayMenuData.item;
  const [formData, setFormData] = useState({
    name: item.name,
    project: item.project,
    progress: item.progress,
    tag: item.tag,
    actions: item.actions,
    description: item.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="overlay-menu">
      <input
        id="edit-item-name-input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item name..."
      ></input>
      <input
        id="edit-item-project-input"
        name="project"
        value={formData.project}
        onChange={handleChange}
        placeholder="Project..."
      ></input>
      <input
        id="edit-item-progress-input"
        name="progress"
        value={formData.progress}
        onChange={handleChange}
        placeholder="Progress..."
      ></input>
      <button
        onClick={() =>
          setOverlayMenuData((prevData) => ({
            ...prevData,
            type: "item-details",
          }))
        }
      >
        Cancel
      </button>
      <button>Save Item</button>
      <input
        id="edit-item-tag-input"
        name="tag"
        value={formData.tag}
        onChange={handleChange}
        placeholder="Tags..."
      ></input>
      <input
        id="edit-item-action-input"
        name="action"
        value={formData.action}
        onChange={handleChange}
        placeholder="Actions..."
      ></input>
      <textarea
        id="edit-item-description-input"
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

export default EditItemMenu;
