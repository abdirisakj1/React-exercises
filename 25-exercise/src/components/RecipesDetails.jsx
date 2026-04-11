import React from "react";
import { Link, useParams } from "react-router";
import { recipes } from "./Recipeslayout";

export const RecipesDetails = () => {
  const { id } = useParams();

  const product = recipes.filter((recipe) => recipe.id == id);

  if (product.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        Recipe not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {product.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-md rounded-xl p-6">
          {/* Back Button */}
          <Link to="/recipes">
            <button className="mb-6 text-sm font-medium text-red-600 cursor-pointer">
              ← Back to recipes
            </button>
          </Link>
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {recipe.title}
          </h1>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3 ">
                Ingredients
              </h2>

              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3 ">
                Instructions
              </h2>

              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
