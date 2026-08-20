import { useState } from "react";

const OverlayAlert = ({ visibility }) => {
  return (
    <div className="overlay-alert">
      <button onClick={() => visibility(false)}>Cancel</button>
      <button>Save Item</button>
    </div>
  );
};

export default OverlayAlert;
