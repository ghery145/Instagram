import React from "react";
import lala from "../assets/image/lala.jpg";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="container">
      <div className="title">
        <span className="suggestions">Suggestions For You</span>
        <strong className="watch">See All</strong>
      </div>
      <div className="container-account">
        <img src={lala} className="suggestions-image" alt="ImageUser" />
        <div className="name">
          <strong>FajarG</strong>
          <span className="information">New to Instagram</span>
        </div>
        <a className="follow" href="" target="_blank">
          Follow
        </a>
      </div>
      <div className="container-account">
        <img src={lala} className="suggestions-image" alt="ImageUser" />
        <div className="name">
          <strong>VembiAka</strong>
          <span className="information">Follows You</span>
        </div>
        <a className="follow" href="" target="_blank">
          Follow
        </a>
      </div>
      <div className="container-account">
        <img src={lala} className="suggestions-image" alt="ImageUser" />
        <div className="name">
          <strong>NindyNovaliska</strong>
          <span className="information">Follows You</span>
        </div>
        <a className="follow" href="" target="_blank">
          Follow
        </a>
      </div>
    </div>
  );
}
export default Suggestions;
