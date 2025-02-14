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
  const displayedPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className="h-[65%] overflow-y-auto">
      {displayedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
