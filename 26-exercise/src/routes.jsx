import React from "react";
import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./Login";
import { CreatePost } from "./CreatePost";
import { BlogList } from "./BlogList";
import { ProtectedRoute } from "./ProtectedRoute";
import PostDetail from "./PostDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <BlogList />,
      },
      {
        path: "posts/:postId",
        element: <PostDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create",
        element: <ProtectedRoute element={<CreatePost />} />,
      },
    ],
  },
]);
