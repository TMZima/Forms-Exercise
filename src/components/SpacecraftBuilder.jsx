import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (newItem) => {
    setInventory((inventory) => [...inventory, { ...newItem, id: uuid() }]);
  };

  const deleteItem = (itemId) => {
    setInventory((inventory) => inventory.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <ItemForm addItem={addItem} />
      <div>
        <h3>Inventory</h3>
        {inventory.map(({ id, name, qty, purpose }) => (
          <InventoryDisplay
            key={id}
            id={id}
            name={name}
            qty={qty}
            purpose={purpose}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default SpacecraftBuilder;
