import React from "react";
import "./MainContent.css";
import Post from "./Post/Post";
import SideBar from "./SideBar/SideBar";

function MainContent() {
  return (
    <div className="MainContent">
      <Post />
      <SideBar />
    </div>
  );
}

export default MainContent;
