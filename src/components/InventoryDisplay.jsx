import React from "react";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";
import "./InventoryDisplay.css";

function InventoryDisplay({ id, name, qty, purpose, deleteItem }) {
  const handleClick = () => {
    deleteItem(id);
  };

  return (
    <div className="InventoryDisplay">
      <ul className="InventoryDisplay-ul">
        <li className="InventoryDisplay-li">
          <ItemCard key={id} name={name} qty={qty} purpose={purpose} />
          <ItemAction handleClick={handleClick} />
        </li>
      </ul>
    </div>
  );
}

export default InventoryDisplay;
