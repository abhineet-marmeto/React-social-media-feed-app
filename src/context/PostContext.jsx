import React, { createContext, useState, useEffect } from "react";
import { getDummyPosts } from "../utils/dummyData";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const storedData = JSON.parse(sessionStorage.getItem("posts")) || getDummyPosts();
  const [posts, setPosts] = useState(storedData);
  const [username, setUsername] = useState(sessionStorage.getItem("username") || "username");
  const [profileImage, setProfileImage] = useState(sessionStorage.getItem("profileImage") || "");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    sessionStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("profileImage", profileImage);
  }, [username, profileImage]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    );
    setPosts(updatedPosts);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        username,
        setUsername,
        profileImage,
        setProfileImage,
        currentPage,
        setCurrentPage,
        postsPerPage,
        totalPages,
        darkMode,
        toggleDarkMode,
        toggleLike,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
