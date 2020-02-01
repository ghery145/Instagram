import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  render() {
    const comments = this.props.comments;
    return (
      <div className="Comment">
        <p className="View">
          <em> View all {comments.length} comments </em>
        </p>
        {comments.map(comment => (
          <div>
            <strong>{comment.user}</strong> {comment.text}
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Comment;
