"use client";

import { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { ItemList } from "./item-list";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="max-w-lg mx-auto p-6 bg-gray text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 flex flex-col items-center">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
