import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ addItem }) {
  const INITIAL_STATE = {
    name: "",
    qty: "",
    purpose: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setAgreed(checked);
    } else {
      setFormData((formData) => ({
        ...formData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
    setAgreed(false);
  };

  return (
    <div>
      <h3>Add an Item to the Inventory</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="qty"></label>
        <input
          id="qty"
          type="text"
          name="qty"
          placeholder="Quantity"
          value={formData.qty}
          onChange={handleChange}
        />
        <label htmlFor="purpose"></label>
        <input
          id="purpose"
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
        <label htmlFor="terms">
          <input
            id="terms"
            type="checkbox"
            checked={agreed}
            name="terms"
            onChange={handleChange}
          />
          Agree to Terms
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ItemForm;
