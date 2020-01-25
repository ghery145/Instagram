import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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
      <div className="bar">
        {this.state.clicked === false ? (
          <AiOutlineHeart className="icon" onClick={this.onLike} />
        ) : (
          <AiFillHeart className="icon iconClicked" onClick={this.onDislike} />
        )}
      </div>
    );
  }
}

export default ImageSideBar;
