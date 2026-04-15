import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { PostsContext } from "./PostsContex";

export const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate("/");
  };

  return (
    <div>
      <div className=" bg-white pb-20 p-4 shadow rounded-md ">
        <form className="w-2/3 flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="font-medium text-gray-700">Create new post</h2>
          <input
            className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-400"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-400"
            name="content"
            rows="4"
            cols="30"
            placeholder="Conetnt..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-1 rounded-sm"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};
