import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

const Settings = () => {
  const { username, setUsername, profileImage, setProfileImage, toggleTheme, theme } = useContext(PostContext);
  const [newUsername, setNewUsername] = useState(username);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        sessionStorage.setItem("profileImage", reader.result);
        setImageError(false); // Reset error if successful
      };
      reader.onerror = () => {
        setImageError(true); // Handle error
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUsername = () => {
    setUsername(newUsername);
    sessionStorage.setItem("username", newUsername);
    setUsernameSaved(true);
    setTimeout(() => setUsernameSaved(false), 2000);
  };

  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
    toggleTheme(); // Update state in context
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      {/* Change Username */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Change Username:</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="border p-2 w-full mt-1 rounded"
        />
        <button
          onClick={handleSaveUsername}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Username
        </button>
        {usernameSaved && <span className="ml-2 text-green-500">✔ Saved</span>}
      </div>

      {/* Profile Image Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Profile Image:</label>
        <input type="file" accept="image/*" onChange={handleProfileImageChange} className="border p-2 w-full mt-1 rounded" />
        {imageError && <p className="text-red-500 text-sm">Error loading image.</p>}
        {profileImage && !imageError && <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full mt-2" />}
      </div>

      {/* Theme Toggle */}
      <div>
        <label className="block text-sm font-medium">Theme:</label>
        <select
          value={theme}
          onChange={handleThemeToggle}
          className="border p-2 w-full mt-1 rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
