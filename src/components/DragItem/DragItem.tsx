import React from "react";
import Style from "../../types/Style/Style";
import { useDrag } from "../../context/DragContext";

type DragItemProps = {
  note: number;
  children: React.ReactNode;
  classes?: Style | undefined;
};

const DragItem: React.FC<DragItemProps> = ({ note, classes, children }) => {
  const { isDragging, onDragStart } = useDrag();
  return (
    <div onPointerDown={(e) => onDragStart(e, note)}>
      <div
        className={`card ${isDragging === note ? "dragging" : ""}`}
        style={classes}
      >
        <div className="box">{children}</div>
      </div>
    </div>
  );
};

export default DragItem;
