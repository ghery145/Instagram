import React from "react";
import {
  AiOutlineMessage,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineUser
} from "react-icons/ai";
import "./RightHeader.css";

function RightHeader() {
  return (
    <div className="right-header">
      <AiOutlineMessage className="icons" />
      <AiOutlineCompass className="icons" />
      <AiOutlineHeart className="icons" />
      <AiOutlineUser className="icons" />
    </div>
  );
}

export default RightHeader;
