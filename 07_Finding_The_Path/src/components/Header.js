import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

// Header component for header section: Logo, Nav Items
const Header = () => {
  // let btnName = "Login"; It is a local JS variable. With this we can't create a login button dynamically.

  // Creating a button dynamically using useState();
  const [btnNameReact, setbtnNameReact] = useState("Login");

  // How to use useEffect()
  // It can take two parameters. call back function and dependency array. And in the useEffect() the dependency array is not mandatory. Only the call back function is mandatory.
  // If there is no dependency array then this useEffect() is called for every Header component render.
  // If the dependency array is empty ([]) then useEffect() is called on initial render ( just once ).
  // If we put any thing in dependency array then useEffect() is called when this dependency array gets changed or updated.
  useEffect(() => {
    console.log("UseEffect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
