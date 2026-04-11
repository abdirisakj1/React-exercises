import { Link } from "react-router";

export const Homelayout = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* title and text */}
      <div className="text-center space-y-2 mt-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Welcome to Recipe Book
        </h2>
        <p className="text-gray-600">
          Discover delicious recipes and start cooking now!
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-8">
        
        {/* card 1 */}
        <Link to="/recipes" className="w-full md:w-1/2">
          <div className="bg-red-500 hover:bg-red-600 transition text-center py-6 px-4 rounded-lg shadow cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              Browse Recipes
            </h2>
            <p className="mt-2 text-gray-100">
              Explore our collection of delicious recipes
            </p>
          </div>
        </Link>

        {/* card 2 */}
        <Link to="/categories" className="w-full md:w-1/2">
          <div className="bg-red-500 hover:bg-red-600 transition text-center py-6 px-4 rounded-lg shadow cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              Recipe Categories
            </h2>
            <p className="mt-2 text-gray-100">
              Find recipes by category
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
};