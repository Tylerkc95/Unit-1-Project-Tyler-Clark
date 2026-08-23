import { useState } from "react";

const OverlayMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  let type = overlayMenuData.type;
  let item = overlayMenuData.item;

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

  // Overlay menu contents if the new item button is clicked
  if (type === "new-item") {
    return (
      <div className="overlay-menu">
        <input id="new-item-name-input" placeholder="Item name..."></input>
        <input id="new-item-project-input" placeholder="Project..."></input>
        <input id="new-item-progress-input" placeholder="Progress..."></input>
        <button
          onClick={() => (
            setOverlayMenuData({ overlayMenuData, visibility: false }),
            console.log(overlayMenuData)
          )}
        >
          Cancel
        </button>
        <button>Save Item</button>
        <input id="new-item-tag-input" placeholder="Tags..."></input>
        <input id="new-item-action-input" placeholder="Actions..."></input>
        <textarea
          id="new-item-description-input"
          placeholder="Item Description..."
          rows="5"
          cols="30"
        ></textarea>
      </div>
    );

    // Overlay menu contents if an item card is clicked
  } else if (type === "item-details") {
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

    // Overlay menu contents if the edit item button is clicked while in an item card
  } else if (type === "edit-item") {
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
  }
};

export default OverlayMenu;
