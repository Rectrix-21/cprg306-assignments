"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [expandedMealIds, setExpandedMealIds] = useState([]);

  const toggleMealExpand = (idMeal) => {
    setExpandedMealIds((prev) =>
      prev.includes(idMeal)
        ? prev.filter((id) => id !== idMeal)
        : [...prev, idMeal]
    );
  };

  useEffect(() => {
    if (!ingredient) return;

    const fetchMealIdeas = async () => {
      try {
        const filterRes = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const filterData = await filterRes.json();

        if (!filterData.meals) {
          setMeals([]);
          return;
        }

        // Fetch detailed info for each meal
        const detailedMeals = await Promise.all(
          filterData.meals.map(async (m) => {
            const detailRes = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${m.idMeal}`
            );
            const detailData = await detailRes.json();
            const detail = detailData.meals?.[0];
            if (!detail) return m;

            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
              const ing = detail[`strIngredient${i}`];
              const measure = detail[`strMeasure${i}`];
              if (ing && ing.trim()) {
                ingredients.push(`${measure || ""} ${ing}`.trim());
              }
            }
            return { ...m, ingredients };
          })
        );

        setMeals(detailedMeals);
      } catch (error) {
        console.error("Error fetching detailed meal ideas:", error);
        setMeals([]);
      }
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mt-14">
      <h2 className="text-xl font-bold mb-5">Meal Ideas for {ingredient}:</h2>
      {meals.length === 0 ? (
        <p>No meals found</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-20 h-20 rounded-lg shadow-md"
              />
              <p className="font-medium">{meal.strMeal}</p>
              <button
                onClick={() => toggleMealExpand(meal.idMeal)}
                className="px-3 py-1 mt-1 bg-gray-800 text-white rounded"
              >
                {expandedMealIds.includes(meal.idMeal)
                  ? "Hide Ingredients"
                  : "Show Ingredients"}
              </button>
              {expandedMealIds.includes(meal.idMeal) &&
                meal.ingredients &&
                meal.ingredients.length > 0 && (
                  <ul className="mt-2 ml-5 list-disc">
                    {meal.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}