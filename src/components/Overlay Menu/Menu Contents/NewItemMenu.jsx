import { useState } from "react";
import { Item, items } from "../../../data/item-data";

const NewItemMenu = ({ setOverlayMenuData }) => {
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    progress: "",
    tag: "",
    action: "",
    description: "",
  });

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
      visibility: false,
      type: "",
      item: "",
    }));
  };

  return (
    <div className="overlay-menu">
      <input
        id="new-item-name-input"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item name..."
      ></input>
      <input
        id="new-item-project-input"
        name="project"
        value={formData.project}
        onChange={handleChange}
        placeholder="Project..."
      ></input>
      <input
        id="new-item-progress-input"
        name="progress"
        value={formData.progress}
        onChange={handleChange}
        placeholder="Progress..."
      ></input>
      <button onClick={() => (resetFormData(), resetOverlayMenuData())}>
        Cancel
      </button>
      <button
        onClick={() => (
          items.push(
            new Item(
              formData.name,
              formData.name,
              formData.project,
              formData.progress,
              formData.tag,
              formData.action,
              formData.description,
            ),
          ),
          resetFormData(),
          resetOverlayMenuData()
        )}
      >
        Save Item
      </button>
      <input
        id="new-item-tag-input"
        name="tag"
        value={formData.tag}
        onChange={handleChange}
        placeholder="Tags..."
      ></input>
      <input
        id="new-item-action-input"
        name="action"
        value={formData.action}
        onChange={handleChange}
        placeholder="Actions..."
      ></input>
      <textarea
        id="new-item-description-input"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Item Description..."
        rows="5"
        cols="30"
      ></textarea>
    </div>
  );

  // <div className="overlay-menu">
  //   <input id="new-item-name-input" placeholder="Item name..."></input>
  //   <input id="new-item-project-input" placeholder="Project..."></input>
  //   <input id="new-item-progress-input" placeholder="Progress..."></input>
  //   <button
  //     onClick={() => (
  //       setOverlayMenuData((prevData) => ({
  //         ...prevData,
  //         visibility: false,
  //       })),
  //       console.log("Test")
  //     )}
  //   >
  //     Cancel
  //   </button>
  //   <button onClick={() => items.push("Saved Item")}>Save Item</button>
  //   <input id="new-item-tag-input" placeholder="Tags..."></input>
  //   <input id="new-item-action-input" placeholder="Actions..."></input>
  //   <textarea
  //     id="new-item-description-input"
  //     placeholder="Item Description..."
  //     rows="5"
  //     cols="30"
  //   ></textarea>
  // </div>
};

export default NewItemMenu;
