import React from "react";
import "./ItemCard.css";

function ItemCard({ name, qty, purpose }) {
  return (
    <div className="ItemCard">
      <p className="ItemCard-name">{name}</p>
      <p className="ItemCard-qty">Quantity: {qty}</p>
      <p className="ItemCard-purpose">Purpose: {purpose}</p>
    </div>
  );
}

export default ItemCard;
