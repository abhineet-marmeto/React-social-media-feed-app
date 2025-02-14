import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 min-h-screen p-4 bg-gray-200 dark:bg-gray-800">
      <nav className="space-y-4">
        <Link to="/home/page/1" className="block p-2 bg-blue-500 text-white rounded">Home</Link>
        <Link to="/settings" className="block p-2 bg-gray-500 text-white rounded">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
