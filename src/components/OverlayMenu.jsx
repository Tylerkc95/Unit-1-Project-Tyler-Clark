import { useState } from "react";

const OverlayMenu = ({ visibility }) => {
  return (
    <div className="overlay-menu">
      <input id="new-item-name-input" placeholder="Item name..."></input>
      <input id="new-item-project-input" placeholder="Project..."></input>
      <input id="new-item-progress-input" placeholder="Progress..."></input>
      <button onClick={() => visibility(false)}>Cancel</button>
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
};

export default OverlayMenu;
