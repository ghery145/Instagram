import React from "react";
import "./Post.css";
import ImageBar from "./ImageBar";
import ImageSideBar from "./ImageSideBar";
import ImageTopBar from "./ImageTopBar";
import LikeCounts from "./LikeCounts";
import Caption from "./Caption";
import Comment from "./Comment";
import AddComment from "./AddComment";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  newComment = comment => {
    const newComment = {
      user: "Vembi Aka",
      text: comment
    };
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  };

  render() {
    return (
      <div className="Post">
        <ImageTopBar />
        <ImageBar />
        <ImageSideBar />
        <LikeCounts />
        <Caption />
        <Comment comments={this.state.comments} />
        <AddComment newComment={this.newComment} />
      </div>
    );
  }
}

export default Post;
