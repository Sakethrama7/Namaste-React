import RestaurantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestuarant] = useState([]); // empty array

  const [filteredRestaurants, setFilteredListOfRestuarant] = useState();

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37728452608486&lng=78.54299381375311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // This fetch method is not given by JS. It is given by browser or V8 Engine. This method is used to fecth the data by making API calls.
    // Here fetch() will return a promise. To resolve the promise the standard way is using async and wait.
    // Once we get the data we need to convert that data into json.

    const json = await data.json();
    console.log(json);
    setListOfRestuarant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredListOfRestuarant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  /*
     This useEffect() will take two parameters. 
     1. Arrow function or call back function.
     2. Dependency Array
     When will this useEffect call back function is called?
     It is called after your component renders.
     When we write this useEffect inside the Body component. It will render the Body Component and as soon as the render cycle of the body component is finished then this call back function is called.

     If you have to do something after rendering then you should use useEffect(). Whatever the call back function present in the useEffect() is called after rendering the body component.
  */

  // ✅ Show loading until data is fetched
  /*
      if (listOfRestaurants.length === 0) {
          return <h1> Loading..... </h1>;
      }

      But just simple showing Loading.... is not a better UX before rendering. So for better UX we use Shimmer UI.
  */

  // This concept is know as Conditional Rendering.

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // By clicking on this button Filter the Restaurants and update the UI
              filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredListOfRestuarant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Here you need to write a filter logic so that when you click on the button only top rated restuarants should be rendered on page.
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestuarant(filteredList);
            // When ever this state variable updates React re render my component.
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restuarant) => (
          <RestaurantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
// This is one way to export the code. Before you import it in another file first you have to export from this file.
