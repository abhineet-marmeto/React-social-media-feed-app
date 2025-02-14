import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import { PostProvider } from "./context/PostContext";

const App = () => {
  return (
    <PostProvider>
      <Router>
        <div className="dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 flex">
          <Sidebar />
          <div className="page-info--panel w-full h-screen relative">
            <Routes>
              <Route path="/" element={<Navigate to="/home/page/1" />} />
              <Route path="/home/page/:pageNumber" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/tag/:tags/page/:pageNumber" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PostProvider>
  );
};

export default App;
