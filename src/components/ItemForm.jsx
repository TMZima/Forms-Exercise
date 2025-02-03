import React, { useState } from "react";
import "./ItemForm.css";

function ItemForm({ addItem }) {
  const INITIAL_STATE = {
    name: "",
    qty: "",
    purpose: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.qty) newErrors.qty = "Quantity is required";
    if (!formData.purpose) newErrors.purpose = "Purpose is required";
    if (!agreed) newErrors.terms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addItem({ ...formData });
      setFormData(INITIAL_STATE);
      setAgreed(false);
      setErrors({});
    }
  };

  return (
    <div className="ItemForm">
      <h3>Add an Item to the Inventory</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          className={`ItemForm-text ${errors.name ? "error" : ""}`}
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="qty"></label>
        <input
          className={`ItemForm-text ${errors.qty ? "error" : ""}`}
          id="qty"
          type="text"
          name="qty"
          placeholder="Quantity"
          value={formData.qty}
          onChange={handleChange}
        />
        <label htmlFor="purpose"></label>
        <textarea
          className={`ItemForm-purpose ${errors.purpose ? "error" : ""}`}
          id="purpose"
          name="purpose"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
        <label
          className={`ItemForm-terms ${errors.terms ? "error" : ""}`}
          htmlFor="terms"
        >
          <input
            className="ItemForm-checkbox"
            id="terms"
            type="checkbox"
            checked={agreed}
            name="terms"
            onChange={handleChange}
          />
          Agree to Terms
        </label>
        <button className="ItemForm-btn">Add</button>
      </form>
    </div>
  );
}

export default ItemForm;
