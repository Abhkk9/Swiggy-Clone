import { Link } from "react-router-dom";
import { SWIGGY_LOGO } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  // console.log("Header Rendered with every rerender due to state change of its child component");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={SWIGGY_LOGO} alt="no Image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <button
              className="login"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
