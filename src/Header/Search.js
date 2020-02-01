import React from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="Search">
      <AiOutlineSearch className="IconSearch"></AiOutlineSearch>
      <input
        className="SearchColoum"
        type="text"
        autoCapitalize="none"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default Search;
