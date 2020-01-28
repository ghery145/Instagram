import React from 'react';
import './MainContent.css';
import Post from './Post';
import SideBar from './SideBar';


function MainContent() {
  return (

    <div className="MainContent">
        <Post />
        <SideBar /> 
    </div>
  );
}

export default MainContent;