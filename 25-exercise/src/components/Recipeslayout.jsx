import React from "react";
import { Link } from "react-router";

export const recipes = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    description: "Rich and moist chocolate cake perfect for any occasion",
    category: "Dessert",
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with creamy egg sauce",
    category: "Dinner",
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 3,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese",
    category: "Lunch",
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 4,
    title: "Breakfast Smoothie Bowl",
    description: "Healthy and colorful breakfast bowl",
    category: "Breakfast",
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
];

export const Recipeslayout = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 px-4">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        All Recipes
      </h2>

      {/* Recipes */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              
              <h3 className="text-lg font-bold text-gray-800">
                {recipe.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {recipe.description}
              </p>

              <span className="inline-block mt-3 bg-rose-100 text-rose-600 text-xs font-medium px-3 py-1 rounded-full">
                {recipe.category}
              </span>

            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};