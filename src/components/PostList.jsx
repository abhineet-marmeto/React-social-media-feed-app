import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";

const POSTS_PER_PAGE = 10;

const PostList = () => {
  const { posts } = useContext(PostContext);
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const currentPage = parseInt(pageNumber, 10) || 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const displayedPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className="h-full overflow-y-auto">
      {displayedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 mx-2 border rounded-md"
          disabled={currentPage === 1}
          onClick={() => navigate(`/home/page/${currentPage - 1}`)}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 mx-1 border rounded-md ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
            onClick={() => navigate(`/home/page/${i + 1}`)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 mx-2 border rounded-md"
          disabled={currentPage === totalPages}
          onClick={() => navigate(`/home/page/${currentPage + 1}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
