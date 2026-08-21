import { useState } from "react";

const OverlayMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  let type = overlayMenuData.type;
  let item = overlayMenuData.item;
  if (type === "new-item") {
    return (
      <div className="overlay-menu">
        <input id="new-item-name-input" placeholder="Item name..."></input>
        <input id="new-item-project-input" placeholder="Project..."></input>
        <input id="new-item-progress-input" placeholder="Progress..."></input>
        <button
          onClick={() =>
            setOverlayMenuData({ overlayMenuData, visibility: false })
          }
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
  } else if (type === "item-details") {
    return (
      <div className="overlay-menu">
        <span>Name: {item.name}</span>
        <span>Project: {item.project}</span>
        <span>Progress: {item.progress}</span>
        <button
          onClick={() =>
            setOverlayMenuData({ overlayMenuData, visibility: false, item: "" })
          }
        >
          Back
        </button>
        <button>Edit Item</button>
        <button>Delete Item</button>
        <span>Tags: {item.tag}</span>
        <span>Actions: {item.action}</span>
        <span>Description: {item.description}</span>
      </div>
    );
  }
};

export default OverlayMenu;
