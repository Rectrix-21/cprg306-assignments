"use client";

export function Item({ name, quantity, category, onSelect }) {
    return (
      <li className="p-4 bg-gray-900 text-white rounded-lg mb-3 shadow-md cursor-pointer hover:bg-gray-800" onClick={() => onSelect(name)}>
        <div className="font-bold text-lg">{name}</div>
        <div className="text-gray-400">Buy {quantity} in {category}</div>
      </li>
    );
  }