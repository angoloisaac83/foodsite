import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "search":
        return <Search />;
      case "add":
        return <Add />;
      case "reels":
        return <Reels />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col">


      {/* Bottom Navigation */}
      <div className="flex justify-around items-center py-2 border-t border-gray-700">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("home")}
        >
          <div className={`w-6 h-6 ${activeTab === "home" ? "bg-blue-500" : "bg-gray-500"} rounded`}></div>
          <span className="text-xs mt-1">Home</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("search")}
        >
          <div className={`w-6 h-6 ${activeTab === "search" ? "bg-blue-500" : "bg-gray-500"} rounded`}></div>
          <span className="text-xs mt-1">Search</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("add")}
        >
          <div className={`w-6 h-6 ${activeTab === "add" ? "bg-blue-500" : "bg-gray-500"} rounded`}></div>
          <span className="text-xs mt-1">Add</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("reels")}
        >
          <div className={`w-6 h-6 ${activeTab === "reels" ? "bg-blue-500" : "bg-gray-500"} rounded`}></div>
          <span className="text-xs mt-1">Reels</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("profile")}
        >
          <div className={`w-6 h-6 ${activeTab === "profile" ? "bg-blue-500" : "bg-gray-500"} rounded-full`}></div>
          <span className="text-xs mt-1">Profile</span>
        </div>
      </div>
            {/* Top Navigation */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
        <div className="flex space-x-6">
          <div className="w-6 h-6 border border-gray-500 rounded"></div>
          <div className="w-6 h-6 border border-gray-500 rounded"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow">{renderContent()}</div>

    </div>
  );
};

const Home = () => <div className="p-4">Welcome to the Home page!</div>;
const Search = () => <div className="p-4">Search for something amazing!</div>;
const Add = () => <div className="p-4">Create a new post here!</div>;
const Reels = () => <div className="p-4">Watch awesome Reels!</div>;
const Profile = () => <div className="p-4">View your Profile here!</div>;

export default App;
