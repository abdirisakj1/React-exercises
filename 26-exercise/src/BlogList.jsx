import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { PostsContext } from "./PostsContex";

export const BlogList = () => {
  const [search,setSearch] = useState('') ; 
  const { posts } = useContext(PostsContext);
  const location = useLocation();

  const useQuery = () => {
    return new URLSearchParams(location.search);
  }

  const query = useQuery();
  const searchTerm = query.get("search") || "";

  const navigate = useNavigate();
  
  useEffect(() => {
    if (search) {
      navigate(`/?search=${search}`);
    } else {
      navigate("/");
    }
  }, [search]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

 ;
  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className=" bg-white pb-20 p-4 shadow rounded-md ">
        <div className="w-2/3 flex flex-col gap-4">
          <h2 className="font-medium text-gray-700">Blog Post</h2>
          <input
          value={search}
          onChange={(e) => setSearch(e.target.value) }
            className="border border-gray-400 rounded-sm p-2 outline-none focus:border-blue-400"
            type="text"
            placeholder="search..."
          />
         
        </div>

        <ul>
          {filteredPosts.map((post) => (
            <div className="mt-4 bg-gray-100 p-4 shadow rounded-md">
                <li className="text-gray-700 text-lg font-medium hover:underline" key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
