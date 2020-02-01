import React from "react";
import lala from "../assets/image/lala.jpg";
import "./Stories.css";

function Stories() {
  return (
    <div className="container">
      <div className="title">
        <span className="stories">Stories</span>
        <strong className="watch">Wacth All</strong>
      </div>
      <div className="container-account">
        <img src={lala} className="storiesimage" alt="ImageUser" />
        <div className="name">
          <strong>FajarG</strong>
          <span className="initial">20 MINUTES AGO</span>
        </div>
      </div>
      <div className="container-account">
        <img src={lala} className="storiesimage" alt="ImageUser" />
        <div className="name">
          <strong>VembiAka</strong>
          <span className="initial">1 HOUR AGO</span>
        </div>
      </div>
      <div className="container-account">
        <img src={lala} className="storiesimage" alt="ImageUser" />
        <div className="name">
          <strong>NindyNovaliska</strong>
          <span className="initial">2 HOUR AGO</span>
        </div>
      </div>
    </div>
  );
}
export default Stories;
