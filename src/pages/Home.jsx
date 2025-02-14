import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import HashtagFilter from "../components/HashtagFilter";
import PostCreator from "../components/PostCreator";
import Header from "../components/Header";

const Home = () => {
  const { posts, currentPage, setCurrentPage, postsPerPage, setPosts } = useContext(PostContext);
  const { pageNumber, tags } = useParams();
  const navigate = useNavigate();

  const [selectedTags, setSelectedTags] = useState(tags ? tags.split("&") : []);
  const availableHashtags = [...new Set(posts.flatMap((post) => post.hashtags))];

  // Ensure valid page number
  useEffect(() => {
    const pageNum = parseInt(pageNumber, 10);
    if (!isNaN(pageNum) && pageNum > 0) {
      setCurrentPage(pageNum);
    } else {
      navigate("/home/page/1", { replace: true });
    }
  }, [pageNumber, setCurrentPage, navigate]);

  // Filter posts based on selected hashtags
  useEffect(() => {
    let filteredPosts = JSON.parse(sessionStorage.getItem("posts")) || [];
    
    if (selectedTags.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        post.hashtags.some((tag) => selectedTags.includes(tag))
      );
    }

    setPosts(filteredPosts);
  }, [selectedTags, setPosts]);

  // Update URL when tags change
  useEffect(() => {
    if (selectedTags.length > 0) {
      navigate(`/tag/${selectedTags.join("&")}/page/1`);
    } else {
      navigate(`/home/page/1`);
    }
  }, [selectedTags, navigate]);

  // Pagination Logic
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header at the top */}
      <div className="sticky top-0 z-10 h-[10vh]">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-hidden h-[90vh]">
          <PostList posts={paginatedPosts} />
          <Pagination />
          <PostCreator />
        </div>

        {/* Hashtag Filter on the Right */}
        <div className="w-1/4 ml-4">
          <HashtagFilter
            availableHashtags={availableHashtags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
