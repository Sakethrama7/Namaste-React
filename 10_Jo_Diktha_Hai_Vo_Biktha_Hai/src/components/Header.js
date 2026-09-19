import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header component for header section: Logo, Nav Items
const Header = () => {
  // let btnName = "Login"; It is a local JS variable. With this we can't create a login button dynamically.

  // Creating a button dynamically using useState();
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // How to use useEffect()
  // It can take two parameters. call back function and dependency array. And in the useEffect() the dependency array is not mandatory. Only the call back function is mandatory.
  // If there is no dependency array then this useEffect() is called for every Header component render.
  // If the dependency array is empty ([]) then useEffect() is called on initial render ( just once ).
  // If we put any thing in dependency array then useEffect() is called when this dependency array gets changed or updated.
  useEffect(() => {
    console.log("UseEffect called");
  }, []);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
