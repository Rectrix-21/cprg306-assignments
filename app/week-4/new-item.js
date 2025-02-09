"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((count) => Math.min(count + 1, 20));
  };

  const decrement = () => {
    setQuantity((count) => Math.max(count - 1, 1));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 text-white rounded-lg shadow-lg">
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-red-500 rounded disabled:opacity-50"
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-lg font-bold">{quantity}</span>
        <button
          className="px-4 py-2 bg-green-500 rounded disabled:opacity-50"
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}
