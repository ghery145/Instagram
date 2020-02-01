import React from "react";
import "./AddComment.css";

class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  updateInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  newComment = () => {
    this.props.newComment(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    return (
      <div className="AddComment">
        <input
          className="input"
          type="text"
          autoCapitalize="none"
          placeholder="Add a comment ..."
          value={this.state.inputValue}
          onChange={this.updateInput}
        />
        <button className="post" onClick={this.newComment}>
          <strong>Post</strong>
        </button>
      </div>
    );
  }
}
export default AddComment;
