import React from "react";
import "./ItemAction.css";

function ItemAction({ handleClick }) {
  return (
    <button className="ItemAction-btn" onClick={handleClick}>
      Delete
    </button>
  );
}

export default ItemAction;
