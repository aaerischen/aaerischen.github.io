import React from "react";
import "../css/windowDrag.css";

const Window = ({ id, title, children, isOpen, onClose }) => {
return (
    <div className="modal">
      <div
        className="window"
      >
        <div className="window-title-bar">
          {title}
          <div class="window-controls">
            <button class="minimize">_</button>
            <button class="maximize">□</button>
            <button onClick={onClose}>×</button>
          </div> 
        </div>
        <div className="window-content">{children}</div>
      </div>
    </div>
);
};

export default Window;