import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const PostCreator = () => {
  const { posts, setPosts, username } = useContext(PostContext);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (text.trim()) {
      const hashtags = text.match(/#\w+/g) || [];
      const newPost = {
        id: Math.random().toString(36).substr(0, 1000),
        username,
        text,
        image,
        hashtags: hashtags.map((tag) => tag.slice(1)), // Remove #
        comments: [],
        likes: 0,
        liked: false,
      };
      setPosts([newPost, ...posts]);   
      setText("");
      setImage(null);
    }
  };

  return (
    <div className="bottom-0 left-0 w-full bg-white dark:bg-gray-900 p-4 border-t">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a post..."
        className="w-full p-2 border rounded"
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
      <button onClick={handleSubmit} className="w-full mt-2 bg-blue-500 text-white p-2 rounded">
        Post
      </button>
    </div>
  );
};

export default PostCreator;
