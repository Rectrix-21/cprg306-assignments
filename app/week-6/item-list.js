"use client";

import { useState } from "react";
import { Item } from "./item";
import itemsData from "./items.json";

export function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems;

  if (sortBy === "grouped") {
    sortedItems = itemsData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  } else {
    sortedItems = [...itemsData].sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy])
    );
  }

  return (
    <div className="bg-black shadow-md rounded-lg p-4">
      <div className="mb-4 flex gap-2">
        <button
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-blue-800 text-white" : "bg-gray-600"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-blue-800 text-white" : "bg-gray-600"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`px-3 py-1 rounded ${
            sortBy === "grouped" ? "bg-blue-800 text-white" : "bg-gray-600"
          }`}
          onClick={() => setSortBy("grouped")}
        >
          Group by Category
        </button>
      </div>
      <ul>
        {sortBy === "grouped"
          ? Object.entries(sortedItems)
              .sort()
              .map(([category, items]) => (
                <li key={category} className="mb-4">
                  <h2 className="text-lg text-white font-bold">{category}</h2>
                  <ul>
                    {items.map((item, index) => (
                      <Item key={index} {...item} />
                    ))}
                  </ul>
                </li>
              ))
          : sortedItems.map((item, index) => <Item key={index} {...item} />)}
      </ul>
    </div>
  );
}
