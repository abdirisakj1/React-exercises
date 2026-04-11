import React from "react";
import { recipes } from "./Recipeslayout";
import { Link, Outlet } from "react-router";
const Products = recipes;
export const CategoriesLayout = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <h1 className="text-gray-800 text-2xl font-medium mb-6">Categories</h1>
      </div>

      <div>
        <ul className="space-y-2">
          {Products.map((product) => (
            <li
              key={product.id}
              className="hover:bg-rose-100 cursor-pointer bg-white p-4 rounded-lg shadow"
            >
              <Link
                to={`/categories/${product.category}`}
                className="block w-full"
              >
                <h2 className="text-md font-medium text-gray-700">
                  {product.category}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* recipes category */}
      <Outlet />
    </div>
  );
};
