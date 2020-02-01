import React from "react";
import lala from "../assets/image/lala.jpg";
import "./ImageTopBar.css";
import { AiOutlineEllipsis } from "react-icons/ai";

function ImageTopBar() {
  return (
    <div className="TopBar">
      <img src={lala} className="ImageUserTopBar" alt="lala" />
      <div className="User">Gherygap</div>
      <div className="EllipsisContainer">
        <AiOutlineEllipsis className="Ellipsis" />
      </div>
    </div>
  );
}
export default ImageTopBar;
