import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import CommentSection from "./CommentSection";

const PostCard = ({ post }) => {
  const { toggleLike } = useContext(PostContext);
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <img src={post.profileImage} alt="User" className="w-8 h-8 rounded-full mr-2" />
        <span className="font-semibold">{post.username}</span>
      </div>
      <p>{post.text}</p>
      {post.image && <img src={post.image} alt="Post" className="mt-2 w-full rounded-lg" />}
      <div className="flex justify-between mt-2">
        <button onClick={() => toggleLike(post.id)} className="text-blue-500">
          ❤️ {post.likes}
        </button>
        <button onClick={() => setShowComments(!showComments)} className="text-gray-500">
          💬 {post.comments.length}
        </button>
      </div>
      {showComments && <CommentSection postId={post.id} />}
    </div>
  );
};

export default PostCard;
