import React, { createContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(0);

  const addPost = (post) => {
    const newId = id + 1;
    setPosts((prev) => [...prev, { ...post, id: newId }]);
    setId(newId);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};
