import React from "react";
import "./LeftHeader.css";
import { AiOutlineInstagram } from "react-icons/ai";
import Instagram from "../assets/image/Instagram.png";

function LeftHeader() {
  return (
    <div className="LeftHeader">
      <AiOutlineInstagram className="IconInstagram" />
      <div className="space"></div>
      <img src={Instagram} className="text"></img>
    </div>
  );
}

export default LeftHeader;
