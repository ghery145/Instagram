import React from 'react';
import "./Post.css"
import ImageBar from "./ImageBar";
import ImageSideBar from "./ImageSideBar";
import ImageTopBar from './ImageTopBar';

function Post() {

    return (
        <div className="Post">
            <ImageTopBar />
            <ImageBar />
            <ImageSideBar />
            <div>comment</div>

        </div>
    );
}

export default Post;