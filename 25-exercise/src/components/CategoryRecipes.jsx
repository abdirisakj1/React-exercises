import React from "react";
import { Link, useParams } from "react-router";
import { recipes } from "./Recipeslayout";

export const CategoryRecipes = () => {
  const { categoryId } = useParams();

  const products = recipes.filter((recipe) => recipe.category == categoryId);

  if (products.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div className="bg-white mt-8 p-4 rounded-sm">
      <h2 className="text-2xl font-bold  text-gray-800 mb-4">
        {categoryId} Recipes
      </h2>

      {products.map((item) => (
        <Link key={item.id} to={`/recipes/${item.id}`}>
          <div className="p-3 border border-gray-400 rounded-md mb-2">
            <h2 className="text-xl font-bold text-gray-700">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
