import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (newItem) => {
    setInventory((inventory) => [...inventory, { ...newItem, id: uuid() }]);
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <ItemForm addItem={addItem} />
      <InventoryDisplay inventory={inventory} />
    </div>
  );
}

export default SpacecraftBuilder;
