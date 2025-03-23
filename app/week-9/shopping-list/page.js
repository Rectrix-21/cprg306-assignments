"use client";

import { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { ItemList } from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (rawname) => {
    console.log("Selected Item:", rawname);
    const cleanedName = rawname
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\d+\s*\w*/gi, "")
      .replace(/\b(dozen|pack)\b/gi, "")
      .split(",")[0]
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to landing page
    }
  }, [user, router]);

  if (!user) {
    return null; // Prevents flickering before redirect
  }

  return (
    <main className="max-w-2xl mx-auto p-6 bg-gray text-white min-h-screen flex gap-4">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4 flex flex-col items-center">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
