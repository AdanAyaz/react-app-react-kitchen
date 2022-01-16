import "./Navbar.css";
import fryingPanSvg from "../../third-party/svg/frying-pan-svgrepo-com.svg";

import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

function Navbar() {
  return (
    <header className="navbar">
      <div className="complete-logo">
        <img className="frying-pan" src={fryingPanSvg}></img>
        React Kitchen
      </div>
      <SearchBar></SearchBar>
      <ShoppingCart />
    </header>
  );
}

export default Navbar;
