import { useState } from "react";

const OverlayMenu = ({ overlayMenuData, setOverlayMenuData }) => {
  let type = overlayMenuData.type;
  const newItemOverlayMenu = (
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

  const itemDetailsOverlayMenu = (
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

  if (type === "new-item") {
    return newItemOverlayMenu;
  } else if (type === "item-details") {
    return itemDetailsOverlayMenu; 
  }
};

export default OverlayMenu;
