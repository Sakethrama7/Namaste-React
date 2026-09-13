import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

// Header component for header section: Logo, Nav Items
const Header = () => {
  // let btnName = "Login"; It is a local JS variable. With this we can't create a login button dynamically.

  // Creating a button dynamically using useState();
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
