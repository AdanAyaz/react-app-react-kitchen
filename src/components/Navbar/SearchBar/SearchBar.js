import "./SearchBar.css";
import React from "react";

function SearchBar() {
  return (
    <React.Fragment>
      <input type="text" className="search-bar" placeholder="Search.."></input>
    </React.Fragment>
  );
}

export default SearchBar;
