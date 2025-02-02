import React from "react";

function InventoryDisplay({ id, name, qty, purpose, deleteItem }) {
  const handleClick = () => {
    deleteItem(id);
  };

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>Quantity: {qty}</li>
        <li>Purpose: {purpose}</li>
        <button onClick={handleClick}>Delete</button>
      </ul>
    </div>
  );
}

export default InventoryDisplay;
