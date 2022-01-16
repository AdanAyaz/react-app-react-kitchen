import "./SearchBar.css";
import React from "react";
import searchIcon from "../../../third-party/svg/iconmonstr-search-thin.svg";

function SearchBar() {
  return (
    <React.Fragment>
      <input type="text" className="search-bar" placeholder="Search.."></input>
    </React.Fragment>
  );
}

export default SearchBar;
