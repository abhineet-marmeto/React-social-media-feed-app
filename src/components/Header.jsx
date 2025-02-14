import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Header = () => {
  const { toggleDarkMode, darkMode } = useContext(PostContext);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between">
      <h1 className="text-lg font-bold">Social Feed</h1>
      <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
