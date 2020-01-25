import React from 'react';
import './Content.css';
import ImageBar from "./ImageBar";
import ImageSideBar from "./ImageSideBar";

function Content() {

    return (
        <div className="content">
            <ImageBar />
            <ImageSideBar />
        </div>
    );
}

export default Content;