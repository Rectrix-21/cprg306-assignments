"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((count) => Math.min(count + 1, 20));
  };

  const decrement = () => {
    setQuantity((count) => Math.max(count - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-950 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Add New Item</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          required
          className="p-2 rounded bg-gray-700 text-white"
        />
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 bg-red-500 rounded disabled:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              decrement();
            }}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            className="px-4 py-2 bg-green-500 rounded disabled:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              increment();
            }}
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        >
          {[
            "Produce",
            "Dairy",
            "Bakery",
            "Meat",
            "Frozen Foods",
            "Canned Goods",
            "Dry Goods",
            "Beverages",
            "Snacks",
            "Household",
            "Other",
          ].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">
          Add Item
        </button>
      </form>
    </div>
  );
}
