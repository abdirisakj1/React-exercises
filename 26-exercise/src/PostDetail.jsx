import React, { useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { PostsContext } from "./PostsContex";

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return <p className="text-red-600 font-medium">Post not found.</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`);
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-medium textt-gray-600">{post.title}</h2>
        <p className="text-gray-600 text-md">{post.content}</p>
        <div className="flex gap-10 items-center">
          {currentId > 1 && (
            <button
              className="bg-blue-100 text-blue-600 px-4 rounded-full"
              onClick={() => handleNavigation("prev")}
            >
              Previous
            </button>
          )}
          {currentId < posts.length && (
            <button
              className="text-red-600 bg-red-100 rounded-full px-4"
              onClick={() => handleNavigation("next")}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
