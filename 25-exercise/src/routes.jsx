import { createBrowserRouter } from "react-router";
import App from "./App";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { Categories } from "./pages/Categories";
import {  RecipesDetails } from "./components/RecipesDetails";
import { CategoryRecipes } from "./components/CategoryRecipes";
import { NotFound } from "./components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "recipes",
                element: <Recipes/>
            },
            {
                path: "categories",
                element: <Categories/>,
                children: [
                    {
                        path: ":categoryId",
                        element: <CategoryRecipes/>
                        
                    }
                ]
            },
            {
                path: "recipes/:id",
                element: <RecipesDetails/>
            }
        ]
    }
])

export default router