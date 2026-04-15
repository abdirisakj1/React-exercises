import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow py-3">
      <div className="flex justify-between items-center px-6 text-gray-700">
        {/* Logo */}
        <h1 className="text-xl font-bold">React Blog</h1>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-md">
          {isAuthenticated ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/create">Create Post</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1 text-white rounded-md cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};