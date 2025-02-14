import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const HashtagFilter = ({ availableHashtags }) => {
  const { setCurrentPage, setPosts, posts } = useContext(PostContext);
  const [selectedTags, setSelectedTags] = React.useState([]);

  const toggleTag = (tag) => {
    let updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);

    if (updatedTags.length === 0) {
      setPosts(JSON.parse(sessionStorage.getItem("posts"))); // Reset filter
    } else {
      setPosts(
        JSON.parse(sessionStorage.getItem("posts")).filter((post) =>
          post.hashtags.some((h) => updatedTags.includes(h))
        )
      );
    }

    setCurrentPage(1); // Reset pagination to first page
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="font-semibold mb-2">Filter by Hashtags</h3>
      <div className="flex flex-wrap gap-2">
        {availableHashtags.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full ${
              selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => toggleTag(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HashtagFilter;
