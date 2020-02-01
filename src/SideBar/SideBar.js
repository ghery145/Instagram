import React from "react";
import Account from "./Account";
import "./SideBar.css";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function SideBar() {
  return (
    <div className="SideBar">
      <Account />
      <Stories />
      <Suggestions />
    </div>
  );
}

export default SideBar;
