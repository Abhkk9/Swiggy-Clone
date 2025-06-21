import { Link } from "react-router-dom";
import { SWIGGY_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import ThemeContext from "../utils/ThemeContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`header ${
        theme === "dark"
          ? "bg-gray-400 text-white"
          : "bg-[rgb(255,197,142)] text-black"
      }`}
    >
      <div className="logo-container">
        <img className="logo" src={SWIGGY_LOGO} alt="no Image" />
      </div>
      <div className="nav-items px-4 py-2">
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
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsLoggedIn((prev) => !prev)}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-2 rounded transition ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
              onClick={toggleTheme}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
