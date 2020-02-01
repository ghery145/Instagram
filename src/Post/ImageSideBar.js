import React from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
  AiOutlineBook
} from "react-icons/ai";
import "./ImageSideBar.css";

class ImageSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  onLike = () => {
    this.setState({
      clicked: true
    });
  };

  onDislike = () => {
    this.setState({
      clicked: false
    });
  };

  render() {
    return (
      <div className="Bar">
        <div className="LeftBar">
          {this.state.clicked === false ? (
            <AiOutlineHeart className="Icon" onClick={this.onLike} />
          ) : (
            <AiFillHeart
              className="Icon IconClicked"
              onClick={this.onDislike}
            />
          )}
          <AiOutlineMessage className="CommentIcon Icon" />
          <AiOutlineShareAlt className="ShareIcon Icon" />
        </div>
        <AiOutlineBook className="SaveIcon Icon" />
      </div>
    );
  }
}

export default ImageSideBar;
