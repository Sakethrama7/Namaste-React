import React from "react";
import ReactDOM from "react-dom/client";

/* 
   Our Food Ordering Application is divided into 3 parts:
   1. Header 
      - LOGO
      - Nav Items
   2. Body 
      - Search Bar
      - Restuarant Container
        - Restuarants Cards
          - Img
          - Name of Res, Star rating, cuisine, delivery time etc
   3. Footer
      - Copywrite
      - Address
      - Contact Info
      - Links
    This above one is the first level of planning. We will take this as a reference
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PS_e9gwxR6_szzwnmK3GHkkaDriXljsjkvkBAGKP5Q&s=10"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // const { res_name, res_cuisine, rating, time } = props;  This is destructuring of props.
  // When you  destructure the props then you no need to write as props.res_name. You can directly write res_name
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7Nn0q85SpM6r9jhM_JA2jQPhD2zUi1jT3mBglMqqoQ&s=10"
      />
      <h4>{props.res_name}</h4>
      <h5>{props.res_cuisine}</h5>
      <h5>{props.rating}</h5>
      <h5>{props.time}</h5>
    </div>
  );
};

/*

 See here I created a restuarant card but it is not dynamic. So if we use this one for every restaurant card we need to make it separate. 
 So to avoid this we use a props concept to make it dynamic. props is a Object.

 const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7Nn0q85SpM6r9jhM_JA2jQPhD2zUi1jT3mBglMqqoQ&s=10"
      />
      <h4>Meghana Foods</h4>
      <h6>Biryani, North Indian, Asian</h6>
      <h6>4.4 stars</h6>
      <h6>38 Min</h6>
    </div>
  );
 };


  const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
           <RestaurantCard />
        </div>
      </div>
    );
  };

*/

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          res_name="Mehfil"
          res_cuisine="South Indian"
          rating="4.0"
          time="38 Min"
        />
        <RestaurantCard
          res_name="KFC"
          res_cuisine="Starters"
          rating="4.5"
          time="40 Min"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
