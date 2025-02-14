import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const CommentSection = ({ postId }) => {
  const { posts, setPosts, username } = useContext(PostContext);
  const [commentText, setCommentText] = useState("");

  const post = posts.find((p) => p.id === postId);

  const handleAddComment = () => {
    if (commentText.trim()) {
      post.comments.push({ username, text: commentText });
      setPosts([...posts]);
      setCommentText("");
    }
  };

  return (
    <div className="mt-2 p-2 bg-gray-200 dark:bg-gray-800 rounded">
      <h4 className="font-semibold">Comments: {post.comments.length}</h4>
      {post.comments.map((c, i) => (
        <p key={i} className="text-sm"><b>@{c.username}</b>: {c.text}</p>
      ))}
      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="w-full p-2 border rounded mt-2"
      />
      <button onClick={handleAddComment} className="mt-2 bg-blue-500 text-white p-2 rounded">
        Post Comment
      </button>
    </div>
  );
};

export default CommentSection;
