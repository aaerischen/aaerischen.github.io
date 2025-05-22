import React, { useState, useRef, useEffect } from "react";
import "../css/windowDrag.css"; // We'll create this for styling

const DraggableWindow = ({ id, title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
    {isOpen && (
    <div className="modal">
      <div
        className="draggable-window"
        ref={windowRef}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? "grabbing" : "default"
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="window-title-bar" onMouseDown={handleMouseDown}>
          {title}
          <div class="window-controls">
            <button onClick={() => setIsOpen(false)}>×</button>
          </div> 
        </div>
        <div className="window-content">{children}</div>
      </div>
    </div>
  )}
  </div>
  );
}

export default DraggableWindow;