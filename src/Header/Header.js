import React from "react";
import "./Header.css";
import LeftHeader from "./LeftHeader";
import Search from "./Search";
import RightHeader from "./RightHeader";
function Header() {
  return (
    <div className="Header">
      <LeftHeader />
      <Search />
      <RightHeader />
    </div>
  );
}

export default Header;
