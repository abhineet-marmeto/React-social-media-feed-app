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

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
